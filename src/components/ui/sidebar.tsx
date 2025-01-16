"use client"

import Link from "next/link"
import {
    LayoutDashboard,
    Users,
    Settings,
    HelpCircle,
    BarChart2,
    FileText,
    Mail,
    Calendar
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
        variant: "default",
    },
    {
        title: "Analytics",
        icon: BarChart2,
        href: "/analytics",
        variant: "ghost",
    },
    {
        title: "Users",
        icon: Users,
        href: "/users",
        variant: "ghost",
    },
    {
        title: "Content",
        icon: FileText,
        href: "/content",
        variant: "ghost",
    },
    {
        title: "Messages",
        icon: Mail,
        href: "/messages",
        variant: "ghost",
    },
    {
        title: "Calendar",
        icon: Calendar,
        href: "/calendar",
        variant: "ghost",
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/settings",
        variant: "ghost",
    },
    {
        title: "Help",
        icon: HelpCircle,
        href: "/help",
        variant: "ghost",
    },
]

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={cn("pb-12 w-64", className)}>
            <div className="space-y-4 py-4">
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
                        Admin Panel
                    </h2>
                    <div className="space-y-1">
                        {sidebarLinks.map((link) => (
                            <Button
                                key={link.title}
                                variant={link.variant as "default" | "ghost"}
                                size="sm"
                                className="w-full justify-start"
                                asChild
                            >
                                <Link href={link.href}>
                                    <link.icon className="mr-2 h-4 w-4" />
                                    {link.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 