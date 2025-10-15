import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Edit } from "lucide-react";
import { useState } from "react";

const objetosData = [
  { id: 1, descripcion: "aplicacion" },
  { id: 2, descripcion: "clientes" },
  { id: 3, descripcion: "empresas" },
  { id: 4, descripcion: "home" },
  { id: 5, descripcion: "notauthorized" },
  { id: 6, descripcion: "parametros" },
  { id: 7, descripcion: "parametrosplazos" },
  { id: 8, descripcion: "parametrossegmentos" },
  { id: 9, descripcion: "permisos" },
  { id: 10, descripcion: "test" },
];

export default function Objetos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredObjetos = objetosData.filter((objeto) =>
    objeto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Objetos</CardTitle>
              <div className="flex gap-4 mt-4">
                <Button variant="grun" size="sm">
                  Agregar
                </Button>
                <Button variant="grun" size="sm">
                  Exportar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Objeto-Descripcion"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descripción</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredObjetos.map((objeto) => (
                      <TableRow key={objeto.id}>
                        <TableCell className="font-medium">{objeto.descripcion}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
