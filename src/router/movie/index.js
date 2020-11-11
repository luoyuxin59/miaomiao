export default {
  path: '/movie',
  component: () => import('@/views/Movie/Movie'),
  children:[
    {
      path : '',
      redirect : '/movie/nowplaying'
    },
    {
      path : 'city',
      component : () => import('../../components/common/City/City.vue')
    },
    {
      path: 'nowplaying',
      component: () => import('../../components/common/NowPlaying/NowPlaying'),
    },
    {
      path: 'comingsoon',
      component: () => import('../../components/common/ComingSoon/ComingSoon'),
    },
    {
      path: 'search',
      component: () => import('../../components/common/Search/Search'),
    }
  ]
}