// Import MySQL connection.
var connection = require("../config/connections.js");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {

   // selectAll()
  selectAll: function(tableInput, cb) {
    var queryURL = "SELECT * FROM " + tableInput + ";";
    connection.query(queryURL, function(err, result) {
      if (err) throw err;
      cb(result);
    });
    

  },

  // insertOne()
  insertOne: function(burger_name, devoured) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( \'";

        queryString += burger_name;
        queryString += "\'";
        queryString += " , "; 
        queryString += devoured;
        queryString += ")";
        

    console.log(queryString);

    connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
},

  //updateOne()
  updateOne: function(table, objColVals, condition, cb) {
        
    var queryString = 'UPDATE ' + table;
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
       }
        cb(result);
        console.log(result);
  });
}
};

module.exports = orm;