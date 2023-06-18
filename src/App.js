import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  PageTemplate,
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  History,
} from './pages';
import StarRating from './components/xxx/StarRating';
import Picture from './react-dev/3-1-1';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="about"
          element={<About />}
        >
          <Route
            path="history"
            element={<History />}
          />
        </Route>
        <Route
          path="events"
          element={<Events />}
        />
        <Route
          path="products"
          element={<Products />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="starrating"
          element={<PageTemplate children={<StarRating />} />}
        />
        <Route
          path="3-1-1"
          element={<PageTemplate children={<Picture />} />}
        />
        <Route
          path="*"
          element={<Whoops404 />}
        />
      </Routes>
    </>
  );
}

export default App;