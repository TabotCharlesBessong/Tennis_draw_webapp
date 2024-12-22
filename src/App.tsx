import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Home } from "./pages"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={"draw"} />
        <Route path="/result" element={"result"} />
      </Routes>
    </Router>
  )
}

export default App