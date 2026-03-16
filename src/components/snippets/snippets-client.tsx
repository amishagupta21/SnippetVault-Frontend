"use client"

import { useState, useEffect } from "react"

import Topbar from "@/components/dashboard/topbar"
import SnippetsHeader from "@/components/snippets/snippets-header"
import SnippetsFilters from "@/components/snippets/snippets-filters"
import SnippetsGrid from "@/components/snippets/snippets-grid"
import SnippetsEmpty from "@/components/snippets/snippets-empty"
import CreateSnippetModal from "@/components/snippets/create-snippet-modal"

export default function SnippetsClient() {

  const [open, setOpen] = useState(false)

  const [snippets, setSnippets] = useState<any[]>([])

  const [loading, setLoading] = useState(true)

  // Fetch snippets from Django
  useEffect(() => {

    async function fetchSnippets() {

      try {

        const res = await fetch("http://127.0.0.1:8000/api/snippets/")

        const data = await res.json()

        setSnippets(data)

      } catch (error) {

        console.error("Failed to fetch snippets", error)

      } finally {

        setLoading(false)

      }
    }

    fetchSnippets()

  }, [])

  return (

    <div className="flex-1 flex flex-col">

      <Topbar onNewSnippet={() => setOpen(true)} />

      <main className="p-8 space-y-6">

        <SnippetsHeader />

        <SnippetsFilters />

        {loading ? (
          <p className="text-gray-400">Loading snippets...</p>
        ) : snippets.length === 0 ? (
          <SnippetsEmpty onCreate={() => setOpen(true)} />
        ) : (
          <SnippetsGrid snippets={snippets} />
        )}

      </main>

      <CreateSnippetModal open={open} setOpen={setOpen} />

    </div>

  )
}