// app/routes.js
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); 
	});

	// =====================================
	// LOGIN ===============================
	// =====================================

	app.get('/login', function(req, res) {

		
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});


	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', 
            failureRedirect : '/login', 
            failureFlash : true 
	}));
	


	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
	
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', 
		failureRedirect : '/signup', 
		failureFlash : true 
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user 
		});
	});

	app.get('/delete',isLoggedIn, function(req, res) {
	
});
	

	// =====================================
	// LOGOUT ==============================
	// =====================================
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};


function isLoggedIn(req, res, next) {


	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}