export default {
    async obtenerPeriodos() {
        return await new Promise((resolver) => {
            resolver([{
                id: 1,
                text: "SEP-DIC 2021 Grado",
            },
            {
                id: 2,
                text: "MAY-AGO 2021 Grado",
            },])
        });
    },
    async obtenerAsignaturasPorPeriodo(periodo){
        return await new Promise((resolver)=>{
            if (periodo.id==1) {
                resolver([{
                    titulo: "Verificacion y Validacion de Software",
                    detalles: "",
                    horas: 2,
                    nrc: "",
                    tipo_horario: "Virtual",
                    nivel: "",
                    plan_estudios: "",
                    fecha: "",
                    instructor: "Cibe",
                    horario:{
                        name: 'Verificacion y Validacion de Software',
                        start: '2021-12-04 20:00',
                        end: '2021-12-04 22:00',
                      },
                  },
                  {
                    titulo: "Sistema Operativo avanzado",
                    detalles: "",
                    horas: 3,
                    nrc: "",
                    tipo_horario: "",
                    nivel: "",
                    plan_estudios: "",
                    fecha: "",
                    instructor: "Yeisson",
                    horario:{
                        name: 'Sistema Operativo avanzado',
                        start: '2021-12-01 19:00',
                        end: '2021-12-01 22:00',
                      },
                  },
                  {
                    titulo: "Matematica basica para ingenieria",
                    detalles: "",
                    horas: 4,
                    nrc: "",
                    tipo_horario: "",
                    nivel: "",
                    plan_estudios: "",
                    fecha: "",
                    instructor: "Morillo",
                    horario:{
                        name: 'Matematica basica para ingenieria',
                        start: '2021-12-02 17:00',
                        end: '2021-12-02 19:00',
                      },
                  }])                
            }else if(periodo.id==2){
                resolver([
                    {
                        titulo: "Ingenieria de requisitos",
                        detalles: "",
                        horas: 2,
                        nrc: "",
                        tipo_horario: "",
                        nivel: "",
                        plan_estudios: "",
                        fecha: "",
                        instructor: "Cibe",
                        horario:{
                            name: 'Ingenieria de requisitos',
                            start: '2021-12-03 17:00',
                            end: '2021-12-03 19:00',
                        }
                      },
                      {
                        titulo: "Introduccion a Sistema Operativo",
                        detalles: "",
                        horas: 3,
                        nrc: "",
                        tipo_horario: "",
                        nivel: "",
                        plan_estudios: "",
                        fecha: "",
                        instructor: "Paulina Gomez",
                        horario:{
                            name: 'Introduccion a Sistema Operativo',
                            start: '2021-12-01 09:00',
                            end: '2021-12-01 10:00',
                          },
                      },
                ])
            }
        });
    }
}