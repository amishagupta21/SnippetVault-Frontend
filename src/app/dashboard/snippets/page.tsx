// app/dashboard/snippets/page.tsx

import Sidebar from "@/components/dashboard/sidebar"
import SnippetsClient from "@/components/snippets/snippets-client"

export default function SnippetsPage() {

  return (

    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <SnippetsClient />

    </div>

  )
}