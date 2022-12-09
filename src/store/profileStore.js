import {reactive} from 'vue'

const profile= reactive ({
    perfiles: [],
    addPerfil (perfil){
        this.perfiles.push(perfil)
    }
})

export default profile
