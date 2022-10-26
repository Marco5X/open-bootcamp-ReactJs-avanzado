import './App.css';
import { FormNotification } from './components/FormNotification';
import { HookPersonalizado } from './components/Hookpersonalizado';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater'


const App = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props
  
    return (
    <div className="App">
      <header className="App-header">
        <p>
          "App <code> ejercicios </code> React JS."
        </p>
        {(newServiceWorkerDetected === true) ? <div style={{ backgroundColor: 'tomato', marginBottom: 20, padding: 20 }}>
          <h3>¡Nueva actualización! ¿Quieres actualizar?</h3>
          <button onClick={onLoadNewServiceWorkerAccept} style={{ padding: 15 }}>¡Actualizar!</button>
        </div>:null} 
        <HookPersonalizado />
        <br />
        <FormNotification />
      </header>
    </div>
  );
}

export default withServiceWorkerUpdater(App);
