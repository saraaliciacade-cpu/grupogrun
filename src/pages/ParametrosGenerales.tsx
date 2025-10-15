import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Pencil, Filter, Plus, Download, Trash2, X, ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

export default function ParametrosGenerales() {
  const [parametrosData, setParametrosData] = useState([
    {
      parametro: "Empresa Email",
      descripcion: "empresa email",
      valor: "soporte@grupogrun.com.ar",
      empresa: "Grupo Grun"
    },
    {
      parametro: "Empresa Teléfono",
      descripcion: "Teléfono Contacto",
      valor: "+542615604934",
      empresa: "Grupo Grun"
    },
    {
      parametro: "Smtp Auth",
      descripcion: "Autentificar Smtp ?",
      valor: "1",
      empresa: "Grupo Grun"
    }
  ]);

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    descripcion: "",
    empresa: "",
    valor: ""
  });
  const [newParametro, setNewParametro] = useState({
    parametro: "",
    descripcion: "",
    valor: ""
  });

  const handleAdd = () => {
    setParametrosData([...parametrosData, { ...newParametro, empresa: "Grupo Grun" }]);
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

  const clearFilters = () => {
    setFilters({ descripcion: "", empresa: "", valor: "" });
  };

  const filteredData = parametrosData.filter((item) => {
    const matchDescripcion = filters.descripcion === "" || item.descripcion.toLowerCase().includes(filters.descripcion.toLowerCase());
    const matchEmpresa = filters.empresa === "" || item.empresa?.toLowerCase().includes(filters.empresa.toLowerCase());
    const matchValor = filters.valor === "" || item.valor.toLowerCase().includes(filters.valor.toLowerCase());
    return matchDescripcion && matchEmpresa && matchValor;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader className="space-y-4">
              <CardTitle>Parámetros Generales</CardTitle>
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
                  <div className="relative flex items-center">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Descripción" 
                      className="w-[200px] pl-9"
                      value={filters.descripcion}
                      onChange={(e) => setFilters({ ...filters, descripcion: e.target.value })}
                    />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setFilterOpen(true)}>
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
                  {filteredData.map((row, index) => (
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

        {/* Filter Sidebar */}
        <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
          <SheetContent side="right" className="w-[400px] bg-background/95 backdrop-blur-xl border-border/50">
            <SheetHeader>
              <div className="flex items-center justify-between">
                <SheetTitle>Filtros</SheetTitle>
              </div>
            </SheetHeader>
            <div className="space-y-6 py-6">
              <div className="space-y-2">
                <Label htmlFor="filter-empresa">Empresa</Label>
                <Input
                  id="filter-empresa"
                  value={filters.empresa}
                  onChange={(e) => setFilters({ ...filters, empresa: e.target.value })}
                  placeholder="Buscar por empresa..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="filter-valor">Valor</Label>
                <Input
                  id="filter-valor"
                  value={filters.valor}
                  onChange={(e) => setFilters({ ...filters, valor: e.target.value })}
                  placeholder="Buscar por valor..."
                />
              </div>
              <div className="pt-4">
                <Button variant="grun" className="w-full" onClick={clearFilters}>
                  <ArrowLeft className="h-4 w-4" />
                  Click Acá para volver a ver todos los Parámetros
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Layout>
  );
}
