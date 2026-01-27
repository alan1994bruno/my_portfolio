"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container/Container";
import { Plus } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "APP",
    title: "MWatch",
    image: "/images/portfolio/mwatch.png",
    url: "https://play.google.com/store/apps/details?id=br.com.grupomulti.multismartwatches&utm_source=latam_Med", // <--- Coloque o link real aqui
  },
  {
    id: 2,
    category: "WEBSITE",
    title: "International School Student Portal",
    image: "/images/portfolio/albie.png",
    url: "https://allbie.internationalschool.global/pt-BR/sign-in/student?callbackUrl=%2F",
  },
  {
    id: 3,
    category: "DESKTOP",
    title: "JPGConvert",
    image: "/images/portfolio/jpgconverter.png",
    url: "https://github.com/alan1994bruno/JPGConvert",
  },
  {
    id: 4,
    category: "DESKTOP APP WEBSITE",
    title: "Motel",
    image: "/images/portfolio/motel.png",
    url: "https://github.com/alan1994bruno/motel_example/tree/main",
  },
];

const categories = ["ALL", "APP", "WEBSITE", "DESKTOP", "DESKTOP APP WEBSITE"];

export function Portfolio() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = projects.filter((project) =>
    filter === "ALL" ? true : project.category === filter,
  );

  return (
    <Container className="bg-[#f4fafd]">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c]">Portfolio</h2>
        <div className="mt-2 h-1 w-16 bg-[#149ddd]"></div>
        <p className="mt-4 text-gray-600">
          Check out below a sample of my work, featuring real projects and case
          studies I developed.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            variant="ghost"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-transparent hover:text-[#149ddd]",
              filter === cat
                ? "text-[#149ddd] bg-white shadow-sm"
                : "text-gray-700",
            )}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative h-64 w-full overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h4 className="text-xl font-bold text-white">{project.title}</h4>
              <p className="text-sm uppercase text-gray-300">
                {project.category}
              </p>

              <div className="mt-4 flex gap-4">
                {/* 3. Botão com ação de Link (asChild) */}
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-full border-white bg-transparent text-white hover:bg-[#149ddd] hover:border-[#149ddd]"
                >
                  <a
                    href={project.url} // Usa o link definido no array
                    target="_blank" // Abre em nova guia
                    rel="noopener noreferrer"
                    title={`Ver projeto ${project.title}`}
                  >
                    {/* Ícone de Mais (+) do Lucide */}
                    <Plus className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
