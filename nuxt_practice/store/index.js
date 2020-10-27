export default {
  // vuex的store也可以通过context访问
  middleware ( { store, redirect }) {
    const isAuthenticated = store.state.authenticated;
    if (!isAuthenticated) {
      return redirect('/');
    }
  }
}