export const testApi = async () => {
  const response = await fetch(
    'https://estudos-node-vue.herokuapp.com/rotas/hello'
  );
  return await response.json();
};
