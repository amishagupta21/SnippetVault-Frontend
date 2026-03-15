"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddTagModal({ open, setOpen }: any) {

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-emerald-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-gray-400"
  ]

  return (

    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="!max-w-md w-full bg-[#0F172A] border-[#1E293B] text-white">

        <DialogHeader>

          <DialogTitle className="text-xl">
            Add New Tag
          </DialogTitle>

          <p className="text-gray-400 text-sm">
            Create a new category to organize your snippets.
          </p>

        </DialogHeader>

        <div className="space-y-6">

          {/* Tag name */}

          <div>

            <label className="text-sm text-gray-300">
              Tag Name
            </label>

            <Input
              placeholder="e.g., frontend, database, auth"
              className="mt-2 bg-[#020617]"
            />

          </div>

          {/* Color selection */}

          <div>

            <label className="text-sm text-gray-300">
              Select Tag Color
            </label>

            <div className="flex gap-3 mt-3">

              {colors.map((color,i)=>(
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full cursor-pointer border border-white/20 ${color}`}
                />
              ))}

            </div>

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 pt-4 border-t border-[#1E293B]">

            <Button
              variant="ghost"
              onClick={()=>setOpen(false)}
            >
              Cancel
            </Button>

            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Add Tag
            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>

  )
}