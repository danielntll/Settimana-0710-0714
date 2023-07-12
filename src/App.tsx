import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeRoute from './routes/HomeRoute/HomeRoute'
import AboutRoute from './routes/AboutRoute/AboutRoute'
import ContactsRoute from './routes/ContactsRoute/ContactsRoute'
import LocationsRoute from './routes/LocationsRoute/LocationsRoute'
import SingleLocationRoute from './routes/SingleLocationRoute/SingleLocationRoute'
import Navbar from './components/Navbar/Navbar'
import { tRoute } from './types/tRoutes'

import {
  IoHomeOutline,
  IoHome,
  IoInformationCircleOutline,
  IoInformationCircle,
  IoMailOutline,
  IoMail,
  IoNewspaperOutline,
  IoNewspaper,
  IoImagesOutline,
  IoImages,
  IoPersonOutline,
  IoPerson
} from "react-icons/io5";
import UserprofileRoute from './routes/UserprofileRoute/UserprofileRoute'
import { AuthContext, useAuthInit } from './auth'


function App() {
  // VARIABLES ----------------------
  const { auth } = useAuthInit();
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // UI COMPONETNS ------------------
  const NavbarWrapper = ({ children }: any) => {
    return (
      <Navbar>
        <div className='NavbarMargin'>
          {children}
        </div>
      </Navbar>
    )
  }
  // RETURN -------------------------
  return (
    <BrowserRouter>
      <AuthContext.Provider value={auth!}>
        <Routes>
          {appRoutes?.map((route: tRoute, index: number) => {
            return (
              <Route
                key={index + "appRoute"}
                path={route.path}
                element={
                  <NavbarWrapper>
                    {route.element}
                  </NavbarWrapper>
                }
              />
            )
          })}
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;


export const appRoutes: tRoute[] = [
  {
    name: "Home",
    path: "/",
    icons: [
      <IoHomeOutline size={24} />,
      <IoHome size={24} />
    ],
    element: <HomeRoute />
  },
  {
    name: "Locations",
    path: "/locations",
    icons: [
      <IoImagesOutline size={24} />,
      <IoImages size={24} />
    ],
    element: <LocationsRoute />
  },
  {
    name: "Specific location",
    path: "/locations/:id",
    element: <SingleLocationRoute />,
    hideSideMenu: true,
  },
  {
    name: "About",
    path: "/about",
    icons: [
      <IoInformationCircleOutline size={24} />,
      <IoInformationCircle size={24} />
    ],
    element: <AboutRoute />
  },
  {
    name: "Contacts",
    path: "/contacts",
    icons: [
      <IoMailOutline size={24} />,
      <IoMail size={24} />
    ],
    element: <ContactsRoute />
  },
  {
    name: "News",
    path: "/news",
    icons: [
      <IoNewspaperOutline size={24} />,
      <IoNewspaper size={24} />
    ],
    element: <ContactsRoute />
  },
  {
    name: "User Profile",
    path: "/userprofile",
    icons: [
      <IoPersonOutline size={24} />,
      <IoPerson size={24} />
    ],
    element: <UserprofileRoute />
  },
]
