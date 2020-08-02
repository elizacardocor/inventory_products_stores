var app = new Vue({
    el: '#app',
    data: {
      datos:[],
      mensaje: ''
    },
    methods:{
        getDatos(){
           let url = '/api/stores'; 
           axios.get(url).then(response=>{
               console.log(response.data)
               this.datos=response.data;
           });
        }
    },
    mounted(){
        this.getDatos();
    }
  })