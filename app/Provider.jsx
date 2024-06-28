"use client";
import { ThemeProvider } from "next-themes";
import Header from "./_components/Header";

function Provider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      themes={["light", "dark"]}
    >
      <div>
        <Header />
        <main className="mt-10 px-6 md:px-20 relative">{children}</main>
      </div>
    </ThemeProvider>
  );
}

export default Provider;
