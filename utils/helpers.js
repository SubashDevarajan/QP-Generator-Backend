import jwt from 'jsonwebtoken';

function jwtTokens({ user_id, user_name, user_email }) {
  const user = { user_id, user_name, user_email}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1440m' });
  return ({ accessToken, refreshToken });
}

function accessToken({ user_id, user_name, user_email }) {
  const user = { user_id, user_name, user_email}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' });
    return ({ accessToken });
}

export {accessToken, jwtTokens};