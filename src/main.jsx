import * as ReactDOMClient from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

const app = ReactDOMClient.createRoot(document.getElementById('root'))
console.log('object');
app.render(<App />)
