import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Plazos() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Gestión de Plazos</CardTitle>
              <CardDescription>Configurar y administrar plazos de operaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido de plazos...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
