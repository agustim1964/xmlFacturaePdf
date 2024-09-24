import './App.css';
import PdfViewer from './components/pdfviewer';
import ButtonAppBar from './navbar/navbar';


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <PdfViewer/>
    </div>
  );
}

export default App;
