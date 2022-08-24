import { Layout, List, AddEdit } from '@/views/empresas';

export default {
    path: '/empresas',
    component: Layout,
    children: [
        { path: '', component: List },
        { path: 'add', component: AddEdit },
        { path: 'edit/:id', component: AddEdit }
    ]
};
