import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import CreateTag from "@/components/tags/create-tag"
import QuickActions from "@/components/tags/quick-actions"
import TagsList from "@/components/tags/tags-list"

async function getTags() {
  const res = await fetch("http://localhost:8000/api/tags/", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch tags")
  }

  return res.json()
}

export default async function TagsPage({ searchParams }: any) {

  const search = searchParams?.q?.toLowerCase() || ""

  const tags = await getTags()

  const filteredTags = tags.filter((tag: any) =>
    tag.tag_name.toLowerCase().includes(search)
  )

  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          <div>
            <h1 className="text-3xl font-bold">Tags Management</h1>
          </div>

          {/* 🔥 pass current search */}
          <CreateTag defaultQuery={search} />

          <TagsList tags={filteredTags} />

          <QuickActions />

        </main>

      </div>

    </div>
  )
}