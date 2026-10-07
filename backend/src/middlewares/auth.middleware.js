const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  const authorization = req.get('Authorization');

  if (!authorization) {
    return res.status(401).json({
      error: 'Token de autenticação não informado.'
    });
  }

  const parts = authorization.trim().split(/\s+/);
  const [scheme, token] = parts;

  if (
    parts.length !== 2 ||
    scheme.toLowerCase() !== 'bearer' ||
    !token
  ) {
    return res.status(401).json({
      error: 'Formato de autenticação inválido.'
    });
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({
      error: 'Erro interno do servidor.'
    });
  }

  let payload;

  try {
    payload = jwt.verify(token, secret, {
      algorithms: ['HS256']
    });
  } catch {
    return res.status(401).json({
      error: 'Token inválido ou expirado.'
    });
  }

  if (
    !payload ||
    typeof payload !== 'object' ||
    !Number.isInteger(payload.userId) ||
    payload.userId <= 0 ||
    typeof payload.role !== 'string' ||
    !payload.role.trim()
  ) {
    return res.status(401).json({
      error: 'Token inválido ou expirado.'
    });
  }


  req.user = {
    id: payload.userId,
    role: payload.role
  };

  return next();
};


module.exports = authMiddleware;
