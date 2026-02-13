# Enquiry Form Popup - Implementation Guide

## Overview

A modern, responsive enquiry form popup component has been created for SKITM website. It features:

- ✅ Floating button at bottom-right corner (always visible)
- ✅ Expandable/collapsible popup modal
- ✅ Minimize/Maximize functionality
- ✅ Glassmorphic design matching SKITM UI
- ✅ Multiple enquiry categories
- ✅ Form validation
- ✅ Toast notifications on submit
- ✅ Smooth animations and transitions
- ✅ Mobile responsive

## File Location

```
src/components/ui/EnquiryFormPopup.tsx
```

## Features

### 1. **Floating Action Button**

- Located at bottom-right corner (`fixed bottom-6 right-6`)
- Blue gradient background with SKITM brand colors
- Pulsing notification dot to grab attention
- Hover tooltip text: "Have a question?"
- Scales on hover and click animations

### 2. **Popup Modal**

- Smooth slide-up animation on mobile, center modal on desktop
- Dark backdrop with blur effect
- Rounded corners with shadow
- Header with gradient background (navy to blue)

### 3. **Minimize/Maximize**

- Collapse to header only when minimized
- Full form when expanded
- Toggle buttons in header
- Smooth height transitions

### 4. **Form Fields**

The form includes the following fields:

- **Full Name** (required)
- **Email Address** (required, type="email")
- **Phone Number** (optional)
- **Category** (required, dropdown with 6 options):
    - General Inquiry
    - Admission
    - Course Information
    - Campus Tour
    - Placement
    - Other
- **Subject** (optional)
- **Message** (required, textarea)

### 5. **Design Elements**

- Uses SKITM color scheme: Navy (#0A2463), Blue (#247BA0), Light Blue (#3B9AC6)
- Glassmorphic effects with backdrop blur
- Clean, modern input fields with focus states
- Gradient submit button with loading state
- Responsive on all screen sizes

## How It Works

### State Management

```typescript
- isOpen: Controls popup visibility
- isMinimized: Controls expanded/minimized state
- isLoading: Shows loading state during submission
- formData: Stores all form field values
```

### Form Submission

1. User fills out the form
2. Clicks "Send Enquiry" button
3. Loading spinner appears
4. Form data is sent to backend (currently simulated)
5. Success toast notification appears
6. Form resets and closes after 2 seconds

### Styling

The component uses:

- Tailwind CSS utilities
- Custom SKITM color palette
- Lucide React icons
- CSS transitions and animations

## Integration

### Already Integrated

The component is already added to your main `App.tsx`:

```tsx
import { EnquiryFormPopup } from "@/components/ui/EnquiryFormPopup";

// Inside App component
<EnquiryFormPopup />;
```

It appears on every page of your website automatically.

## Customization

### Change Position

To move the floating button, modify the position classes in the component:

```tsx
<div className={`fixed bottom-6 right-6 z-40`}> {/* Change bottom-6 right-6 */}
```

### Change Colors

Modify the Tailwind classes. Example - to use different colors:

```tsx
// Current
bg-skitm-blue hover:bg-skitm-lightBlue

// Custom (e.g., using red)
bg-red-500 hover:bg-red-600
```

### Change Button Icon

Replace the icon from lucide-react:

```tsx
import { MessageCircle } from "lucide-react"; // Change this import
<MessageCircle size={24} /> {/* Change to another icon */}
```

### Modify Categories

Edit the `categories` array in the component:

```tsx
const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "admission", label: "Admission" },
    // Add or modify categories here
];
```

## Backend Integration

Currently, the form submission is simulated. To connect to your backend:

1. Replace the mock submission in `handleSubmit`:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        // Replace this with your actual API call
        const response = await fetch("/api/enquiries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Failed to submit");

        toast({
            title: "Enquiry Submitted!",
            description: "We'll get back to you soon.",
        });

        // Reset and close...
    } catch (error) {
        toast({
            title: "Error",
            description: "Failed to submit enquiry.",
            variant: "destructive",
        });
    } finally {
        setIsLoading(false);
    }
};
```

## Mobile Responsiveness

The component is fully responsive:

- **Mobile**: Popup slides up from bottom, takes full width with padding
- **Desktop**: Popup is centered with fixed width (500px)
- **Tablet**: Smooth transition between mobile and desktop layouts

### Responsive Breakpoints

```tsx
w-full md:w-[500px]  // Width
h-[600px] md:h-[700px]  // Height
text-lg md:text-xl  // Text sizes
```

## Accessibility Features

- Semantic HTML elements
- ARIA labels for icon buttons
- Focus states on all interactive elements
- Proper form labels with `htmlFor` attributes
- Required field indicators (\*)
- Keyboard accessible (Tab, Enter, Escape)

## Icons Used (from lucide-react)

- `MessageCircle` - Floating button icon
- `Send` - Submit button icon
- `X` - Close button
- `Minimize2` - Minimize button
- `Maximize2` - Maximize button

## Toast Notifications

The component uses the website's built-in toast system. Ensure these are available:

```tsx
import { toast } from "@/components/ui/use-toast";
```

## Performance

- **Lazy rendering**: Form only renders when popup is open
- **Minimized state**: Hides form content when minimized to reduce DOM
- **CSS animations**: Uses GPU-accelerated transitions
- **Event delegation**: Efficient event handling

## Testing

To test the component:

1. Click the floating blue button at bottom-right
2. Fill out the form fields
3. Test minimize/maximize buttons
4. Try submitting with various data
5. Check toast notifications appear
6. Verify responsive behavior on mobile

## Troubleshooting

### Component not appearing?

- Check import is correct in App.tsx
- Ensure z-index is high enough (`z-40` for button, `z-50` for popup)

### Styling not matching?

- Verify tailwind.config.ts has SKITM colors defined
- Check CSS classes are present in index.css

### Form not submitting?

- Check browser console for errors
- Verify backend API endpoint is correct
- Check network tab for failed requests

## Future Enhancements

Potential improvements:

- Email validation with confirmation
- File upload support (documents/resume)
- Multi-step form wizard
- Auto-reply emails
- WhatsApp integration
- Calendar integration for campus tours
- Admin notification emails
