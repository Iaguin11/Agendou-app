import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Stats {
  totalAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  nextAppointment?: {
    id: string;
    guestName: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({
    totalAppointments: 0,
    confirmedAppointments: 0,
    completedAppointments: 0,
  });
  const startsCards = [
    {
      title: "Total de Agendamentos",
      value: stats.totalAppointments,
      icon: Calendar,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Agendamentos Confirmados",
      value: stats.confirmedAppointments,
      icon: CheckCircle,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Agendamentos Concluídos",
      value: stats.completedAppointments,
      icon: Users,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Taxa de Conclusão",
      value:
        stats.totalAppointments > 0
          ? `${Math.round((stats.completedAppointments / stats.totalAppointments) * 100)}%`
          : "0%",
      icon: TrendingUp,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <DashboardLayout>
      {/* <div className="bg-white rounded-2xl shadow-sm p-6"> */}
      {/* <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Configurar Disponibilidade</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Seu link:</span>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
                  agendou.com/{user?.name}
                </code>
                <button 
                  // onClick={() => copyToClipboard(`https://agendou.com/${user?.username}`)}
                  className="text-blue-600 hover:text-blue-800 text-sm p-1"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div> */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Olá, {user?.name?.split(" ")[0]}! 👋
            </h1>
            <p className="mt-2 text-gray-600">
              Aqui está um resumo da sua agenda
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <a
              // href={publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Ver página pública</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {startsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="card hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-50">
                    {stat.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Próximo Agendamento
                </h3>
                <Clock className="h-5 w-5 text-gray-400" />
              </div>

              {stats.nextAppointment ? (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {stats.nextAppointment.guestName}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {format(
                            new Date(stats.nextAppointment.date),
                            "dd 'de' MMMMM",
                            { locale: ptBR }
                          )}
                        </p>
                        <p className="text-sm font-medium text-blue-600 mt-2">
                          {stats.nextAppointment.startTime} -{" "}
                          {stats.nextAppointment.endTime}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <a href="/dashboard" className="btn-outline w-full flex items-center justify-center space-x-2">
                    <span>Ver todos</span>
                    <ArrowRight className="h-4 w-4"/>
                  </a>
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-gray-300 mx-auto mb-4"/>
                  <p className="text-gray-500">Nenhum agendamento próximo</p>
                </div>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
      {/* </div> */}
    </DashboardLayout>
  );
}
