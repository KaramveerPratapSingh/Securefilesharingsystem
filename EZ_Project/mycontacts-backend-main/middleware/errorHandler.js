const { constants } = require("../constants")
const errorHandler = (err, req, res, next)=>{
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch(statuscode){
        case constants.NOT_FOUND:
            res.json({ 
                title: "Not found", 
                messege: err.messege,
                stackTrace: err.stack
            });
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                 title: "Validation Failed", 
                 messege: err.messege,
                 stackTrace: err.stack
                });
        case constants.FORBIDDEN:
            res.json({
                 title: "Forbidden", 
                 messege: err.messege,
                 stackTrace: err.stack
                });
        case constants.UNAUTHORIZED:
            res.json({
                 title: "Unauthorized", 
                 messege: err.messege,
                 stackTrace: err.stack
                });
        case constants.SERVER_ERROR:
            res.json({
                 title: "Server error", 
                 messege: err.messege,
                 stackTrace: err.stack
                });
        default:
            console.log("No Error all good")
            break;


    }
    
    
};

module.exports = errorHandler; 