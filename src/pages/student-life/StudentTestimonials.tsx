
import PageTemplate from '@/components/layout/PageTemplate';

const StudentTestimonials = () => {
  return (
    <PageTemplate
      title="Student Testimonials"
      subtitle="Hear from our students about their experiences and achievements at SKITM."
      breadcrumb="Student Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Student Success Stories
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Read testimonials from our current students and alumni about their journey at SKITM and how it has shaped their careers.
        </p>
      </div>
    </PageTemplate>
  );
};

export default StudentTestimonials;
