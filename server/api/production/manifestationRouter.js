const manifestationRouter = require('express').Router();
const ManifestationBusiness = require('./../../business/manifestation');


manifestationRouter.get('/get/all', (req, res) => {
  ManifestationBusiness.getAll(res);
});;

// manifestationRouter.get('/get/one/:id', (req, res) => {
//   console.log('Router: Get One manifestation (params): ', req.params);
//   return res.status(200).send();
// });

manifestationRouter.post('/post/one', (req, res) => {
  const manifestation = req.body;
  ManifestationBusiness.createOne(manifestation, res);
});

manifestationRouter.delete('/delete/one', (req, res) => {
  const mId = req.body.id;
  ManifestationBusiness.deleteOne(mId, res);
});


module.exports = manifestationRouter;
