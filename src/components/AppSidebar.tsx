import { Home, Settings, Shield, Sliders, Building2, Briefcase, Users, ChevronRight, Calculator } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logoGrun from "@/assets/Banco_Grupo_Grun.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function AppSidebar() {
  const [configOpen, setConfigOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);
  const [parametrosOpen, setParametrosOpen] = useState(false);

  return (
    <Sidebar className="border-r border-sidebar-border" style={{ backgroundColor: "rgb(33, 83, 45)" }}>
      <SidebarContent className="pt-12">
        <div className="px-6 mb-10">
          <img src={logoGrun} alt="Banco Grupo Grün" className="w-40 h-auto mx-auto" />
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70 uppercase text-xs font-semibold mb-2 px-6">
            MENÚ PRINCIPAL
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2 ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Home className="h-5 w-5" />
                    <span>Inicio</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/cotizacion"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2 ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Calculator className="h-5 w-5" />
                    <span>Cotización</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/bancos"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2 ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Building2 className="h-5 w-5" />
                    <span>Bancos</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/empresas"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2 ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Briefcase className="h-5 w-5" />
                    <span>Empresas</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/clientes"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2 ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Users className="h-5 w-5" />
                    <span>Clientes</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70 uppercase text-xs font-semibold mb-2 px-6 mt-4">
            ADMINISTRACIÓN
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <Collapsible open={configOpen} onOpenChange={setConfigOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <span>Configuración</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${configOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 overflow-hidden transition-all duration-300 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to="/configuracion/plazos"
                        className={({ isActive }) => 
                          `flex items-center gap-3 pl-14 pr-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                        }
                      >
                        <span>Plazos</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to="/configuracion/segmentos"
                        className={({ isActive }) => 
                          `flex items-center gap-3 pl-14 pr-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                        }
                      >
                        <span>Segmentos</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={securityOpen} onOpenChange={setSecurityOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Seguridad</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${securityOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 overflow-hidden transition-all duration-300 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to="/seguridad/objetos"
                        className={({ isActive }) => 
                          `flex items-center gap-3 pl-14 pr-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                        }
                      >
                        <span>Objetos</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to="/seguridad/permisos"
                        className={({ isActive }) => 
                          `flex items-center gap-3 pl-14 pr-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                        }
                      >
                        <span>Permisos</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to="/seguridad/apis-externas"
                        className={({ isActive }) => 
                          `flex items-center gap-3 pl-14 pr-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                        }
                      >
                        <span>Apis Externas</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={parametrosOpen} onOpenChange={setParametrosOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-2.5 text-white hover:bg-white/10 transition-colors rounded-lg mx-2">
                  <div className="flex items-center gap-3">
                    <Sliders className="h-5 w-5" />
                    <span>Parámetros</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${parametrosOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 overflow-hidden transition-all duration-300 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to="/parametros/segmentos"
                        className={({ isActive }) => 
                          `flex items-center gap-3 pl-14 pr-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                        }
                      >
                        <span>Segmentos</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
