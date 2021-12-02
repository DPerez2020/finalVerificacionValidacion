<template>
  <div>
    <v-container>
    <h2>Informacion de inscripcion</h2>
      <horario></horario>  
    
    </v-container>
  </div>
</template>

<script>
import Horario from '@/components/Horario'
  export default {
    name: 'Home',
    components:{
      Horario        
    },
    data() {
      return {
        tab:null
      }
    },
  }
</script>
