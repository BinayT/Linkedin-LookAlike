import React from 'react';
import { InfoOutlined } from '@material-ui/icons';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widgets.scss';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoOutlined />
      </div>
      {newsArticle(
        'Junior Developer without opportunity',
        'Top News - 13989 readers'
      )}
      {newsArticle(
        'Python beats JavaScript in Github repos',
        'Top News - 7842 readers'
      )}
      {newsArticle('Bitcoin beats $22k', 'CryptoCurrency - 8000+ readers')}
      {newsArticle(
        'Novel Corona Virus vaccine found',
        'Europe is now advancing on their vaccanation programs'
      )}
    </div>
  );
}

export default Widgets;
