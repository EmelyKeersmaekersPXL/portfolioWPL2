import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ExtrasView from '../views/ExtrasView.vue'
import WPL2View from '../views/WPL2View.vue'

// WPL1
import WPL1LogboekView from '../views/wpl1/WPL1LogBoek.vue'
import WPL1CompetentiesView from '../views/wpl1/WPL1Competenties.vue'
import WPL1AimView from '../views/wpl1/WPL1Aim.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    // MAIN SITE
    { path: '/', component: HomeView },
    { path: '/extras', component: ExtrasView },
    { path: '/wpl2', component: WPL2View },
    { path: '/contact', component: ContactView },

    // 🔥 WPL1 DEFAULT = AIM PAGE
    { path: '/wpl1', redirect: '/wpl1/aim' },

    // WPL1 PAGES
    { path: '/wpl1/logboek', component: WPL1LogboekView },
    { path: '/wpl1/competenties', component: WPL1CompetentiesView },
    { path: '/wpl1/aim', component: WPL1AimView },

    // fallback
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router
