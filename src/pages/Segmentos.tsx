import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Search, Edit, Plus, Download, X } from "lucide-react";
import { useState } from "react";

export default function Segmentos() {
  const [segmentosData, setSegmentosData] = useState([
    {
      id: 1,
      tipo: "Tipo A",
      anioVigencia: "2024",
      anioDesde: "2024",
      anioHasta: "2025",
      tasaFija: "5.5",
      uva: "10.2"
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({ 
    tipo: "", 
    anioVigencia: "", 
    anioDesde: "", 
    anioHasta: "", 
    tasaFija: "", 
    uva: "" 
  });
  const [newData, setNewData] = useState({ 
    tipo: "", 
    anioVigencia: "", 
    anioDesde: "", 
    anioHasta: "", 
    tasaFija: "", 
    uva: "" 
  });

  const openEditDialog = (index: number) => {
    setSelectedIndex(index);
    setEditData({ 
      tipo: segmentosData[index].tipo,
      anioVigencia: segmentosData[index].anioVigencia,
      anioDesde: segmentosData[index].anioDesde,
      anioHasta: segmentosData[index].anioHasta,
      tasaFija: segmentosData[index].tasaFija,
      uva: segmentosData[index].uva
    });
    setEditDialogOpen(true);
  };

  const handleEdit = () => {
    if (selectedIndex !== null) {
      const updatedData = [...segmentosData];
      updatedData[selectedIndex] = { ...updatedData[selectedIndex], ...editData };
      setSegmentosData(updatedData);
      setEditDialogOpen(false);
      setSelectedIndex(null);
    }
  };

  const handleAdd = () => {
    const newId = Math.max(...segmentosData.map(s => s.id), 0) + 1;
    setSegmentosData([{ id: newId, ...newData }, ...segmentosData]);
    setAddDialogOpen(false);
    setNewData({ 
      tipo: "", 
      anioVigencia: "", 
      anioDesde: "", 
      anioHasta: "", 
      tasaFija: "", 
      uva: "" 
    });
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      const updatedData = segmentosData.filter((_, index) => index !== selectedIndex);
      setSegmentosData(updatedData);
      setEditDialogOpen(false);
      setSelectedIndex(null);
    }
  };

  const filteredSegmentos = segmentosData.filter(segmento => 
    segmento.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    segmento.anioVigencia.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6 max-w-6xl">
          <Card className="grun-shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Segmentos</CardTitle>
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
                <div className="relative flex items-center">
                  <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Buscar segmento" 
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
                      <TableHead>Tipo</TableHead>
                      <TableHead>Año Vigencia</TableHead>
                      <TableHead>Año Desde</TableHead>
                      <TableHead>Año Hasta</TableHead>
                      <TableHead>Tasa Fija</TableHead>
                      <TableHead>Uva</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSegmentos.map(segmento => (
                      <TableRow key={segmento.id}>
                        <TableCell className="font-medium">{segmento.tipo}</TableCell>
                        <TableCell>{segmento.anioVigencia}</TableCell>
                        <TableCell>{segmento.anioDesde}</TableCell>
                        <TableCell>{segmento.anioHasta}</TableCell>
                        <TableCell>{segmento.tasaFija}</TableCell>
                        <TableCell>{segmento.uva}</TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => openEditDialog(segmentosData.indexOf(segmento))}
                          >
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

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Segmento</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <Input
                  id="tipo"
                  value={editData.tipo}
                  onChange={(e) => setEditData({ ...editData, tipo: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="anioVigencia">Año Vigencia</Label>
                <Input
                  id="anioVigencia"
                  value={editData.anioVigencia}
                  onChange={(e) => setEditData({ ...editData, anioVigencia: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="anioDesde">Año Desde</Label>
                <Input
                  id="anioDesde"
                  value={editData.anioDesde}
                  onChange={(e) => setEditData({ ...editData, anioDesde: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="anioHasta">Año Hasta</Label>
                <Input
                  id="anioHasta"
                  value={editData.anioHasta}
                  onChange={(e) => setEditData({ ...editData, anioHasta: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tasaFija">Tasa Fija</Label>
                <Input
                  id="tasaFija"
                  value={editData.tasaFija}
                  onChange={(e) => setEditData({ ...editData, tasaFija: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="uva">Uva</Label>
                <Input
                  id="uva"
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
              <DialogTitle>Agregar Segmento</DialogTitle>
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
                <Label htmlFor="new-anioVigencia">Año Vigencia</Label>
                <Input
                  id="new-anioVigencia"
                  value={newData.anioVigencia}
                  onChange={(e) => setNewData({ ...newData, anioVigencia: e.target.value })}
                  placeholder="Ingrese el año de vigencia"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-anioDesde">Año Desde</Label>
                <Input
                  id="new-anioDesde"
                  value={newData.anioDesde}
                  onChange={(e) => setNewData({ ...newData, anioDesde: e.target.value })}
                  placeholder="Ingrese el año desde"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-anioHasta">Año Hasta</Label>
                <Input
                  id="new-anioHasta"
                  value={newData.anioHasta}
                  onChange={(e) => setNewData({ ...newData, anioHasta: e.target.value })}
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
      </div>
    </Layout>
  );
}
