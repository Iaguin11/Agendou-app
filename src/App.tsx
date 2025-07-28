// import { Button } from './components/ui/button'

import { Calendar, Globe, Instagram, LinkedinIcon, Plus, Users, Zap } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              {/* <Calendar className="h-8 w-8 text-blue-600 mr-3" /> */}
              <h1 className="text-2xl font-bold text-gray-900">Agendou</h1>
            </div>
            <div className="flex space-x-4">
              <button
                // onClick={() => setCurrentView('login')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Entrar
              </button>
              <button
                // onClick={() => setCurrentView('register')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Criar Conta
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Agende encontros com <span className="text-blue-600">facilidades</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Crie sua agenda personalizada, compartilhe seu link e deixe que os
              outros agendem horários com você de forma simples e intuitiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold flex items-center justify-center"
              >
                <Plus className="mr-2 h-5 w-5" />
                Criar conta grátis
              </Button>
              <Button
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-xl text-lg font-semibold border border-gray-300 flex items-center justify-center"
              >
                <Globe className="mr-2  h-5 w-5" />
                Ver demostração
              </Button>
            </div>
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
                <Calendar className="h-8 w-8 text-blue-600"/>
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
                <Users className="h-8 w-8 text-green-600"/>
              </div>
              <h4 className="text-xl font-semibold mb-2">Link Público</h4>
              <p className="text-gray-600">Compartilhe seu link personalizado agendou.com/seunome</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600"/>
              </div>
              <h4 className="text-xl font-semibold mb-2">Integração Google</h4>
              <p className="text-gray-600"> Sincronize automaticamente com seu Google Calendar</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-400 mr-3"/>
              <span className="text-xl font-bold">Agendou</span>
            </div>
            <p className="text-gray-400">@ 2025 Agendou. Todos os direitos reservados.</p>
            <div className="flex space-x-2">
              <Instagram />
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

