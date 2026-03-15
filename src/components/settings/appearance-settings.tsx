"use client"

import { Sun, Moon } from "lucide-react"

export default function AppearanceSettings(){

  return(

    <div className="grid grid-cols-2 gap-10 items-start pt-10 border-t border-[#1E293B]">

      <div>

        <h2 className="text-lg font-semibold">
          Appearance
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Customize how SnippetVault looks for you.
        </p>

      </div>

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 space-y-6">

        <p className="text-xs text-gray-400">
          THEME SELECTION
        </p>

        <div className="grid grid-cols-3 gap-4">

          <ThemeCard icon={<Sun />} label="Light" />

          <ThemeCard icon={<Moon />} label="Dark" active />

          <ThemeCard icon={<Sun />} label="System" />

        </div>

        <div className="flex justify-between items-center pt-4">

          <div>
            <p className="font-medium">
              Font Size
            </p>

            <p className="text-gray-400 text-sm">
              Adjust the readability of your code snippets.
            </p>
          </div>

          <button className="bg-[#1E293B] px-3 py-1 rounded-md text-sm">
            Medium (14px)
          </button>

        </div>

      </div>

    </div>

  )
}

function ThemeCard({icon,label,active=false}:any){

  return(

    <div
      className={`border rounded-lg p-6 flex flex-col items-center gap-2 cursor-pointer ${
        active
          ? "border-indigo-500 bg-[#020617]"
          : "border-[#1E293B]"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>

  )
}