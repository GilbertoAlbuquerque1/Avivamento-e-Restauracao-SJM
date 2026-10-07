const authService = require('../services/auth.service');
const ValidationError = require('../errors/ValidationError');

const authController = {
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({
          error: error.message
        });
      }

      console.error('Erro no register:', error);

      return res.status(500).json({
        error: 'Erro interno do servidor.'
      });
    }
  },

  login: async (req, res) => {
    try {
      const user = await authService.login(req.body);

      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({
          error: error.message
        });
      }

      console.error('Erro no login:', error);

      return res.status(500).json({
        error: 'Erro interno do servidor.'
      });
    }
  }
};

module.exports = authController;