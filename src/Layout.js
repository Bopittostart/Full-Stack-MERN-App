import React from 'react';
import { Link,} from 'react-router-dom';

const Layout = ({ children }) => (
  <div className='case'>
    <header>
      <h1>List of Exercises</h1>
      <p>Here you can view your currently added exercises, add more exercises, or edit your exercises!</p>
      <h2>
        <nav className ="pages"> 
            <Link to="/">Home</Link>
            <br/>
            <Link to="/add-exercise">Add a exercise</Link>
        </nav>
      </h2>
    </header>
    {children}
    <footer>
      © {new Date().getFullYear()} Quinn Roth
    </footer>
  </div>
);

export default Layout;