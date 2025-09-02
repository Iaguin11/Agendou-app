import { useAuth } from "@/contexts/AuthContext"
import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute({children}: PrivateRouteProps){
  const {user, loading} = useAuth()

  if(loading){
    return "Loading"
  }
  if(!user){
    return <Navigate to="/login" replace/>
  }
  return <>{children}</>
}