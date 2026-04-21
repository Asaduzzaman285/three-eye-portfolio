import { useEffect } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory";
import OurManagement from "./pages/OurManagement";
import MnoPartners from "./pages/MnoPartners";
import OverseasPartners from "./pages/OverseasPartners";
import ValuedClients from "./pages/ValuedClients";
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import BankingFinancialSolutions from './pages/BankingFinancialSolutions';
import EnterpriseSolutions from './pages/EnterpriseSolutions';
import EntertainmentVAS from './pages/EntertainmentVAS';
import ITSecurity from './pages/ITSecurity';
import MarketingPromotion from './pages/MarketingPromotion';
import PaymentServices from './pages/PaymentServices';
import SolutionsPlatformsTools from './pages/SolutionsPlatformsTools';
import NewsEvents from "./pages/NewsEvents";
import Career from "./pages/Career";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import EmployeesCorner from "./pages/EmployeesCorner";

const queryClient = new QueryClient();

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-management" element={<OurManagement />} />
          <Route path="/mno-partners" element={<MnoPartners />} />
          <Route path="/overseas-partners" element={<OverseasPartners />} />
          <Route path="/valued-clients" element={<ValuedClients />} />
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/banking-financial-solutions" element={<BankingFinancialSolutions />} />
          <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/entertainment-vas" element={<EntertainmentVAS />} />
          <Route path="/it-security" element={<ITSecurity />} />
          <Route path="/marketing-promotion" element={<MarketingPromotion />} />
          <Route path="/payment-services" element={<PaymentServices />} />
          <Route path="/solutions-platforms-tools" element={<SolutionsPlatformsTools />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/career" element={<Career />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/employees" element={<EmployeesCorner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
