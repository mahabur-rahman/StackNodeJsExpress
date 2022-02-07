const Contact = require("./Contact");

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "Error Occurred",
      });
    });
};

exports.getSingleContact = (req, res) => {
  const { id } = req.params;
  Contact.findById(id)
    .then((singleItem) => {
      res.json(singleItem);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Single item not show",
      });
    });
};

exports.createContact = (req, res) => {
  const { name, phone, email } = req.body;
  const contact = new Contact({
    name,
    phone,
    email,
  });
  contact
    .save()
    .then((c) => {
      res.json(c);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

exports.updateContact = (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;

  Contact.findOneAndUpdate(
    { _id: id },
    { $set: { name, email, phone } },
    { new: true }
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "Error Message",
      });
    });
};
exports.deleteContact = (req, res) => {
  const { id } = req.params;

  Contact.findOneAndDelete(id)

    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "Error Message",
      });
    });
};
