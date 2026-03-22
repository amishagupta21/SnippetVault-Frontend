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
import { useRouter } from "next/navigation"

export default function AddTagModal({ open, setOpen }: any) {

  const [name, setName] = useState("")
  const [color, setColor] = useState("blue")

  const router = useRouter()

  const colors = [
    { name: "red", class: "bg-red-500" },
    { name: "blue", class: "bg-blue-500" },
    { name: "green", class: "bg-emerald-500" },
  ]

  const handleSubmit = async () => {
    if (!name) return

    try {
      await fetch("http://localhost:8000/api/tags/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag_name: name,
          tag_color: color,
        }),
      })

      setOpen(false)
      setName("")
      setColor("blue")

      router.refresh() // 🔥 refresh server page

    } catch (err) {
      console.error("Error creating tag:", err)
    }
  }

  return (

    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="!max-w-md w-full bg-[#0F172A] border-[#1E293B] text-white">

        <DialogHeader>
          <DialogTitle>Add New Tag</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">

          {/* Tag name */}
          <div>
            <label className="text-sm text-gray-300">Tag Name</label>

            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. frontend"
              className="mt-2 bg-[#020617]"
            />
          </div>

          {/* Color selection */}
          <div>
            <label className="text-sm text-gray-300">Select Tag Color</label>

            <div className="flex gap-3 mt-3">

              {colors.map((c) => (
                <div
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${c.class
                    } ${color === c.name ? "border-2 border-white" : ""}`}
                />
              ))}

            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 pt-4 border-t border-[#1E293B]">

            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>

            <Button onClick={handleSubmit}>
              Add Tag
            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  )
}