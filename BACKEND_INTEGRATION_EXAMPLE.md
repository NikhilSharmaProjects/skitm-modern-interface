// Example Backend Integration for Enquiry Form

// ============================================================================
// OPTION 1: Using Direct API Call (Simple)
// ============================================================================

// Replace the handleSubmit function in EnquiryFormPopup.tsx:

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setIsLoading(true);

try {
// API Call to your backend
const response = await fetch('/api/enquiries', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
...formData,
submittedAt: new Date().toISOString(),
userAgent: navigator.userAgent,
}),
});

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit enquiry');
    }

    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you soon. Check your email for confirmation.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "general",
      message: "",
    });

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

} catch (error) {
console.error('Submission error:', error);
toast({
title: "Error",
description: error instanceof Error ? error.message : "Failed to submit enquiry. Please try again or contact us directly.",
variant: "destructive",
});
} finally {
setIsLoading(false);
}
};

// ============================================================================
// OPTION 2: Using Service/Hook Pattern (Recommended)
// ============================================================================

// Create file: src/services/enquiryService.ts
// ============================================================================

export interface EnquiryData {
name: string;
email: string;
phone?: string;
subject?: string;
category: string;
message: string;
}

export interface EnquiryResponse {
success: boolean;
enquiryId?: string;
message: string;
}

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const enquiryService = {
submitEnquiry: async (data: EnquiryData): Promise<EnquiryResponse> => {
const response = await fetch(`${API_BASE_URL}/enquiries`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
...data,
submittedAt: new Date().toISOString(),
source: 'website-popup',
}),
});

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit enquiry');
    }

    return response.json();

},

// Optional: Get submission status
getEnquiryStatus: async (enquiryId: string) => {
const response = await fetch(`${API_BASE_URL}/enquiries/${enquiryId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch status');
    }

    return response.json();

},
};

// Then in EnquiryFormPopup.tsx, update handleSubmit:
// ============================================================================

import { enquiryService, type EnquiryData } from '@/services/enquiryService';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setIsLoading(true);

try {
const response = await enquiryService.submitEnquiry(formData as EnquiryData);

    toast({
      title: "Enquiry Submitted!",
      description: "We've received your enquiry. Confirmation email sent to " + formData.email,
    });

    // Store enquiry ID if needed
    if (response.enquiryId) {
      localStorage.setItem('lastEnquiryId', response.enquiryId);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "general",
      message: "",
    });

    setTimeout(() => setIsOpen(false), 2000);

} catch (error) {
console.error('Submission error:', error);
toast({
title: "Error",
description: error instanceof Error
? error.message
: "Failed to submit. Please try again.",
variant: "destructive",
});
} finally {
setIsLoading(false);
}
};

// ============================================================================
// OPTION 3: Using React Query (Advanced)
// ============================================================================

// Create file: src/hooks/useEnquirySubmit.ts
// ============================================================================

import { useMutation } from '@tanstack/react-query';
import { enquiryService, type EnquiryData } from '@/services/enquiryService';

export const useEnquirySubmit = () => {
return useMutation({
mutationFn: (data: EnquiryData) => enquiryService.submitEnquiry(data),
onSuccess: (data) => {
console.log('Enquiry submitted successfully:', data);
},
onError: (error) => {
console.error('Failed to submit enquiry:', error);
},
});
};

// Then in EnquiryFormPopup.tsx:
// ============================================================================

import { useEnquirySubmit } from '@/hooks/useEnquirySubmit';

export const EnquiryFormPopup = () => {
// ... existing code ...

const { mutate: submitEnquiry, isPending } = useEnquirySubmit();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

    submitEnquiry(formData as EnquiryData, {
      onSuccess: () => {
        toast({
          title: "Enquiry Submitted!",
          description: "We'll get back to you soon.",
        });

        // Reset form
        setFormData({...});

        setTimeout(() => setIsOpen(false), 2000);
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to submit",
          variant: "destructive",
        });
      },
    });

};

// ... rest of component ...
};

// ============================================================================
// BACKEND ENDPOINT EXAMPLE (Node.js + Express)
// ============================================================================

// routes/enquiries.js
import express from 'express';
import { Enquiry } from '../models/Enquiry.js';
import { sendConfirmationEmail, notifyAdmin } from '../services/emailService.js';

const router = express.Router();

router.post('/enquiries', async (req, res) => {
try {
const { name, email, phone, subject, category, message } = req.body;

    // Validation
    if (!name || !email || !category || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
    }

    // Save to database
    const enquiry = new Enquiry({
      name,
      email,
      phone,
      subject,
      category,
      message,
      source: 'website-popup',
      status: 'new',
      submittedAt: new Date(),
    });

    const savedEnquiry = await enquiry.save();

    // Send confirmation email to user
    await sendConfirmationEmail({
      name,
      email,
      enquiryId: savedEnquiry._id,
    });

    // Notify admin about new enquiry
    await notifyAdmin({
      enquiry: savedEnquiry,
      category,
    });

    res.status(201).json({
      success: true,
      enquiryId: savedEnquiry._id,
      message: 'Enquiry submitted successfully',
    });

} catch (error) {
console.error('Error submitting enquiry:', error);
res.status(500).json({
success: false,
message: 'Failed to submit enquiry',
});
}
});

// Get enquiry status (optional)
router.get('/enquiries/:id', async (req, res) => {
try {
const enquiry = await Enquiry.findById(req.params.id).select('-\_\_v');

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      });
    }

    res.json({
      success: true,
      enquiry,
    });

} catch (error) {
res.status(500).json({
success: false,
message: 'Failed to fetch enquiry',
});
}
});

export default router;

// ============================================================================
// BACKEND EXAMPLE (Python + Flask)
// ============================================================================

from flask import Blueprint, request, jsonify
from datetime import datetime
from models import Enquiry
from services.email_service import send_confirmation_email, notify_admin

enquiries_bp = Blueprint('enquiries', **name**, url_prefix='/api')

@enquiries_bp.route('/enquiries', methods=['POST'])
def submit_enquiry():
try:
data = request.get_json()

        # Validation
        required_fields = ['name', 'email', 'category', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({
                'success': False,
                'message': 'Missing required fields'
            }), 400

        # Email validation
        import re
        email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(email_pattern, data['email']):
            return jsonify({
                'success': False,
                'message': 'Invalid email address'
            }), 400

        # Create enquiry record
        enquiry = Enquiry(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone', ''),
            subject=data.get('subject', ''),
            category=data['category'],
            message=data['message'],
            source='website-popup',
            status='new',
            submitted_at=datetime.utcnow()
        )

        enquiry.save()

        # Send emails
        send_confirmation_email(
            name=data['name'],
            email=data['email'],
            enquiry_id=str(enquiry.id)
        )

        notify_admin({
            'enquiry': enquiry,
            'category': data['category']
        })

        return jsonify({
            'success': True,
            'enquiryId': str(enquiry.id),
            'message': 'Enquiry submitted successfully'
        }), 201

    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@enquiries_bp.route('/enquiries/<enquiry_id>', methods=['GET'])
def get_enquiry_status(enquiry_id):
try:
enquiry = Enquiry.objects(id=enquiry_id).first()

        if not enquiry:
            return jsonify({
                'success': False,
                'message': 'Enquiry not found'
            }), 404

        return jsonify({
            'success': True,
            'enquiry': enquiry.to_dict()
        }), 200

    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

// ============================================================================
// EMAIL TEMPLATES
// ============================================================================

// User Confirmation Email
Subject: We've Received Your Enquiry - SKITM

Dear [NAME],

Thank you for reaching out to SKITM with your enquiry!

We have received your message about [CATEGORY] and we appreciate your interest in our institution.

**Your Enquiry Details:**

- Name: [NAME]
- Email: [EMAIL]
- Category: [CATEGORY]
- Subject: [SUBJECT]

Our admissions team will review your enquiry and get back to you within 24 hours.

In the meantime, feel free to explore our website or call us at:
📞 +91 9770907100
📞 +91 9713434971

Best regards,
SKITM Team

// Admin Notification Email
Subject: New Enquiry Received - [CATEGORY]

A new enquiry has been submitted through the website popup form.

**Details:**

- Name: [NAME]
- Email: [EMAIL]
- Phone: [PHONE]
- Category: [CATEGORY]
- Subject: [SUBJECT]
- Message: [MESSAGE]
- Submitted: [TIMESTAMP]
- Source: Website Popup

**Action Required:**
Please review and respond to this enquiry.

Enquiry ID: [ID]

// ============================================================================
// ENVIRONMENT VARIABLES (.env file)
// ============================================================================

REACT_APP_API_URL=https://api.skitm.in
REACT_APP_ENV=production

# Backend (.env)

NODE_ENV=production
API_PORT=3001
DATABASE_URL=mongodb://...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@skitm.in
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@skitm.in

// ============================================================================
// TESTING THE INTEGRATION
// ============================================================================

1. **Test with cURL:**
   curl -X POST http://localhost:3001/api/enquiries \
    -H "Content-Type: application/json" \
    -d '{
   "name": "John Doe",
   "email": "john@example.com",
   "phone": "+91 9876543210",
   "subject": "Admission Inquiry",
   "category": "admission",
   "message": "I want to know about CSE admissions"
   }'

2. **Test with Postman:**

- Method: POST
- URL: http://localhost:3001/api/enquiries
- Headers: Content-Type: application/json
- Body (JSON):
  {
  "name": "John Doe",
  "email": "john@example.com",
  "category": "admission",
  "message": "Test message"
  }

3. **Check responses:**
   Success (201):
   {
   "success": true,
   "enquiryId": "507f1f77bcf86cd799439011",
   "message": "Enquiry submitted successfully"
   }

Error (400):
{
"success": false,
"message": "Missing required fields"
}

// ============================================================================
// SECURITY CONSIDERATIONS
// ============================================================================

✅ DO:

- Validate all inputs on server side
- Sanitize HTML in messages
- Use HTTPS only
- Rate limit API endpoints
- Store data securely (encrypted email, hash IP)
- Use CORS properly
- Validate email addresses
- Log all submissions
- Require authentication for admin endpoints

❌ DON'T:

- Store sensitive data in plaintext
- Trust client-side validation only
- Expose database errors to users
- Allow file uploads without validation
- Send emails with user content directly
- Store passwords or sensitive info

// ============================================================================
// MONITORING & ANALYTICS
// ============================================================================

Track:

1. Number of enquiries per day/week/month
2. Most common categories
3. Response time to user emails
4. Conversion rate (enquiry to enrollment)
5. Device type (mobile vs desktop)
6. Page source (which page had highest enquiries)
7. Form abandonment rate
8. Average form completion time

Implement:

- Error logging (Sentry, LogRocket)
- Analytics (Google Analytics, Mixpanel)
- Email delivery tracking (SendGrid, Mailgun)
- Database backups
- Performance monitoring
