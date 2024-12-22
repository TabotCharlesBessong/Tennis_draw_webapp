import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Home } from "./pages"
import DrawPage from "./pages/DrawPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<DrawPage />} />
        <Route path="/result" element={"result"} />
      </Routes>
    </Router>
  )
}

export default App