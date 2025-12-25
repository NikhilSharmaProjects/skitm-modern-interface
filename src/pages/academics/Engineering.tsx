
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const Engineering = () => {
  return (
    <PageTemplate
      title="Engineering"
      subtitle="Cutting-edge engineering programs designed to create tomorrow's innovators"
      breadcrumb="Academics"
    >
      <div className="space-y-8">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Engineering Excellence at SKITM
          </h2>
          <p className="text-skitm-gray leading-relaxed mb-4">
            Our engineering programs are designed to provide students with a strong foundation in technical knowledge, practical skills, and innovative thinking. With state-of-the-art laboratories, experienced faculty, and industry partnerships, we prepare engineers who can meet the challenges of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/cse" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">CS</span>
              </div>
              <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue transition-colors">
                Computer Science & Engineering
              </h3>
            </div>
            <p className="text-skitm-gray mb-4">
              Comprehensive program covering software development, data structures, algorithms, AI, and emerging technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Programming</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">AI/ML</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Web Development</span>
            </div>
          </Link>

          <Link to="/ece" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">EC</span>
              </div>
              <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue transition-colors">
                Electronics & Communication Engineering
              </h3>
            </div>
            <p className="text-skitm-gray mb-4">
              Focus on electronics design, communication systems, signal processing, and embedded systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">VLSI Design</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Communication</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Embedded Systems</span>
            </div>
          </Link>

          <Link to="/mechanical-engineering" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">ME</span>
              </div>
              <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue transition-colors">
                Mechanical Engineering
              </h3>
            </div>
            <p className="text-skitm-gray mb-4">
              Comprehensive program in design, manufacturing, thermal sciences, and automation technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">CAD/CAM</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Robotics</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Manufacturing</span>
            </div>
          </Link>

          <Link to="/civil-engineering" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">CE</span>
              </div>
              <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue transition-colors">
                Civil Engineering
              </h3>
            </div>
            <p className="text-skitm-gray mb-4">
              Infrastructure development, structural design, environmental engineering, and sustainable construction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Structural Design</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Construction</span>
              <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">Environmental</span>
            </div>
          </Link>
        </div>

        <Link to="/applied-science" className="block">
          <div className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-skitm-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">AS</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue transition-colors mb-2">
                  Applied Science Department
                </h3>
                <p className="text-skitm-gray">
                  Foundation sciences and humanities education supporting all engineering disciplines with mathematics, physics, chemistry, and communication skills.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default Engineering;
