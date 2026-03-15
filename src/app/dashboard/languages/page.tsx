import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import LanguagesTable from "@/components/languages/languages-table"
import AddLanguageButton from "@/components/languages/add-language-button"

export default function LanguagesPage() {

  return (

    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-3xl font-bold">
                Supported Languages
              </h1>

              <p className="text-gray-400">
                Register and configure programming languages for snippet syntax highlighting.
              </p>
            </div>

            <AddLanguageButton />

          </div>

          <LanguagesTable />

        </main>

      </div>

    </div>

  )
}