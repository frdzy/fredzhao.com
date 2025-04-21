import React from 'react';

import Airtable from './airtable.inline.svg';
import Facebook from './facebook.inline.svg';

function Inner({ company }) {
  switch (company) {
    case 'airtable':
      return <Airtable />;
    case 'facebook':
      return <Facebook />;
    default:
      return null;
  }
}

const STYLE = {
  display: 'inline-block',
  width: 32,
  height: 32,
  verticalAlign: 'text-bottom',
};
export function Icon({ company }) {
  return (
    <div style={STYLE}>
      <Inner company={company} />
    </div>
  );
}
