import { shallowMount } from '@vue/test-utils'
import Horario from '@/components/Horario.vue'
describe('Horario.vue', () => {
  it('Cantidad de titulos de la tabla es correcta', () => {

    const defaultData=Horario.data();
    expect(defaultData.headers.length).toEqual(9)
  })
})