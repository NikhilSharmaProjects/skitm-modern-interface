
import PageTemplate from '@/components/layout/PageTemplate';

const Hostel = () => {
  return (
    <PageTemplate
      title="Hostel Facilities"
      subtitle="Comfortable and secure accommodation for students with modern amenities."
      breadcrumb="Student Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Hostel Accommodation
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM provides safe and comfortable hostel accommodation for both boys and girls with modern amenities and facilities to ensure a conducive environment for learning and personal growth.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Hostel;
