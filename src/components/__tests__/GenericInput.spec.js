import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount, flushPromises } from '@vue/test-utils'
import GenericInput from '../GenericInput.vue'

//https://testdriven.io/blog/vue-unit-testing/
describe('GenericInput.vue Implementation Test', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(GenericInput, {
      propsData: {
        name: 'Input Name'
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })
  it('renders message when component is created', () => {
    expect(wrapper.text()).eqls('')
  })
})