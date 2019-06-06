
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aula8'
});

var LocalStrategy = require('passport-local').Strategy;

console.log("MySQL connection created at %s with database: %s", connection.config.host, connection.config.database);

module.exports = function(passport) {


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    passport.use('local-signup' , new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true 
        },
        function(req, email, password, done) {

            connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'", function(err, rows) {
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {
             
                    var newUserMysql = {
                        email: email,
                        password: password  
                    };

                    var insertQuery = "INSERT INTO users ( email, password ) values (?,?)";

                    connection.query(insertQuery,[newUserMysql.email, newUserMysql.password],function(err, rows) {
                        newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                    });
                }
            });
        })
    );



    passport.use('local-login', new LocalStrategy({
        
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true 
    },
        function (req, email, password, done) {
            connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
                if (err)
                    return done(err);
                 if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user found.')); 
                } 
                
                
                if (!( rows[0].password == password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 
                
               
                return done(null, rows[0]);			
            
            });                         
        }));
};