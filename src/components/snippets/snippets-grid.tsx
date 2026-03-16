"use client"

import { useState } from "react"
import NewSnippetCard from "./new-snippet-card"
import SnippetCard from "./snippet-card"
import CreateSnippetModal from "./create-snippet-modal"

export default function SnippetsGrid({ snippets }: any){

  const [open,setOpen] = useState(false)

  return (

    <>
      <div className="grid grid-cols-3 gap-6">

        {snippets.map((snippet:any) => (

          <SnippetCard
            key={snippet.id}
            snippet={snippet}
          />

        ))}

        <NewSnippetCard onClick={()=>setOpen(true)}/>

      </div>

      <CreateSnippetModal
        open={open}
        setOpen={setOpen}
      />

    </>

  )
}