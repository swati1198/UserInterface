import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter)

  const routes = [
    
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../components/download.vue')

},
{
  path: '/contact',
  name: 'contact',
  component: () => import('../components/Contact.vue')
},
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/home-page',
    name: 'home-page',
    component: () => import('../components/HomePage.vue'),
    beforeEnter: (to,from,next)=>{
      if(store.state.authenticated==false){
         next("/login");
      }else{
        next();
      }
    }
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../components/Support.vue')
  },
  {
    path: '/installation-guide',
    name: 'installation-guide',
    component: () => import('../components/InstallationGuide.vue')
  },
  {
    path: '/configuration-guide',
    name: 'configuration-guide',
    component: () => import('../components/ConfigurationGuide.vue')
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import('../components/Forum.vue')
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: () => import('../components/Documentation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router