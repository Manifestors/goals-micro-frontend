const ManifestationDAO = require('./../../database/dao/manifestation');


class ManifestationBusiness {
  constructor() {
    this.getOne.bind(this);
    this.getAll.bind(this)
    this.createOne.bind(this);
    this.deleteOne.bind(this);
  }

  getOne (mId, res) {
    console.log('Get One Manifestation: ', mId);
    return ManifestationDAO.getOneManifestation(mId)
      .then(({ dataValues }) => {
        console.log('One Manifestation Msg: ', dataValues);
        return res.status(200).send(dataValues);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      });
  }

  getAll (res) {
    return ManifestationDAO.getAllManifestations()
      .then((allManifestations) => {
        return res.status(200).send(allManifestations);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      });
  }

  createOne (manifestation, res) {
    return ManifestationDAO.createOneManifestation(manifestation)
      .then((data) => {
        const createdManifestation = data;
        return res.status(201).send(createdManifestation);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      });
  }

  deleteOne (mId, res) {
    return ManifestationDAO.deleteOneManifestation(mId)
      .then(() => {
        const deletedManifestationId = JSON.stringify(mId);
        return res.status(200).send(deletedManifestationId);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      });
  }
};


module.exports = new ManifestationBusiness();
