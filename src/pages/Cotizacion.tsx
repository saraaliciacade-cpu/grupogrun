import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Calculator, FileText, DollarSign } from "lucide-react";
import { useState } from "react";

export default function Cotizacion() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    monto: "",
    plazo: "",
    tasa: "",
    cliente: "",
    tipoCredito: ""
  });

  const handleSubmit = () => {
    console.log("Nuevo préstamo:", formData);
    setDialogOpen(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Cotización</CardTitle>
                  <CardDescription>Gestión de cotizaciones y préstamos</CardDescription>
                </div>
                <Button variant="grun" className="gap-2" onClick={() => setDialogOpen(true)}>
                  <Plus className="h-4 w-4" />
                  Nuevo Préstamo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido de cotización...</p>
            </CardContent>
          </Card>
        </div>

        {/* Dialog de Nuevo Préstamo */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-md p-0 gap-0 overflow-hidden bg-background">
            {/* Header con gradiente verde lujoso */}
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/95 text-white p-8 pb-14 overflow-hidden">
              {/* Efectos de fondo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <p className="text-xs font-medium text-white/90 mb-1 tracking-wide uppercase">Monto Disponible</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                  $ 1,500.00
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white/15 text-white border-white/25 hover:bg-white/25 backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/15 text-white border-white/25 hover:bg-white/25 backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Reporte
                  </Button>
                  <Button 
                    size="icon"
                    className="ml-auto bg-white text-primary hover:bg-white/95 rounded-full h-12 w-12 shadow-2xl hover:shadow-white/50 transition-all duration-200 hover:scale-110"
                  >
                    <Plus className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="p-6 space-y-4 bg-background">
              <DialogHeader>
                <DialogTitle>Datos del Préstamo</DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="cliente">Cliente</Label>
                  <Input 
                    id="cliente"
                    placeholder="Nombre del cliente"
                    value={formData.cliente}
                    onChange={(e) => setFormData({...formData, cliente: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoCredito">Tipo de Crédito</Label>
                  <Select value={formData.tipoCredito} onValueChange={(value) => setFormData({...formData, tipoCredito: value})}>
                    <SelectTrigger id="tipoCredito">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="hipotecario">Hipotecario</SelectItem>
                      <SelectItem value="automotriz">Automotriz</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monto">Monto</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="monto"
                        type="number"
                        placeholder="0.00"
                        className="pl-9"
                        value={formData.monto}
                        onChange={(e) => setFormData({...formData, monto: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plazo">Plazo (meses)</Label>
                    <Input 
                      id="plazo"
                      type="number"
                      placeholder="12"
                      value={formData.plazo}
                      onChange={(e) => setFormData({...formData, plazo: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tasa">Tasa de Interés (%)</Label>
                  <Input 
                    id="tasa"
                    type="number"
                    step="0.01"
                    placeholder="5.50"
                    value={formData.tasa}
                    onChange={(e) => setFormData({...formData, tasa: e.target.value})}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" className="flex-1" onClick={() => setDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button variant="grun" className="flex-1" onClick={handleSubmit}>
                    Crear Préstamo
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
