import { mount, shallowMount } from '@vue/test-utils';
import LoginForm from '../LoginForm.vue';
import GenericCard from '../GenericCard.vue';
import { createTestingPinia } from '@pinia/testing';

describe('LoginForm.vue Tests', () => {
  let wrapper = null;
  let state = jest.fn();
  beforeEach(() => {
    const stubs = {
      GenericCard:{
        template:''
      }
    };
    wrapper = shallowMount(LoginForm, {
      global: {
        stubs: {
          GenericCard: {
            template: '<div><slot></slot></dev>',
          },
        },
        plugins: [
          createTestingPinia({
            createSpy: state,
            initialState: {
              loginLoading: false,
              loginError: 'teste',
            },
          }),
        ],
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
