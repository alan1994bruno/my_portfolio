"use client";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container/Container";

export function Resume() {
  return (
    <Container className="bg-white">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c]">Resume</h2>
        <div className="mt-2 h-1 w-16 bg-[#149ddd]"></div>
        <p className="mt-4 text-gray-600">
          My journey: professional experience and complementary training.
        </p>
      </div>

      <div className="grid gap-12 xl:grid-cols-2">
        <div className="space-y-12">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#173b6c]">
              Education
            </h3>
            <ResumeItem
              title="Bachelor's Degree in Computer Engineering"
              date="2012 - 2021"
              location="Universidade Estadual de Feira de Santana, Feira de Santana, BA"
            >
              A Computer Engineering education integrates hardware and software,
              combining knowledge of electronics, computer architecture,
              programming, networks, and digital systems. The engineer learns to
              design, develop, and implement complete computational systems—from
              circuits and embedded devices to complex software and
              communication networks. The curriculum includes a strong
              foundation in mathematics, physics, programming, digital and
              analog electronics, operating systems, artificial intelligence,
              and project management. The graduate is qualified to work in areas
              such as robotics, IoT, hardware development, embedded software,
              automation, and cloud computing.
            </ResumeItem>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-[#173b6c]">
            Professional Experience
          </h3>

          <ResumeItem
            title="Junior Full Stack Developer"
            date="2021 - 2025"
            location="Luby Software, São Paulo, SP (Remote)"
          >
            <ul className="list-disc space-y-2 pl-4">
              <li>
                I worked on the development of mobile applications using React
                Native, with a highlight being M Watch. This project involved
                developing native modules in Java to handle command transmission
                to Smartwatch devices.
              </li>
              <li>
                I also contributed to the development of the Student Portal for
                International School, a complex and scalable system designed for
                use across multiple schools. The project architecture combined a
                main interface built with Next.js and an admin panel developed
                in React. The system managed user access levels and tracked
                student activities.
              </li>
              <li>
                In addition to launched projects, I have also developed internal
                initiatives and prototypes that, while not publicly released,
                were crucial for gaining hands-on experience with technologies
                such as TypeORM, Docker, microservices with RabbitMQ,
                authentication and password recovery, transactional email
                templates, Stripe integration, and Firebase push notifications
                for web, Android, and iOS—as well as experience in publishing
                applications on the Apple App Store and Google Play Store.
              </li>
            </ul>
          </ResumeItem>
        </div>
      </div>
    </Container>
  );
}

// --- Componente Auxiliar para itens da Timeline ---
interface ResumeItemProps {
  title: string;
  date: string;
  location: string;
  children: React.ReactNode;
}

function ResumeItem({ title, date, location, children }: ResumeItemProps) {
  return (
    <div className="relative border-l-2 border-gray-200 pl-8 pb-12 last:border-0 last:pb-0">
      {/* Bolinha da Timeline */}
      <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-[#149ddd] bg-white"></span>

      <h4 className="mb-1 text-lg font-bold uppercase text-[#050d18]">
        {title}
      </h4>

      <Badge
        variant="secondary"
        className="mb-4 rounded-sm bg-blue-50 px-4 py-1 text-sm font-semibold text-gray-800 hover:bg-blue-100"
      >
        {date}
      </Badge>

      <p className="mb-4 italic text-gray-700">{location}</p>

      <div className="text-gray-600">{children}</div>
    </div>
  );
}
