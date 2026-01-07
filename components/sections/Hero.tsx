"use client"; // <--- Importante: Animações rodam no cliente

import Image from "next/image";
import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Conteúdo Central */}
      <div className="z-10 text-center text-white space-y-4">
        <h1 className="text-6xl font-bold tracking-tight">Álan Bruno</h1>

        {/* Container do Texto Animado */}
        <div className="text-2xl font-light flex gap-2 justify-center items-center">
          <span>I'm</span>

          {/* Efeito Typewriter com borda inferior */}
          <span className="border-b-2 border-[#149ddd] pb-1 text-white">
            <Typewriter
              options={{
                strings: [
                  "Freelancer",
                  "Front-end Developer",
                  "Backend Developer",
                  "Android Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75, // Velocidade da digitação
                deleteSpeed: 50, // Velocidade para apagar
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
