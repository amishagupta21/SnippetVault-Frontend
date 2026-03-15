"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  Code2,
  Languages,
  Hash,
  Settings,
    Plus
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Sidebar() {

  const pathname = usePathname()


  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard"
    },
    {
      name: "Snippets",
      icon: Code2,
      href: "/dashboard/snippets"
    },
    {
      name: "Languages",
      icon: Languages,
      href: "/dashboard/languages"
    },
    {
      name: "Tags",
      icon: Hash,
      href: "/dashboard/tags"
    },
    
  ]

  return (

    <aside className="w-64 bg-[#070B1A] border-r border-[#1E293B] flex flex-col justify-between">

      {/* Top */}

      <div>

        {/* Logo */}

        <div className="p-6 flex items-center gap-3 text-lg font-semibold">

          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">

            <Code2 size={18} />

          </div>

          SnippetVault

        </div>

        {/* Navigation */}

        <nav className="px-4 space-y-1">

          {menu.map((item) => {

            const Icon = item.icon
            const active = pathname === item.href

            return (

              <Link key={item.name} href={item.href}>

                <div
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer
                  ${active
                      ? "bg-indigo-600/20 text-indigo-400"
                      : "text-gray-400 hover:bg-[#111827] hover:text-white"
                    }`}
                >

                  <Icon size={18} />

                  {item.name}

                </div>

              </Link>

            )
          })}

        </nav>

        {/* Settings Section */}

        <div className="px-4 mt-8">

          <p className="text-xs text-gray-500 mb-2">
            SETTINGS
          </p>

          <Link href="/dashboard/settings">

            <div className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-[#111827] hover:text-white">

              <Settings size={18} />

              General

            </div>

          </Link>

        </div>

      </div>

      {/* Bottom */}

        <div className="p-4 border-t border-[#1E293B] flex items-center gap-3">

        <Avatar>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm font-medium">Alex Dev</p>
          <p className="text-xs text-gray-400">Pro Account</p>
        </div>
        </div>

    </aside>

  )
}

