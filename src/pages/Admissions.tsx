import { useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { CheckCircle, Mail, MapPin, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(10, "Phone number must be at least 10 digits"),
    state: z.string().min(1, "Please select a state"),
    city: z.string().min(1, "Please enter your city"),
    program: z.enum(["Undergraduate", "Postgraduate"]),
    course: z.string().min(1, "Please select a course"),
    agreement: z.boolean().refine(val => val === true, {
        message: "You must agree to receive information"
    })
});

const Admissions = () => {
    const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
    const { ref: formRef, isVisible: formVisible } = useScrollAnimationDiv();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            state: "",
            city: "",
            program: "Undergraduate",
            course: "",
            agreement: false
        }
    });

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
        "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
        "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
        "Delhi", "Lakshadweep", "Puducherry"
    ];

    const undergraduateCourses = [
        "BTECH CSE",
        "BTECH CS - AI and ML",
        "BTECH CS-DS",
        "BTECH IT",
        "BTECH ECE",
        "BTECH ME",
        "BTECH CE",
        "INTEGRATED MBA",
        "B.PHARM",
        "D.PHARM",
        "BBA",
        "B.COM",
        "B.COM (COMPUTER)",
        "BA LLB",
        "BBA LLB",
        "LLB",
        "BTECH CSIT"
    ];

    const postgraduateCourses = [
        "MBA Plus",
        "M.PHARM",
        "MBA"
    ];

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            // In a real application, this would send data to the server
            console.log("Form submitted with values:", values);
            
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            toast.success("Application submitted successfully! We'll contact you soon.");
            form.reset();
        } catch (error) {
            toast.error("Failed to submit your application. Please try again.");
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Join Our Institution
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Apply for Admission
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Take the first step towards a successful career by
                            applying to SKITM's prestigious programs.
                        </p>
                    </div>

                    {/* Application Form */}
                    <div
                        ref={formRef}
                        className={`mb-16 max-w-3xl mx-auto ${
                            formVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="glassmorphism rounded-xl p-8">
                            <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
                                Admission Enquiry Form
                            </h2>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name *</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <User className="absolute left-3 top-2.5 h-5 w-5 text-skitm-gray/50" />
                                                            <Input 
                                                                placeholder="Your full name" 
                                                                className="pl-10" 
                                                                {...field} 
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email *</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-skitm-gray/50" />
                                                            <Input 
                                                                placeholder="Your email address" 
                                                                className="pl-10" 
                                                                type="email" 
                                                                {...field} 
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="mobile"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Mobile No. *</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-skitm-gray/50" />
                                                            <Input 
                                                                placeholder="Your mobile number" 
                                                                className="pl-10" 
                                                                type="tel" 
                                                                {...field} 
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="state"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Select State *</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="pl-10">
                                                                <SelectValue placeholder="Select your state" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="max-h-[300px]">
                                                            {indianStates.map((state) => (
                                                                <SelectItem key={state} value={state}>
                                                                    {state}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <div className="pointer-events-none absolute translate-y-[-42px] translate-x-3">
                                                        <MapPin className="h-5 w-5 text-skitm-gray/50" />
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="city"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Enter Your City *</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-skitm-gray/50" />
                                                            <Input 
                                                                placeholder="Your city" 
                                                                className="pl-10" 
                                                                {...field} 
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="program"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Select Program Applying For *</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select program" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                                                            <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="course"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Select Course *</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select course" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="max-h-[300px]">
                                                            {form.watch("program") === "Undergraduate" ? 
                                                                undergraduateCourses.map((course) => (
                                                                    <SelectItem key={course} value={course}>
                                                                        {course}
                                                                    </SelectItem>
                                                                )) :
                                                                postgraduateCourses.map((course) => (
                                                                    <SelectItem key={course} value={course}>
                                                                        {course}
                                                                    </SelectItem>
                                                                ))
                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    
                                    <FormField
                                        control={form.control}
                                        name="agreement"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-skitm-blue/5">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I agree to receive information regarding my submitted enquiry on Shivajirao Kadam Group of Institutions
                                                    </FormLabel>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    
                                    <Button 
                                        type="submit" 
                                        className="w-full bg-skitm-blue hover:bg-skitm-navy text-white" 
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>

                    {/* Important Dates */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            Important Dates
                        </h2>

                        <div className="glassmorphism rounded-xl p-8">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-skitm-navy">
                                        <tr>
                                            <th className="px-6 py-3 font-display">
                                                Event
                                            </th>
                                            <th className="px-6 py-3 font-display">
                                                Undergraduate
                                            </th>
                                            <th className="px-6 py-3 font-display">
                                                Postgraduate
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 font-medium">
                                                Application Start Date
                                            </td>
                                            <td className="px-6 py-4">
                                                15th January 2025
                                            </td>
                                            <td className="px-6 py-4">
                                                1st February 2025
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                Application Deadline
                                            </td>
                                            <td className="px-6 py-4">
                                                30th April 2025
                                            </td>
                                            <td className="px-6 py-4">
                                                15th May 2025
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 font-medium">
                                                Entrance Examination
                                            </td>
                                            <td className="px-6 py-4">
                                                15th May 2025
                                            </td>
                                            <td className="px-6 py-4">
                                                1st June 2025
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                Result Declaration
                                            </td>
                                            <td className="px-6 py-4">
                                                10th June 2025
                                            </td>
                                            <td className="px-6 py-4">
                                                20th June 2025
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium">
                                                Commencement of Classes
                                            </td>
                                            <td className="px-6 py-4">
                                                1st August 2025
                                            </td>
                                            <td className="px-6 py-4">
                                                15th August 2025
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Application Fee */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            Application Fee
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glassmorphism rounded-xl p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    Undergraduate
                                </h3>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,200
                                </div>
                                <p className="text-sm text-skitm-gray mb-4">
                                    General/OBC Category
                                </p>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹800
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    SC/ST/PwD Category
                                </p>
                            </div>

                            <div className="glassmorphism rounded-xl p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    Postgraduate
                                </h3>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,500
                                </div>
                                <p className="text-sm text-skitm-gray mb-4">
                                    General/OBC Category
                                </p>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,000
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    SC/ST/PwD Category
                                </p>
                            </div>

                            <div className="glassmorphism rounded-xl p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    PhD
                                </h3>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹2,000
                                </div>
                                <p className="text-sm text-skitm-gray mb-4">
                                    General/OBC Category
                                </p>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,500
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    SC/ST/PwD Category
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="glassmorphism rounded-xl p-8 bg-gradient-to-r from-skitm-navy to-skitm-blue text-white">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-display font-bold mb-4">
                                Ready to Begin Your Journey?
                            </h2>
                            <p className="mb-8">
                                Take the first step towards your future career
                                by applying today or contact our admissions team
                                for guidance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 bg-white text-skitm-navy font-medium rounded-md hover:bg-opacity-90 transition-colors"
                                >
                                    Contact Admissions
                                </Link>
                                <Link
                                    to="/fees"
                                    className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                                >
                                    View Fee Structure
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Admissions;
