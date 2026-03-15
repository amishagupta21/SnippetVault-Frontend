"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import AddTagButton from "./add-tag-button"

export default function CreateTag() {

    const [tag, setTag] = useState("")

    return (

        <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6">

            <p className="text-sm text-gray-300 mb-3">
                Create New Tag
            </p>

            <div className="flex gap-3">

                <Input
                    placeholder="Enter tag name (e.g. #backend, #auth)"
                    className="bg-[#020617]"
                />

                <AddTagButton />

            </div>

            <p className="text-xs text-gray-500 mt-2">
                Pro-tip: Use prefixes like 'lang:' or 'proj:' for better grouping.
            </p>

        </div>
    )
}