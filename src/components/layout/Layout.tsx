import React, { type ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Navbar />
      <section className="container mt-32  antialiased">{children}</section>
    </main>
  );
}
