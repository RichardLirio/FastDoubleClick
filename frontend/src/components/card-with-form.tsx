"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  const [name, setName] = React.useState<string>("");
  let [primeiroClick, setPrimeiroClick] = React.useState<any>();

  const handleCalculaDoubleClick = () => {
    if (!primeiroClick) {
      setPrimeiroClick(new Date().getTime());
    } else {
      let intervalo = new Date().getTime() - primeiroClick;
      console.log("Tempo entre os cliques: " + intervalo + " ms");
      primeiroClick = null; // Reseta para o próximo clique
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Fast Double Click</CardTitle>
        <CardDescription>
          Bem vindo, para começar digite seu nome.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" placeholder="Nome do player" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="button" onClick={handleCalculaDoubleClick}>
          Deploy
        </Button>
      </CardFooter>
    </Card>
  );
}
