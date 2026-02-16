import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home'
import About from './pages/About'

const App: React.FC = () => {
  const [route, setRoute] = React.useState<'home'|'about'>('home')
  return (
    <div>
      <Header onNavigate={(r) => setRoute(r)} />
      <main style={{ padding: 20 }}>
        {route === 'home' ? <Home /> : <About />}
      </main>
    </div>
  )
}

export default App
