
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/CustomButton';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

// Type for site settings
interface SiteSettings {
  siteTitle: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  preferences: {
    enableNotifications: boolean;
    darkMode: boolean;
    autoDeleteOldEvents: boolean;
  };
}

const defaultSettings: SiteSettings = {
  siteTitle: 'SKITM',
  tagline: 'ShivajiRao Kadam Institute of Technology & Management',
  contactEmail: 'info@skitm.in',
  contactPhone: '+91 1234567890',
  address: 'Near ralamandal Indore ',
  socialLinks: {
    facebook: 'https://facebook.com/skitm',
    twitter: 'https://twitter.com/skitm',
    instagram: 'https://instagram.com/skitm',
    linkedin: 'https://linkedin.com/company/skitm',
  },
  preferences: {
    enableNotifications: false,
    darkMode: false,
    autoDeleteOldEvents: true,
  },
};

const AdminSettings = () => {
  const [isSaving, setIsSaving] = useState(false);
  
  // Initialize form with settings from localStorage or defaults
  const form = useForm<SiteSettings>({
    defaultValues: () => {
      const savedSettings = localStorage.getItem('skitm-settings');
      return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    },
  });
  
  // Load settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('skitm-settings');
    if (savedSettings) {
      form.reset(JSON.parse(savedSettings));
    } else {
      // If no settings found, store defaults
      localStorage.setItem('skitm-settings', JSON.stringify(defaultSettings));
    }
  }, [form]);
  
  const onSubmit = (data: SiteSettings) => {
    setIsSaving(true);
    
    // Simulate saving delay
    setTimeout(() => {
      localStorage.setItem('skitm-settings', JSON.stringify(data));
      toast.success("Settings saved successfully");
      setIsSaving(false);
    }, 600);
  };
  
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure general information about your institute
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="siteTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site Title</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tagline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tagline</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            
            <Separator className="my-4" />
            
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update your institute's contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Phone</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            
            <Separator className="my-4" />
            
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>
                Update your institute's social media profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="socialLinks.facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook URL</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="socialLinks.twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter URL</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="socialLinks.instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram URL</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="socialLinks.linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            
            <Separator className="my-4" />
            
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Customize your website behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="preferences.enableNotifications"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div>
                      <FormLabel className="text-base">Enable Notifications</FormLabel>
                      <FormDescription>
                        Allow notifications for new events and news
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="preferences.darkMode"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div>
                      <FormLabel className="text-base">Dark Mode</FormLabel>
                      <FormDescription>
                        Enable dark mode for the admin panel
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="preferences.autoDeleteOldEvents"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div>
                      <FormLabel className="text-base">Auto-Delete Old Events</FormLabel>
                      <FormDescription>
                        Automatically delete events 15 days after they've passed
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                variant="default" 
                className="bg-skitm-blue hover:bg-skitm-lightBlue text-white ml-auto"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <Save size={16} className="mr-1 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} className="mr-1" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default AdminSettings;
