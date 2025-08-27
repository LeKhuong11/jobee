import { createBrowserRouter } from 'react-router-dom';
import userRoutes from '@user/routes/user.route';
import adminRoutes from '@admin/routes/admin.route';

const router = createBrowserRouter([
  ...userRoutes,
  ...adminRoutes,
]);

export default router;