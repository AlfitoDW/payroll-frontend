import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ChevronRight, Wallet } from "lucide-react"
import { adminMenu } from "./menu-items"

export default function AppSidebar() {
  const { pathname } = useLocation()

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <SidebarHeader className="p-2">
          <Link to="/admin" className="flex items-center gap-2.5">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Wallet className="h-5 w-5 transition-all group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4" />
            </div>
            <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">Payroll.inc</span>
          </Link>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenu.map((item) => {
                const isParentActive =
                  item.url === pathname ||
                  item.children?.some((c) =>
                    pathname.startsWith(c.url)
                  )

                // ===== MENU WITH CHILD =====
                if (item.children) {
                  return (
                    <Collapsible
                      key={item.title}
                      defaultOpen={isParentActive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton isActive={isParentActive}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>

                            <ChevronRight
                              className="
                                ml-auto h-4 w-4
                                transition-transform
                                group-data-[state=open]/collapsible:rotate-90
                              "
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((child) => (
                              <SidebarMenuSubItem key={child.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === child.url}
                                >
                                  <Link to={child.url}>
                                    {child.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )
                }

                // ===== SINGLE MENU =====
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                    >
                      <Link to={item.url!}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
