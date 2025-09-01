import { CopyButton } from "@/components/copy-button";
import DashboardCard from "@/components/DashboardCard";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

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

interface UpcomingAppointment {
  id: string;
  guestName: string;
  guestEmail: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  notes?: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({
    totalAppointments: 0,
    confirmedAppointments: 0,
    completedAppointments: 0,
  });
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    UpcomingAppointment[]
  >([]);

  const publicUrl = user?.name ? `${window.location.origin}/${user?.name}` : "";
  console.log(`dados do publicUrl aqui: ${publicUrl}`);

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
              href={publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex items-center space-x-2"
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
              <div className="flex items-center justify-center gap-3 mb-6">
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
                  <a
                    href="/dashboard"
                    className="btn-outline w-full flex items-center justify-center space-x-2"
                  >
                    <span>Ver todos</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Nenhum agendamento próximo</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="card">
              <div className="flex item-center justify-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Próximos Agendamentos
                </h3>
                <User className="h-5 w-5 text-gray-400" />
              </div>

              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <motion.div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl
                        hover:bg-gray-100 transition-colors
                      "
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-primary-600 font-medium text-sm">
                              {appointment.guestName.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {appointment.guestName}
                          </p>
                          <p className="text-sm text-gray-">
                            {appointment.guestEmail}
                          </p>
                          {appointment.notes && (
                            <p className="text-xs text-gray-400 truncate mt-1">
                              {appointment.notes}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex-shrink-0 text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {format(new Date(appointment.date), "dd/MM", {
                            locale: ptBR,
                          })}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.startTime} - {appointment.endTime}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  <a
                    href="/dashboard/appointments"
                    className="btn-outline w-full flex items-center justify-center space-x-2"
                  >
                    <span>Ver todos os agendamentos</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <div className="text-center py-10">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">
                    Nenhum agendamento próximo
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Compartilhe seu link para começar a receber agendamentos
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-8">
                    <p className="text-sm text-gray-600 mb-2">
                      Seu link público
                    </p>
                    <div className="flex justify-center items-center space-x-2">
                      <code className="text-sm bg-white px-2 py-2 rounded border text-primary-600">
                        {publicUrl}
                      </code>
                      <CopyButton textToCopy={publicUrl}/>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <DashboardCard
            href="/dashboard/availability"
            bgColor="bg-blue"
            icon={Clock}
            iconColor="text-blue-600"
            title="Configurar horário"
            description="Definir disponibilidade"
          />
          <DashboardCard
            href="/dashboard/appointments"
            bgColor="bg-green"
            icon={Calendar}
            iconColor="text-green-600"
            title="Ver agendamentos"
            description="Gerenciar agenda"
          />
          <DashboardCard
            href="/dashboard/settings"
            bgColor="bg-purple"
            icon={Users}
            iconColor="text-purple-600"
            title="Configurações"
            description="Personalizar perfil"
          />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
