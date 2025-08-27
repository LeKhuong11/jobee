import Home  from '@admin/pages/Home.tsx';
import { RouteObject } from 'react-router-dom';

const adminRoutes: RouteObject[] = [
    { 
        index: true, 
        element: <Home />,
    },
    {
        path: 'dashboard',
        element: <h1>Admin Dashboard</h1>
    }
]

export default adminRoutes;