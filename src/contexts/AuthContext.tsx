import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
}

interface AuthContextData {
  user: User | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps){
  // const [user, setUser] = useState<User | null>(null)
  const [user, setUser] = useState<User | null>({
  id: '1',
  name: 'CristianoRonaldo',
  email: 'ronaldoCris@cruise.com',
  avatar: '',
  bio: 'Melhor jogador do mundo'
})
  // const [token, setToken] = useState<string| null>(null)
  const [token, setToken] = useState<string | null>('fake-token-123')
  const [loading, setLoading] = useState(false)

  //simular login
  async function login(email:string, password: string) {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: '1',
      name: 'Cristiano Ronaldo',
      email,
    })
    setToken('fake-token-123')
    setLoading(false)
    console.log(email, password)
  }

  //registro
  async function register(name:string, email: string, password: string) {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: '2',
      name,
      email,
    })
    setToken('fake-token-456')
    setLoading(false)
    console.log(email, password)
  }
  function logout() {
    setUser(null)
    setToken(null)
  }
  function updateUser(userData: Partial<User>){
    if (user) {
      setUser({...user, ...userData})
    }
  }

  return(
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}