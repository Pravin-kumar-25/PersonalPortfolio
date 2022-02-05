import React from 'react';

const NavLink = ({ heading,children,color }) => {
  return (
    <li>
      <a href={`#${heading}`} style={{color:color}}>{children!==null ? children : heading.toUpperCase()}</a>
    </li>
  );
};

export default NavLink;
