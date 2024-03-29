import {Router} from 'express';
import {UserDomain} from "../domain/UserDomain";
import {RequestDomain} from "../domain/RequestDomain";

const router = Router();

router.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

router.all('*', function(_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', (_req, res) => {
    console.log('someone pinged here!!! ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString());
    new UserDomain().createNewUserTest().then(response => {
            console.log(response);
            res.send('OK');
        }
    )
});


router.post('/login', (req, res) => {
    console.log('Ver Login');
    let data = req.body;
    new UserDomain().tryLoginUser(data).then(response => {
            let jsonResponse = JSON.stringify(response)
            console.log(jsonResponse);
            res.send(jsonResponse);
        }
    )
});


router.post('/registerRequest', (req, res) => {
    console.log('Ver request');
    let data = req.body;
    new RequestDomain().registerNewRequest(data).then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});


router.get('/getAllRequest', (_req, res) => {
    console.log('Ver todas las solicitudes')
    new RequestDomain().getAllRequest().then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});


router.get('/getAllServices', (_req, res) => {
    console.log('Ver todos los servicios')
    new RequestDomain().getAllServices().then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});


router.post('/getAllServicesByCi', (req, res) => {
    console.log('Ver todos los servicios por ci')
    let data = req.body;
    new RequestDomain().getAllServicesByCi(data).then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});


router.post('/AttendRequest', (req, res) => {
    console.log('Atender una solicitud')
    let data = req.body;
    new RequestDomain().attendAnyRequest(data).then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});





export default router;
