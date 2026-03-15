import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import CreateTag from "@/components/tags/create-tag"
import QuickActions from "@/components/tags/quick-actions"
import TagsList from "@/components/tags/tags-list"



export default function TagsPage() {

  return (

    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* Page Title */}

          <div>
            <h1 className="text-3xl font-bold">
              Tags Management
            </h1>

            <p className="text-gray-400">
              Organize and categorize your developer workflow with custom labels.
            </p>
          </div>

          <CreateTag />

          <TagsList />

          <QuickActions />

        </main>

      </div>

    </div>
  )
}