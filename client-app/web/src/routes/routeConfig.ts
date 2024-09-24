// src/routes/routeConfig.ts
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes.tsx';
// import NotFound from '../features/NotFound/NotFound';

// Kết hợp cả private và public routes
export const routes = [
    ...publicRoutes,
    ...privateRoutes,
];