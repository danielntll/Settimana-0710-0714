import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeRoute from './routes/HomeRoute/HomeRoute'
import AboutRoute from './routes/AboutRoute/AboutRoute'
import ContactsRoute from './routes/ContactsRoute/ContactsRoute'
import LocationsRoute from './routes/LocationsRoute/LocationsRoute'
import SingleLocationRoute from './routes/SingleLocationRoute/SingleLocationRoute'

function App() {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomeRoute />}
        />
        <Route
          path='/about'
          element={<AboutRoute />}
        />
        <Route
          path='/contacts'
          element={<ContactsRoute />}
        />
        <Route
          path='/locations'
          element={<LocationsRoute />}
        />
        <Route
          path='/locations/:id'
          element={<SingleLocationRoute />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
