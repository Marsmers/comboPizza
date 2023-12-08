import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Redux/Store.jsx'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>

)
