import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome>
        <span>All the magic tricks in this site work best in chrome!</span>
      </Browser>
      <Browser only firefox>
        <span>Magic background is disabled in FireFox! Try in Chrome!</span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;