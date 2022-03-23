const Manifestation = require('./../models/manifestation');


class ManifestationDAO {
  constructor() {
    this.getOneManifestation.bind(this);
    this.getAllManifestations.bind(this)
    this.createOneManifestation.bind(this);
    this.deleteOneManifestation.bind(this);
  }

  getOneManifestation (mId) {
    return Manifestation.findOne({ where: { id: mId }});
  }

  getAllManifestations () {
    return Manifestation.findAll();
  }

  createOneManifestation (manifestation) {
    const { mWhat, mHow, mTimeFrame } = manifestation;
    const belongsTo = '000';
    const username = 'n30n';
    const sMsgs = [];
    const mToCreate = {
      belongsTo, username, mWhat, mHow, mTimeFrame, sMsgs
    };

    return Manifestation.create(mToCreate);
  }

  deleteOneManifestation (mId) {
    return Manifestation.destroy({ where: { id: mId }});
  }

  updateOneManifestationWithSupportMsg (sMsg) {
    return Manifestation.findOne({ where: { id: sMsg.belongsTo }})
      .then(({ dataValues }) => {
        const updatedMsgs = JSON.parse(JSON.stringify(dataValues.sMsgs));
        updatedMsgs.push(sMsg);

        return Manifestation.update({ sMsgs: updatedMsgs}, {
          where: {
            id: sMsg.belongsTo
          }
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        return Manifestation.findOne({ where: { id: sMsg.belongsTo }})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateOneManifestationWithDeletedSupportMsg (sMsg) {
    return Manifestation.findOne({ where: { id: sMsg.belongsTo }})
      .then(({ dataValues }) => {
        const sMsgs = JSON.parse(JSON.stringify(dataValues.sMsgs));
        const updatedMsgs = sMsgs.filter((msg) => {
          if (msg.id !== sMsg.id) {
            return msg;
          }
        });

        return Manifestation.update({ sMsgs: updatedMsgs}, {
          where: {
            id: sMsg.belongsTo
          }
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        return Manifestation.findOne({ where: { id: sMsg.belongsTo }})
      })
      .catch((error) => {
        console.log(error);
      });
  }
};


module.exports = new ManifestationDAO();
