export default function Dashboard(){
  return(
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
    </div>
  )
}