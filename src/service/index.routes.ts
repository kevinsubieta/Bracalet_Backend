import {Router} from 'express';
import {UserDomain} from "../domain/UserDomain";

const router = Router();

router.get('/', (_req, res) => {
    console.log('someone pinged here!!! ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString());
    new UserDomain().createNewUserTest().then(response => {
            console.log(response);
            res.send('OK');
        }
    )
});


router.get('/login', (_req, res) => {
    console.log('Login')
    res.send('OK');
});


router.get('/registerRequest', (_req, res) => {
    console.log('Registrar solicitud')
    res.send('OK');
});


router.get('/verTodasLasSolicitudPendientes', (_req, res) => {
    console.log('Ver todas las solicitudes pendientes')
    console.log(res)
});


export default router;
