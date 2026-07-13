import './App.css';
import { Icon } from './components/Icon';

function App() {
  return (
    <>
      <div class='flex items-center justify-center gap-4'>
        <Icon name='Heart' size='md' color='success' />
        <Icon name='Settings' size='lg' color='muted' />
        <Icon name='Settings' />
        <Icon name='Heart' size='md' customSize={100} color='error' />{' '}
      </div>
    </>
  );
}

export default App;
