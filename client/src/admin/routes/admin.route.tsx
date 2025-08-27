import Home  from '@admin/pages/Home.tsx';
import { RouteObject } from 'react-router-dom';

const adminRoutes: RouteObject[] = [
    { 
        path: '/admin', 
        element: <Home /> 
    },
]
export default adminRoutes;