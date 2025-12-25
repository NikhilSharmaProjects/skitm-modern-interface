
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
            Blogs
          </h1>
          <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
            The SKITM blog page coming soon! Stay tuned for campus stories, student insights, and updates.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
