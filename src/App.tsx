import './App.css'
import ClassicCardComponent from "./components/ClassicCardComponent.tsx";
import Diversity from "./components/Diversity.tsx";

function App() {

  return (
    <>
        <h1>Component Diversity</h1>
        <ClassicCardComponent borderColor={'red'} textColor={'red'} backgroundColor={'white'} />
        <Diversity component={({colors}) => <ClassicCardComponent borderColor={colors[1]} textColor={colors[1]} backgroundColor={colors[3]} />} colorLength={3}/>
    </>
  )
}

export default App
