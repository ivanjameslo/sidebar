"use client";

import { 
    Sidebar, 
    SidebarHeader, 
    SidebarContent, 
    SidebarGroup, SidebarGroupContent, 
    SidebarMenu, SidebarMenuItem, SidebarMenuButton,
    useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const menu = [
    {   
        title: "Home",
        href: "/",
        icon: "🏠"
    },
    {
        title: "About",
        href: "/about",
        icon: "ℹ️"
    },
    {
        title: "Reports",
        href: "/reports",
        icon: "📊"
    },
    {
        title: "Help",
        href: "/help",
        icon: "❓"
    }
];

export function Navbar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const { setOpen, state } = useSidebar();

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    return(
        <Sidebar 
            collapsible="icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="transition-all duration-300 ease-in-out"
            {...props}
        >
            <SidebarHeader className="flex items-center justify-center py-4">
                <div className="flex items-center justify-center">
                    {state === "expanded" ? (
                        <h1 className="text-lg font-bold">LOGO</h1>
                    ) : (
                        <div className="text-2xl">🏢</div>
                    )}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.map((item) => (
                                <SidebarMenuItem key={item.title} className="gap-3 mb-2">
                                    <SidebarMenuButton
                                        asChild
                                        className="text-black relative transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:bg-transparent rounded-md hover:shadow-[0_-2px_3px_rgba(0,0,0,0.2),0_8px_12px_rgba(0,0,0,0.6)]"
                                        size="lg"
                                    >
                                        <Link href={item.href} className={`flex items-center font-poppins transition-all duration-300 ease-in-out ${state === "collapsed" ? "justify-center px-2" : "gap-4 pl-8"}`}>
                                            <span className="text-lg">{item.icon}</span>
                                            <span className={`text-black text-base transition-colors duration-300 ease-in-out ${pathname === item.href ? 'font-semibold' : ""} ${state === "collapsed" ? "sr-only" : ""}`}>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}