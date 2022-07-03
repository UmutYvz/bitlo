import login from './login.json';
import signUp from './signup.json';
import card from './card.json';
import coinDetail from './coinDetail.json';
const obj = {
  login,
  signUp,
  card,
  coinDetail
};

export default obj;

export type StaticTextType = typeof obj;
