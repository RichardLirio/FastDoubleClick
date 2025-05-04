"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function FormPlay() {
  const [name, setName] = useState(""); //seta variavel para o nome do jogador
  const [clickEnabled, setClickEnabled] = useState(false); //habilita botão para registro do tempo
  const [submitEnabled, setSubmitEnabled] = useState(false); //habilita o botão para o envio do formulário
  const [clickStart, setClickStart] = useState<number | null>(null); //verifica se o click inicial foi dado
  const [interval, setInterval] = useState<number | null>(null); //varivel para armazenar o intervalo
  const [error, setError] = useState<string | null>(null); //varivel em caso de erro
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

  return (
    <form>
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
              if (e.target.value.trim() !== "") setClickEnabled(true);
              else setClickEnabled(false);
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default FormPlay;
