import { Link, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { useAuth } from '@/contexts/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Calendar, ChevronLeft, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres.'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage(){
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {login} = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      await login(data.email, data.password)
      toast.success('Login realizado com sucesso')
      navigate('/dashboard')
    }catch (error){
      toast.error('Falha no login')
    }finally {
      setIsLoading(false)
    }
    
  }

  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-md'>
        <motion.div
          className='text-center mb-8'        
          initial={{ opacity: 0, y: -50}}
          animate={{ opacity:1, y: 0}}
          transition={{ duration: 0.6}}
        >
          <div className="">
            <Link to="/" className="flex items-center justify-center mb-4">
              <Calendar className='h-10 w-10 text-blue-600 mr-2'/>
              <span className='text-2xl font-bold text-gray-900'>Agendou</span>
            </Link>
          </div>

          <h2 className='text-xl font-semibold text-gray-700'>
            Entre na sua conta 
          </h2>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}  className='space-y-7'>
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                E-mail
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-gray-400'/>
                </div>
                <input 
                  id="email"
                  type="email" 
                  autoComplete='email'  
                  {...register('email')}
                  className={`input pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-blue-500 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20': ''}`
                  }
                  placeholder='example@email.com'
                />
              </div>
              {errors.email && ( 
                <p className='mt-2 text-sm text-red-600'>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>
                Senha
              </label>
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className='h-5 w-5 text-gray-400'/>
                </div>
                <input 
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='current-password'
                  {...register('password')}
                  className={`input pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-blue-500 ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder='Senha'
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  onClick={()=> setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 text-gray-400 hover:text-gray-600'/>
                  ) : (
                    <Eye className='h-5 w-5 text-gray-400 hover:text-gray-600'/>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='mt-2 text-sm text-red-600'>{errors.password.message}</p>
              )}
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input 
                  id='remember'
                  name='remember'
                  type="checkbox"
                  className="h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Lembra senha
                </label>
              </div>
              <div className="text-sm">
                <Link 
                  to="/forgot-password"
                  className="font-medium text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ):(
                  <span>Entrar</span>
                )}
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                onClick={()=> toast.error('Login com Google em desenvolvimento')}
              >
                <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="h-5 w-5"
              />
                <span>oogle</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Não tem conta?{' '}
              <Link 
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.6, delay: 0.6}}
          >
            <Link 
              to="/"
              className="mt-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
            >
              <ChevronLeft className="h-4 w-4 mr-1"/>
              Voltar
            </Link>
          </motion.div>        
      </div>
    </div>
  )
}