import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import Adventures from "./pages/Adventures.tsx";
import AdventureDetail from "./pages/AdventureDetail.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
// Bikepacking is now part of adventures
import CustomExperience from "./pages/CustomExperience.tsx";
import Calendar from "./pages/Calendar.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import UnfamiliarPlaces from "./pages/UnfamiliarPlaces.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Index />
                <Footer />
              </>
            }
          />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/adventures/category/:slug" element={<CategoryPage />} />
          <Route path="/adventures/:id" element={<AdventureDetail />} />
          {/* Bikepacking is now part of adventures */}
          <Route path="/custom-experience" element={<CustomExperience />} />
          <Route path="/unfamiliar-places" element={<UnfamiliarPlaces />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
