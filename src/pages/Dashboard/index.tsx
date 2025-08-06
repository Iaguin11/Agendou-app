import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard(){
  const {user } = useAuth()
  if(!user){
    return <p>Nenhum usuário logado</p>
  }
  return (
    <>
      <DashboardLayout>
        
      </DashboardLayout>
      
    </>
  )
    
}