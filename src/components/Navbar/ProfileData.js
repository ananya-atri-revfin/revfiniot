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
        onclick:  function logout(){
            try{ fetch('http://localhost:3000/data/logout-user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });
            } catch (error) { alert(JSON.parse(error.message).message) }
            localStorage.clear();
            window.location.reload();
        }
    }
];
