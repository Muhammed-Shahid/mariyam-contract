import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import LoginPage from "./Pages/LoginPage/LoginPage";
import "bootstrap/dist/css/bootstrap.css";
import UploadPage from "./Pages/ReportUploadPage/UploadPage";
import ResultPage from "./Pages/ResultPage/ResultPage";


function App() {

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <UploadPage/>,
    },
    {
      path: "/result",
      element: <ResultPage/>,
    },
   
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />

        
    </div>
  );
}

export default App;
