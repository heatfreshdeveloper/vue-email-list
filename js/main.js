Vue.config.devtools = true;

new Vue({
  el: "#app",
  data: {
    welcome: "Email List",
    url: "https://flynn.boolean.careers/exercises/api/random/mail",
    emailList: []
  },
  methods: {
    mounted() {
        this.emailList = []
        for (let i = 0; i < 10; i++) {
    
            axios.get(this.url).then((request) => {
              const server = request.data;
    
              this.emailList.push(server.response);
            });
    }
  }
})