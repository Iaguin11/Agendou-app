import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ExternalLink,
  Home,
  LogOut,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  {
    name: "Painel",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Disponibilidade",
    href: "/dashboard/availability",
    icon: Clock,
  },
  {
    name: "Agendamentos",
    href: "/dashboard/appointments",
    icon: Calendar,
  },
  {
    name: "Configurações",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Usuário no Layout:", user);

  const handleLogout = () => {
    logout();
    toast.success("Logout realizado com sucesso");
    navigate("/");
  };

  const publicUrl = `${window.location.origin}/${user?.name}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          />

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
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-auto">
              <div className="flex-shrink-0 flex items-center px-4 mb-8">
                <Calendar className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Agendou
                </span>
              </div>

              <nav className="px-4 space-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-2">
                    <span className="text-sm font-medium text-gray-700">
                      {user?.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-gray-700 p-1"
                  title="Sair"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                type="button"
                className="mr-3 p-2 text-gray-500 hover:text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>

              <Calendar className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Agendou</h1>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-2 px-3 py-2 text-sm font-medium text-blue-600 
                border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Ver página pública</span>
              </a>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-medium text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                  {user?.name}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Sair"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-8xl px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="lg:col-span-1 w-2/3 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm min-h-[600px]">
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
