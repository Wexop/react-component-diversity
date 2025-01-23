import './App.css'
import ClassicCardComponent from "./components/ClassicCardComponent.tsx";
import Diversity from "./components/Diversity.tsx";

function App() {

  return (
    <>
        <h1>Component Diversity</h1>
        <Diversity size={1000} component={({color, size}) => <ClassicCardComponent borderColor={color[1]} textColor={color[2]} backgroundColor={color[3]} borderRadius={size[1] * 50} borderWidth={size[2] * 5} padding={size[3] * 10} />}/>
    </>
  )
}

export default App
