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

export const verifyToken = () => {};
