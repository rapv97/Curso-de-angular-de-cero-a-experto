import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// import './topics/01-basic-type.ts'

import './topics/11-encadenamiento-opcional.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola mundo
`;

console.log('Hola mundo');


// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
