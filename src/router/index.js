import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListStory from '../views/ListSotry.vue'
import Listviews from '../views/Listviews.vue'
import StoryViews from '../views/StoryViews.vue'
import Dashboard from '../views/Dashboard.vue'
import AddStory from '../views/AddStory.vue'
import UpdateStory from '../views/UpdateStory.vue'
import Register from '../views/Register.vue'
import login from '../views/login.vue'
import Admin from '../views/Admin.vue'
import PassReset from '../views/PassReset.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listStory',
    name: 'ListStory',
    component: ListStory,
    children:[
      {
        path: 'listviews',
        name: 'Listviews',
        component: Listviews,
      },
      {
        path: 'storyViews',
        name: 'StoryViews',
        component: StoryViews
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'addStory',
        name: 'AddStory',
        component: AddStory,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'updateStory',
        name: 'UpdateStory',
        component: UpdateStory,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'admin',
        name: 'Admin',
        component: Admin,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: {
          requiresGuest: true
        }
      },
      {
        path: 'login',
        name: 'login',
        component: login,
        meta: {
          requiresGuest: true
        }
      },
      {
        path: 'passReset',
        name: 'PassReset',
        component: PassReset,
        meta: {
          requiresGuest: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/listStory/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/listStory/dashboard',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router
