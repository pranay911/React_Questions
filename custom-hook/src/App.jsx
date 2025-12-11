
import './App.css'
import useToggle from './useToggle'

function App() {
  const [isOn,toggle]= useToggle(false)
  return (
    <>
    <button data-testid="toggle-button" onClick={toggle}>
      {/* Render "ON" or "OFF" based on state */}
      {isOn ? "ON" :"OFF"}
    </button>
    </>
  )
}

export default App
