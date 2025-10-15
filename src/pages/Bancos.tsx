import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Bancos() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Gestión de Bancos</CardTitle>
              <CardDescription>Administrar entidades bancarias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido de bancos...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
