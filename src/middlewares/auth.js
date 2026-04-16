const jwt = require("jsonwebtoken");
const private_key = require("../auth/private_key.js");

const authMdlr = (req, res, next) => {
  const token = req.headers.authorization;

  console.log("authorization header = " + token);

  if (!token) {
    const message =
      "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans le header.";
    return res.status(401).json({ message });
  }

  jwt.verify(token, private_key, (error, decodedToken) => {
    if (error) {
      const message =
        "L'utilisateur n'est pas autorisé à accéder à cette ressource.";
      return res.status(401).json({ message, data: error });
    }

    const userId = decodedToken.idUser;

    if (req.body && req.body.userId && req.body.userId !== userId) {
      const message = "L'identifiant de l'utilisateur est invalide.";
      return res.status(401).json({ message });
    } else {
      next();
    }
  });
};

module.exports = authMdlr;
