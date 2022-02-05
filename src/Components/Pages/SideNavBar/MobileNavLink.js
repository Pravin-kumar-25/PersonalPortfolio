import React from 'react';

const MobileNavLink = ({heading,children}) => {
    return (
        <li>
          <a href={`#${heading}`}>{children}</a>
        </li>
      );
};

export default MobileNavLink;
