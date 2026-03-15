import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function SnippetSidebar(){

  return(

    <div className="space-y-6">

      {/* Snippet Info */}

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-5">

        <h3 className="font-semibold mb-4">
          SNIPPET INFO
        </h3>

        <div className="space-y-2 text-sm">

          <p className="flex justify-between">
            Language
            <span>Python</span>
          </p>

          <p className="flex justify-between">
            Visibility
            <span className="text-green-400">Public</span>
          </p>

          <p className="flex justify-between">
            Stars
            <span>12</span>
          </p>

          <p className="flex justify-between">
            Views
            <span>248</span>
          </p>

        </div>

      </div>

      {/* Tags */}

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-5">

        <h3 className="font-semibold mb-4">
          TAGS
        </h3>

        <div className="flex flex-wrap gap-2">

          {["Flask","JWT","Security","Auth"].map(tag=>(
            <span
              key={tag}
              className="bg-[#1E293B] px-3 py-1 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

      {/* Contributors */}

      <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-5">

        <h3 className="font-semibold mb-4">
          CONTRIBUTORS
        </h3>

        <div className="flex -space-x-2">

          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>

        </div>

      </div>

    </div>

  )
}