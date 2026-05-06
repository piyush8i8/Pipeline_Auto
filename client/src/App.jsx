import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  const theme = {
    primary: '#2563eb',
    dark: '#1e293b',
    light: '#f8fafc',
    accent: '#646cff'
  }

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: theme.dark,
      backgroundColor: '#ffffff',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem 10%',
      alignItems: 'center',
      borderBottom: '1px solid #eee'
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '5rem 10%',
      background: `linear-gradient(135deg, ${theme.light} 0%, #ffffff 100%)`,
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '800',
      margin: '0 0 1rem 0',
      letterSpacing: '-1px',
      color: theme.dark
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      maxWidth: '600px',
      marginBottom: '2rem'
    },
    button: {
      backgroundColor: theme.primary,
      color: 'white',
      border: 'none',
      padding: '12px 32px',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 14px 0 rgba(37,99,235,0.39)',
      transition: 'transform 0.2s',
    },
    section: {
      padding: '4rem 10%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    card: {
      padding: '2.5rem',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      transition: 'box-shadow 0.3s',
      backgroundColor: '#fff'
    },
    footer: {
      backgroundColor: theme.dark,
      color: 'white',
      padding: '4rem 10%',
      marginTop: '4rem'
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      marginRight: '1.5rem',
      fontSize: '0.9rem',
      opacity: 0.8
    }
  }

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={viteLogo} height="30" alt="Logo" />
          <span>testing</span>
        </div>
        <div style={{ display: 'none', gap: '20px' }}> {/* Desktop Menu */}
          <a href="#services" style={{ textDecoration: 'none', color: theme.dark }}>Services</a>
          <a href="#about" style={{ textDecoration: 'none', color: theme.dark }}>About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={{ marginBottom: '2rem', position: 'relative' }}>
          <img src={heroImg} width="140" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} alt="Hero" />
          <img src={reactLogo} style={{ position: 'absolute', bottom: -10, right: -10, height: '40px' }} alt="React" />
        </div>
        <h1 style={styles.title}>🚀 Scalable Solutions for Modern Teams.</h1>
        <p style={styles.subtitle}>
          Testing automated CI/CD pipeline! We help enterprises build, deploy, and scale digital products with cutting-edge technology and seamless user experiences.
        </p>
        <button 
          style={styles.button}
          onClick={() => setCount(count + 1)}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Work with us — {count} Clients Helped
        </button>
      </section>

      {/* Services Section */}
      <section style={styles.section} id="services">
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Our Services</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Rapid Deployment</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Launch your MVP in weeks, not months, using our optimized CI/CD workflows and Vite-speed builds.
            </p>
          </div>
          <div style={styles.card}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Enterprise Security</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Bank-grade security protocols ensuring your company data and customer privacy are always protected.
            </p>
          </div>
          <div style={styles.card}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Growth Analytics</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Real-time insights and HMR-powered dashboards to track your business performance live.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'white' }}>NovaStack Inc.</h3>
            <p style={{ opacity: 0.6, maxWidth: '300px' }}>Building the future of the web, one component at a time.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Connect</h4>
            <a href="#" style={styles.link}>Twitter</a>
            <a href="#" style={styles.link}>GitHub</a>
            <a href="#" style={styles.link}>LinkedIn</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Legal</h4>
            <a href="#" style={styles.link}>Privacy Policy</a>
            <a href="#" style={styles.link}>Terms of Service</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #334155', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} NovaStack. Powered by React + Vite.
        </div>
      </footer>
    </div>
  )
}

export default App