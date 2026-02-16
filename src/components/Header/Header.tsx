import React from 'react'
import Button from '../Button/Button'

type Props = { onNavigate: (route: 'home' | 'about') => void }

const Header: React.FC<Props> = ({ onNavigate }) => (
  <header style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 16, background: '#f5f5f5' }}>
    <h1 style={{ margin: 0, fontSize: 18 }}>Frontend Demo</h1>
    <nav style={{ marginLeft: 20 }}>
      <Button label="Home" onClick={() => onNavigate('home')} />
      <Button label="About" onClick={() => onNavigate('about')} />
    </nav>
  </header>
)

export default Header
