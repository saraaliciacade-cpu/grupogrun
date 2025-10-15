import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, Users, CreditCard } from "lucide-react";

export default function Dashboard() {
  const recentTransactions = [
    { id: 1, description: "Transferencia recibida", amount: 5000, type: "income", date: "Hoy, 10:30" },
    { id: 2, description: "Pago de servicios", amount: -1200, type: "expense", date: "Hoy, 09:15" },
    { id: 3, description: "Depósito en cuenta", amount: 15000, type: "income", date: "Ayer, 16:45" },
    { id: 4, description: "Retiro ATM", amount: -3000, type: "expense", date: "Ayer, 14:20" },
  ];

  const stats = [
    { title: "Saldo Total", value: "$245,680", change: "+12.5%", icon: DollarSign, trend: "up" },
    { title: "Ingresos del Mes", value: "$48,230", change: "+8.2%", icon: TrendingUp, trend: "up" },
    { title: "Clientes Activos", value: "1,234", change: "+3.1%", icon: Users, trend: "up" },
    { title: "Transacciones", value: "892", change: "-2.4%", icon: CreditCard, trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white grun-shadow-card">
        <div className="flex h-16 items-center gap-4 px-6">
          <SidebarTrigger className="text-foreground" />
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="grun-shadow-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-destructive" />
                  )}
                  <span className={`text-xs font-medium ${stat.trend === "up" ? "text-primary" : "text-destructive"}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">vs mes anterior</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Transactions */}
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Transacciones Recientes</CardTitle>
              <CardDescription>Últimos movimientos en tu cuenta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                        transaction.type === "income" ? "bg-primary/10" : "bg-destructive/10"
                      }`}>
                        {transaction.type === "income" ? (
                          <ArrowDownRight className="h-5 w-5 text-primary" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-destructive" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${
                      transaction.type === "income" ? "text-primary" : "text-destructive"
                    }`}>
                      {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-primary/20 hover:bg-accent">
                Ver todas las transacciones
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions Form */}
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Simulador de Cuotas</CardTitle>
              <CardDescription>Calcula tus préstamos y cuotas</CardDescription>
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

        {/* API Configuration Example */}
        <Card className="grun-shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">API Externas</CardTitle>
            <CardDescription>Configuración de servicios externos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="api-id" className="text-foreground">ID</Label>
                <Input id="api-id" value="INFOAUTO" readOnly className="bg-muted/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-desc" className="text-foreground">Descripción</Label>
                <Input id="api-desc" value="API de consulta a INFOAUTO" className="border-primary/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-url" className="text-foreground">URL Base</Label>
                <Input id="api-url" placeholder="https://demo.api.infoauto.com.ar" className="border-primary/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-auth" className="text-foreground">Tipo Autenticación</Label>
                <select id="api-auth" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Basic</option>
                  <option>Bearer</option>
                  <option>API Key</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
