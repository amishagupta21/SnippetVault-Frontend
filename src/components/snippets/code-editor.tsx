"use client"

import Editor from "@monaco-editor/react"

export default function CodeEditor(){

 return(

  <div>

   <div className="flex justify-between text-sm text-gray-400 mb-2">

    <span>Code Snippet</span>

    <span>EDITOR MODE: NORMAL</span>

   </div>

   <div className="rounded-md overflow-hidden border border-[#1E293B]">

    <Editor
     height="300px"
     defaultLanguage="javascript"
     defaultValue={`// Paste your code here...

function initialize() {
 console.log('SnippetVault Ready')
}`}
     theme="vs-dark"
    />

   </div>

  </div>

 )
}