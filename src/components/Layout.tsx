import { ReactNode, useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Parámetros Generales";
    if (path === "/parametros/generales") return "Parámetros Generales";
    if (path === "/cotizacion") return "Cotización";
    if (path === "/configuracion/plazos") return "Plazos";
    if (path === "/configuracion/segmentos") return "Segmentos";
    if (path === "/seguridad/objetos") return "Objetos";
    if (path === "/seguridad/permisos") return "Permisos";
    if (path === "/seguridad/apis-externas") return "Apis Externas";
    if (path === "/parametros/segmentos") return "Parámetros - Segmentos";
    if (path === "/bancos") return "Bancos";
    if (path === "/empresas") return "Empresas";
    if (path === "/clientes") return "Clientes";
    return "Inicio";
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background border-b">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-semibold text-title">{getPageTitle()}</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </Button>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
