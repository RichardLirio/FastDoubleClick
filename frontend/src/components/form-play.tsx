"use client";

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function FormPlay() {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Nome do player" />
        </div>
      </div>
    </form>
  );
}

export default FormPlay;
