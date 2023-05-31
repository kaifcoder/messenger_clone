import React from "react";
import MobileFooter from "./MobileFooter";
import DesktopSidebar from "./DesktopSidebar";
import getCurrentUser from "@/app/action/getCurrentUser";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
