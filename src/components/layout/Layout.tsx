import React, { type ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Navbar />
      <section className="container my-32 px-4 antialiased   lg:px-8">
        {children}
      </section>
    </main>
  );
}
