"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/container/Container";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <Container className="bg-white">
      {/* --- Cabeçalho da Seção --- */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c]">Contact</h2>
        <div className="mt-2 h-1 w-16 bg-[#149ddd]"></div>
        <p className="mt-4 text-gray-600">
          Send me a message if you wish to hire my services:
        </p>
      </div>
      {/* uso futuro lg:grid-cols-[2fr_3fr]" */}
      <div className={cn("grid gap-8")}>
        <div className="flex flex-col gap-8 bg-white p-6 shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-lg">
          <div className="space-y-6">
            <InfoItem
              icon={MapPin}
              title="Address"
              content="Feira de Santana, BA, Brazil"
            />
            <InfoItem
              icon={Phone}
              title="Call Us"
              content="+55 (75) 99286-5734"
            />
            <InfoItem
              icon={Mail}
              title="Email Us"
              content="alanbrunoriosmiguel@gmail.com"
            />
          </div>

          <div className="h-128 w-full overflow-hidden rounded-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.620028741366!2d-38.9600762!3d-12.2535848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7143763d0856d95%3A0xed4d58d8dfe95ffe!2sFeira%20de%20Santana%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* <div className="bg-white p-8 shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-lg">
          <form className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  className="rounded-none border-gray-300 focus-visible:ring-[#149ddd]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="rounded-none border-gray-300 focus-visible:ring-[#149ddd]"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Subject"
                className="rounded-none border-gray-300 focus-visible:ring-[#149ddd]"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Message"
                className="min-h-37.5 rounded-none border-gray-300 focus-visible:ring-[#149ddd]"
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#149ddd] px-8 py-6 text-base hover:bg-[#149ddd]/90 rounded-full"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>*/}
      </div>
    </Container>
  );
}

// --- Componente Auxiliar para os Itens de Contato ---
function InfoItem({ icon: Icon, title, content }: any) {
  return (
    <div className="group flex items-start gap-4">
      {/* Círculo do Ícone com efeito hover azul suave */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#149ddd] transition-colors group-hover:bg-[#149ddd] group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-[#173b6c]">{title}</h4>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}
