import './App.scss'
import logo from 'assets/logo.svg'
import ColorLogo from 'components/Logo/Logo.js';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

function App() {
  return (
    <>
      <ColorLogo type={"colorful"} />
      <ColorLogo type={"black"} />
      <ColorLogo type={"mono"} />
      <Button mode={"primary"} state={"normal"} children={"버튼"}/>
      <Button mode={"secondary"} state={"normal"} children={"버튼"}/>
      <Button mode={"primary"} state={"disabled"} children={"버튼"}/>
      <Button mode={"secondary"} state={"disabled"} children={"버튼"}/>
      <Icon shape={"letter"}/>
      <Icon shape={"lock"}/>
      <Icon shape={"hide"}/>
      <Icon shape={"show"}/>
    </>
  )
}

export default App
