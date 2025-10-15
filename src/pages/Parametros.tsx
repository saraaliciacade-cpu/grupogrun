import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Filter, Plus, Download, Copy, X, ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

export default function Parametros() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [anoFilter, setAnoFilter] = useState("");
  
  const clearFilters = () => {
    setAnoFilter("");
  };
  const parametrosData = [{
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
  }];

  const filteredData = parametrosData.filter((item) => {
    if (anoFilter === "") return true;
    const ano = parseInt(anoFilter);
    return ano >= item.anoDesde && ano <= item.anoHasta;
  });
  return <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6">
          <Tabs defaultValue="segmentos" className="w-full">
            <TabsList>
              <TabsTrigger value="segmentos">Parámetros Segmentos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="segmentos" className="space-y-4">
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
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

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
                <Button variant="grun" className="w-full" onClick={clearFilters}>
                  <ArrowLeft className="h-4 w-4" />
                  Click Acá para volver a ver todos los Parámetros
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Layout>;
}