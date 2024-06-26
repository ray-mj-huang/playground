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

const navData = [
  {
    url: '/about',
    title: 'About'
  },
  {
    url: '/events',
    title: 'Events'
  },
  {
    url: '/products',
    title: 'Products'
  },
  {
    url: '/Contact',
    title: 'contact'
  },
  {
    url: '/starrating',
    title: 'StarRating'
  },
  {
    url: '/3-1-1',
    title: '3-1-1'
  },
  {
    url: '/3-1-2',
    title: '3-1-2'
  },
  {
    url: '/3-2-1',
    title: '3-2-1'
  },
  {
    url: '/3-2-2',
    title: '3-2-2'
  },
  {
    url: '/3-2-3',
    title: '3-2-3'
  },
  {
    url: '/3-2-4',
    title: '3-2-4'
  },
  {
    url: '/3-3-1',
    title: '3-3-1'
  },
  {
    url: '/3-3-2',
    title: '3-3-2'
  },
  {
    url: '/3-4-1',
    title: '3-4-1'
  },
]

export default function Menu() {
  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/"><h1 style={h1Style}>Playground of Ray</h1></Link>
      {navData.map((item) => (
        <Link
          key={item.url}
          style={linkStyle}
          to={item.url}>
            {item.title}
        </Link>
      ))}
    </nav>
  )
}
