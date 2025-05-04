import React from "react";
import Link from "next/link";
import { MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "./cout-up";
import { api } from "@/data/api";
import { Clicks } from "@/data/types/clicks";

export default async function HeroSection() {
  const data = await api("/clicks", {
    cache: "no-store",
  });
  const clicks: { Clicks: Clicks[]; count: number } = await data.json();

  return (
    <>
      {/* Home */}
      <main className="overflow-hidden">
        <section className="relative">
          <div className="relative py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <h1 className="text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
                  Bem vindo ao
                  <br /> Fast Double Click
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  Meça a velocidade dos seus Double Clicks em milissegundos e
                  dispute seu lugar no ranking. Demonstre precisão e rapidez
                  dignas dos grandes duelistas do velho oeste digital.
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                  Faça Double Clicks mais rápido que bala de revólver e
                  conquiste o ranking dos pistoleiros digitais. Teste seus
                  reflexos e vire lenda no faroeste dos cliques!
                </p>
                {/* Bottão para começar a jogar */}
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/play">
                      <MousePointerClick className="relative size-4" />
                      <span className="text-nowrap">Start play</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="x-auto relative mx-auto mt-2 max-w-lg sm:mt-8 items-center flex justify-center">
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>
                <div className="mx-auto text-center p-2">
                  <h1 className="text-3xl font-medium mb-2">Mais de</h1>
                  <CountUp
                    from={0}
                    to={clicks.count * 2}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-6xl"
                  />
                  <h1 className="text-3xl font-medium mt-3">
                    Clicks realizados
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
