
import PageTemplate from '@/components/layout/PageTemplate';

const CulturalSociety = () => {
  return (
    <PageTemplate
      title="Cultural Society"
      subtitle="Celebrating diversity and creativity through cultural activities and events."
      breadcrumb="Campus Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Cultural Activities
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Cultural Society at SKITM organizes various cultural events, festivals, and competitions throughout the year, providing students with platforms to showcase their talents and celebrate diversity.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CulturalSociety;
