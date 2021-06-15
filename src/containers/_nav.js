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
    ]
  }
]
