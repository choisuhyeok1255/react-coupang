import './App.scss'
import logo from 'assets/logo.svg'
import ColorLogo from 'components/Logo/Logo.js';

function App() {
  return (
    <>
      <ColorLogo type={"colorful"} />
      <ColorLogo type={"black"} />
      <ColorLogo type={"mono"} />
    </>
  )
}

export default App
