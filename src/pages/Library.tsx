
import PageTemplate from '@/components/layout/PageTemplate';
import { 
  Book, 
  BookOpen, 
  Clock, 
  Calendar, 
  Wifi, 
  Printer, 
  FileScan, 
  Shield, 
  Users,
  Database,
  Search,
  Download
} from 'lucide-react';

const Library = () => {
  const libraryStats = [
    {
      icon: <Book className="h-8 w-8 text-skitm-blue" />,
      title: "Volumes",
      value: "26,673",
      description: "Physical books across all disciplines"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-skitm-blue" />,
      title: "Titles",
      value: "4,772",
      description: "Unique book titles in collection"
    },
    {
      icon: <Calendar className="h-8 w-8 text-skitm-blue" />,
      title: "Print Journals",
      value: "37",
      description: "Current print journal subscriptions"
    },
    {
      icon: <Wifi className="h-8 w-8 text-skitm-blue" />,
      title: "E-Journals",
      value: "1,167",
      description: "Online journal access"
    },
    {
      icon: <Database className="h-8 w-8 text-skitm-blue" />,
      title: "E-Books",
      value: "1,393",
      description: "Digital book collection"
    },
    {
      icon: <Users className="h-8 w-8 text-skitm-blue" />,
      title: "Daily Visitors",
      value: "500+",
      description: "Average daily footfall"
    }
  ];

  const services = [
    {
      category: "Circulation Services",
      items: [
        {
          title: "Book Lending",
          description: "Books issued for 15 days with renewal options",
          icon: <Book className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Book Bank Facility",
          description: "Semester-long book lending for eligible students",
          icon: <BookOpen className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Reference Service",
          description: "Assistance in finding and using library resources",
          icon: <Search className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Inter-Library Loan",
          description: "Access to resources from other libraries through DELNET",
          icon: <Database className="h-5 w-5 text-skitm-blue" />
        }
      ]
    },
    {
      category: "Digital Services",
      items: [
        {
          title: "Digital Library",
          description: "Access to online databases and e-resources",
          icon: <Wifi className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Internet Access",
          description: "High-speed internet for research and study",
          icon: <Wifi className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Online Catalog",
          description: "Web-based library catalog for resource discovery",
          icon: <Search className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "E-Resource Training",
          description: "Training sessions on using digital resources effectively",
          icon: <Users className="h-5 w-5 text-skitm-blue" />
        }
      ]
    },
    {
      category: "Support Services",
      items: [
        {
          title: "Photocopying",
          description: "Document photocopying services for academic use",
          icon: <Printer className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Printing Services",
          description: "Computer and mobile printing facilities",
          icon: <Printer className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Scanning Service",
          description: "Document scanning and digital conversion",
          icon: <FileScan className="h-5 w-5 text-skitm-blue" />
        },
        {
          title: "Document Download",
          description: "Assistance in downloading research papers and articles",
          icon: <Download className="h-5 w-5 text-skitm-blue" />
        }
      ]
    }
  ];

  const collections = [
    {
      department: "Computer Science & Engineering",
      books: "8,500+",
      specializations: ["Artificial Intelligence", "Data Structures", "Software Engineering", "Computer Networks"],
      journals: "15 Print + 300 Online"
    },
    {
      department: "Electronics & Communication",
      books: "6,200+", 
      specializations: ["Digital Electronics", "VLSI Design", "Communication Systems", "Signal Processing"],
      journals: "10 Print + 250 Online"
    },
    {
      department: "Mechanical Engineering",
      books: "5,800+",
      specializations: ["Thermal Engineering", "Manufacturing", "Automobile Engineering", "Robotics"],
      journals: "8 Print + 200 Online"
    },
    {
      department: "Civil Engineering",
      books: "4,900+",
      specializations: ["Structural Engineering", "Environmental Engineering", "Transportation", "Geotechnical"],
      journals: "6 Print + 180 Online"
    },
    {
      department: "Management Studies",
      books: "3,200+",
      specializations: ["Marketing", "Finance", "Human Resources", "Operations Management"],
      journals: "8 Print + 220 Online"
    },
    {
      department: "Pharmacy",
      books: "2,800+",
      specializations: ["Pharmaceutical Chemistry", "Pharmacology", "Clinical Pharmacy", "Drug Development"],
      journals: "5 Print + 150 Online"
    }
  ];

  const timings = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Examination Period", hours: "8:00 AM - 8:00 PM" }
  ];

  const borrowingRules = [
    { category: "B.Tech Students", books: "3 Books", duration: "15 Days", renewals: "2 Times" },
    { category: "M.Tech/MBA/M.Pharm Students", books: "5 Books", duration: "15 Days", renewals: "2 Times" },
    { category: "Faculty Members", books: "10 Books", duration: "30 Days", renewals: "3 Times" },
    { category: "Research Scholars", books: "8 Books", duration: "30 Days", renewals: "3 Times" }
  ];

  return (
    <PageTemplate
      title="Central Library & Information Center"
      subtitle="Gateway to knowledge with comprehensive collections, digital resources, and modern learning spaces."
      breadcrumb="Campus Facilities"
    >
      {/* Library Statistics */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Library Collection Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryStats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-skitm-blue/20 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-skitm-blue/10 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-skitm-navy mb-2">{stat.value}</h3>
              <h4 className="font-semibold text-skitm-navy mb-1">{stat.title}</h4>
              <p className="text-sm text-skitm-gray">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Library Services */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Library Services
        </h2>
        {services.map((serviceCategory, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold text-skitm-navy mb-6">{serviceCategory.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategory.items.map((service, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 border border-skitm-blue/20 rounded-lg">
                  <div className="p-2 bg-skitm-blue/10 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-skitm-navy mb-1">{service.title}</h4>
                    <p className="text-sm text-skitm-gray">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Department-wise Collections */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Department-wise Collections
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <h3 className="font-bold text-skitm-navy mb-3">{collection.department}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-sm font-medium text-skitm-navy">Books:</span>
                  <p className="text-lg font-bold text-skitm-blue">{collection.books}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-skitm-navy">Journals:</span>
                  <p className="text-sm text-skitm-gray">{collection.journals}</p>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-skitm-navy">Key Areas:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {collection.specializations.map((spec, idx) => (
                    <span key={idx} className="px-2 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Library Timings and Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glassmorphism rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-skitm-blue mr-3" />
            <h3 className="text-2xl font-display font-bold text-skitm-navy">
              Library Timings
            </h3>
          </div>
          <div className="space-y-4">
            {timings.map((timing, index) => (
              <div key={index} className="flex justify-between items-center p-3 border border-skitm-blue/20 rounded-lg">
                <span className="font-medium text-skitm-navy">{timing.day}</span>
                <span className="text-skitm-gray">{timing.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-skitm-blue mr-3" />
            <h3 className="text-2xl font-display font-bold text-skitm-navy">
              Borrowing Rules
            </h3>
          </div>
          <div className="space-y-4">
            {borrowingRules.map((rule, index) => (
              <div key={index} className="p-3 border border-skitm-blue/20 rounded-lg">
                <h4 className="font-semibold text-skitm-navy mb-2">{rule.category}</h4>
                <div className="grid grid-cols-3 gap-2 text-sm text-skitm-gray">
                  <span>{rule.books}</span>
                  <span>{rule.duration}</span>
                  <span>{rule.renewals}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Features */}
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Special Features & Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-skitm-navy mb-2">DELNET Membership</h3>
            <p className="text-sm text-skitm-gray">Access to shared resources from 6000+ libraries across India through Developing Library Network.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-bold text-skitm-navy mb-2">Security & Monitoring</h3>
            <p className="text-sm text-skitm-gray">CCTV surveillance, anti-theft systems, and access control for secure learning environment.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-skitm-navy mb-2">Previous Year Papers</h3>
            <p className="text-sm text-skitm-gray">Comprehensive collection of previous year question papers for all courses and semesters.</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Library;
