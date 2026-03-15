import AuthForm from "@/components/auth/auth-form"
import AuthHero from "@/components/auth/auth-hero"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0B0F19]">
      <AuthHero />
      <AuthForm />
    </div>
  )
}