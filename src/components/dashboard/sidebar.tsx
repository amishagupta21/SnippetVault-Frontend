"use client"

import {
  LayoutDashboard,
  Code2,
  Languages,
  Hash,
  Settings
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Sidebar() {

  return (
    <aside className="w-64 bg-[#070B1A] border-r border-[#1E293B] flex flex-col justify-between">

      <div>

        <div className="p-6 text-xl font-semibold flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg" />
          SnippetVault
        </div>

        <nav className="space-y-1 px-3">

          <Button variant="secondary" className="w-full justify-start gap-3">
            <LayoutDashboard size={18} />
            Dashboard
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3">
            <Code2 size={18} />
            Snippets
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3">
            <Languages size={18} />
            Languages
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3">
            <Hash size={18} />
            Tags
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings size={18} />
            Settings
          </Button>

        </nav>

      </div>

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