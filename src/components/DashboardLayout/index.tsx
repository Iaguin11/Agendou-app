import { useState } from "react"
import {motion} from 'framer-motion'
import { Calendar, Clock, Home, Settings, X } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import toast from "react-hot-toast"

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

export default function DashboardLayout(){
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {user ,logout} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success('Logout realizado com sucesso')
    navigate('/')
  }

  return(
    <div className="min-h-screen bg-gray-50 flex">
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}>

          <motion.div
            className="relative flex-1 flex-col max-w-xs w-full bg-white shadow-2xl"
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
                    
                  >
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}