export const ProfileData = [
    {
        id: 'profile_NavItem',
        title: 'Profile',
        path: '/profile',
        onclick: function profile(){}
    },
    {
        id: 'setings_NavItem',
        title: 'Settings',
        path: '/settings',
        onclick: function settings(){}
    },
    {
        id: 'logout_NavItem',
        title: 'Logout',
        path: '/logout',
        onclick: function logout(){
            localStorage.clear();
            window.location.reload();
        }
    }
];
