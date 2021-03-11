export default {
  path: '/login',
  name: 'login',
  props: true,
  component: () => import('@/views/Login'),
  meta: {
    breadCrumb: 'login form'
  }
}
