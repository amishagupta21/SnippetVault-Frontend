"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AddLanguageModal from "./add-language-modal"

type Props = {
  onSuccess?: () => void
}

export default function AddLanguageButton({ onSuccess }: Props) {

  const [open, setOpen] = useState(false)

  

  return (
    <>
      <Button
        className="bg-indigo-600 hover:bg-indigo-700 gap-2"
        onClick={() => setOpen(true)}
      >
        <Plus size={16} />
        Add Language
      </Button>

      <AddLanguageModal
        open={open}
        setOpen={setOpen}
        onSuccess={onSuccess}
      />
    </>
  )
}