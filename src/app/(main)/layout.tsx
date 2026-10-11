import "@/app/globals.css";
import { inter, jetbrainsMono } from "@/app/fonts";

export const metadata = {
  title: "Travis Adams | Builder of Things",
  description: "Portfolio site for Travis Adams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        <div className="flex max-lg:flex-col">
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
