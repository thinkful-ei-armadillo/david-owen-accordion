import React from 'react';
import {sections} from './sections';
import Accordion from './Accordion';

function App() {
  return (
    <main className='App'>
     <Accordion sections={sections} />
    </main>
  );
}

export default App;