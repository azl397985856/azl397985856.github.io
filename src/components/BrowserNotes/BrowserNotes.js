import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span>All the magic tricks in this site work best in <b>Chrome!</b></span>
      </Browser>
      <Browser only firefox>
        <span>Magic background is disabled in FireFox. Try in <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;