import { shallowMount, mount } from '@vue/test-utils';
import GenericInput from '../GenericInput.vue';

describe('GenericInput.vue Tests', () => {
  let wrapper = null;
  let props;
  beforeEach(() => {
    props = {
      name: 'Input Name',
    };
    wrapper = shallowMount(GenericInput, {
      propsData: props,
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('component contains correct props', () => {
    expect(wrapper.props()).toStrictEqual({
      errorMessage: undefined,
      name: 'Input Name',
      modelValue: '',
    });
  });

  describe('if input receive an value', () => {
    it('emit update to modelValue', () => {
      wrapper.find('input').setValue('text-value');
      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue').at(0).at(0)).toBe(
        'text-value'
      );
    });

    it('should change empty class if not empty', async () => {
      await wrapper.setProps({
        modelValue: '',
      });
      expect(wrapper.classes()).toContain('input--empty');
      await wrapper.setProps({
        modelValue: 'text-value',
      });
      expect(wrapper.classes()).not.toContain('input--empty');
    });

    it('should change empty class if empty', async () => {
      await wrapper.setProps({
        modelValue: 'not empty',
      });
      expect(wrapper.classes()).not.toContain('input--empty');
      await wrapper.setProps({
        modelValue: '',
      });
      expect(wrapper.classes()).toContain('input--empty');
    });
  });

  describe('if input receive an errorMessage', () => {
    beforeEach(() => {
      props.errorMessage = 'error';
      wrapper = shallowMount(GenericInput, {
        propsData: props,
      });
    });

    it('component contains correct props', () => {
      expect(wrapper.props()).toStrictEqual({
        errorMessage: 'error',
        name: 'Input Name',
        modelValue: '',
      });
    });

    it('should contains error class', () => {
      expect(wrapper.classes()).toContain('input--error');
    });

    it('should add error class if  has error', async () => {
      await wrapper.setProps({
        errorMessage: '',
      });
      expect(wrapper.classes()).not.toContain('input--error');
      await wrapper.setProps({
        errorMessage: 'new error',
      });
      expect(wrapper.classes()).toContain('input--error');
    });

    it('should remove error class if not has error', async () => {
      expect(wrapper.classes()).toContain('input--error');
      await wrapper.setProps({
        errorMessage: '',
      });
      expect(wrapper.classes()).not.toContain('input--error');
    });
    it('renders component correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  it('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('if component has v-model with default value', () => {
    beforeEach(() => {
      props.modelValue = 'default value';
      wrapper = shallowMount(GenericInput, {
        propsData: props,
      });
    });
    it('should not contains empty class', () => {
      expect(wrapper.classes()).not.toContain('input--empty');
    });

    describe('if v-model is empty ', () => {
      beforeEach(() => {
        props.modelValue = '';
        wrapper = shallowMount(GenericInput, {
          propsData: props,
        });
      });
      it('should contains empty class', () => {
        expect(wrapper.classes()).toContain('input--empty');
      });
    });
  });
});
