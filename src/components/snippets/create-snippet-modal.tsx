"use client"

import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue
} from "@/components/ui/select"
import TagsInput from "./tags-input"
import CodeEditor from "./code-editor"



export default function CreateSnippetModal({
 open,
 setOpen
}:any) {

 return (



  <Dialog open={open} onOpenChange={setOpen} >

   <DialogContent className="!max-w-5xl w-full bg-[#0F172A] border-[#1E293B] text-white">

    <DialogHeader>

     <DialogTitle className="text-2xl">
      Create New Snippet
     </DialogTitle>

     <p className="text-gray-400 text-sm">
      Add a new code snippet to your secure vault
     </p>

    </DialogHeader>

    <div className="space-y-6">

      {/* Row */}

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="text-sm text-gray-300">
            Snippet Title
          </label>

          <Input
           placeholder="e.g. React Navbar Component"
           className="mt-2 bg-[#020617]"
          />

        </div>

        <div>

          <label className="text-sm text-gray-300">
            Programming Language
          </label>

          <Select>

           <SelectTrigger className="mt-2 bg-[#020617]">
            <SelectValue placeholder="Select language"/>
           </SelectTrigger>

           <SelectContent>

            <SelectItem value="javascript">
             JavaScript
            </SelectItem>

            <SelectItem value="typescript">
             TypeScript
            </SelectItem>

            <SelectItem value="python">
             Python
            </SelectItem>

            <SelectItem value="rust">
             Rust
            </SelectItem>

           </SelectContent>

          </Select>

        </div>

      </div>

      {/* Tags */}

      <TagsInput />

      {/* Code Editor */}

      <CodeEditor />

      {/* Footer */}

      <div className="flex justify-end gap-4 pt-4 border-t border-[#1E293B]">

        <Button
         variant="ghost"
         onClick={()=>setOpen(false)}
        >
         Cancel
        </Button>

        <Button className="bg-indigo-600 hover:bg-indigo-700">

         Save Snippet

        </Button>

      </div>

    </div>

   </DialogContent>

  </Dialog>



 )
}