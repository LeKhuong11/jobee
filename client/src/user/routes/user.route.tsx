import Counter from '@user/pages/Counter';
import Home  from '@user/pages/Home.tsx';
import { RouteObject } from 'react-router-dom';

const userRoutes: RouteObject[] = [
    { 
        path: '/', 
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
        path: '/hello-world',
        element: <Counter />
    }
]
export default userRoutes;