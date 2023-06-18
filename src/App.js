import { Routes, Route } from 'react-router-dom';
import './App.css';
import './react-quiz.css';
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
import EditProfile from './react-dev/3-1-2';
import ColorfulClock from './react-dev/3-2-1';
import TravelPlan from './react-dev/3-2-2';
import StarMailClient from './react-dev/3-2-3';
import MutipleSelectionMailClient from './react-dev/3-2-4';


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
          path="3-1-2"
          element={<PageTemplate children={<EditProfile />} />}
        />
        <Route
          path="3-2-1"
          element={<PageTemplate children={<ColorfulClock />} />}
        />
        <Route
          path="3-2-2"
          element={<PageTemplate children={<TravelPlan />} />}
        />
        <Route
          path="3-2-3"
          element={<PageTemplate children={<StarMailClient />} />}
        />
        <Route
          path="3-2-4"
          element={<PageTemplate children={<MutipleSelectionMailClient />} />}
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