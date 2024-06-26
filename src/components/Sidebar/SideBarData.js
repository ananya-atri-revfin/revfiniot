import {ReactComponent as dashicon} from './Assets/dashboard.svg'

export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: dashicon
    },
    {
        title: 'Vehicle Management',
        path: '/',
        submenu: [
            {
                title: 'VM1',
                path: '/'
            },
            {
                title: 'VM2',
                path: '/'
            },
            {
                title: 'VM3',
                path: '/'
            }
        ]
    },
    {
        title: 'Trigger Management',
        path: '/',
        submenu: [
            {
                title: 'TM1',
                path: '/'
            },
            {
                title: 'TM2',
                path: '/'
            },
            {
                title: 'TM3',
                path: '/'
            }
        ]
    },
    {
        title: 'Triggers',
        path: '/'
    },
    {
        title: 'Reports',
        path: '/'
    },
    {
        title: 'Settings',
        path: '/',
        submenu: [
            {
                title: 'Option 1',
                path: '/'
            },
            {
                title: 'Option 2',
                path: '/'
            },
            {
                title: 'Option 3',
                path: '/'
            }
        ]
    }
];