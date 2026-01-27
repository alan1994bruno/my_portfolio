"use client";
import { Progress } from "@/components/ui/progress";
import { Container } from "@/components/container/Container";

// Dados das habilidades para ficar fácil de editar
const skillsLeft = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 90 },
  { name: "JAVASCRIPT", value: 75 },
  { name: "JAVA", value: 75 },
  { name: "TYPESCRIPT", value: 75 },
  { name: "C#", value: 75 },
  { name: "Docker", value: 75 },
  { name: "NestJs", value: 70 },
  { name: "Unity 3D", value: 60 },
  { name: "Python", value: 20 },
  { name: "JavaFX", value: 60 },
  { name: "styled-components", value: 80 },
  { name: "Kotlin", value: 60 },
];

const skillsRight = [
  { name: "REACT", value: 85 },
  { name: "REACTNATIVE", value: 85 },
  { name: "NEXTJS", value: 80 },
  { name: "PHP", value: 50 },
  { name: "WORDPRESS/CMS", value: 30 },
  { name: "PHOTOSHOP", value: 60 },
  { name: "SQL", value: 70 },
  { name: "UNREAL ENGINE", value: 50 },
  { name: "C", value: 70 },
  { name: "C++", value: 70 },
  { name: "Spring Boot", value: 60 },
  { name: "Aplicativo .NET MAUI Blazor Hybrid", value: 60 },
  { name: "Mobile Aplication Android Studio Kotlin", value: 60 },
];

export function Skills() {
  return (
    // bg-[#f5f8fd] dá aquele tom azulado claro da imagem
    <Container className="bg-[#f4fafd]">
      {/* Cabeçalho da Seção */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c]">Skills</h2>
        <div className="mt-2 h-1 w-16 bg-[#149ddd]"></div>
        <p className="mt-4 text-gray-600">
          Throughout my professional and academic journey, I have acquired and
          developed the following skills:
        </p>
      </div>

      {/* Grid de 2 Colunas */}
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
        {/* Coluna Esquerda */}
        <div className="space-y-6">
          {skillsLeft.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} value={skill.value} />
          ))}
        </div>

        {/* Coluna Direita */}
        <div className="space-y-6">
          {skillsRight.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} value={skill.value} />
          ))}
        </div>
      </div>
    </Container>
  );
}

// Sub-componente para cada barra de habilidade
function SkillItem({ name, value }: { name: string; value: number }) {
  return (
    <div className="w-full">
      {/* Texto (Nome e Porcentagem) */}
      <div className="mb-2 flex justify-between">
        <span className="font-bold text-[#173b6c] text-sm uppercase">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-600">{value}%</span>
      </div>

      {/* FIX: Usando apenas o Progress do Shadcn.
         - bg-blue-100: A cor do fundo da barra (a parte vazia, cinza/azul claro)
         - [&>*]:bg-[#149ddd]: O "Pulo do Gato". Isso força o filho interno (a barra de progresso) a ser azul.
      */}
      <Progress
        value={value}
        className="h-3 w-full bg-blue-100 [&>*]:bg-[#149ddd] rounded-none"
      />
    </div>
  );
}
