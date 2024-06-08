import {ReactComponent as dashicon} from './Assets/dashboard.svg'

export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: dashicon
    },
    {
        title: 'Vehicle Management',
        path: '/vehicle',
        // icon: {vehicle},
        // toOpen: {linearrow},
        submenu: [
            {
                title: 'VM1',
                path: '/vm1'
            },
            {
                title: 'VM2',
                path: '/vm2'
            },
            {
                title: 'VM3',
                path: '/vm3'
            }
        ]
    },
    {
        title: 'Trigger Management',
        path: '/management',
        // icon: {management},
        // toOpen: {linearrow},
        submenu: [
            {
                title: 'TM1',
                path: '/tm1'
            },
            {
                title: 'TM2',
                path: '/tm2'
            },
            {
                title: 'TM3',
                path: '/tm3'
            }
        ]
    },
    {
        title: 'Triggers',
        path: '/triggers'
        // icon: {triggers}
    },
    {
        title: 'Reports',
        path: '/reports'
        // icon: {reports}
    },
    {
        title: 'Settings',
        path: '/settings',
        // icon: {settings},
        // toOpen: {linearrow},
        submenu: [
            {
                title: 'Option 1',
                path: '/opt1'
            },
            {
                title: 'Option 2',
                path: '/opt2'
            },
            {
                title: 'Option 3',
                path: '/opt3'
            }
        ]
    }
];