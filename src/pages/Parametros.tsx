import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Parametros() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6 max-w-6xl">
        <Card className="grun-shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Parámetros del Sistema</CardTitle>
            <CardDescription>Configuración general de parámetros</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Contenido de parámetros...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
