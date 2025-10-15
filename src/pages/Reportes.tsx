import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reportes() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Reportes</CardTitle>
              <CardDescription>Generación y visualización de reportes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido de reportes...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
