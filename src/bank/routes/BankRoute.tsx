import { Routes, Route, Navigate } from 'react-router-dom'
import { BankPages } from '../pages/BankPages'

export const BankRoute = () => {
  return (
    <Routes>

        <Route path='/' element={<BankPages/>}/>

        <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}
