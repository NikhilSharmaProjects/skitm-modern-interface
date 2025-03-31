
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data structure
interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const Faqs = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  // FAQ data
  const faqItems: FaqItem[] = [
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. Generally, candidates must have completed their 10+2 education with a minimum of 60% in PCM for engineering courses. Entrance exam scores (JEE/NEET/CAT) may also be required depending on the program.",
      category: "Admissions"
    },
    {
      question: "What is the application deadline?",
      answer: "Application deadlines vary by program and admission cycle. For the main academic year starting in July/August, applications typically close by May. Please check our Admissions page for specific deadlines.",
      category: "Admissions"
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, SKITM offers various merit-based and need-based scholarships. Merit scholarships are awarded based on academic performance, while need-based scholarships consider financial circumstances. Visit our Scholarships page for more details.",
      category: "Financial Aid"
    },
    {
      question: "What accommodation options are available?",
      answer: "SKITM provides on-campus hostel facilities for both male and female students. Hostels are equipped with all necessary amenities including Wi-Fi, laundry services, dining facilities, and 24/7 security. Off-campus housing options are also available in nearby areas.",
      category: "Campus Life"
    },
    {
      question: "What extracurricular activities are offered?",
      answer: "SKITM offers numerous extracurricular activities including cultural clubs, technical societies, sports teams, and annual festivals. Students are encouraged to participate in these activities to develop leadership skills and a well-rounded personality.",
      category: "Campus Life"
    },
    {
      question: "What career services do you provide?",
      answer: "Our Placement Cell offers comprehensive career services including campus recruitment drives, career counseling, resume building workshops, mock interviews, and industry connections. We have strong ties with leading companies that regularly recruit our students.",
      category: "Placements"
    },
    {
      question: "How can I contact the admissions office?",
      answer: "You can contact the admissions office through email at admissions@skitm.in or by phone at +91-XXX-XXX-XXXX. The office is open Monday through Friday from 9:00 AM to 5:00 PM. Walk-in inquiries are also welcome during office hours.",
      category: "Contact"
    },
    {
      question: "Are there internship opportunities?",
      answer: "Yes, SKITM facilitates internships for students through our industry connections and placement cell. Most programs include mandatory internship periods, and we help students secure positions in relevant companies and organizations.",
      category: "Academics"
    }
  ];
  
  // Group FAQs by category
  const groupedFaqs: Record<string, FaqItem[]> = faqItems.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FaqItem[]>);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className={`text-center mb-16 ${headingVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Your Questions Answered
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Find answers to common questions about admissions, academics, campus life, and more.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-10">
            {Object.entries(groupedFaqs).map(([category, faqs]) => (
              <div key={category} className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-skitm-navy">{category}</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="glassmorphism rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between p-5 text-left font-medium text-skitm-navy"
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.question}</span>
                        {openFaqId === index ? 
                          <ChevronUp className="h-5 w-5 text-skitm-blue" /> : 
                          <ChevronDown className="h-5 w-5 text-skitm-blue" />
                        }
                      </button>
                      
                      {openFaqId === index && (
                        <div className="px-5 pb-5">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-skitm-gray">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faqs;
