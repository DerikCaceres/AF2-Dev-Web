import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

var options = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars',
  params: {limit: '10', page: '0'},
  headers: {
    'x-rapidapi-host': 'car-data.p.rapidapi.com',
    'x-rapidapi-key': '5135714c79mshf68c94aec7a456cp177b05jsn4b461519c4e2'
  }
};
export default new Vuex.Store({
  state: {
  cards:[
    {name:"Golf GTI - 2020", price:"R$ 180.000,00",url:"https://3.bp.blogspot.com/-n6CLT0mp0Jk/WyFDdPBfUsI/AAAAAAABFF0/53AIZPwimOsz4Eo9AD4FDsieBjM_Z-pfwCLcBGAs/s1600/VW-Golf-2019%2B%25287%2529.jpg", tipo:"Carro esportivo"},
    {name:"Jetta GLI - 2021", price:"R$ 190.000,00",url:"https://cdn.motor1.com/images/mgl/br7lw/s1/volkswagen-jetta-gli-2-0-tsi-brasil.webp", tipo:"Carro sedan esportivo"},
    {name:"Porsche Macan - 2021", price:"R$ 500.000,00",url:"https://cdn.motor1.com/images/mgl/9MVpX/s1/2020-porsche-macan-gts.jpg", tipo:"Carro sedan esportivo"},
    {name:"Bmw M4 - 2021", price:"R$ 500.000,00",url:"https://1.bp.blogspot.com/-WSo_0MAqDQo/X2vVb5r4E0I/AAAAAAAAjIE/xL15BJ6gEJIX5SCjLbMdJBQGIeeR5vPPACLcBGAsYHQ/s2048/BMW-M4%2B%25282%2529.jpg", tipo:"Carro sedan esportivo"}
  ],
  tittle:"Modelos de carros",
  events:[],
  },
  mutations:{
    SET_EVENTS(state,payload){
      state.events=payload}
  },
  actions:{

    fetchEvents({commit}){
      console.log('fetchEvents')
      axios.request(options)
      .then(res=>{ 
        const payload = res.data
        console.log('ssss'+ payload)
        commit('SET_EVENTS',payload)
        })
      .catch(err=> {console.error(err)})
    }

  },
  getters:{
    bigTitle(state){
      return state.title.toUpperCase()
    },
   
  }
})