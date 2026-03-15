"use client"

import { Input } from "@/components/ui/input"
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue
} from "@/components/ui/select"

import { Search } from "lucide-react"

export default function SnippetsFilters() {

  return (
    <div className="flex gap-4 bg-[#0F172A] p-4 rounded-xl border border-[#1E293B]">

      <div className="relative flex-1">

        <Search
          size={16}
          className="absolute left-3 top-3 text-gray-400"
        />

        <Input
          placeholder="Search snippets by name or content..."
          className="pl-8 bg-[#020617]"
        />

      </div>

      <Select>

        <SelectTrigger className="w-[180px] bg-[#020617]">
          <SelectValue placeholder="All Languages"/>
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="js">JavaScript</SelectItem>
          <SelectItem value="py">Python</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>

        </SelectContent>

      </Select>

      <Select>

        <SelectTrigger className="w-[160px] bg-[#020617]">
          <SelectValue placeholder="All Tags"/>
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="api">API</SelectItem>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="backend">Backend</SelectItem>

        </SelectContent>

      </Select>

    </div>
  )
}