import { Route, Routes } from "react-router-dom"
import { Modal1, Modal2, Modal3 } from "../pages"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Modal1 />} />
            <Route path='/modal-2' element={<Modal2 />} />
            <Route path='/modal-3' element={<Modal3 />} />
        </Routes>
    )
}

export default AppRoutes
