
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Shortener from './routes/Shortener.jsx'
import Stats from './routes/Stats.jsx'
import Redirect from './routes/Redirect.jsx'
import NotFound from './routes/NotFound.jsx'
import { LoggerProvider } from './context/LoggerContext.jsx'

function BackgroundWebsites() {
  // Example floating website icons/URLs
  const sites = [
    { icon: '🌐', url: 'google.com' },
    { icon: '🛒', url: 'amazon.com' },
    { icon: '📺', url: 'youtube.com' },
    { icon: '🐦', url: 'twitter.com' },
    { icon: '📸', url: 'instagram.com' },
    { icon: '💼', url: 'linkedin.com' },
    { icon: '📰', url: 'nytimes.com' },
    { icon: '🎵', url: 'spotify.com' },
    { icon: '🛍️', url: 'flipkart.com' },
    { icon: '🎮', url: 'twitch.tv' },
  ]
  return (
    <div className="floating-bg">
      {sites.map((s, i) => (
        <div className={`float-site float-site-${i%5}`} key={i} style={{left:`${10+i*8}%`, animationDelay:`${i*1.2}s`}}>
          <span className="float-icon">{s.icon}</span>
          <span className="float-url">{s.url}</span>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <LoggerProvider>
      <div style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none'}}>
        <BackgroundWebsites />
      </div>
      <nav className="navbar" style={{zIndex:2, position:'relative'}}>
        <div className="nav-inner container">
          <div className="brand">Quick URL App</div>
          <div className="nav-links">
            <NavLink to="/" end>Shorten</NavLink>
            <NavLink to="/stats">Stats</NavLink>
          </div>
        </div>
      </nav>
      <div className="container" style={{position:'relative', zIndex:3}}>
        <Routes>
          <Route path="/" element={<Shortener />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/:code" element={<Redirect />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </LoggerProvider>
  )
}
