const express = require("express");
const {CreateNewHospital, GetAllHospitals : GetAllHospitalController, DeleteHospitalByIdController, UpdateHospitalByIdController, AddHospitalDetailsController} = require("../controller/Hospital.controller")

const HospitalRouter = express.Router();

HospitalRouter.get("", GetAllHospitalController)

HospitalRouter.post("/create", CreateNewHospital);

HospitalRouter.post("/details", AddHospitalDetailsController)

HospitalRouter.delete("/delete", DeleteHospitalByIdController);

HospitalRouter.put("/update", UpdateHospitalByIdController);


module.exports = HospitalRouter;