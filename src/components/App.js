import React from 'react';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink'

function App() {
  return (
  <div>
    <CreateLink />
    <LinkList />
  </div>
  )
}

export default App;
