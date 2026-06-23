import { createRoot } from 'react-dom/client';
import 'aos/dist/aos.css';
import './index.css'
import App from './App';

const root  = createRoot(document.getElementById('root') )

root.render(<App/>);