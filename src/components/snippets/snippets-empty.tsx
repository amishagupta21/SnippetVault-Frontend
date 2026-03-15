"use client"

import { Button } from "@/components/ui/button"
import { Plus, Sparkles, Zap, Cloud, Users } from "lucide-react"

export default function SnippetsEmpty() {

  return (

    <div className="flex flex-col items-center justify-center text-center py-20 space-y-10">

      {/* Illustration */}

      <div className="w-[420px] h-[200px] rounded-2xl bg-[#111633] border border-[#1E293B] flex items-center justify-center relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="w-20 h-20 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500">

          <Sparkles className="text-indigo-400" size={30} />

        </div>

      </div>

      {/* Title */}

      <div className="space-y-2">

        <h2 className="text-2xl font-semibold">
          No snippets yet
        </h2>

        <p className="text-gray-400 max-w-md">
          Start building your snippet vault to keep your code organized.
        </p>

      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2 px-6 py-5">

          <Plus size={18} />

          Create your first snippet

        </Button>

        <Button
          variant="secondary"
          className="gap-2 bg-[#111827] border border-[#1E293B]"
        >

          <Sparkles size={18} />

          Import examples

        </Button>

      </div>

      {/* Features */}

      <div className="grid grid-cols-3 gap-16 pt-10 text-sm text-gray-400">

        <Feature
          icon={<Zap />}
          title="Quick Access"
          desc="Save hours by reusing code patterns instantly."
        />

        <Feature
          icon={<Cloud />}
          title="Cloud Sync"
          desc="Your snippets are available on all your devices."
        />

        <Feature
          icon={<Users />}
          title="Team Sharing"
          desc="Easily share collections with your teammates."
        />

      </div>

    </div>

  )
}

function Feature({ icon, title, desc }: any) {

  return (

    <div className="flex flex-col items-center text-center space-y-2">

      <div className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center text-indigo-400">

        {icon}

      </div>

      <p className="font-medium text-white">
        {title}
      </p>

      <p className="text-xs text-gray-400 max-w-[160px]">
        {desc}
      </p>

    </div>

  )
}