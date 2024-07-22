import { RouteObject } from 'react-router-dom';
import { ROUTE_CONFIG } from './constant';
import Header from '../components/Header';
export const PRIVATE_ROUTE:Array<RouteObject>=[
 {
    path:`${ROUTE_CONFIG.LOGIN.path}`,
    element:<Header/>
 }
]