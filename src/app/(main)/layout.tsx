import "@/app/globals.css";
import Analytics from "@/components/_shared/analytics/Analytics";
import Sidebar from "@/components/_shared/sidebar/Sidebar";

export const metadata = {
  title: "Travis Adams – Fullstack Engineer",
  description: "Portfolio site for Travis Adams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex max-lg:flex-col">
          <Sidebar />
          <Analytics />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
