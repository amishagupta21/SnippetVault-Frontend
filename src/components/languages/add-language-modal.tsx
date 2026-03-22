"use client"

import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

import { Code, Terminal, Database, Upload } from "lucide-react"

export default function AddLanguageButton({ open, setOpen, onSuccess }: any) {

    const [name, setName] = useState("")
    const [identifier, setIdentifier] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async () => {
        try {
            await fetch("http://127.0.0.1:8000/api/language/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    language_name: name,
                    syntax_identifier: identifier,
                    language_icon: "code", // 🔥 REQUIRED (you forgot this)
                    description: description,
                })
            })

            setOpen(false)
            onSuccess?.()

            // reset form
            setName("")
            setIdentifier("")
            setDescription("")

        } catch (err) {
            console.error("Error:", err)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogContent className="!max-w-3xl w-full bg-[#0F172A] border-[#1E293B] text-white">

                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        Add New Language
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">

                    {/* Row */}
                    <div className="grid grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm text-gray-300">
                                Language Name
                            </label>

                            <Input
                                placeholder="e.g. TypeScript"
                                className="mt-2 bg-[#020617]"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-300">
                                Syntax Identifier
                            </label>

                            <Select onValueChange={(value) => setIdentifier(value)}>
                                <SelectTrigger className="mt-2 bg-[#020617]">
                                    <SelectValue placeholder="Select (e.g., typescript, py)" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="javascript">javascript</SelectItem>
                                    <SelectItem value="typescript">typescript</SelectItem>
                                    <SelectItem value="python">python</SelectItem>
                                    <SelectItem value="rust">rust</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    {/* Icons (optional for now, ignore backend) */}
                    <div>
                        <label className="text-sm text-gray-300">
                            Language Icon
                        </label>

                        <div className="grid grid-cols-4 gap-4 mt-3">
                            <IconCard icon={<Code />} label="Code" />
                            <IconCard icon={<Terminal />} label="Terminal" />
                            <IconCard icon={<Database />} label="Database" />
                            <IconCard icon={<Upload />} label="Custom SVG" />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm text-gray-300">
                            Description
                        </label>

                        <textarea
                            className="mt-2 w-full h-28 bg-[#020617] border border-[#1E293B] rounded-md p-3"
                            placeholder="Describe..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-4 pt-4 border-t border-[#1E293B]">

                        <Button variant="ghost" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>

                        <Button
                            className="bg-indigo-600 hover:bg-indigo-700"
                            onClick={handleSubmit}
                        >
                            Add Language
                        </Button>

                    </div>

                </div>

            </DialogContent>

        </Dialog>
    )
}

function IconCard({ icon, label }: any) {
    return (
        <div className="border border-[#1E293B] rounded-lg p-4 flex flex-col items-center gap-2 hover:border-indigo-500 cursor-pointer">
            {icon}
            <p className="text-sm text-gray-400">{label}</p>
        </div>
    )
}