export default {
  path: '/cinema',
  component: () => import('@/views/Cinema/Cinema.vue'),
  children:[
    {
      path : 'city',
      component : () => import('../../components/common/City/City.vue')
    },
  ]
}