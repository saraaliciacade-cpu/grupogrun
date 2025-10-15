import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ApisExternas() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6 max-w-6xl">
        <Card className="grun-shadow-lg border-border/50">
          <CardHeader>
            <CardTitle>APIs Externas</CardTitle>
            <CardDescription>Configuración de servicios de integración</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="api-id" className="text-foreground font-medium">ID</Label>
                <Input id="api-id" value="INFOAUTO" readOnly className="bg-muted/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-desc" className="text-foreground font-medium">Descripción</Label>
                <Input 
                  id="api-desc" 
                  defaultValue="API de consulta a INFOAUTO" 
                  className="border-primary/30 focus:border-primary" 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="api-url" className="text-foreground font-medium">URL Base</Label>
                <Input 
                  id="api-url" 
                  placeholder="https://demo.api.infoauto.com.ar" 
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
