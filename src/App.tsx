import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import ScrollToTopButton from "./components/Scroll/ScrollToTopButton";
import WhatsAppButton from "./components/button/WhatsAppButton";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import TermsOfService from "./components/TermsOfService";



function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<TermsOfService />} />
        </Route>
      </Routes>
      {/* <ScrollToTop />*/}
      <ScrollToTop />

      {/*<ScrollToTopButton />*/}
      <ScrollToTopButton />
      
      {/*<WhatsAppButton />*/}
      <WhatsAppButton />
    </BrowserRouter>


  );
}

export default App;