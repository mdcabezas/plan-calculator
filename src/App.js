// import './App.css';
import 'bootswatch/dist/united/bootstrap.min.css';
import PrincipalFrame from './components/PrincipalFrame';
import ContextProvider from './context/ContextProvider';

function App() {
 return (
    <ContextProvider>
      <PrincipalFrame />
    </ContextProvider> 
  );
}

export default App;
