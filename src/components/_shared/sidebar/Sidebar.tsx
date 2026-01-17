import Logo from "../logo/Logo";
import LinkShelf from "../link-shelf/LinkShelf";
import DevName from "../dev-name/DevName";
import Navbar from "../navbar/Navbar";
import ThemeToggle from "../theme-toggle/ThemeToggle";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar hidden lg:flex lg:flex-none lg:w-[22rem] sticky top-0 h-screen flex-col justify-between px-8 py-16 bg-sidebar">
        <div>
          <Logo />
          <ThemeToggle />
        </div>
        <Navbar />
        <LinkShelf />
      </aside>

      <header className="lg:hidden sticky top-0 z-20 bg-sidebar p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <DevName />
          <div className="flex items-center">
            <ThemeToggle />
            <LinkShelf />
          </div>
        </div>
      </header>
    </>
  );
}
