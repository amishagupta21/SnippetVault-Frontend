"use client"

import { X } from "lucide-react"

export default function TagsList(){

 const tags = [
  {name:"#react",count:12,color:"blue"},
  {name:"#api",count:8,color:"blue"},
  {name:"#frontend",count:45,color:"blue"},
  {name:"#bug",count:3,color:"red"},
  {name:"#typescript",count:31,color:"blue"},
  {name:"#tailwind",count:19,color:"blue"},
  {name:"#production",count:5,color:"green"},
  {name:"#hooks",count:14,color:"blue"},
  {name:"#sql",count:7,color:"blue"},
  {name:"#utils",count:22,color:"yellow"},
  {name:"#graphql",count:6,color:"blue"},
  {name:"#auth",count:11,color:"blue"}
 ]

 return(

  <div className="space-y-6">

    <div className="flex items-center gap-2">

      <h2 className="text-xl font-semibold">
        All Tags
      </h2>

      <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full">
        24 Total
      </span>

    </div>

    <div className="flex flex-wrap gap-3">

      {tags.map(tag =>(

        <div
          key={tag.name}
          className="flex items-center gap-2 bg-[#111827] border border-[#1E293B] px-4 py-2 rounded-full hover:border-indigo-500"
        >

          <span className="text-sm">
            {tag.name}
          </span>

          <span className="text-xs bg-[#1E293B] px-2 rounded-full">
            {tag.count}
          </span>

          <X size={14} className="cursor-pointer text-gray-400"/>

        </div>

      ))}

    </div>

  </div>

 )
}