import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import GlobalNavbar from "./util_components/global_navbar/GlobalNavbar"
import IndexPage from "./pages/index_page/components/IndexPage"
import AboutPage from "./pages/about_page/components/AboutPage"
import ContactPage from "./pages/contact_page/components/ContactPage"
import CommonFooter from "./util_components/common_footer/CommonFooter"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <>
      <GlobalNavbar />
      <Outlet />
      <CommonFooter />
    </>
  ) 
}

export default App