import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Settings, HelpCircle, Bell, MessageSquare } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigation = [
  { title: "Dashboard", url: "/verifier/dashboard", icon: LayoutDashboard },
  { title: "Clients", url: "/verifier/clients", icon: Users },
  { title: "Remarks", url: "/verifier/remarks", icon: MessageSquare },
];

const bottomNavigation = [
  { title: "Settings", url: "/verifier/settings", icon: Settings },
];

export function VerifierLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="w-64">
          <SidebarContent>
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded font-bold text-lg">
                  TAX
                </div>
                <span className="text-sm text-muted-foreground">VERIFIER</span>
              </div>
            </div>
            
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-accent text-accent-foreground font-medium"
                              : "hover:bg-accent/50"
                          }
                        >
                          <item.icon className="mr-3 h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-auto p-4">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {bottomNavigation.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-accent text-accent-foreground font-medium"
                                : "hover:bg-accent/50"
                            }
                          >
                            <item.icon className="mr-3 h-4 w-4" />
                            <span>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-background flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Jayeetra Bhattacharjee</span>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-muted/20">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}