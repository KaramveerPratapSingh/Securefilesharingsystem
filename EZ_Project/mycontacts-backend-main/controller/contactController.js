const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc get contact
//@route GET /api/contacts/:id
//@access private

const getConctact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req,res)=>{
    console.log("The reques body is:", req.body);
    const{ name, email, phone } = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All feilds are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });

    res.status(201).json(contact);
});

//@desc update contacts
//@route PUT /api/contacts/:id
//@access private

const updateContacts =asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User dont have permission to update other user contacts")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updateContacts);
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req,res)=>{
     const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
     if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User dont have permission to update other user contacts")
    }

     await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact)
});

module.exports = {
     getContacts,
     getConctact, 
    createContact,
     updateContacts,
    deleteContact
 };