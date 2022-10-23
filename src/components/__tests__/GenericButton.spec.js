import { shallowMount, mount } from '@vue/test-utils';
import GenericButton from '../GenericButton.vue';

//https://testdriven.io/blog/vue-unit-testing/
describe('GenericInput.vue Tests', () => {
  let wrapper = null;
  let props;
  let onClick = jest.fn();
  beforeEach(() => {
    props = {
      text: 'Button Text',
      onClick: onClick,
    };
  });
  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it('component contains correct props', () => {
    wrapper = shallowMount(GenericButton, {
      propsData: props,
    });
    expect(wrapper.props()).toStrictEqual({
      text: 'Button Text',
      onClick: expect.any(Function),
      type: 'default',
    });
  });

  it('renders component correctly', () => {
    wrapper = shallowMount(GenericButton, {
      propsData: props,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('if button will be clicked', () => {
    it('should call onClick callback 1 time', () => {
      wrapper = shallowMount(GenericButton, {
        propsData: props,
      });
      wrapper.find('button').trigger('click');
      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('if type prop is "success"', () => {
    beforeEach(() => {
      props.type = 'success';
    });
    it('should component contains correct props', () => {
      wrapper = shallowMount(GenericButton, {
        propsData: props,
      });
      expect(wrapper.props()).toStrictEqual({
        text: 'Button Text',
        onClick: expect.any(Function),
        type: 'success',
      });
    });
    it('should contains correct variant class', async () => {
      wrapper = shallowMount(GenericButton, {
        propsData: props,
      });
      expect(wrapper.classes()).toContain('generic-button--success');
    });
  });
});
