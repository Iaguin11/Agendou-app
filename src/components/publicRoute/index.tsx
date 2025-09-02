import { useAuth } from "@/contexts/AuthContext";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps{
  children: ReactNode
}

export default function PublicRoute({children}: PublicRouteProps){
  const {user, loading} = useAuth()

  if(loading){
    return "loading"
  }
  if(user){
    return <Navigate to="/dashboard" replace/>
  }
  return<>{children}</>
}