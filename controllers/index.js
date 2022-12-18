class Controller {
  static createMerchant(req, res, next) {
    console.log('success --- createMerchant');
    res.send('success --- createMerchant');
  }
  static getMerchant(req, res, next) {
    console.log('succes --- =s');
    res.send('succes --- =s');
  }
  static getMerchantById(req, res, next) {
    console.log('success --- getMerchantById');
    res.send('success --- getMerchantById');
  }
  static UpdateMerchantById(req, res, next) {
    console.log('success --- UpdateMerchantById');
    res.send('success --- UpdateMerchantById');
  }
  static DeleteMerchantById(req, res, next) {
    console.log('success --- DeleteMerchantById');
    res.send('success --- DeleteMerchantById');
  }
}

module.exports = Controller;
