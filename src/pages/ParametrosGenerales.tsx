import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Pencil, Filter, Plus, Download, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ParametrosGenerales() {
  const [parametrosData, setParametrosData] = useState([
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
  ]);

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newParametro, setNewParametro] = useState({
    parametro: "",
    descripcion: "",
    valor: ""
  });

  const handleAdd = () => {
    setParametrosData([...parametrosData, newParametro]);
    setNewParametro({ parametro: "", descripcion: "", valor: "" });
    setAddDialogOpen(false);
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      setParametrosData(parametrosData.filter((_, index) => index !== selectedIndex));
      setSelectedIndex(null);
      setDeleteDialogOpen(false);
    }
  };

  const openDeleteDialog = (index: number) => {
    setSelectedIndex(index);
    setDeleteDialogOpen(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="grun" size="sm" onClick={() => setAddDialogOpen(true)}>
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
                          <Button variant="ghost" size="icon" onClick={() => openDeleteDialog(index)}>
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

        {/* Add Dialog */}
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar Parámetro</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="parametro">Parámetro</Label>
                <Input
                  id="parametro"
                  value={newParametro.parametro}
                  onChange={(e) => setNewParametro({ ...newParametro, parametro: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Input
                  id="descripcion"
                  value={newParametro.descripcion}
                  onChange={(e) => setNewParametro({ ...newParametro, descripcion: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valor">Valor</Label>
                <Input
                  id="valor"
                  value={newParametro.valor}
                  onChange={(e) => setNewParametro({ ...newParametro, valor: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                Volver Atrás
              </Button>
              <Button variant="grun" onClick={handleAdd}>
                Guardar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás Seguro que quieres eliminarlo?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>No</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Sí, eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Layout>
  );
}
