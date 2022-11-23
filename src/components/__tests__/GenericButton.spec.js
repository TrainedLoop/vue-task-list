import { shallowMount, mount } from '@vue/test-utils';
import GenericButton from '../GenericButton.vue';

//https://testdriven.io/blog/vue-unit-testing/
describe('GenericInput.vue Tests', () => {
  let wrapper = null;
  let onClick = jest.fn();
  let props = {
    text: 'Button Text',
    onClick: onClick,
  };
  beforeEach(() => {
    wrapper = shallowMount(GenericButton, {
      props,
    });
  });
  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it('component contains correct props', () => {
    expect(wrapper.props()).toStrictEqual({
      text: 'Button Text',
      onClick: expect.any(Function),
      type: 'default',
    });
  });

  it('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('if button will be clicked', () => {
    it('should call onClick callback 1 time', () => {
      wrapper.find('button').trigger('click');
      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('if type prop is "success"', () => {
    beforeEach(() => {
      wrapper = shallowMount(GenericButton, {
        props: { ...props, type: 'success' },
      });
    });
    it('should component contains correct props', () => {
      expect(wrapper.props()).toStrictEqual({
        text: 'Button Text',
        onClick: expect.any(Function),
        type: 'success',
      });
    });
    it('should contains correct variant class', async () => {
      expect(wrapper.classes()).toContain('generic-button--success');
    });
  });
});
