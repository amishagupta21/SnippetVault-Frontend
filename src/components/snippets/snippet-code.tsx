"use client"

import Editor from "@monaco-editor/react"
import { Copy } from "lucide-react"

export default function SnippetCode() {

  const code = `import functools
from flask import request, jsonify
import jwt

def token_required(f):
    @functools.wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message':'Token is missing!'}),401
`

  return (

    <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-4 py-2 border-b border-[#1E293B] text-sm">

        <span className="text-gray-400">
          auth_decorator.py
        </span>

        <button className="flex items-center gap-2 text-gray-300 hover:text-white">
          <Copy size={14}/>
          Copy Code
        </button>

      </div>

      {/* Editor */}

      <Editor
        height="400px"
        defaultLanguage="python"
        defaultValue={code}
        theme="vs-dark"
        options={{
          minimap:{enabled:false},
          fontSize:14,
          readOnly:true
        }}
      />

    </div>
  )
}