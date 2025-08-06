import { useState, type ReactNode } from "react"
import {motion} from 'framer-motion'
import { Calendar, Clock, ExternalLink, Home, LogOut, Menu, Settings, X } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import toast from "react-hot-toast"

interface DashboardLayoutProps {
  children: ReactNode
}

const navigation = [
  {
    name: 'Painel',
    href: '/dashboard',
    icon: Home,
  },
  {
    name: 'Disponibilidade',
    href: '/dashboard/availability',
    icon: Clock,
  },
  {
    name: 'Agendamentos',
    href: '/dashboard/appointments',
    icon: Calendar,
  },
  {
    name: 'Configurações',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export default function DashboardLayout({children}: DashboardLayoutProps){
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {user ,logout} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  console.log("Usuário no Layout:", user)

  const handleLogout = () => {
    logout()
    toast.success('Logout realizado com sucesso')
    navigate('/')
  }

  const publicUrl = `${window.location.origin}/${user?.name}`

  return(
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen && (
      <div className={`fixed inset-0 z-40 lg:hidden`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}/>

          <motion.div
            className="relative flex flex-col max-w-xs w-full bg-white shadow-xl min-h-screen"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white"/>
              </button>
            </div>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <Calendar className="h-8 w-8 text-blue-600"/>
                <span className="ml-2 text-xl font-bold text-gray-900">Agendou</span>
              </div>

              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname == item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors
                        ${isActive 
                        ? 'bg-primary-100 text-primary-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                      `}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className={`mr-4 h-6 w-6 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700">{user?.name}</p>
                  <p className="text-sm font-medium text-gray-500">{user?.email}</p>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
      )}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-white shadow-lg">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Calendar className="h-8 w-8 text-blue-600"/>
                <span className="ml-2 text-xl font-bold text-gray-900">Agendou</span>
              </div>

              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item)=> {
                  const isActive = location.pathname == item.href
                  return(
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                      group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive 
                        ? 'bg-primary-100 text-primary-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                    >
                      <item.icon className={`mr-3 h-6 w-6 ${isActive ? 'text-blue-500' : 'text-gray-400'}`}/>
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>

            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-primary-600 font-medium">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-700 truncate">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-500 transition-colors"
                  title="Sair"
                >
                  <LogOut className="h-5 w-5"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow-sm border-b border-gray-200">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 
            focus:ring-inset focus:blue-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6"/>
          </button>

          <div className="flex-1 px-4 flex justify-between items-center">
            <div className="flex-1 flex">

            </div>
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <a
                href={publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-6"/>
                <span>Ver página pública</span>
              </a>

              <div className="lg:hidden">
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <LogOut className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}