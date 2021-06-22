export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: '最新文章',
        to: '/blogs',
        icon: 'cilFire',
        badge: {
          color: 'danger',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavItem',
        name: '寫點什麼',
        to: '/createblog',
        icon: 'cilNotes',
      },
    ]
  }
]
