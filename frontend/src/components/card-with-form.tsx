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
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="button">Deploy</Button>
      </CardFooter>
    </Card>
  );
}
