const axios = require('axios')
var data = []

var listClinics = function() {
  
    return {"msg":"success","clinics":data}

}

var buildArrayOfClinics = function(){

   //Dental
    axios.get('https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json')
    .then(function (response) {
      response.data.map(function(o){
        delete Object.assign(o, {["state"]: o["stateName"] })["stateName"];
      })
      data = data.concat(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });


   //VET
   axios.get('https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json')
   .then(function (response) {
     response.data.map(function(o){
       delete Object.assign(o, {["name"]: o["clinicName"] })["clinicName"];
       delete Object.assign(o, {["state"]: o["stateCode"] })["stateCode"];
       delete Object.assign(o, {["availability"]: o["opening"] })["opening"];
     })
     data = data.concat(response.data)
   })
   .catch(function (error) {
     console.log(error);
   })
   .then(function () {
   });
  
}

var searchClinics = function(criteria) {
    var result = []
    try{
        //array.filter for iterate search criteria
        result = data.filter(function(item){
            return Object.keys(criteria).filter(function(string_key){
            if(typeof(criteria[string_key])==="object"){
                return Object.keys(criteria[string_key]).filter(function(object_key){
                    return criteria[string_key][object_key]===item[string_key][object_key];
                }).length === Object.keys(criteria[string_key]).length
            }else{
                return item[string_key]===criteria[string_key];
            }
            }).length === Object.keys(criteria).length
        })
    }catch(error){
        console.log("Error",error,criteria)
        return {"msg":"failed"}
    }
    return {"msg":"success","clinics":result}

}


module.exports = {listClinics, searchClinics, buildArrayOfClinics}
