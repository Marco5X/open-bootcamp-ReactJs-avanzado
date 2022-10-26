const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constantes
const pushSubscription =  {
    endpoint: 'https://wns2-bl2p.notify.windows.com/w/?token=BQYAAACpiqj0KQsh1snKus%2bCfaQ1q4ZVgsXmXuQfi80d%2fs6MapLVqqGdIDi1Mckz5myxCxTMiz7rus2uWnXPgn12s8w233fa07LzJCli8gghOrtjWRwtEonbKNgDMdNdBnoLtj5rcPHjHkI7sEb6l1oVjz1sgePa2MHrg%2fKnr1XUwLRljaAUJlDK9MKtkBbNkhJ8DxD82Xhlx%2brCS26QTXAB9A2UrufPRTs2Z8K9QSvmeEqo1mLRPFJL8kwn7lCLsoAhfw7AvxZk18FfDLaOURvEPv%2fmvwP1dbIW36qx8XKWhDNu6Zl0V2UzLgia7XbxGH64t3o%3d',
    expirationTime: null,
    keys: {
      p256dh: 'BIrnzYjy8zAv9OSuAzBv-j3bVvduSaTJjATJIHdUxpCJpDh3CKCRKnyCtEUpSD97c-nR2B_NLK4npkVi11wBDoA',
      auth: 'MoJVVvzb8nvombuclsiRPQ'
    }
  }
const vapidKeys = {
    publicKey: "BOmmTwHL_lTFQKdgta9i3E_EYTnkkpP0fT3fhMc4cksmX2mtUAIKSfwl6KyqbzWAmPtiRNsPLVHuxW4keUATe20",
    privateKey: "wbGIYAueD-J_25Yl5ZkoTS5xsN-Rn3G8xNZW96o3ag0"
}
webpush.setVapidDetails(
    'mailto:marcosmc86@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Routes
app.get('/', async (req, res) => {
    //console.log(req.body);
    const payload = JSON.stringify({ title: "Título de Notificación", message: "Mensaje de la notificación" });
    try {
        await webpush.sendNotification(pushSubscription, payload);
        await res.send(payload);
    } catch (e) { console.error(e) }
});

app.post('/message', async (req, res) => {
    const { title, message} = req.body;
    const payload = JSON.stringify({ title: title, message: message });
    try {
        await webpush.sendNotification(pushSubscription, payload)    
    } catch (error) {
        console.error(error)        
    }
})

app.post('/subscription', (req, res) => {
    console.log(req.body);
    res.sendStatus(200).json();
})

app.listen(3001, () => console.log("Server listening on port 3001"))