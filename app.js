console.log('hello, vue')

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon',
      age: 45
    }
  },
  methods: {
    changeTitle(title) {
      //this.title = 'Words Of Radiance'
      this.title = title
    },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
  }
})

app.mount('#app')
