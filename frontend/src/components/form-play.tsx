"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MousePointerClick, Terminal } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const registertimeBetweenClicksSchema = z.object({
  name: z.string(),
  timeBetweenClicks: z.coerce.number(),
}); //tipagem para validação dos dados com zod

type RegistertimeBetweenClicksSchema = z.infer<
  typeof registertimeBetweenClicksSchema
>; //integração com o ts

function FormPlay() {
  const [name, setName] = useState(""); //seta variavel para o nome do jogador
  const [clickEnabled, setClickEnabled] = useState(false); //habilita botão para registro do tempo
  const [submitEnabled, setSubmitEnabled] = useState(false); //habilita o botão para o envio do formulário
  const [clickStart, setClickStart] = useState<number | null>(null); //verifica se o click inicial foi dado
  const [interval, setInterval] = useState<number | null>(null); //varivel para armazenar o intervalo
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const now = performance.now(); //performance melhor que o date now para registrar ms
    if (clickStart === null) {
      //verifica se o clickstart ja foi iniciado
      setClickStart(now); //seta caso não tenha sido iniciado
    } else {
      const diff = now - clickStart; //calcula o intervlo dos clicks
      setInterval(Math.round(diff)); //arredonda para inteiro
      setClickStart(null); //reseta o click inicial
      setClickEnabled(false); //desabilita o botão do double click
      setSubmitEnabled(true); //habilita o botão para envio dos dados
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (interval) {
        const body: RegistertimeBetweenClicksSchema = {
          name,
          timeBetweenClicks: interval,
        }; //tipagem do body caso o interval tenha sido registrado corretamente

        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${baseUrl}/clicks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }); // fetch para o backend com os dados

        if (!res.ok) throw new Error("Erro ao enviar os dados."); // em caso de erro

        //zera tudo para um novo registro ser feito
        setName("");
        setInterval(null);
        setSubmitEnabled(false);
        setClickEnabled(false);
        toast("Tempo registrado com sucesso.");
      } else {
        toast("Intervalo não calculado corretamente.");
      }
    } catch (err: any) {
      toast(err.message || "Erro desconhecido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Nome do player"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() !== "")
                setClickEnabled(true); //valida se o nome foi digitado
              else setClickEnabled(false);
            }}
          />
        </div>
        <Button
          type="button"
          variant="destructive"
          className="text-white"
          onClick={handleClick}
          disabled={!clickEnabled}
        >
          <MousePointerClick className="relative size-4" />
          Realize um "Fast Double Click".
        </Button>

        {interval !== null && (
          <Input
            type="text"
            readOnly
            value={`Intervalo registrado: ${interval} ms`}
            className="font-semibold"
          />
        )}

        <Button
          type="submit"
          variant="default"
          disabled={!submitEnabled || loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </div>
    </form>
  );
}

export default FormPlay;
