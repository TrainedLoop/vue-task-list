import { defineStore } from 'pinia';

interface IUserStore {
  name?: string;
  email?: string;
  auth: boolean;
  loginLoading: boolean;
  loginError?: string;
}

interface ILogin {
  login: string;
  password: string;
}
export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    name: undefined,
    email: undefined,
    auth: false,
    loginLoading: false,
    loginError: undefined,
  }),
  getters: {
    getUsers(state) {
      return state;
    },
  },
  actions: {
    async authUser({ login, password }: ILogin) {
      try {
        this.loginLoading = true;
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        this.loginLoading = false;
      }
    },
  },
});
