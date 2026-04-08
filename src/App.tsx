import { Suspense, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight, Loader } from "@react-three/drei";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Compass, RefreshCw, CornerUpLeft, Smartphone } from 'lucide-react';
import { Instances, Model } from "./Office_studiocheck.tsx";

// Positions and targets defined once in an array
const LIGHTS_DATA: { position: [number, number, number]; target: [number, number, number]; }[] = [
  { position: [2.82, 11.8, 0.88], target: [2.82, 0, 0.88] },
  { position: [-2.52, 11.8, 0.88], target: [-2.52, 0, 0.88] },
  { position: [2.82, 11.8, -2.61], target: [2.82, 0, -2.61] },
  { position: [-2.52, 11.8, -2.61], target: [-2.52, 0, -2.61] },
  { position: [-7.29, 11.8, 0.88], target: [-7.29, 0, 0.88] },
  { position: [-7.29, 11.8, -2.61], target: [-7.29, 0, -2.61] },
  { position: [7.82, 5.4, -1.61], target: [7.82, 0, -1.61] },
  { position: [10.58, 5.4, -1.61], target: [10.58, 0, -1.61] },
  { position: [10.58, 5.4, 0.88], target: [10.58, 0, 0.88] },
  { position: [7.82, 5.4, 0.88], target: [7.82, 0, 0.88] },
  { position: [7.82, 5.4, 3.37], target: [7.82, 0, 3.37] },
  { position: [10.58, 5.4, 3.37], target: [10.58, 0, 3.37] },
  { position: [10.58, 5.4, 5.86], target: [10.58, 0, 5.86] },
  { position: [7.82, 5.4, 5.86], target: [7.82, 0, 5.86] },
  { position: [10.58, 5.4, 10.35], target: [10.58, 0, 10.35] },
  { position: [7.82, 5.4, 10.35], target: [7.82, 0, 10.35] },
  { position: [-2.52, 5.4, 0.88], target: [-2.52, 0, 0.88] },
  { position: [2.82, 5.4, 0.88], target: [2.82, 0, 0.88] },
  { position: [-2.52, 5.4, 0.88], target: [-2.52, 0, 0.88] },
  { position: [2.82, 5.4, -2.61], target: [2.82, 0, -2.61] },
  { position: [-2.52, 5.4, -2.61], target: [-2.52, 0, -2.61] },
  { position: [-7.29, 5.4, 0.88], target: [-7.29, 0, 0.88] },
  { position: [-7.29, 5.4, -2.61], target: [-7.29, 0, -2.61] },
];

function CustomSpotLight({ position, targetPosition }: { position: [number, number, number]; targetPosition: [number, number, number]; }) {
  const target = useMemo(() => {
    const obj = new THREE.Object3D();
    obj.position.set(...targetPosition);
    return obj;
  }, [targetPosition]);

  return (
    <>
      <primitive object={target} />
      <SpotLight position={position} target={target} intensity={188.74} distance={15} angle={0.46} penumbra={0.62} />
    </>
  );
}

function CloudCircuitIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="400" height="400" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 75 C 50 60, 65 50, 80 50 C 105 50, 115 65, 115 80 C 130 80, 130 100, 115 100 L 50 100 C 30 100, 30 75, 50 75 Z" stroke="#d0d0d0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 100 L45 115 L25 115" stroke="#d0d0d0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="115" r="5" fill="#d0d0d0" />
      <path d="M65 100 L65 130 L45 130" stroke="#d0d0d0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="130" r="5" fill="#d0d0d0" />
      <path d="M85 100 L85 130" stroke="#d0d0d0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="85" cy="135" r="5" fill="#d0d0d0" />
      <path d="M105 100 L105 115 L125 115" stroke="#d0d0d0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="130" cy="115" r="5" fill="#d0d0d0" />
    </svg>
  );
}

/* ==================================
   DASHBOARD MOCKUP COMPONENTS
   ================================== */
function DashboardMockupGoals() {
  return (
    <div className="ui-mockup-wrapper">
      <div className="ui-top-bar">
        <div className="ui-tb-left"><span className="icon-home" /> Strategy Call</div>
        <div className="ui-tb-center">
          <span className="ui-tab active">Funnel</span><span className="ui-tab">Metrics</span><span className="ui-tab">Contacts</span><span className="ui-tab">Apps</span>
        </div>
        <div className="ui-tb-right"><button className="btn-publish">Publish &rarr;</button></div>
      </div>
      <div className="ui-body">
        <div className="ui-sidebar">
          <div className="ui-s-tabs"><span className="ui-st active">Pages</span><span className="ui-st">Messages</span><span className="ui-st">Design</span></div>
          <ul className="ui-pages-list">
            <li>1 Start</li>
            <li>2 Range</li>
            <li className="active">3 Goal</li>
            <li>4 Position</li>
            <li>5 Budget</li>
            <li>6 Opt-in</li>
            <li className="add-page">+ Add page</li>
          </ul>
        </div>
        <div className="ui-canvas">
          <div className="ui-mobile-frame dark-theme">
            <div className="m-header"><span className="m-icon calendar-icon" /></div>
            <div className="m-progress">Question 2 of 3</div>
            <h3 className="m-title">What goals should Marketing<br/>meet for your business?</h3>
            <p className="m-subtitle">Choose as many as you want</p>
            <div className="m-checklist">
              <div className="m-checkitem"><span>Generate appointments</span><div className="m-circle" /></div>
              <div className="m-checkitem active"><span><span className="accent-dot"/>Convert prospects to customers</span><div className="m-circle check" /></div>
              <div className="m-checkitem"><span>Gain reach</span><div className="m-circle" /></div>
              <div className="m-checkitem"><span>Position brand</span><div className="m-circle" /></div>
              <div className="m-checkitem"><span>Use LinkedIn as recruiting channel</span><div className="m-circle" /></div>
              <div className="m-checkitem"><span>Develop network as USP</span><div className="m-circle" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockupRange() {
  return (
    <div className="ui-mockup-wrapper mockup-range">
      <div className="ui-top-bar">
        <div className="ui-tb-left"><span className="icon-home" /> Strategy Call</div>
        <div className="ui-tb-center">
          <span className="ui-tab active">Funnel</span><span className="ui-tab">Metrics</span><span className="ui-tab">Contacts</span><span className="ui-tab">Apps</span>
        </div>
        <div className="ui-tb-right"><button className="btn-publish">Publish &rarr;</button></div>
      </div>
      <div className="ui-body">
        <div className="ui-sidebar">
          <div className="ui-s-header">Outline Icons <span className="info-i">i</span></div>
          <div className="ui-search-bar"><span className="search-icon" /> Search</div>
          <div className="ui-icon-grid">
            <div className="ui-grid-ic active"><span className="ic-store" /></div>
            <div className="ui-grid-ic"><span className="ic-bank" /></div>
            <div className="ui-grid-ic"><span className="ic-building" /></div>
            <div className="ui-grid-ic"><span className="ic-office" /></div>
            <div className="ui-grid-ic"><span className="ic-briefcase" /></div>
            <div className="ui-grid-ic"><span className="ic-calc" /></div>
            <div className="ui-grid-ic"><span className="ic-chart" /></div>
            <div className="ui-grid-ic"><span className="ic-users" /></div>
            <div className="ui-grid-ic"><span className="ic-chat" /></div>
          </div>
        </div>
        <div className="ui-canvas pt-high">
          <div className="ui-mobile-frame light-theme">
            <div className="m-header"><span className="m-icon calendar-icon blue" /></div>
            <div className="m-progress dark">Question 1 of 3</div>
            <h3 className="m-title dark">What is the main price range<br/>of your product or service?</h3>
            <span className="m-badge">Image</span>
            <div className="m-cards-grid">
              <div className="m-card"><span className="ic-store large" />&lt; $300</div>
              <div className="m-card active"><span className="ic-bank large" />$300 - $1,000</div>
              <div className="m-card"><span className="ic-office large" />$1,000 - $5,000</div>
              <div className="m-card"><span className="ic-building large" />&gt; $5,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================================
   PAGE: HOME
   ================================== */
function Home() {
  const [isInteractive, setIsInteractive] = useState(false);
  return (
    <>
      {/* 1. HERO — Full viewport 3D Canvas */}
      <section className="hero-section">
        <div className="hero-canvas-wrap" style={{ backgroundColor: '#5a90d8' }} onMouseLeave={() => setIsInteractive(false)}>
          {!isInteractive && (
            <div className="canvas-overlay" onClick={() => setIsInteractive(true)}>
              <span>Click to Interact</span>
            </div>
          )}
          <Canvas frameloop="demand" dpr={Math.min(window.devicePixelRatio, 2)} gl={{ antialias: false, powerPreference: "high-performance" }} orthographic camera={{ position: [-20, 10, 20], zoom: 30 }}>
            <ambientLight intensity={0.51} />
            <directionalLight position={[10, 18.41, 16.64]} intensity={1} castShadow={false} />
            <directionalLight position={[-10, 18.41, 16.64]} intensity={3} castShadow={false} />
            <Suspense fallback={null}>
              {LIGHTS_DATA.map((data, index) => (
                <CustomSpotLight key={index} position={data.position} targetPosition={data.target} />
              ))}
              <Instances>
                <Model />
              </Instances>
            </Suspense>
            <OrbitControls makeDefault target={[6, 1, -1]} enableZoom={isInteractive} />
          </Canvas>
          <Loader />
        </div>
      </section>

      {/* 2. CLIENT MARQUEE — Large serif scrolling brand names */}
      <section className="client-logos-section">
        <div className="client-logos line-1">
          <div className="logo-track track-right">
            <span>Apple &nbsp;&#x25E6;&nbsp; Google &nbsp;&#x25E6;&nbsp; Meta &nbsp;&#x25E6;&nbsp; Walmart &nbsp;&#x25E6;&nbsp; Amazon &nbsp;&#x25E6;&nbsp; Square &nbsp;&#x25E6;&nbsp; Uber &nbsp;&#x25E6;&nbsp; Visa &nbsp;&#x25E6;&nbsp; Airbnb &nbsp;&#x25E6;&nbsp;</span>
            <span>Apple &nbsp;&#x25E6;&nbsp; Google &nbsp;&#x25E6;&nbsp; Meta &nbsp;&#x25E6;&nbsp; Walmart &nbsp;&#x25E6;&nbsp; Amazon &nbsp;&#x25E6;&nbsp; Square &nbsp;&#x25E6;&nbsp; Uber &nbsp;&#x25E6;&nbsp; Visa &nbsp;&#x25E6;&nbsp; Airbnb &nbsp;&#x25E6;&nbsp;</span>
          </div>
        </div>
        <div className="client-logos line-2">
          <div className="logo-track track-left">
            <span>Spotify &nbsp;&#x25E6;&nbsp; PayPal &nbsp;&#x25E6;&nbsp; Messenger &nbsp;&#x25E6;&nbsp; Samsung &nbsp;&#x25E6;&nbsp; NYTimes &nbsp;&#x25E6;&nbsp; Reuters &nbsp;&#x25E6;&nbsp; Coinbase &nbsp;&#x25E6;&nbsp; Adobe &nbsp;&#x25E6;&nbsp; Facebook &nbsp;&#x25E6;&nbsp; Starbucks &nbsp;&#x25E6;&nbsp; Chubb &nbsp;&#x25E6;&nbsp; Instagram &nbsp;&#x25E6;&nbsp;</span>
            <span>Spotify &nbsp;&#x25E6;&nbsp; PayPal &nbsp;&#x25E6;&nbsp; Messenger &nbsp;&#x25E6;&nbsp; Samsung &nbsp;&#x25E6;&nbsp; NYTimes &nbsp;&#x25E6;&nbsp; Reuters &nbsp;&#x25E6;&nbsp; Coinbase &nbsp;&#x25E6;&nbsp; Adobe &nbsp;&#x25E6;&nbsp; Facebook &nbsp;&#x25E6;&nbsp; Starbucks &nbsp;&#x25E6;&nbsp; Chubb &nbsp;&#x25E6;&nbsp; Instagram &nbsp;&#x25E6;&nbsp;</span>
          </div>
        </div>
        <div className="client-logos line-3">
          <div className="logo-track track-right">
            <span>Microsoft &nbsp;&#x25E6;&nbsp; Lonely Planet &nbsp;&#x25E6;&nbsp; Nike &nbsp;&#x25E6;&nbsp; Huawei &nbsp;&#x25E6;&nbsp; Allianz &nbsp;&#x25E6;&nbsp; WhatsApp &nbsp;&#x25E6;&nbsp; Venmo &nbsp;&#x25E6;&nbsp; Dropbox &nbsp;&#x25E6;&nbsp; ESPN &nbsp;&#x25E6;&nbsp; Discovery &nbsp;&#x25E6;&nbsp; RedBull &nbsp;&#x25E6;&nbsp;</span>
            <span>Microsoft &nbsp;&#x25E6;&nbsp; Lonely Planet &nbsp;&#x25E6;&nbsp; Nike &nbsp;&#x25E6;&nbsp; Huawei &nbsp;&#x25E6;&nbsp; Allianz &nbsp;&#x25E6;&nbsp; WhatsApp &nbsp;&#x25E6;&nbsp; Venmo &nbsp;&#x25E6;&nbsp; Dropbox &nbsp;&#x25E6;&nbsp; ESPN &nbsp;&#x25E6;&nbsp; Discovery &nbsp;&#x25E6;&nbsp; RedBull &nbsp;&#x25E6;&nbsp;</span>
          </div>
        </div>
      </section>

      {/* 3. INTRO TAGLINE */}
      <section className="intro-section" id="home">
        <CloudCircuitIcon className="watermark-huge absolute-center" style={{ opacity: 0.035 }} />
        <h1 className="intro-text" style={{ position: 'relative', zIndex: 1 }}>
          Hi. We're Innovation Studio,<br/>a strategic design and<br/>innovation studio.
        </h1>
      </section>

      {/* 4. PORTFOLIO IMAGE GRID */}
      <section className="home-grid-section">
        <div className="home-image-grid">
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Paper Plane Card */}
            <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '12px', padding: '48px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <h4 style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '22px', color: '#444', marginBottom: '36px', fontWeight: 400 }}>Let's make a Plane</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', maxWidth: '360px' }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', stroke: '#7ab0e0', fill: 'none', strokeWidth: '1.2' }}>
                  <polygon points="10,90 50,10 90,90 50,70" /><line x1="50" y1="10" x2="50" y2="70" /><circle cx="50" cy="40" r="3" fill="#7ab0e0" />
                </svg>
                <svg viewBox="0 0 100 100" style={{ width: '100%', stroke: '#7ab0e0', fill: 'none', strokeWidth: '1.2' }}>
                  <polygon points="10,90 50,10 90,90 50,70" /><line x1="10" y1="90" x2="90" y2="90" strokeDasharray="4" /><circle cx="50" cy="20" r="3" fill="#7ab0e0" />
                </svg>
                <svg viewBox="0 0 100 100" style={{ width: '100%', stroke: '#7ab0e0', fill: 'none', strokeWidth: '1.2' }}>
                  <path d="M10,80 L50,20 L90,80 Z" /><line x1="50" y1="20" x2="40" y2="90" strokeDasharray="4" />
                </svg>
                <svg viewBox="0 0 100 100" style={{ width: '100%', stroke: '#7ab0e0', fill: 'none', strokeWidth: '1.2' }}>
                  <path d="M20,60 L80,60 L90,80 L10,80 Z" />
                </svg>
              </div>
            </div>

            {/* Glowing Envelope */}
            <div style={{ background: 'linear-gradient(145deg, #081026 0%, #0d1b3a 100%)', borderRadius: '12px', height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', width: '180px', height: '180px', background: '#3ecdfa', filter: 'blur(100px)', opacity: 0.2 }} />
              <svg viewBox="0 0 24 24" fill="rgba(62,205,250,0.08)" stroke="#60d5fb" strokeWidth="0.8" style={{ width: '140px', height: '140px', filter: 'drop-shadow(0 0 20px rgba(96,213,251,0.5))', zIndex: 1 }}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%', background: 'linear-gradient(0deg, rgba(62,205,250,0.12) 0%, transparent 100%)' }} />
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '80px' }}>
            {/* VS Code Editor */}
            <div style={{ background: '#1e1e1e', borderRadius: '12px', boxShadow: '0 24px 80px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ background: '#2d2d2d', padding: '14px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ color: '#888', fontSize: '12px', marginLeft: '16px', fontFamily: 'monospace' }}>index.js</span>
              </div>
              <div style={{ padding: '24px 28px', fontFamily: '"Fira Code", "Consolas", monospace', fontSize: '13px', lineHeight: '1.8', color: '#d4d4d4' }}>
                <p><span style={{ color: '#569cd6' }}>module</span>.<span style={{ color: '#9cdcfe' }}>exports</span> = <span style={{ color: '#569cd6' }}>async function</span> (context, req) {'{'}</p>
                <p style={{ paddingLeft: '20px' }}>context.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>'JavaScript HTTP trigger function processed a request.'</span>);</p>
                <br/>
                <p style={{ paddingLeft: '20px' }}><span style={{ color: '#c586c0' }}>if</span> (req.query.name || (req.body && req.body.name)) {'{'}</p>
                <p style={{ paddingLeft: '40px' }}>context.<span style={{ color: '#9cdcfe' }}>res</span> = {'{'}</p>
                <p style={{ paddingLeft: '60px', color: '#6a9955' }}>// status: 200, /* Defaults to 200 */</p>
                <p style={{ paddingLeft: '60px' }}>body: <span style={{ color: '#ce9178' }}>"Hello "</span> + (req.query.name || req.body.name)</p>
                <p style={{ paddingLeft: '40px' }}>{'}'};</p>
                <p style={{ paddingLeft: '20px' }}>{'}'}</p>
                <p style={{ paddingLeft: '20px' }}><span style={{ color: '#c586c0' }}>else</span> {'{'}</p>
                <p style={{ paddingLeft: '40px' }}>context.<span style={{ color: '#9cdcfe' }}>res</span> = {'{'}</p>
                <p style={{ paddingLeft: '60px' }}>status: <span style={{ color: '#b5cea8' }}>400</span>,</p>
                <p style={{ paddingLeft: '60px' }}>body: <span style={{ color: '#ce9178' }}>"Please pass a name on the query string or in the request body"</span></p>
                <p style={{ paddingLeft: '40px' }}>{'}'};</p>
                <p style={{ paddingLeft: '20px' }}>{'}'}</p>
                <p>{'}'};</p>
              </div>
            </div>

            {/* Digital Sparkle */}
            <div style={{ background: 'linear-gradient(145deg, #020513 0%, #0a1628 100%)', borderRadius: '12px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(27,58,110,0.4) 0%, transparent 70%)' }} />
              <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                {Array.from({length: 50}).map((_, i) => (
                  <circle key={i} cx={20 + (i * 37) % 180} cy={15 + (i * 53) % 180} r={i % 5 === 0 ? 2 : 1} fill={i % 3 === 0 ? "#4da8da" : "#fff"} opacity={0.2 + (i % 4) * 0.15} />
                ))}
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="#4da8da" strokeWidth="0.4" style={{ width: '200px', height: '200px', zIndex: 1, opacity: 0.6 }}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SPLIT */}
      <section className="home-services-section">
        <div className="container">
          <div className="services-split" style={{ position: 'relative' }}>
            <CloudCircuitIcon className="watermark-huge" style={{ position: 'absolute', left: '-10%', top: '10%', opacity: 0.04 }} />

            <div className="services-left-col" style={{ position: 'relative', zIndex: 1 }}>
              <span className="subtitle">Our Services</span>
              <h3>Strategic solutions<br/>for modern digital<br/>growth.</h3>
              <Link to="/services" className="explore-link">EXPLORE ALL SERVICES &rarr;</Link>
            </div>

            <div className="services-right-col" style={{ position: 'relative', zIndex: 1 }}>
              <div className="service-item">
                <div className="service-icon"><Compass size={22} color="#fff" /></div>
                <div className="service-info">
                  <h4>Digital Strategy & Experience Architecture</h4>
                  <p>Modern, responsive, and performance-driven websites built for growth.</p>
                </div>
                <div className="service-arrow"><CornerUpLeft size={18} color="#999" /></div>
              </div>
              <div className="service-item">
                <div className="service-icon"><RefreshCw size={22} color="#fff" /></div>
                <div className="service-info">
                  <h4>Website Design & Development</h4>
                  <p>Modern, responsive, and performance-driven websites built for growth.</p>
                </div>
                <div className="service-arrow"><CornerUpLeft size={18} color="#999" /></div>
              </div>
              <div className="service-item">
                <div className="service-icon"><Smartphone size={22} color="#fff" /></div>
                <div className="service-info">
                  <h4>Interactive & 3D Integration</h4>
                  <p>We integrate immersive digital elements that elevate user engagement.</p>
                </div>
                <div className="service-arrow"><CornerUpLeft size={18} color="#999" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80")' }} />
        <div className="cta-content">
          <h2>Ready to Build the Future of Your Digital Presence?</h2>
          <Link to="/contact" className="button-light">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

/* ==================================
   PAGE: ABOUT
   ================================== */
function About() {
  return (
    <section className="about-section" id="about">
      <div className="container" style={{ position: 'relative' }}>
        <CloudCircuitIcon className="watermark-huge" style={{ position: 'absolute', top: '-5%', right: '-20%', opacity: 0.04 }} />
        <h2 className="section-title" style={{ fontSize: '72px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}>About Us</h2>
        <div className="about-content" style={{ position: 'relative', zIndex: 1 }}>
          <p>My name is Alisia Laird. I'm the Founder and CEO of Innovation Studio. And yes — Innovation Studio is back. Honestly, I wasn't planning on it.</p>
          <p>I started Innovation Studio with a simple belief — that bold ideas deserve thoughtful execution. Over the years, we grew. We partnered with ambitious brands, built meaningful products, and helped turn vision into reality. The journey exceeded everything I imagined.</p>
          <p>At one point, I stepped away. Not because things weren't working — they were. Business was strong. The team was growing. The projects were exciting. But I needed a new challenge. I wanted to experience innovation from the inside of larger systems, to understand scale differently, to see ideas grow beyond the launch phase.</p>
          <p>So I explored. I built new ventures. I experimented across industries. I learned more than I expected — about leadership, resilience, creativity, and myself. There were highs and lows. Wins and lessons. And every step shaped me. But something kept calling me back.</p>
          <p>That feeling when someone comes with nothing but an idea — raw, undefined, full of potential — and trusts us to help shape it into something real. That moment still feels like magic. Like alchemy. I realized I missed that feeling.</p>
          <p>So yes — Innovation Studio is back.</p>
          <p className="about-signature">— Alisia</p>
        </div>
      </div>

      {/* About page also has the marquee */}
      <section className="client-logos-section" style={{ marginTop: '100px' }}>
        <div className="client-logos line-1">
          <div className="logo-track track-right">
            <span>Apple &nbsp;&#x25E6;&nbsp; Google &nbsp;&#x25E6;&nbsp; Meta &nbsp;&#x25E6;&nbsp; Walmart &nbsp;&#x25E6;&nbsp; Amazon &nbsp;&#x25E6;&nbsp; Square &nbsp;&#x25E6;&nbsp; Uber &nbsp;&#x25E6;&nbsp; Visa &nbsp;&#x25E6;&nbsp; Airbnb &nbsp;&#x25E6;&nbsp;</span>
            <span>Apple &nbsp;&#x25E6;&nbsp; Google &nbsp;&#x25E6;&nbsp; Meta &nbsp;&#x25E6;&nbsp; Walmart &nbsp;&#x25E6;&nbsp; Amazon &nbsp;&#x25E6;&nbsp; Square &nbsp;&#x25E6;&nbsp; Uber &nbsp;&#x25E6;&nbsp; Visa &nbsp;&#x25E6;&nbsp; Airbnb &nbsp;&#x25E6;&nbsp;</span>
          </div>
        </div>
        <div className="client-logos line-2">
          <div className="logo-track track-left">
            <span>Spotify &nbsp;&#x25E6;&nbsp; PayPal &nbsp;&#x25E6;&nbsp; Messenger &nbsp;&#x25E6;&nbsp; Samsung &nbsp;&#x25E6;&nbsp; Chubb &nbsp;&#x25E6;&nbsp; Instagram &nbsp;&#x25E6;&nbsp; Netflix &nbsp;&#x25E6;&nbsp;</span>
            <span>Spotify &nbsp;&#x25E6;&nbsp; PayPal &nbsp;&#x25E6;&nbsp; Messenger &nbsp;&#x25E6;&nbsp; Samsung &nbsp;&#x25E6;&nbsp; Chubb &nbsp;&#x25E6;&nbsp; Instagram &nbsp;&#x25E6;&nbsp; Netflix &nbsp;&#x25E6;&nbsp;</span>
          </div>
        </div>
      </section>
    </section>
  );
}

/* ==================================
   PAGE: SERVICES
   ================================== */
function Services() {
  return (
    <section className="services-section" id="services">
      <CloudCircuitIcon className="watermark-huge absolute-center" style={{ opacity: 0.04 }} />
      <div className="container">
        <div className="services-hero">
          <div className="services-hero-text relative z-10">
            <h2 className="huge-text" style={{ fontSize: '72px', lineHeight: 1.05, fontWeight: 700, letterSpacing: '-2px' }}>We create<br/>intelligent digital<br/>solutions.</h2>
          </div>
          <div className="services-hero-desc relative z-10">
            <p>We are a full-service Innovation Studio building immersive digital experiences. Our team creates exceptional UI/UX design with stellar functionality.</p>
          </div>
        </div>
        
        <div className="services-grid relative z-10">
          <div className="services-left-col relative">
            <CloudCircuitIcon className="watermark-medium absolute-left" />
            <span className="subtitle">Our Services</span>
            <h3 className="services-headline">Strategic solutions<br/>for modern digital<br/>growth.</h3>
            <Link to="/services" className="explore-link">EXPLORE ALL SERVICES &rarr;</Link>
          </div>
          <div className="services-right-col">
            <div className="service-item">
              <div className="service-icon"><Compass size={22} color="#fff" /></div>
              <div className="service-info">
                <h4>Digital Strategy & Experience Architecture</h4>
                <p>Modern, responsive, and performance-driven websites built for growth.</p>
              </div>
              <div className="service-arrow"><CornerUpLeft size={18} color="#999" /></div>
            </div>
            <div className="service-item">
              <div className="service-icon"><RefreshCw size={22} color="#fff" /></div>
              <div className="service-info">
                <h4>Website Design & Development</h4>
                <p>Modern, responsive, and performance-driven websites built for growth.</p>
              </div>
              <div className="service-arrow"><CornerUpLeft size={18} color="#999" /></div>
            </div>
            <div className="service-item">
              <div className="service-icon"><Smartphone size={22} color="#fff" /></div>
              <div className="service-info">
                <h4>Interactive & 3D Integration</h4>
                <p>We integrate immersive digital elements that elevate user engagement.</p>
              </div>
              <div className="service-arrow"><CornerUpLeft size={18} color="#999" /></div>
            </div>
          </div>
        </div>
        
        <div className="services-mockups relative z-10">
           <DashboardMockupGoals />
           <DashboardMockupRange />
        </div>
      </div>
    </section>
  );
}

/* ==================================
   PAGE: PROJECTS
   ================================== */
function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <h3 className="project-name">Heir</h3>
        <div className="project-images">
          <div className="img-placeholder" style={{ backgroundColor: '#2a221f', color: '#fff', borderRadius: '8px' }}>Writing Hand</div>
          <div className="img-placeholder" style={{ backgroundColor: '#ffffff', border: '1px solid #eee', color: '#000', borderRadius: '8px' }}>Envelope Seal Logo</div>
          <div className="img-placeholder" style={{ backgroundColor: '#d1cdc9', color: '#555', borderRadius: '8px' }}>Arabic Document</div>
          <div className="img-placeholder" style={{ backgroundColor: '#b5a191', color: '#333', borderRadius: '8px' }}>Wax Seal on Desk</div>
        </div>
        
        <h3 className="project-name">Heir Clients</h3>
        <div className="clients-grid">
          <div className="client-block">
            <h4>Google</h4>
            <p>Dozens of projects with teams like Google Maps, Chrome, Android, Gmail, Drive, Play, Waze, YouTube, Search, Google One, and more.</p>
          </div>
          <div className="client-block">
            <h4>Twitter</h4>
            <p>We worked with Twitter to create a comprehensive new product vision for the consumer and revenue side as well as a re-brand.</p>
          </div>
          <div className="client-block">
            <h4>Meta</h4>
            <p>Multi year engagements with Messenger, Instagram, Facebook, Oculus, Meta AI, and more, as well as a Meta re-brand.</p>
          </div>
          <div className="client-block">
            <h4>PayPal + Venmo</h4>
            <p>We worked with PayPal to re-design their core apps on desktop and mobile.</p>
          </div>
          <div className="client-block">
            <h4>Square</h4>
            <p>Long term engagement including product design and development.</p>
          </div>
          <div className="client-block">
            <h4>Airbnb</h4>
            <p>We worked with Airbnb from the early days of the service and onwards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================
   PAGE: CONTACT
   ================================== */
function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title" style={{ fontSize: '48px', fontWeight: 700, textAlign: 'left' }}>Contact Us</h2>
        <div className="contact-display">
          <span className="huge-bg-text">Contact</span>
          <span className="leave-message">+ leave a message box</span>
        </div>
        <div className="contact-links">
          <a href="#">Email.</a>
          <a href="#">Instagram.</a>
          <a href="#">Twitter.</a>
        </div>
      </div>
    </section>
  );
}

/* ==================================
   NAVIGATION
   ================================== */
function Navigation() {
  const location = useLocation();
  return (
    <nav className="nav-menu">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
      <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
      <Link to="/services" className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
    </nav>
  );
}

/* ==================================
   LAYOUT
   ================================== */
function Layout() {
  return (
    <div className="layout">
      <header className="main-header">
        <Link to="/" className="logo">innovation</Link>
        <Navigation />
      </header>

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <footer className="main-footer">
        <div className="container" style={{ position: 'relative' }}>
          <CloudCircuitIcon className="watermark-huge" style={{ position: 'absolute', bottom: '-40%', right: '-10%', opacity: 0.03 }} />
          <div className="footer-grid" style={{ position: 'relative', zIndex: 1 }}>
            <div className="footer-brand">
              <div className="logo">innovation</div>
              <p>Strategic Design & Digital Innovation.<br/>Strategic innovation shaping future digital experiences.</p>
            </div>
            
            <div className="footer-cols">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ul>
            </div>
            
            <div className="footer-cols">
              <h4>Contact Info</h4>
              <ul>
                <li><a href="mailto:info@innovationstudio.com">Email</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Join Our Perspective. Insights<br/>that inspire smarter digital<br/>decisions.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom" style={{ position: 'relative', zIndex: 1 }}>
            <p>&copy; 2026 Innovation Studio. All rights reserved.</p>
            <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
