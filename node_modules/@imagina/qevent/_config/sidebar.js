const pages = config('pages') // Get Pages from config

//E-commerce
export default [
    {
        title: 'qevent.sidebar.adminGroup',
        icon: 'fas fa-calendar',
        children: [
            pages.qevent.categories,
            pages.qevent.organizers,
            pages.qevent.events,
        ]
    },
]