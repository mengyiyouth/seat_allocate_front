import {createRouter, createWebHistory} from 'vue-router';
import OfficeSeatAllocate from '@/components/OfficeSeatAllocate.vue';
import OfficeMembers from '@/components/OfficeMembers.vue';

const routes = [
    {
        path: '/',
        name: 'OfficeSeatAllocate',
        component: OfficeSeatAllocate
    },
    {
        path: '/members',
        name: 'OfficeMembers',
        component: OfficeMembers
    }
]
const router = createRouter({
    //todo  what is process.env.BASE_URL?
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;