import { shallowMount } from '@vue/test-utils';
import GenericCard from '../GenericCard.vue';

describe('GenericInput.vue Tests', () => {
  it('renders component correctly', () => {
    const wrapper = shallowMount(GenericCard);
    expect(wrapper.element).toMatchSnapshot();
  });
});
