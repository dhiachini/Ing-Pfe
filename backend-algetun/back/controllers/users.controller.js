const Users = require("../models/users.models");
const ValidateUser = require("../validation/Users.validation");

const AddUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    // if (!isValid) {
    //   res.status(404).json(errors);
    // } else {
    await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
      if (exist) {
        errors.Email = "User exist";
        res.status(404).json(errors);
      } else {
        const user = new Users({
          Email: req.body.Email,
          Lastname: req.body.Lastname,
          Firstname: req.body.Firstname,
          Age: req.body.Age,
          
        });
        user.Avatar = req.file.path
        await user.save();
        res.status(201).json({ message: "user added with success" });
      }
    });
    // }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllUsers = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {}
  console.log(error.message);
};

const FindSingleUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {}
};

const UpdateUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);

  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {}
};

const DeleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ _id: req.params.id });
    res.status(201).json("user deleted with succes");
  } catch (error) {}
};

module.exports = {
  AddUser,
  FindAllUsers,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};
