import checkFormModel from "../models/checkFormModel.js";

//POST
export const postCheckFormController = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, address, city, postalcode } =
      req.body;
    //validation
    if (!firstname) {
      return res.send({ message: "First name is Required" });
    }
    if (!lastname) {
      return res.send({ message: "Last  name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }

    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!city) {
      return res.send({ message: "City is Required" });
    }

    if (!postalcode) {
      return res.send({ message: "Postal code is Required" });
    }

    //check user
    const exisitingInfo = await checkFormModel.findOne({ email });
    //existing user
    if (exisitingInfo) {
      return res.status(200).send({
        success: false,
        message: "Information already exists",
      });
    }

    //save
    const checkForm = await new checkFormModel({
      firstname,
      lastname,
      email,
      phone,
      address,
      city,
      postalcode,
    }).save();
    res.status(201).send({
      success: true,
      message: "Information saved Successfully",
      checkForm,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while infomation save",
      error,
    });
  }
};

//get all
export const getCheckFormController = async (req, res) => {
  try {
    const checkForm = await checkFormModel.find({});
    res.status(200).send({
      success: true,
      message: "get information successfully",
      checkForm,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile getting information",
      error,
    });
  }
};
