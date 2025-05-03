import Header from "@/components/header";
import React, { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-7">
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
