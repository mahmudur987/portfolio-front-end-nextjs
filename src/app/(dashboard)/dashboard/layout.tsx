import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 bg-pink-50">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </main>
  );
}
