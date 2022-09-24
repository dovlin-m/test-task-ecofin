export default function({ store, redirect }) {
  store.commit('updateErrors', false)
  if (!store.getters.hasToken) {
    redirect('/?message=login')
  }
}
