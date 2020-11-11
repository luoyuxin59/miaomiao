export default {
  path: '/movie',
  component: () => import('@/views/Movie/Movie'),
  children:[
    {
      path : '/movie',
      redirect : '/movie/nowplaying'
    },
    {
      path : 'city',
      component : () => import('@/components/common/City/City.vue')
    },
    {
      path: 'nowplaying',
      component: () => import('@/components/common/NowPlaying/NowPlaying'),

    },
    {
      path: 'comingsoon',
      component: () => import('@/components/common/ComingSoon/ComingSoon'),

    },
    {
      path: 'search',
      component: () => import('@/components/common/Search/Search'),
    },
    {
      path : 'detail/1/:movieId',
      components: {
        default: () => import('@/components/common/NowPlaying/NowPlaying'),
        detail: () => import('@/views/Movie/childcom/detail')
      },
      props: {
        detail : true
      }
    },
      {
        path : 'detail/2/:movieId',
        components: {
          default: () => import('@/components/common/ComingSoon/ComingSoon'),
          detail: () => import('@/views/Movie/childcom/detail')
        },
        props: {
          detail : true
        }
    }
  ]
}