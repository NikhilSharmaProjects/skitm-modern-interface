
import PageTemplate from '@/components/layout/PageTemplate';

const CourseraAcademy = () => {
  return (
    <PageTemplate
      title="Coursera Academy"
      subtitle="Access to Coursera's extensive library of online courses and specializations."
      breadcrumb="Partnerships"
    >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          Through Coursera Academy, students can access thousands of courses from top universities and companies worldwide.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CourseraAcademy;
