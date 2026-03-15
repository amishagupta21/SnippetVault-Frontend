"use client"

export default function AuthHero() {
  return (
    <div className="hidden lg:flex flex-col justify-between p-12 bg-[#0B0F19] text-white relative">
         <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500" />
          <h1 className="text-xl font-semibold">SnippetVault</h1>
        </div>

      <div className="space-y-8 flex items-center justify-between">
       
        <div className="max-w-xl space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            The ultimate vault for your code snippets.
          </h2>

          <p className="text-indigo-300 text-lg">
            Secure, searchable, and always at your fingertips.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-400">
        Trusted by 10k+ developers worldwide
      </p>
    </div>
  )
}
