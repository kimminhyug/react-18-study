import * as React from 'react';
import { Link } from 'react-router-dom';
export const Menu = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <h3>Menu</h3>
      <Link to="/case/1">
        <span>UseId</span>
      </Link>
      <Link to="/case/2">
        <span>Automatic Batch</span>
      </Link>
      <Link to="/case/3">
        <span>Transitions</span>
      </Link>
    </div>
  );
};
