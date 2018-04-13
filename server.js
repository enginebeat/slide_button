
var ServerController = (()=>{

    const raspi                 = require('raspi');
    const gpio                  = require('raspi-gpio');

    var express                 = require('express');
    var mongoose                = require('mongoose');
    var passport                = require('passport');
    var bodyParser              = require('body-parser');
    var LocalStrategy           = require('passport-local');
    var passportLocalMongoose   = require('passport-local-mongoose');

    var User                    = require('./models/user');

    mongoose.connect('mongodb://localhost/auth_demo_app');

    var app = express();


    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended: true}));

    /* Order of These is important KEEP IT THIS WAY
    Need to check a bit closer Why...
    */
    //notice the inline require
    app.use(require('express-session')({
        secret: "I love Susana",
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    //===============================
    app.get('/admin',(req, res)=>{
        res.render('./public/views/admin');
    });
    app.get('/', (req, res)=>{
        res.render('./public/views/home');
    });

    app.get('/pi_control', isLoggedIn, (req, res)=>{
        res.render('./public/views/pi_control');
    });

    app.post('/register', (req, res)=>{
        req.body.username;
        req.body.password;
        User.register(new User({username: req.body.username}), req.body.password, function(err, user){
            if(err){
                console.log(err);
                return res.render('register');
            }
            passport.authenticate('local')(req, res, ()=>{
            res.redirect('./public/views/pi_control');
            });
        });
    });

    // LOGIN ROUTES
    //render login form
    app.get('/login', (req, res)=>{
        res.render('./public/views/login');
    });

    // Login logic
    //middleware
    app.post('/login', passport.authenticate('local', {
        successRedirect: './public/views/pi_control',
        failureRedirect: './public/views/login'
    }), (req, res)=>{

    });

    // Logout Route
    app.get('/logout', (req, res)=>{
        req.logout();
        res.redirect('/');
    });


    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('./public/views/login');
    }
    
    
    
    const socket = require('socket.io');
    const serverIPAddress = '0.0.0.0';
    const serverPort = 9000;

    const server = app.listen(serverPort, serverIPAddress, ()=>{
        console.log(`server started on port ${serverPort}`);
        initSocket();
    });


    function initSocket(){
        raspi.init(()=>{
            output3 = new gpio.DigitalOutput('P1-3');
            output3.write(0);
            output5 = new gpio.DigitalOutput('P1-5');
            output5.write(0);
            output7 = new gpio.DigitalOutput('P1-7');
            output7.write(0);
            output8 = new gpio.DigitalOutput('P1-8');
            output8.write(0);
            output10 = new gpio.DigitalOutput('P1-10');
            output10.write(0);
            output11 = new gpio.DigitalOutput('P1-11');
            output11.write(0);
            output12 = new gpio.DigitalOutput('P1-12');
            output12.write(0);
            output13 = new gpio.DigitalOutput('P1-13');
            output13.write(0);
            output15 = new gpio.DigitalOutput('P1-15');
            output15.write(0);
            output16 = new gpio.DigitalOutput('P1-16');
            output16.write(0);
            output18 = new gpio.DigitalOutput('P1-18');
            output18.write(0);
            output19 = new gpio.DigitalOutput('P1-19');
            output19.write(0);
            output21 = new gpio.DigitalOutput('P1-21');
            output21.write(0);
            output22 = new gpio.DigitalOutput('P1-22');
            output22.write(0);
            output23 = new gpio.DigitalOutput('P1-23');
            output23.write(0);
            output24 = new gpio.DigitalOutput('P1-24');
            output24.write(0);
            output26 = new gpio.DigitalOutput('P1-26');
            output26.write(0);
            output29 = new gpio.DigitalOutput('P1-29');
            output29.write(0);
            output31 = new gpio.DigitalOutput('P1-31');
            output31.write(0);
            output32 = new gpio.DigitalOutput('P1-32');
            output32.write(0);
            output33 = new gpio.DigitalOutput('P1-33');
            output33.write(0);
            output35 = new gpio.DigitalOutput('P1-35');
            output35.write(0);
            output36 = new gpio.DigitalOutput('P1-36');
            output36.write(0);
            output37 = new gpio.DigitalOutput('P1-37');
            output37.write(0);
            output38 = new gpio.DigitalOutput('P1-38');
            output38.write(0);
            output40 = new gpio.DigitalOutput('P1-40');
            output40.write(0);
        });

        var io = socket(server);
        /* Send command back to the client */
        function sendCommand(socket, command){
            io.to(socket.id).emit('command', {command: command});
        }

        io.on('connection', (socket)=>{
            console.log(`new connection on Port ${serverPort}, ID: ${socket.id}`);
            var socketID = socket.id;
            //Receive values from the client
            socket.on('switchChanged', (data)=>{
                var stateNumber = 0;
                
                if(data.state === false){
                    stateNumber = 0;
                }else if(data.state === true){
                    stateNumber = 1;
                }
                console.log(stateNumber);
                console.log(data.number);
                switch(Number(data.number)){
                    case 3: 
                        output3.write(stateNumber);
                        break;
                        case 3: 
                        output3.write(stateNumber);
                        break;
                        case 5: 
                        output5.write(stateNumber);
                        break;
                        case 7: 
                        output7.write(stateNumber);
                        break;
                        case 8: 
                        output8.write(stateNumber);
                        break;
                        case 10: 
                        output10.write(stateNumber);
                        break;
                        case 11: 
                        output11.write(stateNumber);
                        break;
                        case 12: 
                        output12.write(stateNumber);
                        break;
                        case 13: 
                        output13.write(stateNumber);
                        break;
                        case 15: 
                        output15.write(stateNumber);
                        break;
                        case 18: 
                        output18.write(stateNumber);
                        break;
                        case 19: 
                        output19.write(stateNumber);
                        break;
                        case 21: 
                        output21.write(stateNumber);
                        break;
                        case 22: 
                        output22.write(stateNumber);
                        break;
                        case 23: 
                        output23.write(stateNumber);
                        break;
                        case 24: 
                        output24.write(stateNumber);
                        break;
                        case 26: 
                        output26.write(stateNumber);
                        break;
                        case 29: 
                        output29.write(stateNumber);
                        break;
                        case 31: 
                        output31.write(stateNumber);
                        break;
                        case 32: 
                        output32.write(stateNumber);
                        break;
                        case 33: 
                        output33.write(stateNumber);
                        break;
                        case 35: 
                        output35.write(stateNumber);
                        break;
                        case 36: 
                        output36.write(stateNumber);
                        break;
                        case 37: 
                        output37.write(stateNumber);
                        break;
                        case 38: 
                        output38.write(stateNumber);
                        break;
                        case 40: 
                        output40.write(stateNumber);
                        break;
                        default:
                        break;
                };
                
            });
            
            socket.on('GPIORequest', ()=>{
                console.log(output3.value);
                socket.emit('GPIOStatus', {
                    output3:    output3.value,
                    output5:    output5.value,
                    output7:    output7.value,
                    output8:    output8.value,
                    output10:   output10.value,
                    output11:   output11.value,
                    output12:   output12.value,
                    output13:   output13.value,
                    output15:   output15.value,
                    output16:   output16.value,     
                    output18:   output18.value,
                    output19:   output19.value,
                    output21:   output21.value,
                    output22:   output22.value,
                    output23:   output23.value,
                    output24:   output24.value,
                    output26:   output26.value,
                    output29:   output29.value,
                    output31:   output31.value,
                    output32:   output32.value,
                    output33:   output33.value,
                    output35:   output35.value,
                    output36:   output36.value,
                    output37:   output37.value,
                    output38:   output38.value,
                    output40:   output40.value
                });
            });
            
        });
    }

})();




