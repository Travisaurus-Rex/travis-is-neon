import "@/app/globals.css";
import Analytics from "@/components/_shared/analytics/Analytics";

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
    <html lang="en">
      <body className="min-h-screen">
        <Analytics />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
