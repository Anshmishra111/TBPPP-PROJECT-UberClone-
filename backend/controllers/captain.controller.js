const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }


    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });

}


// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4NTRmMjBlZmJhMTVkMjM0M2JkM2MiLCJpYXQiOjE3MzgwMzY0NjYsImV4cCI6MTczODEyMjg2Nn0.qzAndkak6H6iw9T9liSFjd_7ls_VNbU3Gh0UHaCG0NY",
// "captain":{
// "fullname":{
// "firstname":"test_captain_firstname",
// "lastname":"test_captain_lastname"
// },
// "email":"tests_email@gmail.com",
// "password":"$2b$10$Glx0nZEPUGujg84EeclLV.vDIBQsEiMGFDdkd3cEBeQe9PAejqCDO",
// "status":"inactive",
// "vehicle":{
// "color":"red",
// "plate":"MP 04 XY 6204",
// "capacity":3,
// "vehicleType":"car"
// },
// "_id":"679854f20efba15d2343bd3c",
// "__v":0}}

