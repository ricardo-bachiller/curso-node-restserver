const { request, response } = require('express');

const userGet = (req = request, res = response) => {
  const { q, name = 'No name', apikey, page = 1, limit } = req.query;
  res.json({
    msg: 'get API - controlador',
    q,
    name,
    apikey,
    page,
    limit,
  });
};

const userPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: 'Post API - controlador',
    nombre,
    edad,
  });
};

const userPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'put API - controlador',
    id,
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador',
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
