import Home  from '@user/pages/Home.tsx';
import TailwindTest from '@components/TailwindTest';
import { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
    { 
        index: true,
        element: <Home /> 
    },
    {
        path: 'user',
        children: [
            {
                index: true,
                element: <h1>User Page</h1>
            },
            {
                path: 'profile',
                element: <h1>User Profile Page</h1>
            }
        ]
    },
    {
        path: 'tailwind',
        element: <TailwindTest />
    }
]
export default userRoutes;