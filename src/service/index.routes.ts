import {Router} from 'express';
import {UserDomain} from "../domain/UserDomain";
import {RequestDomain} from "../domain/RequestDomain";

const router = Router();

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
    console.log('Ver todas las solicitudes pendientes')
    new RequestDomain().getAllRequest().then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});


router.get('/AttendRequest', (req, res) => {
    console.log('Atender una solicitud')
    let data = req.body;
    new RequestDomain().attendAnyRequest(data).then(response => {
        let jsonResponse = JSON.stringify(response)
        console.log(jsonResponse);
        res.send(jsonResponse);
    })
});





export default router;
