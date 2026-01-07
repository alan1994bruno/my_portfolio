// src/components/sections/About.tsx
import Image from "next/image";
import { ChevronRight, Smile, Briefcase, Headset, Users } from "lucide-react";
import { Container } from "@/components/container/Container";

export function About() {
  return (
    <Container className="bg-white">
      {/* Título da Seção */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c]">About</h2>
        <div className="mt-2 h-1 w-16 bg-[#149ddd]"></div>
        <p className="mt-4 text-gray-600">
          I am a full stack developer with 4 years of experience, with a
          stronger focus on <strong>frontend</strong> (React, React Native,
          Next.js, and native development in Java) and also on{" "}
          <strong>backend</strong> using Nest.js, where I have worked on
          everything from simple APIs to microservices-based architectures.
        </p>
        <p className="mt-4 text-gray-600">
          I have experience with <strong>PostgreSQL</strong>,{" "}
          <strong>RabbitMQ</strong> for messaging, and have performed testing
          using <strong>Jest</strong>. I was also responsible for setting up
          development environments via <strong>Docker</strong>, ensuring
          standardization across the team.
        </p>

        <p className="mt-4 text-gray-600">
          I have worked in agile teams following <strong>Scrum</strong>, using{" "}
          <strong>Jira</strong> for task management, and adopted Git best
          practices with organized branching workflows (main, staging,
          developer) and modern commit conventions.
        </p>

        <p className="mt-4 text-gray-600">
          Furthermore, I am always seeking to improve and stay updated with new
          technologies, actively integrating Artificial Intelligence tools into
          my workflow for code validation, optimization, and accelerating
          project development. Among the AI technologies I have worked with are
          Gemini, ChatGPT, DeepSeek, and Perplexity.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="relative h-80 w-full overflow-hidden rounded-lg lg:h-full">
          {
            <Image
              src="/images/profile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          }
        </div>

        {/* Coluna da Direita: Informações */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold text-[#173b6c]">
            Full Stack Developer
          </h3>

          {/* Grid de Dados Pessoais */}
          <div className="grid gap-4 2xl:grid-cols-2 min-h-48">
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Birthday:</strong>{" "}
                <span className="text-gray-600">9 March 1994</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Website:</strong>{" "}
                <span className="text-gray-600">www.example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Phone:</strong>{" "}
                <span className="text-gray-600">+55 (75) 99286-5734</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">City:</strong>{" "}
                <span className="text-gray-600">Feira de Santana, BRA</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Age:</strong>{" "}
                <span className="text-gray-600">31</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Degree:</strong>{" "}
                <span className="text-gray-600">Master</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Email:</strong>{" "}
                <span className="text-gray-600">
                  alanbrunoriosmiguel@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#149ddd]" />
                <strong className="text-gray-800">Freelance:</strong>{" "}
                <span className="text-gray-600">Available</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-600"></p>
        </div>
      </div>
    </Container>
  );
}
