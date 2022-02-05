const contacts = require("./Contacts");

exports.getAllContacts = (req, res) => {
  res.json(contacts.getAllContact());
};

exports.createContact = (req, res) => {
  const { name, phone, email } = req.body;

  const contact = contacts.createContact({
    name,
    phone,
    email,
  });
  res.json(contact);
};

exports.singleContact = (req, res) => {
  const { id } = req.params;
  const orgId = parent(id);

  const contact = contacts.getContactsById(orgId);

  res.json(contact);
};

exports.updateContact = (req, res) => {
  const { id } = req.params;
  const orgId = parseInt(id);

  let { name, email, phone } = req.body;

  let contact = contacts.updateContactById(orgId, {
    name,
    phone,
    email,
  });

  res.json(contact);
};

exports.deleteContact = (id) => {
  const { id } = req.params;
  const orgId = parseInt(id);

  let contact = contacts.deleteContactById(orgId);

  res.json(contact);
};
