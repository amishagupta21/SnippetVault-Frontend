"use client"

import { useState } from "react"
import NewSnippetCard from "./new-snippet-card"
import SnippetCard from "./snippet-card"
import CreateSnippetModal from "./create-snippet-modal"



export default function SnippetsGrid(){

   const [open,setOpen] = useState(false)

  const snippets = [
    {
      title:"fetch-api-wrapper",
      language:"JS",
      code:`async function fetcher(url) {
 const res = await fetch(url)
 if (!res.ok) throw new Error()
 return res.json()
}`
    },
    {
      title:"flask-cors-config",
      language:"PYTHON",
      code:`from flask_cors import CORS
app = Flask(__name__)
CORS(app)`
    },
    {
      title:"tailwind-btn-styles",
      language:"CSS",
      code:`.btn-primary{
 @apply bg-primary text-white
 px-4 py-2 rounded-lg
}`
    },
    {
      title:"rust-error-handler",
      language:"RUST",
      code:`type Result<T> =
 std::result::Result<T>
`
    }
  ]

  return (
   <>
      <div className="grid grid-cols-3 gap-6">

        {snippets.map(snippet => (
          <SnippetCard
            key={snippet.title}
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