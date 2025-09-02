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
  Share2,
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
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    toast.success("Link copiado para a área de transferência!");
  };

  const statsCards = [
    {
      title: "Total",
      value: stats.totalAppointments,
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Confirmados", 
      value: stats.confirmedAppointments,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Concluídos",
      value: stats.completedAppointments,
      icon: Users,
      color: "text-purple-600", 
      bgColor: "bg-purple-50",
    },
    {
      title: "Taxa",
      value:
        stats.totalAppointments > 0
          ? `${Math.round((stats.completedAppointments / stats.totalAppointments) * 100)}%`
          : "0%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Olá, {user?.name?.split(" ")[0]}! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Aqui está um resumo da sua agenda
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Compartilhar</span>
            </Button>
            
            <Button
              variant="ghost" 
              size="sm"
              asChild
            >
              <a
                href={publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Ver página</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-gray-400" />
                <h3 className="font-semibold text-gray-900">
                  Próximo Agendamento
                </h3>
              </div>

              {stats.nextAppointment ? (
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {stats.nextAppointment.guestName}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {format(
                        new Date(stats.nextAppointment.date),
                        "dd 'de' MMMMM",
                        { locale: ptBR }
                      )}
                    </p>
                    <p className="text-sm font-medium text-blue-600">
                      {stats.nextAppointment.startTime} - {stats.nextAppointment.endTime}
                    </p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="/dashboard/appointments" className="flex items-center justify-center gap-2">
                      Ver todos
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Nenhum agendamento próximo</p>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">
                    Próximos Agendamentos
                  </h3>
                </div>
              </div>

              {upcomingAppointments.length > 0 ? (
                <div className="space-y-3">
                  {upcomingAppointments.slice(0, 4).map((appointment, index) => (
                    <motion.div
                      key={appointment.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-medium text-xs">
                            {appointment.guestName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {appointment.guestName}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {appointment.guestEmail}
                          </p>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-medium text-gray-900">
                          {format(new Date(appointment.date), "dd/MM")}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.startTime}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {upcomingAppointments.length > 4 && (
                    <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                      <a href="/dashboard/appointments" className="flex items-center justify-center gap-2">
                        Ver todos ({upcomingAppointments.length})
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Nenhum agendamento próximo</p>
                  <p className="text-sm text-gray-400 mb-4">
                    Compartilhe seu link para começar a receber agendamentos
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 max-w-md mx-auto">
                    <p className="text-xs text-gray-600 mb-2">Seu link público</p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-white px-3 py-2 rounded border text-primary-600 flex-1 truncate">
                        {publicUrl}
                      </code>
                      <CopyButton textToCopy={publicUrl} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <DashboardCard
            href="/dashboard/availability"
            bgColor="bg-blue"
            icon={Clock}
            iconColor="text-blue-600"
            title="Horários"
            description="Definir disponibilidade"
          />
          <DashboardCard
            href="/dashboard/appointments"
            bgColor="bg-green"
            icon={Calendar}
            iconColor="text-green-600"
            title="Agenda"
            description="Gerenciar agendamentos"
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