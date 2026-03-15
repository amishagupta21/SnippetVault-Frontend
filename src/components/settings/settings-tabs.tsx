export default function SettingsTabs() {

  const tabs = [
    "Profile",
    "Appearance",
    "API Keys",
    "Account",
    "Billing"
  ]

  return (

    <div className="border-b border-[#1E293B] flex gap-6 pb-3">

      {tabs.map(tab => (

        <button
          key={tab}
          className={`text-sm ${
            tab === "Profile"
              ? "text-indigo-400 border-b-2 border-indigo-500 pb-2"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>

      ))}

    </div>

  )
}