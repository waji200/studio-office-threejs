import { Suspense, useMemo, useState, useEffect, useRef } from "react";
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
   CLIENT MARQUEE DATA with price triangles
   ================================== */
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

function PriceTriangle({ change }: { change: number }) {
  const isUp = change >= 0;
  const color = isUp ? '#22c55e' : '#ef4444';
  return (
    <span className="price-triangle-wrap">
      <svg width="14" height="12" viewBox="0 0 14 12" style={{ marginRight: '4px', transform: isUp ? 'none' : 'rotate(180deg)', transition: 'transform 0.3s ease' }}>
        <polygon points="7,0 14,12 0,12" fill={color} />
      </svg>
      <span style={{ color, fontSize: '0.35em', fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '0' }}>
        {isUp ? '+' : ''}{change.toFixed(1)}%
      </span>
    </span>
  );
}

function MarqueeTrack({ items, direction }: { items: { name: string; change: number }[]; direction: 'left' | 'right' }) {
  const content = items.map((item, i) => (
    <span key={i} className="marquee-company-item">
      {item.name}
      <PriceTriangle change={item.change} />
      <span className="marquee-dot">&nbsp;·&nbsp;</span>
    </span>
  ));
  return (
    <div className={`logo-track track-${direction}`}>
      <span>{content}</span>
      <span>{content}</span>
    </div>
  );
}

/* ==================================
   INTERACTIVE ENVELOPE COMPONENT
   ================================== */
function InteractiveEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link to="/projects" className="interactive-envelope-card" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} onClick={() => setIsOpen(!isOpen)}>
      <div className="envelope-scene">
        {/* Glow effect */}
        <div className="envelope-glow" style={{ opacity: isOpen ? 0.4 : 0.15 }} />

        {/* The Envelope SVG */}
        <svg viewBox="0 0 240 180" className="envelope-svg" style={{ filter: `drop-shadow(0 0 ${isOpen ? '30' : '15'}px rgba(96,213,251,0.5))` }}>
          {/* Envelope body */}
          <rect x="20" y="50" width="200" height="120" rx="6" fill="rgba(10,20,50,0.9)" stroke="#60d5fb" strokeWidth="1.5" />

          {/* Envelope flap (animated) */}
          <g style={{ transformOrigin: '120px 50px', transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)', transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)' }}>
            <polygon points="20,50 120,10 220,50" fill={isOpen ? 'rgba(96,213,251,0.15)' : 'rgba(10,20,50,0.95)'} stroke="#60d5fb" strokeWidth="1.5" strokeLinejoin="round" />
          </g>

          {/* V-lines on envelope */}
          <line x1="20" y1="50" x2="120" y2="120" stroke="#60d5fb" strokeWidth="0.6" opacity="0.4" />
          <line x1="220" y1="50" x2="120" y2="120" stroke="#60d5fb" strokeWidth="0.6" opacity="0.4" />

          {/* Letter peeking out when open */}
          <g style={{ transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s, opacity 0.4s ease 0.15s', transform: isOpen ? 'translateY(-55px)' : 'translateY(0px)', opacity: isOpen ? 1 : 0 }}>
            <rect x="40" y="55" width="160" height="100" rx="4" fill="rgba(255,255,255,0.95)" />
            <text x="55" y="80" fontFamily="Georgia, serif" fontSize="11" fill="#111" fontWeight="600">Heir</text>
            <text x="55" y="100" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Coming</text>
            <text x="55" y="114" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">Soon</text>
            <text x="55" y="128" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">...</text>
            <line x1="55" y1="140" x2="140" y2="140" stroke="#eee" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Labels */}
        <div className="envelope-label">
          <span className="envelope-title">Heir</span>
          <span className="envelope-subtitle">{isOpen ? 'View Project →' : 'Hover to Open'}</span>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="envelope-bottom-gradient" style={{ opacity: isOpen ? 0.25 : 0.12 }} />
    </Link>
  );
}

/* ==================================
   CODE SANDBOX PLAYBACK COMPONENT
   ================================== */
function CodeSandbox() {
  const [visibleLines, setVisibleLines] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const codeLines = [
    { indent: 0, tokens: [{ text: 'function ', color: '#e78a4e' }, { text: 'InteractiveEnvelope', color: '#333' }, { text: '() {', color: '#555' }] },
    { indent: 1, tokens: [{ text: 'const ', color: '#e78a4e' }, { text: '[isOpen, setIsOpen]', color: '#333' }, { text: ' = ', color: '#555' }, { text: 'useState', color: '#e78a4e' }, { text: '(', color: '#555' }, { text: 'false', color: '#c75a4e' }, { text: ');', color: '#555' }] },
    { indent: 1, tokens: [] },
    { indent: 1, tokens: [{ text: 'return ', color: '#e78a4e' }, { text: '(', color: '#555' }] },
    { indent: 2, tokens: [{ text: '<', color: '#888' }, { text: 'div', color: '#e78a4e' }, { text: ' className=', color: '#888' }, { text: '"envelope"', color: '#6a8759' }, { text: '>', color: '#888' }] },
    { indent: 3, tokens: [{ text: '<', color: '#888' }, { text: 'svg', color: '#e78a4e' }, { text: ' viewBox=', color: '#888' }, { text: '"0 0 240 180"', color: '#6a8759' }, { text: '>', color: '#888' }] },
    { indent: 4, tokens: [{ text: '<', color: '#888' }, { text: 'rect', color: '#e78a4e' }, { text: ' x=', color: '#888' }, { text: '"20"', color: '#6a8759' }, { text: ' y=', color: '#888' }, { text: '"50"', color: '#6a8759' }] },
    { indent: 5, tokens: [{ text: 'width=', color: '#888' }, { text: '"200"', color: '#6a8759' }, { text: ' height=', color: '#888' }, { text: '"120"', color: '#6a8759' }, { text: ' />', color: '#888' }] },
    { indent: 4, tokens: [{ text: '<', color: '#888' }, { text: 'polygon', color: '#e78a4e' }] },
    { indent: 5, tokens: [{ text: 'points=', color: '#888' }, { text: '"20,50 120,10 220,50"', color: '#6a8759' }] },
    { indent: 5, tokens: [{ text: 'style=', color: '#888' }, { text: '{', color: '#555' }, { text: '{', color: '#555' }] },
    { indent: 6, tokens: [{ text: 'transform: isOpen', color: '#333' }] },
    { indent: 7, tokens: [{ text: '? ', color: '#555' }, { text: '"rotateX(180deg)"', color: '#6a8759' }] },
    { indent: 7, tokens: [{ text: ': ', color: '#555' }, { text: '"rotateX(0)"', color: '#6a8759' }] },
    { indent: 5, tokens: [{ text: '}} />', color: '#555' }] },
    { indent: 3, tokens: [{ text: '</', color: '#888' }, { text: 'svg', color: '#e78a4e' }, { text: '>', color: '#888' }] },
    { indent: 2, tokens: [{ text: '</', color: '#888' }, { text: 'div', color: '#e78a4e' }, { text: '>', color: '#888' }] },
    { indent: 1, tokens: [{ text: ');', color: '#555' }] },
    { indent: 0, tokens: [{ text: '}', color: '#555' }] },
  ];

  const totalLines = codeLines.length;

  useEffect(() => {
    // Auto-start playback
    startPlayback();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startPlayback = () => {
    setIsPlaying(true);
    setVisibleLines(1);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= totalLines) {
          // Restart after a pause
          setTimeout(() => {
            setVisibleLines(1);
          }, 2000);
          return totalLines;
        }
        return prev + 1;
      });
    }, 350);
  };

  const resetPlayback = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setVisibleLines(1);
    setIsPlaying(false);
    setTimeout(() => startPlayback(), 500);
  };

  return (
    <div className="code-sandbox-card">
      {/* Title-bar */}
      <div className="code-sandbox-titlebar">
        <div className="code-sandbox-dots">
          <div className="dot-red" />
          <div className="dot-yellow" />
          <div className="dot-green" />
        </div>
        <span className="code-sandbox-filename">InteractiveEnvelope.tsx</span>
        <button className="code-sandbox-replay" onClick={resetPlayback} title="Replay">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e78a4e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
        </button>
      </div>

      {/* Code area */}
      <div className="code-sandbox-body">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className="code-line"
            style={{
              paddingLeft: `${16 + line.indent * 16}px`,
              opacity: i < visibleLines ? 1 : 0,
              transform: i < visibleLines ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            <span className="line-number">{i + 1}</span>
            {line.tokens.length === 0 ? <br /> : line.tokens.map((token, j) => (
              <span key={j} style={{ color: token.color }}>{token.text}</span>
            ))}
            {/* Blinking cursor on the last visible line */}
            {i === visibleLines - 1 && <span className="code-cursor">|</span>}
          </div>
        ))}
      </div>
    </div>
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
      {/* 1. HERO — 2/3 width, left-aligned 3D Canvas */}
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
                <Model isInteractive={isInteractive} />
              </Instances>
            </Suspense>
            <OrbitControls makeDefault target={[6, 1, -1]} enableZoom={isInteractive} />
          </Canvas>
          <Loader />
        </div>
      </section>

      {/* 2. CLIENT MARQUEE — with price change triangles */}
      <section className="client-logos-section">
        <div className="client-logos line-1">
          <MarqueeTrack items={MARQUEE_LINE_1} direction="right" />
        </div>
        <div className="client-logos line-2">
          <MarqueeTrack items={MARQUEE_LINE_2} direction="left" />
        </div>
        <div className="client-logos line-3">
          <MarqueeTrack items={MARQUEE_LINE_3} direction="right" />
        </div>
      </section>

      {/* 3. INTRO TAGLINE */}
      <section className="intro-section" id="home">
        <CloudCircuitIcon className="watermark-huge absolute-center" style={{ opacity: 0.035 }} />
        <h1 className="intro-text" style={{ position: 'relative', zIndex: 1 }}>
          Hi. We're Innovation Studio,<br/>a strategic design and<br/>innovation studio.
        </h1>
      </section>

      {/* 4. PORTFOLIO — Two Items: Interactive Envelope + Code Sandbox */}
      <section className="home-grid-section">
        <div className="home-image-grid">
          {/* Left — Interactive Envelope */}
          <InteractiveEnvelope />

          {/* Right — Code Sandbox */}
          <CodeSandbox />
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
          <MarqueeTrack items={MARQUEE_LINE_1} direction="right" />
        </div>
        <div className="client-logos line-2">
          <MarqueeTrack items={MARQUEE_LINE_2} direction="left" />
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
   PAGE: PROJECTS (Enhanced)
   ================================== */
function Projects() {
  const projectImages = [
    { bg: '#2a221f', label: 'Writing Hand', radius: '50%' },
    { bg: '#ffffff', label: 'Envelope Seal Logo', radius: '50%', border: '1px solid #eee' },
    { bg: '#d1cdc9', label: 'Arabic Document', radius: '50%' },
    { bg: '#b5a191', label: 'Wax Seal on Desk', radius: '50%' },
  ];

  return (
    <section className="projects-section">
      <div className="container" style={{ position: 'relative' }}>
        <CloudCircuitIcon className="watermark-huge" style={{ position: 'absolute', top: '-5%', right: '-15%', opacity: 0.04 }} />

        <div className="projects-hero" style={{ position: 'relative', zIndex: 1 }}>
          <span className="subtitle" style={{ display: 'block', marginBottom: '16px' }}>Our Work</span>
          <h2 className="projects-title">Projects</h2>
          <p className="projects-intro">We craft digital experiences that leave lasting impressions. Each project is a collaboration built on trust, creativity, and relentless attention to detail.</p>
        </div>

        {/* Featured Project: Heir */}
        <div className="project-feature" style={{ position: 'relative', zIndex: 1 }}>
          <div className="project-feature-header">
            <h3 className="project-name">Heir</h3>
            <span className="project-tag">Brand Identity</span>
          </div>
          <div className="project-images">
            {projectImages.map((img, i) => (
              <div
                key={i}
                className="img-placeholder-circle"
                style={{
                  backgroundColor: img.bg,
                  color: img.bg === '#ffffff' ? '#000' : '#fff',
                  border: img.border || 'none',
                }}
              >
                <span>{img.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Clients section */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 className="project-name" style={{ marginTop: '80px' }}>Heir Clients</h3>
          <div className="clients-grid">
            <div className="client-block">
              <div className="client-block-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <h4>Google</h4>
              <p>Dozens of projects with teams like Google Maps, Chrome, Android, Gmail, Drive, Play, Waze, YouTube, Search, Google One, and more.</p>
            </div>
            <div className="client-block">
              <div className="client-block-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </div>
              <h4>Twitter</h4>
              <p>We worked with Twitter to create a comprehensive new product vision for the consumer and revenue side as well as a re-brand.</p>
            </div>
            <div className="client-block">
              <div className="client-block-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              </div>
              <h4>Meta</h4>
              <p>Multi year engagements with Messenger, Instagram, Facebook, Oculus, Meta AI, and more, as well as a Meta re-brand.</p>
            </div>
            <div className="client-block">
              <div className="client-block-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
              </div>
              <h4>PayPal + Venmo</h4>
              <p>We worked with PayPal to re-design their core apps on desktop and mobile.</p>
            </div>
            <div className="client-block">
              <div className="client-block-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h4>Square</h4>
              <p>Long term engagement including product design and development.</p>
            </div>
            <div className="client-block">
              <div className="client-block-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h4>Airbnb</h4>
              <p>We worked with Airbnb from the early days of the service and onwards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================
   PAGE: CONTACT (Enhanced)
   ================================== */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="container" style={{ position: 'relative' }}>
        <CloudCircuitIcon className="watermark-huge" style={{ position: 'absolute', top: '-10%', right: '-20%', opacity: 0.03 }} />

        <div className="contact-hero" style={{ position: 'relative', zIndex: 1 }}>
          <span className="subtitle" style={{ display: 'block', marginBottom: '16px' }}>Get In Touch</span>
          <h2 className="section-title" style={{ fontSize: '72px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, textAlign: 'left', marginBottom: '24px' }}>Contact Us</h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', lineHeight: 1.7, marginBottom: '64px' }}>
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-grid" style={{ position: 'relative', zIndex: 1 }}>
          {/* Contact Form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="contact-submit-btn" disabled={submitted}>
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrap">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e78a4e" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4>Email</h4>
              <a href="mailto:info@innovationstudio.com">info@innovationstudio.com</a>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e78a4e" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e78a4e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Hours</h4>
              <p>Mon – Fri, 9am – 6pm PST</p>
            </div>

            <div className="contact-socials">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-circle" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                </a>
                <a href="#" className="social-circle" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="social-circle" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big background text */}
        <div className="contact-display" style={{ position: 'relative', zIndex: 1 }}>
          <span className="huge-bg-text">Contact</span>
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
      <Link to="/projects" className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
      <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
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
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
