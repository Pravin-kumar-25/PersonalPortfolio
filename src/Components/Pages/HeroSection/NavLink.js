import React from 'react';

const NavLink = ({ heading }) => {
  return (
      <li>
          <a href={`#${heading}`}>{heading.toUpperCase()}</a>
      </li>
  );
};

export default NavLink;
