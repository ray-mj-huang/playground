import { Link } from 'react-router-dom';

const navStyle = {
  background: '#222222',
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100%',
  width: 230,
  padding: '20px 0 0 0'
}

const h1Style = {
  margin: '20px 0',
  fontSize: 20,
  color: 'white'
}

const linkStyle = {
  display: 'block',
  padding: 10,
  textDecoration: 'none',
  color: '#cccccc'
}

export default function Menu() {
  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/"><h1 style={h1Style}>Playground of Ray</h1></Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/events">Events</Link>
      <Link style={linkStyle} to="/products">Products</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
      <Link style={linkStyle} to="/cubicmobile">CubicMobile</Link>
      <Link style={linkStyle} to="/dashboard">Dashboard</Link>
      <Link style={linkStyle} to="/starrating">StarRating</Link>
    </nav>
  )
}
