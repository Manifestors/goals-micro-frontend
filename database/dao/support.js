const Support = require('./../models/support');


class SupportDAO {
  constructor() {
    this.createOneSupport.bind(this);
    this.deleteOneSupport.bind(this);
  }
  createOneSupport (sMsg) {
    return Support.create(sMsg);
  }

  deleteOneSupport (sId) {
    return Support.destroy({ where: { id: sId }});
  }
};


module.exports = new SupportDAO();
