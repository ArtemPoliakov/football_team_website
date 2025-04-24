import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import GlobalNavbar from "./util_components/global_navbar/GlobalNavbar"
import IndexPage from "./pages/index_page/components/IndexPage"
import AboutPage from "./pages/about_page/components/AboutPage"
import ContactPage from "./pages/contact_page/components/ContactPage"
import CommonFooter from "./util_components/common_footer/CommonFooter"

import global_container_styles from './global_styles/global_container_styles.module.css'
import FramePage from "./pages/frame_page/FramePage"
import GalleryPage from "./pages/gallery_page/GalleryPage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/frames" element={<FramePage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <div className={global_container_styles.globalPageFlexContainer} id="top">
      <GlobalNavbar />
      <Outlet />
      <CommonFooter />
    </div>
  ) 
}

export default App