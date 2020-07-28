import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>MY FIRST REACT APP</h1>
        <h2 className={styles.subtitle}>A simple to-do app, with lists, columns and cards</h2>
        <List title={['Things to do', <sup>soon!</sup>]} image={"/src/images/space.png"}>
          <p>Im planning on doing all these things sooner, rather than later!</p>
        </List>
      </main>
    )
  }
}

export default App;
