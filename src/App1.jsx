import "./App.css"
// use bitton on matiral UI 
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" color="error" size="small">Outlined</Button>
      <Alert  severity="success">Here is a gentle confirmation that your action was successful.</Alert>
    </>
  );
}

export default App;
