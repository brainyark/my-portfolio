import React from 'https://esm.sh/react@18.3.1'
import ReactDOM from 'https://esm.sh/react-dom@18.3.1'
import { gsap } from 'https://esm.sh/gsap@3.12.5'
import { ScrollTrigger } from 'https://esm.sh/gsap@3.12.5/ScrollTrigger'
import { motion } from 'https://esm.sh/framer-motion@11.0.8'
import * as lucide from 'https://esm.sh/lucide-react@0.344.0'

// Import your components
import App from './App.js'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 