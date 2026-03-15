"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AddTagModal from "./add-tag-modal"

export default function AddTagButton(){

  const [open,setOpen] = useState(false)

  return(

    <>
      <Button
        onClick={()=>setOpen(true)}
        className="bg-indigo-600 hover:bg-indigo-700 gap-2"
      >
        <Plus size={16}/>
        Add
      </Button>

      <AddTagModal
        open={open}
        setOpen={setOpen}
      />
    </>

  )
}