
import { supabase } from "@/lib/supabase";

// Types for data entities
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  category?: string;
}

export interface BlogItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  author: string;
  date: string;
  slug: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

// Generic function to fetch data from Supabase with local storage fallback
async function fetchData<T>(
  table: "news" | "events" | "blogs" | "gallery",
  localStorageKey: string,
  defaultData: T[] = []
): Promise<T[]> {
  try {
    // Try to fetch from Supabase first
    const { data, error } = await supabase.from(table).select('*');
    
    if (error) {
      console.error(`Error fetching from Supabase ${table}:`, error);
      throw error;
    }
    
    if (data && data.length > 0) {
      // Adapt data to match our frontend interfaces if needed
      let adaptedData: T[] = data.map((item: any) => {
        // Map properties like `imageurl` to `imageUrl` for certain tables
        if (table === 'gallery') {
          return {
            ...item,
            imageUrl: item.imageurl,
          } as unknown as T;
        }
        if (table === 'news' && item.imageurl) {
          return {
            ...item,
            imageUrl: item.imageurl,
          } as unknown as T;
        }
        return item as T;
      });
      
      // Store the fetched data in local storage as backup
      localStorage.setItem(localStorageKey, JSON.stringify(adaptedData));
      return adaptedData;
    }
    
    // If no data from Supabase, try local storage
    const localData = localStorage.getItem(localStorageKey);
    if (localData) {
      return JSON.parse(localData) as T[];
    }
    
    // If no local data either, return default data
    return defaultData;
  } catch (error) {
    // On error, fall back to local storage
    console.error(`Failed to fetch ${table} from Supabase, falling back to local storage:`, error);
    
    const localData = localStorage.getItem(localStorageKey);
    if (localData) {
      return JSON.parse(localData) as T[];
    }
    
    return defaultData;
  }
}

// Generic function to save data to both Supabase and local storage
async function saveData<T extends { id: string }>(
  table: "news" | "events" | "blogs" | "gallery",
  data: T,
  localStorageKey: string
): Promise<T | null> {
  try {
    let result;
    let supabaseData: any = { ...data };
    
    // Adapt frontend interface to match Supabase column names
    if (table === 'gallery' && 'imageUrl' in data) {
      supabaseData.imageurl = (data as any).imageUrl;
      delete supabaseData.imageUrl;
    }
    
    if (table === 'news' && 'imageUrl' in data) {
      supabaseData.imageurl = (data as any).imageUrl;
      delete supabaseData.imageUrl;
    }
    
    // If id is a UUID string from Supabase
    if (data.id && data.id.includes('-')) {
      // Update existing record
      const { data: updatedData, error } = await supabase
        .from(table)
        .update({ ...supabaseData })
        .eq('id', data.id)
        .select('*')
        .single();
      
      if (error) throw error;
      result = updatedData;
    } else {
      // For new records or those with client-generated IDs
      const { id, ...dataWithoutId } = supabaseData;
      const { data: insertedData, error } = await supabase
        .from(table)
        .insert({ ...dataWithoutId })
        .select('*')
        .single();
      
      if (error) throw error;
      result = insertedData;
    }
    
    // Adapt result back to frontend interface
    let adaptedResult: any = { ...result };
    if (table === 'gallery' && 'imageurl' in adaptedResult) {
      adaptedResult.imageUrl = adaptedResult.imageurl;
      delete adaptedResult.imageurl;
    }
    
    if (table === 'news' && 'imageurl' in adaptedResult) {
      adaptedResult.imageUrl = adaptedResult.imageurl;
      delete adaptedResult.imageurl;
    }
    
    // Update local storage with the new data
    const localData = localStorage.getItem(localStorageKey);
    let items = localData ? JSON.parse(localData) as T[] : [];
    
    // Replace or add the item
    const existingIndex = items.findIndex(item => item.id === data.id);
    if (existingIndex >= 0) {
      items[existingIndex] = adaptedResult;
    } else {
      items.push(adaptedResult);
    }
    
    localStorage.setItem(localStorageKey, JSON.stringify(items));
    return adaptedResult as T;
  } catch (error) {
    console.error(`Error saving to Supabase ${table}, falling back to local storage only:`, error);
    
    // Fall back to local storage only
    const localData = localStorage.getItem(localStorageKey);
    let items = localData ? JSON.parse(localData) as T[] : [];
    
    const existingIndex = items.findIndex(item => item.id === data.id);
    if (existingIndex >= 0) {
      items[existingIndex] = data;
    } else {
      // If saving fails in Supabase, we still want to use the client ID
      items.push(data);
    }
    
    localStorage.setItem(localStorageKey, JSON.stringify(items));
    return data;
  }
}

// Generic function to delete data from both Supabase and local storage
async function deleteData<T extends { id: string }>(
  table: "news" | "events" | "blogs" | "gallery",
  id: string,
  localStorageKey: string
): Promise<boolean> {
  try {
    // Try to delete from Supabase first
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    // Also delete from local storage
    const localData = localStorage.getItem(localStorageKey);
    if (localData) {
      const items = JSON.parse(localData) as T[];
      const filteredItems = items.filter(item => item.id !== id);
      localStorage.setItem(localStorageKey, JSON.stringify(filteredItems));
    }
    
    return true;
  } catch (error) {
    console.error(`Error deleting from Supabase ${table}, falling back to local storage only:`, error);
    
    // Fall back to local storage only
    const localData = localStorage.getItem(localStorageKey);
    if (localData) {
      const items = JSON.parse(localData) as T[];
      const filteredItems = items.filter(item => item.id !== id);
      localStorage.setItem(localStorageKey, JSON.stringify(filteredItems));
    }
    
    return true;
  }
}

// News API
export const newsService = {
  getAll: async (): Promise<NewsItem[]> => {
    return fetchData<NewsItem>('news', 'skitm-news');
  },
  
  save: async (newsItem: NewsItem): Promise<NewsItem | null> => {
    return saveData<NewsItem>('news', newsItem, 'skitm-news');
  },
  
  delete: async (id: string): Promise<boolean> => {
    return deleteData<NewsItem>('news', id, 'skitm-news');
  }
};

// Events API
export const eventsService = {
  getAll: async (): Promise<EventItem[]> => {
    return fetchData<EventItem>('events', 'skitm-events');
  },
  
  save: async (eventItem: EventItem): Promise<EventItem | null> => {
    return saveData<EventItem>('events', eventItem, 'skitm-events');
  },
  
  delete: async (id: string): Promise<boolean> => {
    return deleteData<EventItem>('events', id, 'skitm-events');
  }
};

// Blogs API
export const blogsService = {
  getAll: async (): Promise<BlogItem[]> => {
    return fetchData<BlogItem>('blogs', 'skitm-blogs');
  },
  
  save: async (blogItem: BlogItem): Promise<BlogItem | null> => {
    return saveData<BlogItem>('blogs', blogItem, 'skitm-blogs');
  },
  
  delete: async (id: string): Promise<boolean> => {
    return deleteData<BlogItem>('blogs', id, 'skitm-blogs');
  }
};

// Gallery API
export const galleryService = {
  getAll: async (): Promise<GalleryItem[]> => {
    return fetchData<GalleryItem>('gallery', 'skitm-gallery');
  },
  
  save: async (galleryItem: GalleryItem): Promise<GalleryItem | null> => {
    return saveData<GalleryItem>('gallery', galleryItem, 'skitm-gallery');
  },
  
  delete: async (id: string): Promise<boolean> => {
    return deleteData<GalleryItem>('gallery', id, 'skitm-gallery');
  }
};
