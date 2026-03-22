"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import AddTagButton from "./add-tag-button"
import { useRouter, useSearchParams } from "next/navigation"

export default function CreateTag({ defaultQuery = "" }: any) {

    const router = useRouter()
    const searchParams = useSearchParams()

    const initialQuery = defaultQuery || searchParams.get("q") || ""

    const [query, setQuery] = useState(initialQuery)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

            if (query) {
                params.set("q", query)
            } else {
                params.delete("q")
            }

            router.replace(`?${params.toString()}`)
        }, 300)

        return () => clearTimeout(timeout)
    }, [query])

    return (
        <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6">

            <div className="flex justify-between items-center mb-4">

                <div>
                    <p className="text-lg font-semibold">Tags</p>
                    <p className="text-sm text-gray-400">
                        Search and manage your tags
                    </p>
                </div>

                {/* ✅ untouched */}
                <AddTagButton />
            </div>

            <div className="relative">

                <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tags..."
                    className="pl-9 bg-[#020617]"
                />

            </div>

        </div>
    )
}