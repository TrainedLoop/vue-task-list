import { shallowMount, mount } from '@vue/test-utils';
import GenericInput from '../GenericInput.vue';

//https://testdriven.io/blog/vue-unit-testing/
describe('GenericInput.vue Tests', () => {
  let wrapper = null;
  let props;
  beforeEach(() => {
    props = {
      name: 'Input Name',
    };
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('component contains correct props', () => {
    wrapper = shallowMount(GenericInput, {
      propsData: props,
    });
    expect(wrapper.props()).toStrictEqual({
      name: 'Input Name',
      modelValue: '',
    });
  });

  describe('if input receive an value', () => {
    it('emit update to modelValue', () => {
      wrapper = shallowMount(GenericInput, {
        propsData: props,
      });
      wrapper.find('input').setValue('text-value');
      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue').at(0).at(0)).toBe(
        'text-value'
      );
    });

    it('should change empty class if not empty', async () => {
      (props.modelValue = ''),
        (wrapper = shallowMount(GenericInput, {
          propsData: props,
          sync: false,
        }));
      expect(wrapper.classes()).toContain('input--empty');
      await wrapper.setProps({
        modelValue: 'text-value',
      });
      expect(wrapper.classes()).not.toContain('input--empty');
    });
  });

  it('renders component correctly', () => {
    wrapper = shallowMount(GenericInput, {
      propsData: props,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('if component has v-model with default value', () => {
    beforeEach(() => {
      props.modelValue = 'default value';
    });

    it('should not contains empty class', () => {
      wrapper = mount(GenericInput, {
        propsData: props,
      });
      expect(wrapper.classes()).not.toContain('input--empty');
    });

    describe('if v-model is empty ', () => {
      beforeEach(() => {
        props.modelValue = '';
      });
      it('should contains empty class', () => {
        wrapper = shallowMount(GenericInput, {
          propsData: props,
        });
        expect(wrapper.classes()).toContain('input--empty');
      });
    });
  });
});
