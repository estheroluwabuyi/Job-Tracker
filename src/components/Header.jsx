import { useAuth } from '../contexts/AuthContext'

function Header() {
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <section className="bg-blue flex justify-between items-center p-8 rounded-t-3xl">
      <h1 className="text-[2rem] font-semibold tracking-wide uppercase font-monda">
        <span className="sm:hidden">Job Tracker</span>
        <span className="hidden sm:inline">Job Application Tracker</span>
      </h1>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue font-bold">
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </span>
          </div>
          <span className="text-white text-sm font-medium">
            {user?.email?.split('@')[0]}
          </span>
        </div>
        
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition text-sm font-medium"
        >
          Logout
        </button>
        
        <button className="relative w-18 h-10 bg-gray rounded-3xl flex items-center shrink-0">
          <div className="w-9 h-9 bg-background rounded-full absolute right-0 mx-1"></div>
        </button>
      </div>
    </section>
  )
}

export default Header