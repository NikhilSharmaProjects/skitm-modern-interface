
import PageTemplate from '@/components/layout/PageTemplate';

const ProjectsWorkshops = () => {
  return (
    <PageTemplate
      title="Projects & Workshops"
      subtitle="Hands-on learning through industry projects and skill development workshops."
      breadcrumb="Student Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Projects & Workshops
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Students participate in various projects and workshops designed to enhance practical skills and industry readiness through hands-on experience.
        </p>
      </div>
    </PageTemplate>
  );
};

export default ProjectsWorkshops;
