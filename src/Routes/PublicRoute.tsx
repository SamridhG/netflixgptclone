import { RouteObject } from 'react-router-dom';
import { ROUTE_CONFIG } from './constant';
import Login from '../components/Login';
export const PUBLIC_ROUTE:Array<RouteObject>=[
 {
    path:`${ROUTE_CONFIG.LOGIN.path}`,
    element:<Login/>
 },
 {
    path:`*`,
    element:<>No Page Found</>
 }
]