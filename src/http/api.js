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
                    detalles: "ISO 410, 2",
                    horas: 2,
                    nrc: "1801",
                    tipo_horario: "Virtual",
                    nivel: "Grado",
                    plan_estudios: "Ingenieria de Software",
                    fecha: "06/09/2021",
                    instructor: "Tavarez Morizette, Cibeles",
                    horario:{
                        name: 'Verificacion y Validacion de Software',
                        start: '2021-12-04 20:00',
                        end: '2021-12-04 22:00',
                      },
                  },
                  {
                    titulo: "Sistema Operativo avanzado",
                    detalles: "ISO 405, 3",
                    horas: 3,
                    nrc: "1806",
                    tipo_horario: "Virtual",
                    nivel: "Grado",
                    plan_estudios: "Ingenieria de Software",
                    fecha: "06/09/2021",
                    instructor: "Concepcion Acosta, Miguel",
                    horario:{
                        name: 'Sistema Operativo avanzado',
                        start: '2021-12-01 19:00',
                        end: '2021-12-01 22:00',
                      },
                  },
                  {
                    titulo: "Matematica basica para ingenieria",
                    detalles: "MAT 126, 3",
                    horas: 4,
                    nrc: "1730",
                    tipo_horario: "Presencial",
                    nivel: "Grado",
                    plan_estudios: "Ingenieria de Software",
                    fecha: "DE SOFTWARE	30/08/2021",
                    instructor: "Morillo Mejia, Tomas",
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
                        detalles: "ISO 500, 3",
                        horas: 3,
                        nrc: "1842",
                        tipo_horario: "Virtual",
                        nivel: "Grado",
                        plan_estudios: "Ingenieria de Software",
                        fecha: "30/08/2021",
                        instructor: "Nuñez Acosta, Luis",
                        horario:{
                            name: 'Ingenieria de requisitos',
                            start: '2021-12-03 17:00',
                            end: '2021-12-03 19:00',
                        }
                      },
                      {
                        titulo: "Introduccion a Sistema Operativo",
                        detalles: "ISO 105, 1",
                        horas: 3,
                        nrc: "1720",
                        tipo_horario: "Virtual",
                        nivel: "Grado",
                        plan_estudios: "Ingenieria en Software",
                        fecha: "24/04/2021",
                        instructor: "Concepcion Acosta, Miguel",
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