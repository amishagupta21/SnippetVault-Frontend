import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import SnippetCode from "@/components/snippets/snippet-code"
import SnippetDescription from "@/components/snippets/snippet-description"
import SnippetSidebar from "@/components/snippets/snippet-sidebar"


export default function SnippetDetailsPage() {

    return (
        <div className="flex min-h-screen bg-[#0B1020] text-white">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Topbar />

                <main className="p-8">

                    {/* Breadcrumb */}

               

                    <div className="flex justify-between items-start mb-4">

                        <div>
                            <h1 className="text-3xl font-bold">
                                auth_decorator.py
                            </h1>

                            <div className="flex gap-3 items-center mt-2 text-sm">

                                <span className="bg-indigo-600 px-2 py-1 rounded text-xs">
                                    PYTHON
                                </span>

                                <span className="text-gray-400">
                                    Created Dec 12, 2023
                                </span>

                                <span className="text-gray-400">
                                    Modified 2 hours ago
                                </span>

                            </div>
                        </div>

                        {/* Actions */}

                        <div className="flex gap-3">

                            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm">
                                ✏️ Edit
                            </button>

                            <button className="flex items-center gap-2 bg-[#111827] border border-[#1E293B] px-4 py-2 rounded-md text-sm">
                                🔗 Share
                            </button>

                            <button className="text-red-500 text-xl">
                                🗑
                            </button>

                        </div>

                    </div>

                    <div className="grid grid-cols-[1fr_300px] gap-8">

                        {/* Main */}

                        <div className="space-y-6">

                            <SnippetCode />

                            <SnippetDescription />

                        </div>

                        {/* Sidebar */}

                        <SnippetSidebar />

                    </div>

                </main>

            </div>

        </div>
    )
}