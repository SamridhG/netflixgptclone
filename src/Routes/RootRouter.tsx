import { useRoutes } from "react-router-dom"
import { PUBLIC_ROUTE } from "./PublicRoute"
import { PRIVATE_ROUTE } from "./PrivateRoute"

const RootRouter =()=>{
    const guest=useRoutes(PUBLIC_ROUTE)
    const authenticate=useRoutes(PRIVATE_ROUTE)
    const isAuth:boolean=false
    return (
        <>
        {isAuth?authenticate:guest}
        </>
    )
}

export default RootRouter
