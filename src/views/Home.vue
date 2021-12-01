<template>
  <div>
    <v-container>
    <h2>Informacion de inscripcion</h2>
      <v-tabs v-model="tab">
        <v-tab>
          Buscar horario            
        </v-tab>
        <v-tab>
          Inscripciones activas
        </v-tab>        
      </v-tabs>
      <v-tabs-items v-model="tab">
            <v-tab-item>
              ITEM1
            </v-tab-item>
                      <v-tab-item>
            ITEM2
          </v-tab-item>
            </v-tabs-items>                  
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        tab:null
      }
    },
  }
</script>
