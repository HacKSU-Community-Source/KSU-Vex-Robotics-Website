import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from "./pages/AboutPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import SponsorsPage from "./pages/SponsorsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App