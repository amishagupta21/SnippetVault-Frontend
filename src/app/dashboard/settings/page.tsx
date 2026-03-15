import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import AppearanceSettings from "@/components/settings/appearance-settings"
import ProfileSettings from "@/components/settings/profile-settings"
import SettingsTabs from "@/components/settings/settings-tabs"


export default function SettingsPage() {

  return (

    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-10">

          <div>
            <h1 className="text-3xl font-bold">
              Settings
            </h1>

            <p className="text-gray-400">
              Manage your account settings, API integrations and interface preferences.
            </p>
          </div>

          <SettingsTabs />

          <ProfileSettings />

          <AppearanceSettings />

        </main>

      </div>

    </div>
  )
}