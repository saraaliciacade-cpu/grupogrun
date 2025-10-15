import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

export default function Seguridad() {
  const securitySections = [
    { title: "Objetos", description: "Gestionar objetos del sistema" },
    { title: "Permisos", description: "Administrar permisos de usuarios" },
    { title: "APIs Externas", description: "Configurar integraciones externas" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-8 space-y-8">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Módulos de Seguridad</CardTitle>
              <CardDescription>Administra la seguridad y permisos del sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {securitySections.map((section) => (
                  <Button
                    key={section.title}
                    variant="outline"
                    className="h-auto justify-between p-4 border-border/50 hover:border-primary/30 hover:bg-accent/50"
                  >
                    <div className="text-left">
                      <div className="font-semibold text-title">{section.title}</div>
                      <div className="text-sm text-muted-foreground">{section.description}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* API Configuration Example */}
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>API Externas - Ejemplo</CardTitle>
              <CardDescription>Configuración de servicios de integración</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sec-api-id" className="text-foreground font-medium">ID</Label>
                  <Input id="sec-api-id" value="INFOAUTO" readOnly className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sec-api-desc" className="text-foreground font-medium">Descripción</Label>
                  <Input 
                    id="sec-api-desc" 
                    defaultValue="API de consulta a INFOAUTO" 
                    className="border-primary/30 focus:border-primary" 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="sec-api-url" className="text-foreground font-medium">URL Base</Label>
                  <Input 
                    id="sec-api-url" 
                    placeholder="https://demo.api.infoauto.com.ar" 
                    className="border-primary/30 focus:border-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sec-api-auth" className="text-foreground font-medium">Tipo Autenticación</Label>
                <select 
                  id="sec-api-auth" 
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                    <option>Basic</option>
                    <option>Bearer</option>
                    <option>API Key</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sec-api-user" className="text-foreground font-medium">Usuario</Label>
                  <Input 
                    id="sec-api-user" 
                    type="email" 
                    placeholder="usuario@ejemplo.com" 
                    className="border-primary/30 focus:border-primary" 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="sec-api-pass" className="text-foreground font-medium">Contraseña</Label>
                  <Input 
                    id="sec-api-pass" 
                    type="password" 
                    placeholder="••••••••" 
                    className="border-primary/30 focus:border-primary" 
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  Cancelar
                </Button>
                <Button variant="grun" className="flex-1">
                  Guardar Configuración
                </Button>
              </div>
            </CardContent>
        </Card>
      </div>
      </div>
    </Layout>
  );
}
