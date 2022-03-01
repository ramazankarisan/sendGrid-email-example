import './App.css';
import Typography from '@mui/material/Typography';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }} >
      <Typography align="center" variant="h3" pt={2} component="div" gutterBottom>
        Contact Form
      </Typography>
      <ContactForm />
    </div>
  );
}

export default App;
