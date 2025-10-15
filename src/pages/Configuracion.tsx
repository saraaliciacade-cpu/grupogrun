import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Configuracion() {
  const configSections = [
    { title: "Plazos", description: "Configurar plazos de operaciones" },
    { title: "Segmentos", description: "Administrar segmentos de clientes" },
    { title: "Parámetros", description: "Ajustes generales del sistema" },
    { title: "Bancos", description: "Gestión de entidades bancarias" },
    { title: "Empresas", description: "Administrar empresas del grupo" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
      <div className="p-8 space-y-8">
        <Card className="grun-shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Secciones de Configuración</CardTitle>
            <CardDescription>Accede a las diferentes opciones de configuración del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {configSections.map((section) => (
                <Button
                  key={section.title}
                  variant="outline"
                  className="h-auto justify-between p-4 border-border/50 hover:border-primary/30 hover:bg-accent/50"
                >
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{section.title}</div>
                    <div className="text-sm text-muted-foreground">{section.description}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </Layout>
  );
}
