import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Pencil, Filter, Plus, Download, Trash2 } from "lucide-react";

export default function ParametrosGenerales() {
  const parametrosData = [
    {
      parametro: "Empresa Email",
      descripcion: "empresa email",
      valor: "soporte@grupogrun.com.ar"
    },
    {
      parametro: "Empresa Teléfono",
      descripcion: "Teléfono Contacto",
      valor: "+542615604934"
    },
    {
      parametro: "Smtp Auth",
      descripcion: "Autentificar Smtp ?",
      valor: "1"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="grun" size="sm">
                    <Plus className="h-4 w-4" />
                    Agregar
                  </Button>
                  <Button variant="grun" size="sm">
                    <Download className="h-4 w-4" />
                    Exportar
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Input 
                    type="text" 
                    placeholder="Descripción" 
                    className="w-[200px]"
                  />
                  <Button variant="ghost" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parámetro</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead className="text-center"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parametrosData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.parametro}</TableCell>
                      <TableCell>{row.descripcion}</TableCell>
                      <TableCell>{row.valor}</TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
