"use client"

import { Plus } from "lucide-react"

export default function NewSnippetCard({onClick}:any){

  return(

    <div  onClick={onClick} className="border-2 border-dashed border-[#1E293B] rounded-xl flex items-center justify-center h-[240px] hover:border-indigo-500 cursor-pointer">

      <div className="text-center space-y-2">

        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mx-auto">

          <Plus size={20}/>

        </div>

        <p className="text-gray-400">
          Create New Snippet
        </p>

      </div>

    </div>

  )
}