const router = require("express").Router();
const {
  getAllContacts,
  createContact,
  singleContact,
  updateContact,
  deleteContact,
} = require("./contactController");

router.get("/", getAllContacts);
router.post("/", createContact);
router.get("/:id", singleContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
