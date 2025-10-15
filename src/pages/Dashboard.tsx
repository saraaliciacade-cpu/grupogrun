import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, CreditCard, ArrowUpRight, ArrowDownRight, ArrowLeft } from "lucide-react";

export default function Dashboard() {
  const [showAllActivity, setShowAllActivity] = useState(false);
  
  const allActivities = [
    { name: "Juan Pérez", action: "Nuevo préstamo", amount: "$50,000", time: "Hace 2 horas" },
    { name: "María García", action: "Pago de cuota", amount: "$5,000", time: "Hace 4 horas" },
    { name: "Carlos Rodríguez", action: "Actualización datos", amount: "-", time: "Hace 6 horas" },
    { name: "Ana Martínez", action: "Nuevo préstamo", amount: "$75,000", time: "Hace 8 horas" },
    { name: "Pedro Sánchez", action: "Pago de cuota", amount: "$3,500", time: "Hace 10 horas" },
    { name: "Laura Fernández", action: "Nuevo préstamo", amount: "$100,000", time: "Hace 12 horas" },
    { name: "Roberto Díaz", action: "Actualización datos", amount: "-", time: "Hace 14 horas" },
    { name: "Sofía López", action: "Pago de cuota", amount: "$8,000", time: "Hace 16 horas" },
    { name: "Diego Ramírez", action: "Nuevo préstamo", amount: "$45,000", time: "Hace 18 horas" },
    { name: "Carmen Torres", action: "Pago de cuota", amount: "$6,200", time: "Hace 20 horas" },
  ];
  
  const stats = [
    {
      title: "Total Préstamos",
      value: "$1,234,567",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Clientes Activos",
      value: "2,845",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Tasa Promedio",
      value: "15.3%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Cuotas Pendientes",
      value: "1,234",
      change: "+5.4%",
      trend: "up",
      icon: CreditCard,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="grun-shadow-md hover:grun-shadow-lg transition-shadow border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-sm font-medium">{stat.title}</CardDescription>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center gap-1">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground">vs mes anterior</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className={`grun-shadow-md border-border/50 ${showAllActivity ? 'lg:col-span-2' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-foreground flex items-center gap-3">
                    {showAllActivity && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowAllActivity(false)}
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Atrás
                      </Button>
                    )}
                    Actividad Reciente
                  </CardTitle>
                  <CardDescription>Últimas operaciones realizadas</CardDescription>
                </div>
                {!showAllActivity && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowAllActivity(true)}
                  >
                    Ver más
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(showAllActivity ? allActivities : allActivities.slice(0, 3)).map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">{activity.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{activity.name}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{activity.amount}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          {!showAllActivity && (
            <Card className="grun-shadow-md border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Acciones Rápidas</CardTitle>
                <CardDescription>Operaciones frecuentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="grun" className="h-24 flex flex-col gap-2">
                    <Users className="h-6 w-6" />
                    <span>Nuevo Cliente</span>
                  </Button>
                  <Button variant="grun" className="h-24 flex flex-col gap-2">
                    <DollarSign className="h-6 w-6" />
                    <span>Nuevo Préstamo</span>
                  </Button>
                  <Button variant="grun" className="h-24 flex flex-col gap-2">
                    <CreditCard className="h-6 w-6" />
                    <span>Registrar Pago</span>
                  </Button>
                  <Button variant="grun" className="h-24 flex flex-col gap-2">
                    <TrendingUp className="h-6 w-6" />
                    <span>Ver Reportes</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
