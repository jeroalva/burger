var connection = require ("./connection.js");

var orm = {
    selectAll: function(column1, column2, column3, table, cbFunc, res){
        var queryString = "SELECT ??, ??, ?? FROM ??";
        connection.query(queryString,[column1, column2, column3, table], (err, result) => {
            if (err){
                return res.status(500).end();
            };
            cbFunc(result, res);
        });
    },
    insertOne: function(table,name,cbFunc, res){
        var queryString = "INSERT INTO ?? (name) VALUES (?)";
        connection.query(queryString,[table,name],(err,result)=>{
            if (err){
                return res.status(500).end();
            };
            cbFunc(result, res);
        });
    },
    updateOne: function(table,columnToChange,newValue,columnWhere,valueWhere,cbFunc, res){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[table,columnToChange,newValue,columnWhere,valueWhere], (err,result)=> {
            if (err){
                return res.status(500).end();
            };
            cbFunc(result, res);
        })
    }
};

module.exports = orm;