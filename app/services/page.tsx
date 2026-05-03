import PageWrapper from '@/components/PageWrapper';
import CloudCircuitIcon from '@/components/CloudCircuitIcon';
import { DashboardMockupGoals, DashboardMockupRange } from '@/components/DashboardMockup';
import { Compass, RefreshCw, Smartphone, CornerUpLeft } from 'lucide-react';

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="relative w-full px-15 py-20 bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-4">
            <CloudCircuitIcon className="w-96 h-96" />
          </div>

          {/* Hero */}
          <div className="flex gap-12 mb-20 items-start">
            <div className="flex-1">
              <h2 className="text-6xl leading-tight font-bold text-black mb-12">
                We create<br />intelligent digital<br />solutions.
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a full-service Innovation Studio building immersive digital experiences. Our team creates exceptional UI/UX design with stellar functionality.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-12 mb-20">
            <div className="space-y-6 col-span-2">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black p-2 rounded text-white flex-shrink-0">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      Digital Strategy & Experience Architecture
                    </h4>
                    <p className="text-sm text-gray-600">
                      Modern, responsive, and performance-driven websites built for growth.
                    </p>
                  </div>
                  <CornerUpLeft size={18} className="text-gray-400 flex-shrink-0" />
                </div>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black p-2 rounded text-white flex-shrink-0">
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      Website Design & Development
                    </h4>
                    <p className="text-sm text-gray-600">
                      Modern, responsive, and performance-driven websites built for growth.
                    </p>
                  </div>
                  <CornerUpLeft size={18} className="text-gray-400 flex-shrink-0" />
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4">
                  <div className="bg-black p-2 rounded text-white flex-shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      Interactive & 3D Integration
                    </h4>
                    <p className="text-sm text-gray-600">
                      We integrate immersive digital elements that elevate user engagement.
                    </p>
                  </div>
                  <CornerUpLeft size={18} className="text-gray-400 flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-16 -left-16 opacity-5 pointer-events-none">
                <CloudCircuitIcon className="w-64 h-64" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-600">Our Services</span>
              <h3 className="text-3xl font-bold text-black mt-4 mb-8 leading-tight">
                Strategic solutions<br />for modern digital<br />growth.
              </h3>
              <a href="#" className="text-sm font-bold text-black hover:text-gray-600 transition-colors">
                EXPLORE ALL SERVICES →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
