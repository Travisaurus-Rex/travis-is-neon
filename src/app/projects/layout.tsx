import "@/app/globals.css";
import { inter, jetbrainsMono } from "@/app/fonts";

export const metadata = {
  title: "Projects | Travis Adams",
  description: "Featured software projects by Travis Adams",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
