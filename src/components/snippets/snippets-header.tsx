"use client"

import { LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SnippetsHeader() {

  return (
    <div className="flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold">
          All Snippets
        </h1>

        <p className="text-gray-400">
          Manage and organize your code library.
        </p>

      </div>

      <div className="flex items-center gap-3">

        <span className="text-sm text-gray-400">
          LAYOUT
        </span>

        <Button size="icon" variant="secondary">
          <LayoutGrid size={16}/>
        </Button>

        <Button size="icon" variant="ghost">
          <List size={16}/>
        </Button>

      </div>

    </div>
  )
}