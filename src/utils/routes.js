import Poll from '../views/poll';
import Stats from '../views/stats';

const routes = [
    {
        name: 'Poll',
        path: '/',
        exact: true,
        component: Poll
    },
    {
        name: 'Stats',
        path: '/stats',
        exact: true,
        component: Stats
    }
];

export default routes;