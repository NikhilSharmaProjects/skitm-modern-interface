
import PageTemplate from '@/components/layout/PageTemplate';

const NewsEvents = () => {
  return (
    <PageTemplate
      title="News & Events"
      subtitle="Stay updated with the latest news, events, and activities at SKITM"
      breadcrumb=""
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Latest News</h2>
            <div className="space-y-6">
              <div className="glassmorphism rounded-xl p-6">
                <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm mb-3">
                  Academic
                </span>
                <h3 className="text-xl font-semibold text-skitm-navy mb-3">
                  New Academic Session 2024-25 Begins
                </h3>
                <p className="text-skitm-gray mb-3">
                  SKITM welcomes new batch of students for the academic year 2024-25 with orientation programs and induction activities.
                </p>
                <span className="text-sm text-skitm-gray">Published: June 15, 2024</span>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm mb-3">
                  Placements
                </span>
                <h3 className="text-xl font-semibold text-skitm-navy mb-3">
                  Record Breaking Placement Season 2024
                </h3>
                <p className="text-skitm-gray mb-3">
                  SKITM achieves 95% placement rate with highest package of 12 LPA. Leading companies participate in campus recruitment.
                </p>
                <span className="text-sm text-skitm-gray">Published: May 20, 2024</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="glassmorphism rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">25</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-skitm-navy text-sm">Tech Fest 2024</h4>
                    <p className="text-xs text-skitm-gray">December 2024</p>
                  </div>
                </div>
              </div>

              <div className="glassmorphism rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">30</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-skitm-navy text-sm">Industry Expert Lecture</h4>
                    <p className="text-xs text-skitm-gray">November 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default NewsEvents;
