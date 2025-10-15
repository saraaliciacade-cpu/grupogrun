import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-primary mb-4">Simulador de cuotas</h1>
          <p className="text-lg text-muted-foreground">Bienvenido al sistema de Grupo Grün</p>
        </div>

        {/* Simulador de Cuotas */}
        <Card className="grun-shadow-lg border-border/50 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-primary text-center">Simulador de Cuotas</CardTitle>
            <CardDescription className="text-center">Calcula tus préstamos y cuotas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 justify-center mb-6">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold mb-2">
                  1
                </div>
                <span className="text-xs font-medium text-primary">Consulta DNI</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold mb-2">
                  2
                </div>
                <span className="text-xs text-muted-foreground">Seleccionar cuota</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold mb-2">
                  3
                </div>
                <span className="text-xs text-muted-foreground">Datos adicionales</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dni" className="text-primary font-medium">DNI</Label>
                <Input 
                  id="dni" 
                  placeholder="Ingresa tu DNI" 
                  className="border-primary/30 focus:border-primary focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground">*Sin espacios, ni puntos.</p>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                Consultar DNI
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
