import PageWrapper from '@/components/PageWrapper';
import CloudCircuitIcon from '@/components/CloudCircuitIcon';

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="relative w-full px-15 py-20 bg-white">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="absolute top-0 right-0 -translate-x-1/4 opacity-5 pointer-events-none">
            <CloudCircuitIcon className="w-96 h-96" />
          </div>
          <h2 className="text-7xl font-black text-black mb-12 leading-tight tracking-tight">
            About Us
          </h2>
          <div className="prose prose-lg max-w-4xl relative z-10">
            <p className="text-base leading-relaxed mb-6 text-gray-900">
              My name is Alisia Laird. I'm the Founder and CEO of Innovation Studio. And yes — Innovation Studio is back. Honestly, I wasn't planning on it.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-900">
              I started Innovation Studio with a simple belief — that bold ideas deserve thoughtful execution. Over the years, we grew. We partnered with ambitious brands, built meaningful products, and helped turn vision into reality. The journey exceeded everything I imagined.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-900">
              At one point, I stepped away. Not because things weren't working — they were. Business was strong. The team was growing. The projects were exciting. But I needed a new challenge. I wanted to experience innovation from the inside of larger systems, to understand scale differently, to see ideas grow beyond the launch phase.
            </p>
            <p className="text-sm italic text-gray-600">
              — Alisia
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
