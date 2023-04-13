import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  History,
  CubicMobilePage,
  DashboardPage,
  StarRatingPage
} from './pages';

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
          path="cubicmobile"
          element={<CubicMobilePage />}
        />
        <Route
          path="dashboard"
          element={<DashboardPage />}
        />
        <Route
          path="starrating"
          element={<StarRatingPage />}
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