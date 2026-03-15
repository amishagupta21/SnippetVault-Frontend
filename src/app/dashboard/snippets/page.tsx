import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import SnippetsHeader from "@/components/snippets/snippets-header"
import SnippetsFilters from "@/components/snippets/snippets-filters"
import SnippetsGrid from "@/components/snippets/snippets-grid"
import SnippetsEmpty from "@/components/snippets/snippets-empty"

export default function SnippetsPage() {

   const snippets:any[] = [] 

  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-6">

          <SnippetsHeader />

          <SnippetsFilters />

          <SnippetsGrid />

          {/* <SnippetsEmpty /> */}

          {/* {snippets.length === 0
            ? <SnippetsEmpty />
            : <SnippetsGrid />
          } */}

        </main>

      </div>

    </div>
  )
}