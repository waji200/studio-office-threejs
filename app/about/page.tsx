import PageWrapper from '@/components/PageWrapper';
import CloudCircuitIcon from '@/components/CloudCircuitIcon';

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="about-section">
        <div className="container">
          <div className="absolute -top-10 -right-32 opacity-4 pointer-events-none">
            <CloudCircuitIcon className="watermark-huge" />
          </div>
          <div className="relative z-10">
            <h2 className="section-title">About Us</h2>
            <div className="about-content">
              <p>
                My name is Alisia Laird. I'm the Founder and CEO of Innovation Studio. And yes — Innovation Studio is back. Honestly, I wasn't planning on it.
              </p>
              <p>
                I started Innovation Studio with a simple belief — that bold ideas deserve thoughtful execution. Over the years, we grew. We partnered with ambitious brands, built meaningful products, and helped turn vision into reality. The journey exceeded everything I imagined.
              </p>
              <p>
                At one point, I stepped away. Not because things weren't working — they were. Business was strong. The team was growing. The projects were exciting. But I needed a new challenge. I wanted to experience innovation from the inside of larger systems, to understand scale differently, to see ideas grow beyond the launch phase.
              </p>
              <p className="about-signature">
                — Alisia
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
