"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ProfileSettings(){

  return(

    <div className="grid grid-cols-2 gap-10 items-start">

      <div>

        <h2 className="text-lg font-semibold">
          Profile Information
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Update your photo and personal details.
        </p>

      </div>

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 space-y-6">

        {/* Avatar */}

        <div className="flex items-center gap-4">

          <Avatar className="h-14 w-14">
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>

          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Change photo
          </Button>

          <Button variant="secondary">
            Remove
          </Button>

        </div>

        {/* Name + Email */}

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-xs text-gray-400">
              FULL NAME
            </label>

            <Input
              defaultValue="Alex Rivers"
              className="bg-[#020617] mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">
              EMAIL ADDRESS
            </label>

            <Input
              defaultValue="alex@example.com"
              className="bg-[#020617] mt-1"
            />
          </div>

        </div>

        {/* Bio */}

        <div>
          <label className="text-xs text-gray-400">
            BIO
          </label>

          <textarea
            className="w-full mt-1 bg-[#020617] border border-[#1E293B] rounded-md p-3"
            defaultValue="Software engineer and snippet collector based in Seattle."
          />
        </div>

      </div>

    </div>

  )
}