import { Grid, Building2, Briefcase, Users, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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

  return (
    <Sidebar className="border-r border-sidebar-border" style={{ backgroundColor: "rgb(33, 83, 45)" }}>
      <SidebarContent className="pt-4">
        <div className="px-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GG</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">GRUPO</p>
              <p className="text-white font-semibold text-sm">GRÜN</p>
            </div>
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70 uppercase text-xs font-semibold mb-2 px-6">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Grid className="h-4 w-4" />
                    <span>Inicio</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible open={configOpen} onOpenChange={setConfigOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-2 text-white hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <Grid className="h-4 w-4" />
                    <span>Configuración</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${configOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
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
                <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-2 text-white hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <Grid className="h-4 w-4" />
                    <span>Seguridad</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${securityOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
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

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/parametros"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Grid className="h-4 w-4" />
                    <span>Parámetros</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/bancos"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Building2 className="h-4 w-4" />
                    <span>Bancos</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/empresas"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Empresas</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/clientes"
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-6 py-2 text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/10' : ''}`
                    }
                  >
                    <Users className="h-4 w-4" />
                    <span>Clientes</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
