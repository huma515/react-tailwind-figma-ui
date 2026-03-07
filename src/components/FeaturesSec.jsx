import React, { useState } from 'react';

const tabs = [
  {
    id: 'create',
    label: 'Create',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.8"/>
        <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'distribute',
    label: 'Distribute',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="12" r="2.5" fill="currentColor" opacity="0.7"/>
        <circle cx="19" cy="6" r="2.5" fill="currentColor" opacity="0.7"/>
        <circle cx="19" cy="18" r="2.5" fill="currentColor" opacity="0.7"/>
        <line x1="7.5" y1="10.8" x2="16.5" y2="7.2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <line x1="7.5" y1="13.2" x2="16.5" y2="16.8" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'collect',
    label: 'Collect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.8"/>
        <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <line x1="8" y1="8" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <rect x="6" y="20" width="12" height="1.5" rx="0.75" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'analyze',
    label: 'Analyze',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L8 12L12 15L16 9L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <circle cx="16.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7"/>
        <line x1="19" y1="10" x2="22" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
];

const tabContent = {
  create: {
    heading: 'Create',
    subheading: 'Advanced research software',
    description:
      'Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.',
    cta: 'Get started for free',
  },
  distribute: {
    heading: 'Distribute',
    subheading: 'Reach your audience instantly',
    description:
      'Share surveys through email, social media, or embed them directly on your website. Target the right respondents at the right time with smart distribution tools built for scale.',
    cta: 'Start distributing',
  },
  collect: {
    heading: 'Collect',
    subheading: 'Gather responses effortlessly',
    description:
      'Collect data from any device in real-time with our mobile-friendly forms. Watch responses come in live and keep everything organized in one secure, centralized dashboard.',
    cta: 'Start collecting',
  },
  analyze: {
    heading: 'Analyze',
    subheading: 'Turn data into insights',
    description:
      'Unlock the power of your data with advanced analytics, visual reports, and automated insights. Filter, segment, and cross-tabulate to understand your audience better than ever before.',
    cta: 'Explore analytics',
  },
};

const FeaturesSec = () => {
  const [activeTab, setActiveTab] = useState('create');
  const content = tabContent[activeTab];

  return (
    <section
      style={{
        background: '#e8f8f8',
        padding: '64px 24px 80px',
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Top label */}
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2px',
            color: '#20bab4',
            textTransform: 'uppercase',
          }}
        >
          BUILT FOR PEOPLE
        </span>
      </div>

      {/* Headline */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '28px',
            color: '#1a1a2e',
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          <span style={{ fontWeight: 400 }}>Easy</span>
          {' for beginners. '}
          <span style={{ fontWeight: 800 }}>Powerful</span>
          {' for experts.'}
        </h2>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0',
            borderBottom: '2px solid #d0eeee',
            maxWidth: '560px',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '10px 18px 14px',
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '3px solid #20bab4' : '3px solid transparent',
                  marginBottom: '-2px',
                  cursor: 'pointer',
                  color: isActive ? '#20bab4' : '#9db0b0',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '14.5px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ color: isActive ? '#20bab4' : '#b0c8c8' }}>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Card */}
      <div
        style={{
          background: '#f0fafa',
          borderRadius: '0 0 12px 12px',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '48px 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          boxShadow: '0 2px 24px rgba(32,186,180,0.06)',
        }}
      >
        {/* Left: Text Content */}
        <div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#1a1a2e',
              marginBottom: '16px',
              marginTop: 0,
            }}
          >
            {content.heading}
          </h1>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: '14px',
              marginTop: 0,
            }}
          >
            {content.subheading}
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#555f6e',
              lineHeight: '1.75',
              marginBottom: '28px',
              marginTop: 0,
              maxWidth: '360px',
            }}
          >
            {content.description}
          </p>
          <button
            style={{
              background: '#20bab4',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '13px 28px',
              fontSize: '14.5px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseOver={(e) => (e.target.style.background = '#18a09b')}
            onMouseOut={(e) => (e.target.style.background = '#20bab4')}
          >
            {content.cta}
          </button>
        </div>

        {/* Right: Image */}
        <div
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
            aspectRatio: '16/11',
            background: '#cce8e8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/img.png"
            alt="Laptop with analytics"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#cce8e8,#a8d8d8);min-height:220px;">
                  <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                    <rect x="8" y="4" width="64" height="42" rx="4" fill="#7ecece" opacity="0.7"/>
                    <rect x="12" y="8" width="56" height="34" rx="2" fill="#b0e0e0"/>
                    <rect x="28" y="46" width="24" height="4" rx="2" fill="#7ecece" opacity="0.6"/>
                    <rect x="16" y="48" width="48" height="3" rx="1.5" fill="#7ecece" opacity="0.4"/>
                  </svg>
                </div>
              `;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSec;