<template>
  <div>
    <v-row>
      <v-col>
        <v-select
          label="Periodo"
          :items="periodos"
          @change="selectNuevoPeriodo($event)"
          item-text="text"
          return-object
          v-model="periodoSeleccionado"
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn class="mx-2" fab small elevation="0">
          <v-icon dark> fas fa-print </v-icon>
        </v-btn>
          <v-btn elevation="0" @click="verCalendario">
              Calendario
          </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          no-results-text="No tiene clases inscritas en este periodo"
          disable-pagination
          hide-default-footer
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="verItem(item)"
              >fas fa-eye
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog max-width="600px" v-model="dialogModel">
      <v-card>
        <v-card-title> Detalle Asignatura </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>Titulo: {{ currentItem.titulo }}</v-col>
            <v-col>Detalles: {{ currentItem.detalles }}</v-col>
          </v-row>
          <v-row>
            <v-col>Horas: {{ currentItem.horas }}</v-col>
            <v-col>NRC: {{ currentItem.nrc }}</v-col>
          </v-row>
          <v-row>
            <v-col>Tipo de Horario: {{ currentItem.tipo_horario }}</v-col>
            <v-col>Nivel: {{ currentItem.nivel }}</v-col>
          </v-row>
          <v-row>
            <v-col>Plan de estudios: {{ currentItem.plan_estudios }}</v-col>
            <v-col>Fecha: {{ currentItem.fecha }}</v-col>
          </v-row>
          <v-row>
            <v-col>Instructor: {{ currentItem.instructor }}</v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogModel = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="calendarModel">
      <v-card>
        <v-card-title> Calendario</v-card-title>
        <v-card-text>
              <v-row>
    <v-col>
      <v-sheet height="400" width="900">
        <v-calendar
          ref="calendar"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="calendarModel = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import api from "../http/api";
export default {
  name: "Horario",
  data() {
    return {
      currentItem: {},
      dialogModel: false,
      calendarModel:false,
      periodoSeleccionado: {
        id: 1,
        text: "SEP-DIC 2021 Grado",
      },
      periodos: [],
      headers: [
        {
          text: "Titulo",
          align: "start",
          value: "titulo",
        },
        {
          text: "Detalles",
          value: "detalles",
        },
        {
          text: "Horas",
          value: "horas",
        },
        {
          text: "NRC",
          value: "nrc",
        },
        {
          text: "Tipo horario",
          value: "tipo_horario",
        },
        {
          text: "Nivel",
          value: "nivel",
        },
        {
          text: "Plan de estudios",
          value: "plan_estudios",
        },
        {
          text: "Fecha",
          value: "fecha",
        },
        {
          text: "Acciones",
          value: "actions",
          sortable: false,
        },
      ],
      items: [        
      ],
      today: "2021-12-02",
      events: [],
    };
  },
  mounted(){
      this.$refs.calendar?.scrollToTime('08:00')
      api.obtenerPeriodos().then(d=>this.periodos=d)
      api.obtenerAsignaturasPorPeriodo(this.periodoSeleccionado).then(d=>{
        this.items=d
        this.events=this.items.map(x=>x.horario)
        })
      // this.events=this.items.map(()=>{
      //   return {
      //     name: 'Weekly Meeting',
      //     start: '2021-12-02 09:00',
      //     end: '2021-12-02 10:00',
      //   }
      // })
      // console.log(this.events);
      // this.events=[
      //   {
      //     name: 'Weekly Meeting',
      //     start: '2019-01-07 09:00',
      //     end: '2019-01-07 10:00',
      //   },
      // ]
  },
  methods: {
    verItem(item) {
      this.dialogModel = true;
      this.currentItem = item;
      console.log(item);
    },
    verCalendario(){
        this.calendarModel=true;
    },
    selectNuevoPeriodo(periodo) {
      api.obtenerAsignaturasPorPeriodo(periodo).then(d=>{
        this.items=d
        this.events=this.items.map(x=>x.horario)
      })
    },
  },
};
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>
