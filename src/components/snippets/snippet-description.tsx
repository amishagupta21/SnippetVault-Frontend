export default function SnippetDescription(){

  return(

    <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6">

      <h3 className="font-semibold mb-3">
        DESCRIPTION
      </h3>

      <p className="text-gray-400 leading-relaxed">

        A robust Python decorator designed for Flask applications
        to manage JWT authentication. It extracts tokens from the
        'x-access-token' header, validates them against the secret
        key, and injects the current user object into the protected
        route handler.

      </p>

    </div>

  )
}