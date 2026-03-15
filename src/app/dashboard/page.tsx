import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import WelcomeCard from "@/components/dashboard/welcome-card"
import StatsCards from "@/components/dashboard/stats-cards"
import SnippetsTable from "@/components/dashboard/snippets-table"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          <WelcomeCard />

          <StatsCards />

          <SnippetsTable />

        </main>

      </div>
    </div>
  )
}