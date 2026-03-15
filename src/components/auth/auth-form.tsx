"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function AuthForm() {
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-6">

        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-white">Welcome back</h2>
          <p className="text-gray-400">Secure your snippets.</p>
        </div>

        <Button className="w-full bg-[#1F2937] hover:bg-[#374151]">
          Sign in with GitHub
        </Button>

        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <div className="flex-1 h-px bg-gray-700" />
          OR CONTINUE WITH
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <div className="space-y-4">

<div className="space-y-2">
            <label className="text-sm text-gray-300">Email address</label>
            <Input placeholder="name@company.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-300">Password</label>
            <Input type="password" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Checkbox />
              Remember me
            </div>

            <a className="text-indigo-400 hover:underline">Forgot password?</a>
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            Login to Vault
          </Button>
           <p className="text-center text-sm text-gray-400">
            Don't have an account?
            <span className="text-indigo-400">Start for free</span>
          </p>

        </div>
      </div>
    </div>
  )
}