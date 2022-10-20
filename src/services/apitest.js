export const testApi = async () => {
  try {
    const response = await fetch(
      'https://estudos-node-vue.herokuapp.com/rotas/hello'
    );
    return await response.json();
  } catch (error) {
    console.log(error)
    alert(error)
    return "error"
  }
};
