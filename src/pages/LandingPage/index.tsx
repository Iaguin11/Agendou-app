import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe,
  Plus,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LadingPage() {
  const benefits = [
    "Link personalizado (agendou.com/seunome)",
    "Sincronização com Google Calendar",
    "Notificações por e-mail",
    "Interface responsiva",
    "Relatórios de agendamentos",
    "Suporte técnico",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Agendou</h1>
            </motion.div>  
            
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                Entrar
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                Criar Conta
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            > 
              Agende encontros com{" "}
              <span className="text-blue-600">facilidades</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crie sua agenda personalizada, compartilhe seu link e deixe que os
              outros agendem horários com você de forma simples e intuitiva.       
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/register"
                className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold flex items-center justify-center"
              >
                <Plus className="mr-2 h-5 w-5" />
                Criar conta grátis
              </Link>
              <Link
                to="/public-demo"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-xl text-lg font-semibold border border-gray-300 flex items-center justify-center"
              >
                <Globe className="mr-2  h-5 w-5" />
                Ver demostração
              </Link>
            </motion.div>
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para agendar
            </h3>
            <p className="text-lg text-gray-600">
              Recursos poderosos e simples de usar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Agenda Personalizada
              </h4>
              <p className="text-gray-600">
                Configure seus horários disponíveis e duração personalizadas
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Link Público</h4>
              <p className="text-gray-600">
                Compartilhe seu link personalizado agendou.com/seunome
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Integração Google</h4>
              <p className="text-gray-600">
                {" "}
                Sincronize automaticamente com seu Google Calendar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Por que escolher o Agendou?
              </h2>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/register"
                  className="bg-green-400 hover:bg-green-500 text-white font-bold rounded-3xl px-8 py-3 inline-flex items-center space-x-2"
                >
                  <span>Começar Agora</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x:-50}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Dezembro 2025</h3>
                      <div className="flex space-x-1">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-primary-600"/>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day) => (
                        <div
                          key={day}
                          className="text-gray-500 font-medium py-2"
                        >
                          {day}
                        </div>
                      ))}

                      {Array.from({ length: 35}, (_, i) =>{
                        const day = i - 6
                        const isCurrentMonth  = day > 0 && day <= 31
                        const isSelected = day == 15
                        const isAvailable= [10, 11, 15, 16, 17, 22, 23].includes(day)

                        return (
                          <div
                            key={i}
                            className={`
                              h-8 w-8 rounded-lg flex items-center justify-center text-sm
                              ${!isCurrentMonth ? 'text-gray-300' : ''}
                              ${isSelected ? 'bg-primary-600 text-white' : ''}
                              ${isAvailable && !isSelected ? 'bg-green-100 text-green-800' : ''}
                              ${!isAvailable && isCurrentMonth && !isSelected ? 'text-gray-400' : ''}                                
                            `}
                          >
                            {isCurrentMonth  ? day : ''}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-md font-semibold text-gray-900 mb-4">
                      Horários Disponíveis - 15 Dez
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time, i) => (
                        <div
                          key={time}
                          className={`
                          py-2 px-3 rounded-lg text-center text-sm font-medium transition-all
                            ${i === 2 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                          `}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold">Agendou</span>
              </div>
              <p className="text-gray-400 mb-4">
                A plataforma mais simples para gerenciar seus agendamentos
                online.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Demonstração
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Termos
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-white transition-colors">
                    Segurança
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agendou. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
