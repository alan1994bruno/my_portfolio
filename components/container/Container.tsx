import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cn("w-full flex justify-center", className)}>
      <div className="xl:w-[80%] px-8 py-16 md:px-16 md:py-24">{children}</div>
    </div>
  );
}
