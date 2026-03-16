"use client"

import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState } from "react"

type TagsInputProps = {
 tags: string[]
 setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export default function TagsInput({ tags, setTags }: TagsInputProps){

 const [input,setInput] = useState("")

 const addTag = (e:any)=>{

  if(e.key === "Enter" && input){

   e.preventDefault()

   setTags([...tags,input])

   setInput("")
  }

 }

 const removeTag = (tag:string)=>{
  setTags(tags.filter(t=>t!==tag))
 }

 return(

  <div>

   <label className="text-sm text-gray-300">
    Tags
   </label>

   <div className="flex flex-wrap gap-2 mt-2 bg-[#020617] p-3 rounded-md">

    {tags.map(tag=>(
      <Badge key={tag} className="flex items-center gap-1">

       {tag}

       <X
        size={14}
        className="cursor-pointer"
        onClick={()=>removeTag(tag)}
       />

      </Badge>
    ))}

    <input
     className="bg-transparent outline-none text-sm"
     placeholder="Add tag..."
     value={input}
     onChange={e=>setInput(e.target.value)}
     onKeyDown={addTag}
    />

   </div>

  </div>

 )
}