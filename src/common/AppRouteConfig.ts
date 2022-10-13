import TempPage from '../views/TempPage';
import { ComponentType } from 'react';

interface RouteItem {
    title: string,
    key: string,
    path: string,
    component: ComponentType<any>,
}

const MenuRoute: RouteItem[] = [
    {
        title: 'PageOne',
        key: 'page-one',
        path: '/page-one',
        component: TempPage,
    },
    {
        title: 'PageTwo',
        key: 'page-two',
        path: '/page-two',
        component: TempPage,
    },
    {
        title: 'PageThree',
        key: 'page-three',
        path: '/page-three',
        component: TempPage,
    },
];

const AppRoute: RouteItem[] = [
    ...MenuRoute,
    {
        title: 'Page 1 Item',
        key: 'page-one/page-1-item',
        path: '/page-one/page-1-item',
        component: TempPage,
    },
    {
        title: 'Page 2 Item',
        key: 'page-one/page-2-item',
        path: '/page-one/page-2-item',
        component: TempPage,
    },
    {
        title: 'Page 3 Item',
        key: 'page-three/page-3-item',
        path: '/page-three/page-3-item',
        component: TempPage,
    }
];

export { MenuRoute, AppRoute };