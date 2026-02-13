# 🎯 Enquiry Form Popup - Quick Reference

## ✨ What You Have Now

A beautiful, modern enquiry form popup on your SKITM website that:

- 💬 Floats at bottom-right corner with pulsing notification
- 📱 Fully responsive (mobile & desktop)
- 🎨 Matches SKITM's modern design perfectly
- ⚙️ Smooth animations (minimize, maximize, open, close)
- ✅ Form validation with required fields
- 📧 Toast notifications on success
- 🔄 Auto-closes after submission

---

## 📂 File Structure

```
src/
└── components/
    └── ui/
        └── EnquiryFormPopup.tsx (NEW) ← Main component

src/
└── App.tsx (MODIFIED) ← Component added to render on all pages
```

---

## 🚀 Live Preview

**Website URL**: http://localhost:8081/

**Look for**: Blue floating button at bottom-right corner →

---

## 📋 Form Fields

```
┌─ REQUIRED (*)
├─ Full Name
├─ Email Address
├─ Category (dropdown)
└─ Message

└─ OPTIONAL
   ├─ Phone Number
   └─ Subject
```

### Categories Available

1. General Inquiry
2. Admission
3. Course Information
4. Campus Tour
5. Placement
6. Other

---

## 🎨 Design Details

| Aspect        | Details                                                    |
| ------------- | ---------------------------------------------------------- |
| **Colors**    | SKITM Navy (#0A2463), Blue (#247BA0), Light Blue (#3B9AC6) |
| **Style**     | Glassmorphic with backdrop blur                            |
| **Position**  | Fixed bottom-right corner                                  |
| **Mobile**    | Full width, slides from bottom                             |
| **Desktop**   | 500px width, centered                                      |
| **Icon**      | Message Circle (Lucide React)                              |
| **Animation** | Smooth 300ms transitions                                   |

---

## 🎯 Features at a Glance

### Floating Button

- ✅ Always visible
- ✅ Pulsing red notification dot
- ✅ "Have a question?" tooltip on hover
- ✅ Click to open form
- ✅ Scales on hover/click

### Popup Modal

- ✅ Dark backdrop with blur
- ✅ Header with gradient (Navy → Blue)
- ✅ Minimize button (collapse to header)
- ✅ Maximize button (expand form)
- ✅ Close button (X)
- ✅ Scrollable on overflow

### Form Behavior

- ✅ Client-side validation
- ✅ Loading spinner on submit
- ✅ Success toast notification
- ✅ Auto-reset after submission
- ✅ Auto-close after 2 seconds

---

## 🔧 How to Customize

### Change Button Position

```tsx
// In EnquiryFormPopup.tsx, find:
<div className={`fixed bottom-6 right-6 z-40`}>

// Change to (e.g., top-left):
<div className={`fixed top-6 left-6 z-40`}>
```

### Change Button Color

```tsx
// Find button className:
className = "bg-skitm-blue hover:bg-skitm-lightBlue";

// Change to any Tailwind color:
className = "bg-red-500 hover:bg-red-600";
```

### Change Button Icon

```tsx
// Import different icon:
import { HelpCircle } from "lucide-react";

// Use in component:
<HelpCircle size={24} />;
```

### Add/Remove Form Categories

```tsx
const categories = [
    { value: "general", label: "General Inquiry" },
    // Add new:
    { value: "research", label: "Research" },
    // Or remove existing ones
];
```

### Modify Form Fields

```tsx
// Add new field in the form section:
<div className="space-y-2">
    <label htmlFor="newField">Field Name</label>
    <input
        type="text"
        id="newField"
        name="newField"
        value={formData.newField}
        onChange={handleChange}
    />
</div>;

// Don't forget to add to state:
const [formData, setFormData] = useState({
    // ... existing fields
    newField: "", // ADD THIS
});
```

---

## 🔌 Backend Integration Steps

### Current State

- Form submission is simulated (1 second delay)
- Success message appears
- No data is sent anywhere

### To Connect Backend

1. **Find the `handleSubmit` function** in EnquiryFormPopup.tsx

2. **Replace mock submission with real API call**:

```tsx
try {
    const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error("Submission failed");
    }

    // Success response
    toast({
        title: "Enquiry Submitted!",
        description: "We'll get back to you soon.",
    });
} catch (error) {
    // Error handling
    toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
    });
}
```

3. **Your API endpoint should**:
    - ✅ Validate form data
    - ✅ Store in database
    - ✅ Send admin notification email
    - ✅ Send auto-reply to user
    - ✅ Return success/error response

---

## 📱 Responsive Behavior

### Mobile (< 768px)

- Button size: 56px × 56px
- Popup: Full width (minus padding)
- Slides up from bottom
- Height: 600px
- Easy touch targets

### Desktop (≥ 768px)

- Button size: 64px × 64px
- Popup: Centered, 500px wide
- Height: 700px
- Centered on screen

---

## ✅ Testing Checklist

### Functionality

- [ ] Click button opens popup
- [ ] Close button works
- [ ] Minimize/Maximize buttons work
- [ ] Form fields accept input
- [ ] Validation works (try submitting empty)
- [ ] Success message appears on submit
- [ ] Form closes after success
- [ ] Clicking backdrop closes modal

### Responsive Design

- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Popup doesn't overflow
- [ ] All buttons are clickable
- [ ] Text is readable

### Styling

- [ ] Colors match SKITM theme
- [ ] Buttons have hover effects
- [ ] Inputs have focus states
- [ ] Loading spinner displays
- [ ] Toast notifications appear

---

## 🐛 Troubleshooting

### Button not visible?

- Check z-index: should be `z-40` or higher
- Check position: should be `fixed bottom-6 right-6`
- Verify CSS is loaded

### Form not submitting?

- Check browser console for errors
- Verify form validation (required fields)
- Check that toast library is imported

### Styling looks wrong?

- Verify Tailwind CSS is configured
- Check SKITM colors are in tailwind.config.ts
- Verify index.css is imported globally

### Popup position wrong?

- Check media queries in className
- Desktop: md: prefix for changes at 768px+
- Adjust breakpoint if needed

---

## 📚 Documentation Files

Created for you:

1. **ENQUIRY_FORM_GUIDE.md** - Detailed technical guide
2. **ENQUIRY_FORM_SUMMARY.md** - Visual overview
3. **This file** - Quick reference

---

## 🎁 What's Included

### Component Features

- ✅ Fully typed TypeScript
- ✅ React hooks (useState, etc.)
- ✅ Form state management
- ✅ Error handling
- ✅ Loading states
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Icon integration

### Design Compliance

- ✅ Uses SKITM color palette
- ✅ Glassmorphic effects
- ✅ Modern animations
- ✅ Smooth transitions
- ✅ Mobile-first approach
- ✅ Proper contrast ratios

---

## 🚀 Next Steps

1. **Test the form** - Click the blue button at bottom-right
2. **Try all features** - Minimize, maximize, submit, close
3. **Customize as needed** - Colors, fields, categories, etc.
4. **Connect backend** - Implement API integration
5. **Add email notifications** - Confirm submission emails
6. **Track analytics** - Monitor form submissions

---

## 💡 Tips

- **Mobile Users**: Button is easy to tap at bottom-right
- **Desktop Users**: Can minimize while browsing
- **Multiple Views**: Form persists across page navigation
- **Accessibility**: All buttons have labels and keyboard access
- **Performance**: Component only renders when needed

---

## 🤝 Support

For technical details, refer to:

- Component code: `src/components/ui/EnquiryFormPopup.tsx`
- Full guide: `ENQUIRY_FORM_GUIDE.md`
- Visual guide: `ENQUIRY_FORM_SUMMARY.md`

Each file has detailed comments and explanations.

---

**Status**: ✅ Ready to Use
**Build**: ✅ Compiled Successfully
**Server**: ✅ Running (http://localhost:8081)
**UI**: ✅ Matches Design System
**Responsive**: ✅ Mobile & Desktop Ready

Enjoy your new enquiry form! 🎉
