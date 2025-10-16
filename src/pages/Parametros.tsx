import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Filter, Plus, Download, Copy, X, ArrowLeftCircle, Search } from "lucide-react";
import { useState } from "react";

export default function Parametros() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [anoFilter, setAnoFilter] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({
    tipo: "",
    anoVigencia: 0,
    anoDesde: 0,
    anoHasta: 0,
    tasaFija: "",
    uva: ""
  });
  const [newData, setNewData] = useState({
    tipo: "",
    anoVigencia: 0,
    anoDesde: 0,
    anoHasta: 0,
    tasaFija: "",
    uva: ""
  });
  
  const clearFilters = () => {
    setAnoFilter("");
  };
  
  const [parametrosData, setParametrosData] = useState([{
    tipo: "Auto",
    anoVigencia: 2025,
    anoDesde: 2025,
    anoHasta: 2025,
    tasaFija: "85,00",
    uva: "80,00"
  }, {
    tipo: "Auto",
    anoVigencia: 2025,
    anoDesde: 2021,
    anoHasta: 2024,
    tasaFija: "80,00",
    uva: "70,00"
  }, {
    tipo: "Auto",
    anoVigencia: 2025,
    anoDesde: 2019,
    anoHasta: 2020,
    tasaFija: "70,00",
    uva: "65,00"
  }, {
    tipo: "Auto",
    anoVigencia: 2025,
    anoDesde: 2015,
    anoHasta: 2018,
    tasaFija: "65,00",
    uva: "50,00"
  }, {
    tipo: "Auto",
    anoVigencia: 2025,
    anoDesde: 2012,
    anoHasta: 2014,
    tasaFija: "50,00",
    uva: "50,00"
  }]);

  const openEditDialog = (index: number) => {
    setSelectedIndex(index);
    const param = parametrosData[index];
    setEditData({
      tipo: param.tipo,
      anoVigencia: param.anoVigencia,
      anoDesde: param.anoDesde,
      anoHasta: param.anoHasta,
      tasaFija: param.tasaFija,
      uva: param.uva
    });
    setEditDialogOpen(true);
  };

  const handleEdit = () => {
    if (selectedIndex !== null) {
      const updatedData = [...parametrosData];
      updatedData[selectedIndex] = editData;
      setParametrosData(updatedData);
      setEditDialogOpen(false);
      setSelectedIndex(null);
    }
  };

  const handleAdd = () => {
    setParametrosData([newData, ...parametrosData]);
    setAddDialogOpen(false);
    setNewData({
      tipo: "",
      anoVigencia: 0,
      anoDesde: 0,
      anoHasta: 0,
      tasaFija: "",
      uva: ""
    });
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      const updatedData = parametrosData.filter((_, index) => index !== selectedIndex);
      setParametrosData(updatedData);
      setEditDialogOpen(false);
      setSelectedIndex(null);
    }
  };

  const filteredData = parametrosData.filter((item) => {
    if (anoFilter === "") return true;
    const ano = parseInt(anoFilter);
    return ano >= item.anoDesde && ano <= item.anoHasta;
  });
  return <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6">
          <Card className="grun-shadow-lg border-border/50">
                <CardHeader className="space-y-4">
                  <div>
                    <CardTitle>Segmentos</CardTitle>
                  </div>
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
                      <Button variant="grun" size="sm">
                        <Copy className="h-4 w-4" />
                        Copiar Plazos
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="todos">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="todos">(Todos)</SelectItem>
                        </SelectContent>
                      </Select>
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
                        <TableHead>Tipo</TableHead>
                        <TableHead className="text-center">Año Vigencia</TableHead>
                        <TableHead className="text-center">Año Desde</TableHead>
                        <TableHead className="text-center">Año Hasta</TableHead>
                        <TableHead className="text-center">Tasa Fija</TableHead>
                        <TableHead className="text-center">Uva</TableHead>
                        <TableHead className="text-center"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredData.map((row, index) => <TableRow key={index}>
                          <TableCell className="font-medium">{row.tipo}</TableCell>
                          <TableCell className="text-center">{row.anoVigencia}</TableCell>
                          <TableCell className="text-center">{row.anoDesde}</TableCell>
                          <TableCell className="text-center">{row.anoHasta}</TableCell>
                          <TableCell className="text-center">{row.tasaFija}</TableCell>
                          <TableCell className="text-center">{row.uva}</TableCell>
                          <TableCell className="text-center">
                            <Button variant="ghost" size="icon" onClick={() => openEditDialog(index)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
        </div>

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Parámetro</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-tipo">Tipo</Label>
                <Input
                  id="edit-tipo"
                  value={editData.tipo}
                  onChange={(e) => setEditData({ ...editData, tipo: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-anoVigencia">Año Vigencia</Label>
                <Input
                  id="edit-anoVigencia"
                  type="number"
                  value={editData.anoVigencia}
                  onChange={(e) => setEditData({ ...editData, anoVigencia: parseInt(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-anoDesde">Año Desde</Label>
                <Input
                  id="edit-anoDesde"
                  type="number"
                  value={editData.anoDesde}
                  onChange={(e) => setEditData({ ...editData, anoDesde: parseInt(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-anoHasta">Año Hasta</Label>
                <Input
                  id="edit-anoHasta"
                  type="number"
                  value={editData.anoHasta}
                  onChange={(e) => setEditData({ ...editData, anoHasta: parseInt(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-tasaFija">Tasa Fija</Label>
                <Input
                  id="edit-tasaFija"
                  value={editData.tasaFija}
                  onChange={(e) => setEditData({ ...editData, tasaFija: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-uva">Uva</Label>
                <Input
                  id="edit-uva"
                  value={editData.uva}
                  onChange={(e) => setEditData({ ...editData, uva: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <Button 
                variant="destructive" 
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700"
              >
                <X className="h-4 w-4" />
                Eliminar Segmento
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="grun" onClick={handleEdit}>
                  Confirmar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Add Dialog */}
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar Parámetro</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new-tipo">Tipo</Label>
                <Input
                  id="new-tipo"
                  value={newData.tipo}
                  onChange={(e) => setNewData({ ...newData, tipo: e.target.value })}
                  placeholder="Ingrese el tipo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-anoVigencia">Año Vigencia</Label>
                <Input
                  id="new-anoVigencia"
                  type="number"
                  value={newData.anoVigencia || ""}
                  onChange={(e) => setNewData({ ...newData, anoVigencia: parseInt(e.target.value) || 0 })}
                  placeholder="Ingrese el año de vigencia"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-anoDesde">Año Desde</Label>
                <Input
                  id="new-anoDesde"
                  type="number"
                  value={newData.anoDesde || ""}
                  onChange={(e) => setNewData({ ...newData, anoDesde: parseInt(e.target.value) || 0 })}
                  placeholder="Ingrese el año desde"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-anoHasta">Año Hasta</Label>
                <Input
                  id="new-anoHasta"
                  type="number"
                  value={newData.anoHasta || ""}
                  onChange={(e) => setNewData({ ...newData, anoHasta: parseInt(e.target.value) || 0 })}
                  placeholder="Ingrese el año hasta"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-tasaFija">Tasa Fija</Label>
                <Input
                  id="new-tasaFija"
                  value={newData.tasaFija}
                  onChange={(e) => setNewData({ ...newData, tasaFija: e.target.value })}
                  placeholder="Ingrese la tasa fija"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-uva">Uva</Label>
                <Input
                  id="new-uva"
                  value={newData.uva}
                  onChange={(e) => setNewData({ ...newData, uva: e.target.value })}
                  placeholder="Ingrese el valor UVA"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button variant="grun" onClick={handleAdd}>
                Agregar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
                <Label htmlFor="filter-ano">Año</Label>
                <Input
                  id="filter-ano"
                  type="number"
                  value={anoFilter}
                  onChange={(e) => setAnoFilter(e.target.value)}
                  placeholder="Buscar por año..."
                />
              </div>
              <div className="pt-4">
                <Button variant="grun" className="w-full gap-2 h-auto py-3 whitespace-normal" onClick={clearFilters}>
                  <ArrowLeftCircle className="h-5 w-5 shrink-0" />
                  <span>Click Acá para volver a ver todos los Parámetros</span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Layout>;
}