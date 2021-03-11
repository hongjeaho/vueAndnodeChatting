export default {
  path: '/chatting',
  name: 'chatting',
  props: true,
  component: () => import('@/views/chatting'),
  meta: {
    breadCrumb: 'chatting room'
  }
}
