"use client"

import Editor from "@monaco-editor/react"

type CodeEditorProps = {
 code: string
 setCode: React.Dispatch<React.SetStateAction<string>>
}

export default function CodeEditor({ code, setCode }: CodeEditorProps){

 return(

  <div>

   <div className="flex justify-between text-sm text-gray-400 mb-2">

    <span>Code Snippet</span>

    <span>EDITOR MODE: NORMAL</span>

   </div>

   <div className="rounded-md overflow-hidden border border-[#1E293B]">

    <Editor
     height="300px"
     language="javascript"
     value={code}
     theme="vs-dark"
     onChange={(value)=>setCode(value || "")}
    />

   </div>

  </div>

 )
}