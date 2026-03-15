"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function SnippetsTable() {

  const snippets = [
    {
      name: "Custom Auth Hook",
      language: "TypeScript",
      tags: ["auth", "react"],
      edited: "2 hours ago"
    },
    {
      name: "Tailwind Config Preset",
      language: "JavaScript",
      tags: ["ui", "config"],
      edited: "5 hours ago"
    },
    {
      name: "Postgres Connection Pool",
      language: "SQL",
      tags: ["backend", "db"],
      edited: "Yesterday"
    },
    {
      name: "CSS Glassmorphism Utils",
      language: "CSS",
      tags: ["styles"],
      edited: "2 days ago"
    }
  ]

  return (
    <div className="bg-[#0F172A] rounded-xl border border-[#1E293B]">

      <div className="flex justify-between items-center p-6">

        <h3 className="text-lg font-semibold">
          Recent Snippets
        </h3>

        <Button variant="secondary">
          View All
        </Button>

      </div>

      <Table>

        <TableHeader>

          <TableRow>

            <TableHead>Name</TableHead>
            <TableHead>Language</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Last Edited</TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {snippets.map((snippet) => (

            <TableRow key={snippet.name}>

              <TableCell>{snippet.name}</TableCell>

              <TableCell>
                <Badge>{snippet.language}</Badge>
              </TableCell>

              <TableCell className="flex gap-2">

                {snippet.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}

              </TableCell>

              <TableCell className="text-gray-400">
                {snippet.edited}
              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  )
}