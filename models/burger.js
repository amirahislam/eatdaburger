var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
// The variables cols and vals are arrays.
insertOne: function(burger_name, devoured, cb) {
    orm.insertOne(burger_name, devoured, function(res) {
        cb(res);
    });
},
updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
    });
   }
};

module.exports = burger;