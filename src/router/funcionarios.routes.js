import { Layout, List, AddEdit } from '@/views/funcionarios';

export default {
    path: '/funcionarios',
    component: Layout,
    children: [
        { path: '', component: List },
        { path: 'add', component: AddEdit },
        { path: 'edit/:id', component: AddEdit }
    ]
};
