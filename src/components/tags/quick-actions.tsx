import { Trash2, GitMerge } from "lucide-react"

export default function QuickActions(){

 return(

  <div className="space-y-4">

    <h2 className="text-xl font-semibold">
      Quick Actions
    </h2>

    <div className="grid grid-cols-2 gap-6">

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 flex gap-4 items-center">

        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Trash2 size={18}/>
        </div>

        <div>
          <p className="font-medium">
            Cleanup Tags
          </p>

          <p className="text-sm text-gray-400">
            Remove unused tags with 0 snippets
          </p>
        </div>

      </div>

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 flex gap-4 items-center">

        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
          <GitMerge size={18}/>
        </div>

        <div>
          <p className="font-medium">
            Merge Duplicate Tags
          </p>

          <p className="text-sm text-gray-400">
            Combine tags with similar naming
          </p>
        </div>

      </div>

    </div>

  </div>

 )
}