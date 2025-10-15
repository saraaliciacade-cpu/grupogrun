import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil } from "lucide-react";

export default function Parametros() {
  const parametrosData = [
    { tipo: "Auto", anoVigencia: 2025, anoDesde: 2025, anoHasta: 2025, tasaFija: "85,00", uva: "80,00" },
    { tipo: "Auto", anoVigencia: 2025, anoDesde: 2021, anoHasta: 2024, tasaFija: "80,00", uva: "70,00" },
    { tipo: "Auto", anoVigencia: 2025, anoDesde: 2019, anoHasta: 2020, tasaFija: "70,00", uva: "65,00" },
    { tipo: "Auto", anoVigencia: 2025, anoDesde: 2015, anoHasta: 2018, tasaFija: "65,00", uva: "50,00" },
    { tipo: "Auto", anoVigencia: 2025, anoDesde: 2012, anoHasta: 2014, tasaFija: "50,00", uva: "50,00" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="p-6 space-y-6">
          <Tabs defaultValue="segmentos" className="w-full">
            <TabsList>
              <TabsTrigger value="segmentos">Parámetros Segmentos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="segmentos" className="space-y-4">
              <Card className="grun-shadow-lg border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-foreground">Parámetros Segmentos</CardTitle>
                  <div className="flex gap-2">
                    <Button className="bg-[#21532d] hover:bg-[#1a4224] text-white">
                      Agregar
                    </Button>
                    <Button className="bg-[#21532d] hover:bg-[#1a4224] text-white">
                      Exportar
                    </Button>
                    <Button className="bg-[#21532d] hover:bg-[#1a4224] text-white">
                      Copiar Segmentos
                    </Button>
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
                      {parametrosData.map((row, index) => (
                        <TableRow key={index}>
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
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
