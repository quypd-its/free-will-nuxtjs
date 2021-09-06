export default function(context) {
  if (context.app.$auth.$state.loggedIn) {
    return context.app.$auth.redirect('home');
  }
}
