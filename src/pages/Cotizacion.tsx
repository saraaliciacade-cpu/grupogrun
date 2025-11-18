import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Calculator, FileText, DollarSign, Sun, Moon, Menu, TrendingUp, TrendingDown, Users, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export default function Cotizacion() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    monto: "",
    plazo: "",
    tasa: "",
    cliente: "",
    tipoCredito: ""
  });

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
          <DialogContent className="max-w-md w-full h-full sm:h-auto sm:w-[calc(100vw-2rem)] max-h-screen sm:max-h-[90vh] p-0 gap-0 overflow-hidden bg-background sm:rounded-lg rounded-none inset-0 sm:inset-auto translate-x-0 translate-y-0 sm:translate-x-[-50%] sm:translate-y-[-50%] left-0 top-0 sm:left-[50%] sm:top-[50%]">
            <div className="overflow-y-auto h-full sm:max-h-[90vh]">
              {/* Header con gradiente verde lujoso que incluye barra de navegación en móvil */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary/95 text-white overflow-hidden">
                {/* Header móvil con menú y tema - solo visible en móvil */}
                <div className="sm:hidden sticky top-0 z-50 flex justify-between items-center p-4 pb-4">
                  <div className="flex items-center gap-3">
                    <SidebarTrigger className="text-white hover:bg-white/10" />
                    <h1 className="text-lg font-semibold text-white">Cotización</h1>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDarkMode}
                    className="rounded-full text-white hover:bg-white/10"
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                
                {/* Contenido del header con efectos y monto */}
                <div className="p-6 sm:p-8 pb-14 sm:pb-16 pt-6 sm:pt-8">
              {/* Efectos de fondo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <p className="text-xs sm:text-sm font-medium text-white/90 mb-2 tracking-wide uppercase">Monto Disponible</p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-10 tracking-tight drop-shadow-lg">
                  $ 1,500.00
                </h2>
                
                {/* Estadísticas en grid 2x2 */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Total Préstamos */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-white/80 font-medium">Total Préstamos</p>
                      <DollarSign className="h-4 w-4 text-green-300" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">$1,234,567</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-300" />
                      <span className="text-xs text-green-300 font-medium">+12.5%</span>
                      <span className="text-xs text-white/60">vs mes anterior</span>
                    </div>
                  </div>

                  {/* Clientes Activos */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-white/80 font-medium">Clientes Activos</p>
                      <Users className="h-4 w-4 text-blue-300" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">2,845</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-300" />
                      <span className="text-xs text-green-300 font-medium">+8.2%</span>
                      <span className="text-xs text-white/60">vs mes anterior</span>
                    </div>
                  </div>

                  {/* Tasa Promedio */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-white/80 font-medium">Tasa Promedio</p>
                      <TrendingUp className="h-4 w-4 text-purple-300" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">15.3%</p>
                    <div className="flex items-center gap-1">
                      <TrendingDown className="h-3 w-3 text-red-300" />
                      <span className="text-xs text-red-300 font-medium">-2.1%</span>
                      <span className="text-xs text-white/60">vs mes anterior</span>
                    </div>
                  </div>

                  {/* Cuotas Pendientes */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-white/80 font-medium">Cuotas Pendientes</p>
                      <CreditCard className="h-4 w-4 text-orange-300" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">1,234</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-300" />
                      <span className="text-xs text-green-300 font-medium">+5.4%</span>
                      <span className="text-xs text-white/60">vs mes anterior</span>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1 bg-white/15 text-white border-white/25 hover:bg-white/25 backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1 bg-white/15 text-white border-white/25 hover:bg-white/25 backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Reporte
                  </Button>
                  <Button 
                    size="icon"
                    className="bg-white text-primary hover:bg-white/95 rounded-full h-10 w-10 shadow-2xl hover:shadow-white/50 transition-all duration-200 hover:scale-110"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              </div>
              </div>

            {/* Formulario */}
            <div className="p-4 sm:p-6 space-y-4 bg-background rounded-t-3xl -mt-6 relative z-10">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">Datos del Préstamo</DialogTitle>
              </DialogHeader>

              <div className="space-y-3 sm:space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="cliente" className="text-sm">Cliente</Label>
                  <Input 
                    id="cliente"
                    placeholder="Nombre del cliente"
                    value={formData.cliente}
                    onChange={(e) => setFormData({...formData, cliente: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoCredito" className="text-sm">Tipo de Crédito</Label>
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

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monto" className="text-sm">Monto</Label>
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
                    <Label htmlFor="plazo" className="text-sm">Plazo (meses)</Label>
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
                  <Label htmlFor="tasa" className="text-sm">Tasa de Interés (%)</Label>
                  <Input 
                    id="tasa"
                    type="number"
                    step="0.01"
                    placeholder="5.50"
                    value={formData.tasa}
                    onChange={(e) => setFormData({...formData, tasa: e.target.value})}
                  />
                </div>

                <div className="flex gap-3 pt-3 sm:pt-4 pb-2">
                  <Button variant="outline" className="flex-1" onClick={() => setDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button variant="grun" className="flex-1" onClick={handleSubmit}>
                    Crear Préstamo
                  </Button>
                </div>
              </div>
            </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
