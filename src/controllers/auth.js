const { uid } = require('uid')

const registered_email = "teste@teste.com"
const registered_password = "123456"

const conditionSuccessLogin = (sended_email, sended_password) => (
  sended_email === registered_email && sended_password === registered_password
)

const loginPost = async (request, response, next) => {
  const { email: sended_email, password: sended_password } = request.body

  conditionSuccessLogin(sended_email, sended_password)
    ? response.status(200).json({ token: uid(), message: 'Login realizado com sucesso.' })
    : response.status(401).json({ message: 'Credenciais inválidas.' })
};

const loginGet = async (request, response, next) => {
  const sended_email = request.query.email
  const sended_password = request.query.password

  conditionSuccessLogin(sended_email, sended_password)
    ? response.status(200).json({ token: uid(), message: 'Login realizado com sucesso.' })
    : response.status(401).json({ message: 'Credenciais inválidas.' })
};

module.exports = {
  loginPost,
  loginGet
};
