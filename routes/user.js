const { Router } = require('express');
const {
  userGet,
  userPost,
  userPut,
  userDelete,
} = require('../controllers/user');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPost);

router.post('/', userPut);

router.delete('/', userDelete);

module.exports = router;
