import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const ThemeSwitcher = dynamic(
  () => import("@/components/elements/ThemeSwitcher"),
  { ssr: false }
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("This is SSR");
  return (
    <div className=" flex flex-col min-h-full min-w-full bg-background">
      <nav className="container flex items-center justify-between py-4">
        <Link
          href={"/"}
          className="hover:cursor-pointer text-3xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
          Form Builders
        </Link>
        <ThemeSwitcher />
      </nav>
      <main className="grow flex flex-col container">{children}</main>
    </div>
  );
};

export default Layout;
