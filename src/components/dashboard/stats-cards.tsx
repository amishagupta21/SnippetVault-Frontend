"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, Globe, Hash, Eye } from "lucide-react"

export default function StatsCards() {

  const stats = [
    { title: "Total Snippets", value: "1,248", icon: FileText },
    { title: "Languages", value: "14", icon: Globe },
    { title: "Active Tags", value: "42", icon: Hash },
    { title: "Public Views", value: "8.4k", icon: Eye },
  ]

  return (
    <div className="grid grid-cols-4 gap-6">

      {stats.map((stat) => {

        const Icon = stat.icon

        return (
          <Card key={stat.title} className="bg-[#0F172A] border-[#1E293B]">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-400">
                    {stat.title}
                  </p>

                  <p className="text-2xl font-bold mt-2">
                    {stat.value}
                  </p>
                </div>

                <Icon className="text-indigo-400" />

              </div>

            </CardContent>

          </Card>
        )
      })}

    </div>
  )
}