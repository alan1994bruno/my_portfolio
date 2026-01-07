"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FileText,
  Image as ImageIcon,
  Mail,
  Linkedin,
  Menu, // Importando ícone de Hamburguer
  X, // Importando ícone de Fechar
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Portfolio", href: "#portfolio", icon: ImageIcon },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false); // Estado para controlar o Mobile

  // Fecha o menu automaticamente quando clica em um link (UX melhor no mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Função auxiliar de estilos (Mantida igual)
  const getActiveStyles = (path: string) =>
    pathname === path
      ? "text-[#149ddd] hover:text-[#149ddd]"
      : "text-gray-400 hover:text-white";

  const getIconStyles = (path: string) =>
    pathname === path
      ? "text-[#149ddd]"
      : "text-gray-400 group-hover:text-[#149ddd]";

  // --- CONTEÚDO DA SIDEBAR (Extraído para não repetir código) ---
  const SidebarContent = () => (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col items-center py-8">
        <Avatar className="h-24 w-24 border-4 border-[#2c2f3f]">
          <AvatarImage
            src="/images/profile.png" // Certifique-se que essa imagem existe ou use a do Github
            alt="Profile"
            className="object-cover"
          />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>

        <h2 className="mt-4 text-2xl font-bold text-white">Álan Bruno</h2>

        <div className="mt-3 flex gap-2">
          {[
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/álan-bruno-rios-miguel-ba5635379",
            },
          ].map((item, i) => (
            <Button
              key={i}
              asChild
              size="icon"
              variant="ghost"
              className="h-9 w-9 rounded-full bg-[#212431] text-white hover:bg-[#149ddd] hover:text-white"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <item.Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            asChild
            onClick={handleLinkClick} // Fecha o menu ao clicar
            className={cn(
              "group justify-start gap-4 px-3 py-6 text-base font-medium transition-all hover:bg-transparent",
              getActiveStyles(item.href)
            )}
          >
            <Link href={item.href}>
              <item.icon
                className={cn(
                  "h-6 w-6 transition-colors",
                  getIconStyles(item.href)
                )}
              />
              {item.name}
            </Link>
          </Button>
        ))}
      </nav>

      <Separator className="bg-gray-800 my-4 opacity-50" />

      <div className="p-6 text-center text-xs text-gray-500">
        © 2026 My Portfolio
        <br />
        Designed by <span className="text-[#149ddd]">ABRM</span>
      </div>
    </ScrollArea>
  );

  return (
    <>
      {/* === BOTÃO DE TOGGLE MOBILE (Só aparece em < md) === */}
      {/* Fica fixo no canto superior direito */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-12 w-12 rounded-full bg-[#149ddd] text-white shadow-lg hover:bg-[#149ddd]/90"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* === SIDEBAR DESKTOP (Normal, como estava antes) === */}
      <aside className="hidden h-screen w-[300px] flex-col bg-[#040b14] text-white md:flex">
        <SidebarContent />
      </aside>

      {/* === SIDEBAR MOBILE (Overlay) === */}
      {/* - fixed inset-y-0 left-0: Fixa na esquerda ocupando toda altura
          - z-40: Fica acima do conteúdo do site
          - transform transition-transform: Animação suave
          - -translate-x-full: Esconde para a esquerda quando fechado
      */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-[300px] flex-col bg-[#040b14] text-white transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>

      {/* === OVERLAY ESCURO (Backdrop) === */}
      {/* Clica fora para fechar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
