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

export default function LanguagesTable({ languages }: any) {

    const safeLanguages = Array.isArray(languages) ? languages : []

    const [page, setPage] = useState(1)

    const perPage = 5

    const totalPages = Math.ceil(safeLanguages.length / perPage)

    const start = (page - 1) * perPage
    const end = start + perPage

    const currentData = safeLanguages.slice(start, end)

    return (

        <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden p-6">

            <Table>

                <TableHeader>
                    <TableRow className="border-[#1E293B]">

                        <TableHead>LANGUAGE NAME</TableHead>
                        <TableHead>IDENTIFIER</TableHead>
                        <TableHead>DATE ADDED</TableHead>
                        <TableHead className="text-right">ACTIONS</TableHead>

                    </TableRow>
                </TableHeader>

                <TableBody>

                    {currentData.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center text-gray-400 py-6">
                                No languages found
                            </TableCell>
                        </TableRow>
                    ) : (
                        currentData.map((lang: any) => (
                            <TableRow key={lang.id} className="border-[#1E293B]">
                                <TableCell className="flex items-center gap-3">

                                    <div className="w-8 h-8 bg-[#1E293B] rounded-md flex items-center justify-center text-sm">
                                        {lang.syntax_identifier?.slice(0, 2).toUpperCase()}
                                    </div>

                                    {lang.language_name}

                                </TableCell>

                                <TableCell>
                                    {lang.syntax_identifier}
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
                        ))
                    )}

                </TableBody>

            </Table>

            {/* Pagination */}

            {safeLanguages.length > 0 && (
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
            )}

        </div>

    )
}