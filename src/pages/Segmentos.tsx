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
      descripcion: "Segmento A"
    },
    {
      id: 2,
      descripcion: "Segmento B"
    },
    {
      id: 3,
      descripcion: "Segmento C"
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({ descripcion: "" });
  const [newData, setNewData] = useState({ descripcion: "" });

  const openEditDialog = (index: number) => {
    setSelectedIndex(index);
    setEditData({ descripcion: segmentosData[index].descripcion });
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
    setNewData({ descripcion: "" });
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
    segmento.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
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
                      <TableHead>Descripción</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSegmentos.map(segmento => (
                      <TableRow key={segmento.id}>
                        <TableCell className="font-medium">{segmento.descripcion}</TableCell>
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
                <Label htmlFor="descripcion">Descripción</Label>
                <Input
                  id="descripcion"
                  value={editData.descripcion}
                  onChange={(e) => setEditData({ ...editData, descripcion: e.target.value })}
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
                <Label htmlFor="new-descripcion">Descripción</Label>
                <Input
                  id="new-descripcion"
                  value={newData.descripcion}
                  onChange={(e) => setNewData({ ...newData, descripcion: e.target.value })}
                  placeholder="Ingrese la descripción del segmento"
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
