import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  cards:[
    {name:"Golf GTI - 2020", price:"R$ 180.000,00",url:"https://3.bp.blogspot.com/-n6CLT0mp0Jk/WyFDdPBfUsI/AAAAAAABFF0/53AIZPwimOsz4Eo9AD4FDsieBjM_Z-pfwCLcBGAs/s1600/VW-Golf-2019%2B%25287%2529.jpg", tipo:"Carro esportivo"},
    {name:"Jetta GLI - 2021", price:"R$ 190.000,00",url:"https://cdn.motor1.com/images/mgl/br7lw/s1/volkswagen-jetta-gli-2-0-tsi-brasil.webp", tipo:"Carro sedan esportivo"}
  ],
  tittle:"Hello World",
  },
  mutations:{

  },
  actions:{

  },
  getters:{

  }
})