import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Search, Edit, Plus, Download } from "lucide-react";
import { useState } from "react";
export default function Objetos() {
  const [objetosData, setObjetosData] = useState([{
    id: 1,
    descripcion: "aplicacion"
  }, {
    id: 2,
    descripcion: "clientes"
  }, {
    id: 3,
    descripcion: "empresas"
  }, {
    id: 4,
    descripcion: "home"
  }, {
    id: 5,
    descripcion: "notauthorized"
  }, {
    id: 6,
    descripcion: "parametros"
  }, {
    id: 7,
    descripcion: "parametrosplazos"
  }, {
    id: 8,
    descripcion: "parametrossegmentos"
  }, {
    id: 9,
    descripcion: "permisos"
  }, {
    id: 10,
    descripcion: "test"
  }]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({ descripcion: "" });

  const openEditDialog = (index: number) => {
    setSelectedIndex(index);
    setEditData({ descripcion: objetosData[index].descripcion });
    setEditDialogOpen(true);
  };

  const handleEdit = () => {
    if (selectedIndex !== null) {
      const updatedData = [...objetosData];
      updatedData[selectedIndex] = { ...updatedData[selectedIndex], ...editData };
      setObjetosData(updatedData);
      setEditDialogOpen(false);
      setSelectedIndex(null);
    }
  };

  const filteredObjetos = objetosData.filter(objeto => objeto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()));
  return <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
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
                <div className="relative flex items-center">
                  <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Objeto-Descripcion" 
                    className="w-[200px] pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descripción</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredObjetos.map(objeto => <TableRow key={objeto.id}>
                      <TableCell className="font-medium">{objeto.descripcion}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => openEditDialog(objetosData.indexOf(objeto))}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Objeto</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Input
                  id="descripcion"
                  value={editData.descripcion}
                  onChange={(e) => setEditData({ ...editData, descripcion: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
                Cancelar
              </Button>
              <Button variant="grun" onClick={handleEdit}>
                Confirmar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>;
}