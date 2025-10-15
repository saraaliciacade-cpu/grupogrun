import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Configuracion from "./pages/Configuracion";
import Seguridad from "./pages/Seguridad";
import Plazos from "./pages/Plazos";
import Segmentos from "./pages/Segmentos";
import Objetos from "./pages/Objetos";
import Permisos from "./pages/Permisos";
import ApisExternas from "./pages/ApisExternas";
import Parametros from "./pages/Parametros";
import Cotizacion from "./pages/Cotizacion";
import Bancos from "./pages/Bancos";
import Empresas from "./pages/Empresas";
import Clientes from "./pages/Clientes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/configuracion/plazos" element={<Plazos />} />
          <Route path="/configuracion/segmentos" element={<Segmentos />} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/seguridad/objetos" element={<Objetos />} />
          <Route path="/seguridad/permisos" element={<Permisos />} />
          <Route path="/seguridad/apis-externas" element={<ApisExternas />} />
          <Route path="/parametros/segmentos" element={<Parametros />} />
          <Route path="/bancos" element={<Bancos />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/clientes" element={<Clientes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
