"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search, Plus } from "lucide-react"

export default function Topbar() {

  return (
    <div className="flex items-center justify-between border-b border-[#1E293B] p-4">

      <div className="relative w-[500px]">

        <Search className="absolute left-3 top-3 text-gray-400" size={16} />

        <Input
          placeholder="Search snippets, tags, or documentation..."
          className="pl-8 bg-[#0F172A] border-[#1E293B]"
        />

      </div>

      <div className="flex items-center gap-4">

        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Plus size={16} />
          New Snippet
        </Button>

        <Bell size={18} className="text-gray-400" />

      </div>

    </div>
  )
}