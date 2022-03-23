const SupportDAO = require('./../../database/dao/support');
const ManifestationDAO = require('./../../database/dao/manifestation');


class SupportBusiness {
  constructor() {
    this.createOne.bind(this);
    this.deleteOne.bind(this);
  }
  
  createOne (support, res) {
    const { belongsTo, sMsg } = support;
    const username = 'vi0137';
    const supportToCreate = {belongsTo, username, sMsg};

    return SupportDAO.createOneSupport(supportToCreate)
      .then(({ dataValues }) => {
        return ManifestationDAO.updateOneManifestationWithSupportMsg(dataValues);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      })
      .then(({ dataValues }) => {
        return res.status(201).send(dataValues);
      })
  }

  deleteOne (supportToDelete, res) {
    return SupportDAO.deleteOneSupport(supportToDelete.id)
      .then(()=> {
        return ManifestationDAO.updateOneManifestationWithDeletedSupportMsg(supportToDelete);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      })
      .then(({ dataValues }) => {
        return res.status(200).send(dataValues);
      });
  }
};


module.exports = new SupportBusiness();
