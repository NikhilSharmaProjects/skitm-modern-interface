
import PageTemplate from '@/components/layout/PageTemplate';

const IncubationCell = () => {
  return (
    <PageTemplate
      title="Incubation Cell"
      subtitle="Supporting startup ideas from concept to market launch."
      breadcrumb="Cells & Committees"
    >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          The Incubation Cell provides infrastructure, mentorship, and funding support to help students transform their innovative ideas into successful businesses.
        </p>
      </div>
    </PageTemplate>
  );
};

export default IncubationCell;
