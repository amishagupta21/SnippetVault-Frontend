"use client"

import { useState } from "react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export default function LanguagesTable() {

    const languages = [
        { code: "PY", name: "Python", snippets: 1240, date: "Oct 12, 2023" },
        { code: "JS", name: "JavaScript", snippets: 2850, date: "Sep 28, 2023" },
        { code: "TS", name: "TypeScript", snippets: 942, date: "Nov 05, 2023" },
        { code: "RS", name: "Rust", snippets: 312, date: "Dec 01, 2023" },
        { code: "GO", name: "Go", snippets: 156, date: "Jan 15, 2024" },
        { code: "RB", name: "Ruby", snippets: 90, date: "Feb 10, 2024" },
        { code: "KT", name: "Kotlin", snippets: 70, date: "Feb 12, 2024" },
        { code: "SW", name: "Swift", snippets: 60, date: "Feb 15, 2024" }
    ]

    const [page, setPage] = useState(1)

    const perPage = 5

    const totalPages = Math.ceil(languages.length / perPage)

    const start = (page - 1) * perPage
    const end = start + perPage

    const currentData = languages.slice(start, end)

    return (

        <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden p-6">

            <Table>

                <TableHeader>
                    <TableRow className="border-[#1E293B]">

                        <TableHead>LANGUAGE NAME</TableHead>
                        <TableHead>NUMBER OF SNIPPETS</TableHead>
                        <TableHead>DATE ADDED</TableHead>
                        <TableHead className="text-right">ACTIONS</TableHead>

                    </TableRow>
                </TableHeader>

                <TableBody>

                    {currentData.map((lang) => (
                        <TableRow key={lang.code} className="border-[#1E293B]">

                            <TableCell className="flex items-center gap-3">

                                <div className="w-8 h-8 bg-[#1E293B] rounded-md flex items-center justify-center text-sm">
                                    {lang.code}
                                </div>

                                {lang.name}

                            </TableCell>

                            <TableCell>
                                {lang.snippets.toLocaleString()}
                            </TableCell>

                            <TableCell>
                                {lang.date}
                            </TableCell>

                            <TableCell className="text-right space-x-3">

                                <button className="text-indigo-400 hover:underline">
                                    Edit
                                </button>

                                <button className="text-red-400 hover:underline">
                                    Delete
                                </button>

                            </TableCell>

                        </TableRow>
                    ))}

                </TableBody>

            </Table>

            {/* Pagination */}

            <div className="flex justify-between items-center text-sm text-gray-400 mt-6">

                <p>
                    Showing {start + 1} to {Math.min(end, languages.length)} of {languages.length} languages
                </p>

                <div className="flex gap-2">

                    {Array.from({ length: totalPages }).map((_, index) => {

                        const pageNumber = index + 1

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                className={`w-8 h-8 rounded-md ${page === pageNumber
                                        ? "bg-indigo-600"
                                        : "hover:bg-[#1E293B]"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        )

                    })}

                </div>

            </div>

        </div>

    )
}