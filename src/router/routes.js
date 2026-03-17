const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'calculos', component: () => import('pages/CalculosPage.vue') },
      { path: 'glasgow', component: () => import('pages/GlasGow.vue') },
      { path: 'glossario', component: () => import('pages/glossario.vue') },
      { path: 'CheckList', component: () => import('pages/CheckList.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
