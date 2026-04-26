import PageWrapper from '@/components/PageWrapper';
import HeroCanvas from '@/components/HeroCanvas';
import MarqueeTrack from '@/components/MarqueeTrack';
import InteractiveEnvelope from '@/components/InteractiveEnvelope';
import CodeSandbox from '@/components/CodeSandbox';
import CloudCircuitIcon from '@/components/CloudCircuitIcon';

const MARQUEE_LINE_1 = [
  { name: 'Apple', change: 2.4 },
  { name: 'Google', change: -1.1 },
  { name: 'Meta', change: 3.7 },
  { name: 'Walmart', change: -0.5 },
  { name: 'Amazon', change: 1.9 },
  { name: 'Square', change: -2.3 },
  { name: 'Uber', change: 0.8 },
  { name: 'Visa', change: 1.2 },
  { name: 'Airbnb', change: -0.9 },
];

const MARQUEE_LINE_2 = [
  { name: 'Spotify', change: -1.7 },
  { name: 'PayPal', change: 2.1 },
  { name: 'Messenger', change: 0.4 },
  { name: 'Samsung', change: -3.2 },
  { name: 'NYTimes', change: 1.5 },
  { name: 'Reuters', change: -0.6 },
  { name: 'Coinbase', change: 4.8 },
  { name: 'Adobe', change: 1.3 },
  { name: 'Facebook', change: -1.0 },
  { name: 'Starbucks', change: 0.9 },
  { name: 'Chubb', change: -2.1 },
  { name: 'Instagram', change: 2.6 },
];

const MARQUEE_LINE_3 = [
  { name: 'Microsoft', change: 1.8 },
  { name: 'Lonely Planet', change: -0.3 },
  { name: 'Nike', change: 2.9 },
  { name: 'Huawei', change: -4.1 },
  { name: 'Allianz', change: 0.7 },
  { name: 'WhatsApp', change: 1.1 },
  { name: 'Venmo', change: -1.4 },
  { name: 'Dropbox', change: 3.5 },
  { name: 'ESPN', change: -0.8 },
  { name: 'Discovery', change: 2.0 },
  { name: 'RedBull', change: -1.6 },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section with 3D Canvas */}
      <HeroCanvas />

      {/* Client Marquee */}
      <section className="w-full overflow-hidden bg-white border-t border-black/6">
        <div className="w-full overflow-hidden py-3">
          <MarqueeTrack items={MARQUEE_LINE_1} direction="right" />
        </div>
        <div className="w-full overflow-hidden py-3">
          <MarqueeTrack items={MARQUEE_LINE_2} direction="left" />
        </div>
        <div className="w-full overflow-hidden py-3">
          <MarqueeTrack items={MARQUEE_LINE_3} direction="right" />
        </div>
      </section>

      {/* Intro Tagline Section */}
      <section className="relative w-full px-15 py-35 text-center overflow-hidden bg-white">
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <CloudCircuitIcon className="w-96 h-96 opacity-3.5" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-georgia text-5xl leading-tight font-normal text-black mb-12">
            Hi. We're Innovation Studio,<br />a strategic design and<br />innovation studio.
          </h1>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full px-15 pb-35 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
          <InteractiveEnvelope />
          <CodeSandbox />
        </div>
      </section>
    </PageWrapper>
  );
}
