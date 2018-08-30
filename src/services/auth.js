import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';

export const createToken = (user, secret) => jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  secret,
  {
    expiresIn: '7d',
  },
);

export const verifyToken = async (token, secret) => {
  try {
    return await jwt.verify(token, secret);
  } catch (e) {
    throw new AuthenticationError('Your session expired, Sign in again.');
  }
};
