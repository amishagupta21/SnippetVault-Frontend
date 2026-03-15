"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

export default function SnippetCard({snippet}:any){

  return(

    <Card className="bg-[#0F172A] border-[#1E293B] p-5 space-y-4">

      <div className="flex justify-between">

        <h3 className="font-semibold">
          {snippet.title}
        </h3>

        <Badge>
          {snippet.language}
        </Badge>

      </div>

      <pre className="bg-[#020617] p-4 rounded-md text-sm overflow-hidden">

        <code>
          {snippet.code}
        </code>

      </pre>

      <div className="flex justify-between text-sm text-gray-400">

        <span>Updated 2 days ago</span>

        <div className="flex items-center gap-1">

          <Eye size={14}/>
          1.2k

        </div>

      </div>

    </Card>
  )
}