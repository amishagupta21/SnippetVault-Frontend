"use client"

import { useState } from "react"

import Topbar from "@/components/dashboard/topbar"
import SnippetsHeader from "@/components/snippets/snippets-header"
import SnippetsFilters from "@/components/snippets/snippets-filters"
import SnippetsGrid from "@/components/snippets/snippets-grid"
import SnippetsEmpty from "@/components/snippets/snippets-empty"
import CreateSnippetModal from "@/components/snippets/create-snippet-modal"

export default function SnippetsClient() {

  const [open, setOpen] = useState(false)

  const snippets: any[] = []

  return (

    <div className="flex-1 flex flex-col">

       <Topbar onNewSnippet={() => setOpen(true)} />

      <main className="p-8 space-y-6">

        <SnippetsHeader />

        <SnippetsFilters />

        {snippets.length === 0
          ?<SnippetsEmpty onCreate={() => setOpen(true)} />
          : <SnippetsGrid />
        }

      </main>

      <CreateSnippetModal open={open} setOpen={setOpen} />

    </div>

  )
}