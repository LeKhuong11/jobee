import Counter from '@user/pages/Counter';
import Home  from '@user/pages/Home.tsx';
import { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
    { 
        path: '/', 
        element: <Home /> 
    },
    {
        path: '/hello-world',
        element: <Counter />
    }
]
export default userRoutes;