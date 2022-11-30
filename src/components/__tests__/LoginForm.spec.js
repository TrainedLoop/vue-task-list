import { mount, shallowMount, config } from '@vue/test-utils';
import { nextTick } from 'vue';
import LoginForm from '../LoginForm.vue';
import { createTestingPinia } from '@pinia/testing';
import { useUserStore } from '@/stores/users';
import router from '@/router';

jest.mock('../../router', () => ({ push: jest.fn() }));

describe('LoginForm.vue Tests', () => {
  let wrapper = null;
  let store = null;
  beforeEach(() => {
    config.global.renderStubDefaultSlot = true;
    wrapper = mount(LoginForm, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              user: {
                loginLoading: false,
                loginError: undefined,
              },
            },
          }),
        ],
      },
    });
    store = useUserStore();
  });
  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });
  afterAll(() => {
    config.global.renderStubDefaultSlot = false;
  });

  it('should renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should store has correct initial Value', () => {
    expect(store.loginLoading).toStrictEqual(false);
    expect(store.loginError).toStrictEqual(undefined);
  });

  it('should render two generic inputs', () => {
    const input = wrapper.findAllComponents({ name: 'GenericInput' });
    expect(input).toHaveLength(2);
  });

  it('should first input has correct props', () => {
    const input = wrapper.findAllComponents({ name: 'GenericInput' }).at(0);
    expect(input.props()).toStrictEqual({
      errorMessage: undefined,
      modelValue: '',
      name: 'Login',
    });
  });

  it('should second input is typed as password', () => {
    const input = wrapper.findAllComponents({ name: 'GenericInput' }).at(1);
    expect(input.attributes('type')).toBe('password');
  });

  it('should input button has correct props', () => {
    const input = wrapper.findAllComponents({ name: 'GenericInput' }).at(1);
    expect(input.props()).toStrictEqual({
      errorMessage: undefined,
      modelValue: '',
      name: 'Senha',
    });
  });

  it('should render two generic buttons', () => {
    const button = wrapper.findAllComponents({ name: 'GenericButton' });
    expect(button).toHaveLength(2);
  });

  it('should first button has correct props', () => {
    const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(0);
    expect(button.props()).toStrictEqual({
      onClick: expect.any(Function),
      text: 'Entrar',
      type: 'success',
    });
  });
  describe('if state loginLoading is true', () => {
    it('should first button has correct text prop', async () => {
      store.loginLoading = true;
      await nextTick();
      const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(0);
      expect(button.props('text')).toBe('Entrando...');
    });
  });
  describe('if first button click callback is called', () => {
    it('should call authUser from store 1 time', async () => {
      const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(0);
      await button.props().onClick();
      expect(store.authUser).toBeCalledTimes(1);
    });

    it('should call authUser from store with correct params', async () => {
      const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(0);
      await button.props().onClick();
      expect(store.authUser).toBeCalledWith({ login: '', password: '' });
    });

    describe('if state loginLoading is true', () => {
      it('should not call authUser from store', async () => {
        store.loginLoading = true;
        await nextTick();
        const button = wrapper
          .findAllComponents({ name: 'GenericButton' })
          .at(0);
        await button.props().onClick();
        expect(store.authUser).not.toBeCalled();
      });
    });
  });

  it('should second button has correct props', () => {
    const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(1);
    expect(button.props()).toStrictEqual({
      onClick: expect.any(Function),
      text: 'Cadastrar',
      type: 'default',
    });
  });

  describe('if second button click callback is called', () => {
    it('should call router.push 1 time', async () => {
      const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(1);
      await button.props().onClick();
      expect(router.push).toBeCalledTimes(1);
    });

    it('should call router.push with correct params', async () => {
      const button = wrapper.findAllComponents({ name: 'GenericButton' }).at(1);
      await button.props().onClick();
      expect(router.push).toBeCalledWith('/register');
    });
  });
});
