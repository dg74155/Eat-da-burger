var connection = require("./connection.js")

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
	all: function(select, table, cb) {
		var queryString = "SELECT ?? FROM ??";
		connection.query(queryString, [select, table], function(err, data) {
			cb(data)
		});
	},

	create: function(table, col, vals, cb){
		var queryString = 'INSERT INTO ' + table;
		queryString = queryString + ' (';
		queryString = queryString + col.toString(); 
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		connection.query(queryString, vals, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	update: function(table, objColVals, condition, cb){
		var queryString = 'UPDATE ' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;