import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li><br />
        <li>
          <Link to="/partcode">Fatch PartCode</Link>
        </li><br />
        <li>
          <Link to="/insertpart">InsertPart</Link>
        </li><br />
        <li>
          <Link to="/insertcat">Insertcetegory</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
