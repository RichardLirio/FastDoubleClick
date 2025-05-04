import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormPlay from "./form-play";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Fast Double Click</CardTitle>
        <CardDescription>
          Bem vindo, para começar digite seu nome.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormPlay />
      </CardContent>
    </Card>
  );
}
