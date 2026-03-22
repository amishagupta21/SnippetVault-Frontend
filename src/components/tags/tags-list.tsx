"use client"

import { X } from "lucide-react"

export default function TagsList({ tags = [] }: any) {

 return (

  <div className="space-y-6">

    <div className="flex items-center gap-2">

      <h2 className="text-xl font-semibold">
        All Tags
      </h2>

      <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full">
        {tags.length} Total
      </span>

    </div>

    <div className="flex flex-wrap gap-3">

      {tags.length === 0 ? (
        <p className="text-gray-400">No tags found</p>
      ) : (
        tags.map((tag: any) => (

          <div
            key={tag.id}
            className="flex items-center gap-2 bg-[#111827] border border-[#1E293B] px-4 py-2 rounded-full hover:border-indigo-500"
          >

            <span className="text-sm">
              #{tag.tag_name}
            </span>

            <span className="text-xs bg-[#1E293B] px-2 rounded-full">
              {/* optional: count later */}
              0
            </span>

            <X size={14} className="cursor-pointer text-gray-400" />

          </div>

        ))
      )}

    </div>

  </div>
 )
}