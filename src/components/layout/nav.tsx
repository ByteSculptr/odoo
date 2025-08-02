
"use client";

import {
  Home,
  PlusSquare,
  Settings,
  User,
  Shield,
  Ticket,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";

const allLinks = {
    "Admin": [
        { href: "/dashboard/admin", label: "Dashboard", icon: Home },
        { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ],
    "Support Agent": [
        { href: "/dashboard/support-agent", label: "Tickets", icon: Ticket },
        { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ],
    "End-User": [
        { href: "/dashboard/end-user", label: "My Tickets", icon: Ticket },
        { href: "/dashboard/end-user/new", label: "New Ticket", icon: PlusSquare },
        { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ]
};


export function Nav() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [userRole, setUserRole] = useState<keyof typeof allLinks | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
      }
    };
    fetchUserRole();
  }, [user]);

  const links = userRole ? allLinks[userRole] : [];


  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <Link href={link.href} className="w-full">
            <SidebarMenuButton
              isActive={pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/dashboard')}
              tooltip={link.label}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
