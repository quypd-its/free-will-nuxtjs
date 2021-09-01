export default function ({ store, $axios }) {
    $axios.onError((e) => {
      if (e.response.status === 401) {
        store.commit('removeUser')
      }
    })
  }
  