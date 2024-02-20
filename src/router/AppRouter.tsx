import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { BankRoute } from '../bank/routes/BankRoute'



export const AppRouter = () => {
  return (
    <Routes>


        <Route path='/auth/*' element={<AuthRoutes/>}/>

        <Route path='/*' element={<BankRoute/>}/>

    </Routes>
  )
}
