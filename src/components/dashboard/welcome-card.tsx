"use client"

import { Button } from "@/components/ui/button"

export default function WelcomeCard() {

  return (
    <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 shadow-lg">

      <h2 className="text-3xl font-bold mb-2">
        Welcome back, Developer!
      </h2>

      <p className="text-indigo-100 mb-6">
        You've saved 12 new snippets this week. Your "React Hooks"
        collection is trending in your team workspace.
      </p>

      <div className="flex gap-4">

        <Button variant="secondary">
          View Analytics
        </Button>

        <Button variant="outline">
          Explore Templates
        </Button>

      </div>

    </div>
  )
}