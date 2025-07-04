const express = require('express');
const router = express.Router();
const { getContacts, 
    getConctact,
    createContact,
     updateContacts,
    deleteContact
} = require("../controller/contactController");
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContacts).delete(deleteContact).get(getConctact);

module.exports = router;
