import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ExtrasView from '../views/ExtrasView.vue'
import WPL2View from '../views/WPL2View.vue'

import WPL1LogboekView from '../views/wpl1/WPL1LogBoek.vue'
import WPL1CompetentiesView from '../views/wpl1/WPL1Competenties.vue'
import WPL1AimView from '../views/wpl1/WPL1Aim.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    { path: '/', component: HomeView },
    { path: '/extras', component: ExtrasView },
    { path: '/wpl2', component: WPL2View },

    { path: '/wpl1', redirect: '/wpl1/aim' },

    { path: '/wpl1/logboek', component: WPL1LogboekView },
    { path: '/wpl1/competenties', component: WPL1CompetentiesView },
    { path: '/wpl1/aim', component: WPL1AimView },

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router
