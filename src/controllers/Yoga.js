// Controller will relate to a specific model
// So you want to import that model here
// Note - you can have multiple models within one controller
const Yoga = require("../models/Yoga");

module.exports = {
  // Inside each controller method, you're defining the logic of your app
  // Each 'endpoint' will contain specific instructions...
  // ...on what data should be displayed
  index: async (req, res, next) => {
    Yoga.find({}).then(yoga => {
      res.json(yoga);
    });
  },
   create: (req, res) => {
        Yoga.create({
      id: req.body.id,
      sanskrit_name: req.body.sanskrit_name,
      english_name: req.body.english_name,
      img_url: req.body.img_url
        })
            .then(newYogaDoc => {
                res.json(newYogaDoc)
            });
    },
  update: (req, res, next) => {},
  delete: (req, res, next) => {}
};

//Sample Data
// {
//   "id": 49,
//   "sanskrit_name": "Chakrasana",
//   "english_name": "Wheel",
//   "img_url": "https://storage.needpix.com/rsynced_images/yoga-3427131_1280.png"
// }

// Sample curl  --url http://localhost:8080/   --header 'Accept: */*'   --header 'Accept-Encoding: gzip, deflate'   --header 'Cache-Control: no-cache'   --header 'Connection: keep-alive'   --header 'Content-Length: 164'   --header 'Content-Type: application/json'   --header 'Host: localhost:8080'   --header 'User-Agent: PostmanRuntime/7.20.1'   --header 'cache-control: no-cache'   --data '{    "id": 49,   "sanskrit_name": "Chakrasana",    "english_name": "Wheel",    "img_url": "https://storage.needpix.com/rsynced_images/yoga-3427131_1280.png"}' -v
