
import { useState } from 'react';
import { toast } from 'sonner';
import { 
  PlusCircle, Save, Trash2, 
  Calendar, Clock, MapPin, FileText
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/CustomButton';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Types for event management
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
}

const AdminEventEditor = () => {
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem('skitm-events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  
  const form = useForm<Omit<Event, 'id'>>({
    defaultValues: {
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      time: '10:00',
      location: '',
      image: '',
    }
  });
  
  const openNewEventDialog = () => {
    form.reset({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      time: '10:00',
      location: '',
      image: '',
    });
    setCurrentEvent(null);
    setIsDialogOpen(true);
  };
  
  const openEditEventDialog = (event: Event) => {
    form.reset({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      image: event.image,
    });
    setCurrentEvent(event);
    setIsDialogOpen(true);
  };
  
  const onSubmit = (data: Omit<Event, 'id'>) => {
    if (currentEvent) {
      // Edit existing event
      const updatedEvents = events.map(event => 
        event.id === currentEvent.id 
          ? { ...event, ...data } 
          : event
      );
      setEvents(updatedEvents);
      localStorage.setItem('skitm-events', JSON.stringify(updatedEvents));
      toast.success("Event updated successfully");
    } else {
      // Create new event
      const newEvent: Event = {
        id: Date.now().toString(),
        ...data
      };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem('skitm-events', JSON.stringify(updatedEvents));
      toast.success("Event created successfully");
    }
    setIsDialogOpen(false);
  };
  
  const deleteEvent = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = events.filter(event => event.id !== id);
      setEvents(updatedEvents);
      localStorage.setItem('skitm-events', JSON.stringify(updatedEvents));
      toast.success("Event deleted successfully");
    }
  };
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-skitm-navy">Event Management</h2>
          <Button
            variant="primary"
            size="sm"
            onClick={openNewEventDialog}
          >
            <PlusCircle size={16} className="mr-1" />
            New Event
          </Button>
        </div>
        
        {events.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
            <Calendar size={32} className="mx-auto text-gray-300 mb-2" />
            <h3 className="text-sm font-medium text-gray-700 mb-1">No events found</h3>
            <p className="text-xs text-gray-500 mb-4">Create your first event to get started</p>
            <Button
              variant="outline"
              size="sm"
              onClick={openNewEventDialog}
            >
              <PlusCircle size={16} className="mr-1" />
              Create Event
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">{event.title}</h3>
                    <div className="flex flex-wrap items-center text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span className="mr-3">{event.date}</span>
                      <Clock size={12} className="mr-1" />
                      <span className="mr-3">{event.time}</span>
                      <MapPin size={12} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">{event.description}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => openEditEventDialog(event)}
                      className="text-gray-500 hover:text-skitm-blue p-1"
                    >
                      <FileText size={16} />
                    </button>
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="text-gray-500 hover:text-red-500 p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{currentEvent ? 'Edit Event' : 'Create New Event'}</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Title</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                        placeholder="Enter event title"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[120px]"
                        placeholder="Enter event description"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Time</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="time"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          placeholder="Event location"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL (Optional)</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          placeholder="Image URL"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  <Save size={16} className="mr-1" />
                  {currentEvent ? 'Save Changes' : 'Create Event'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminEventEditor;
