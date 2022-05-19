import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
      <div className="widget__article">
          <div className="widget__articleLeft">
            <FiberManualRecord />
          </div>

          <div className="widget__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
      </div>
  )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
        {newsArticle("Bagnathachief", 'PSN ID - add up')}
        {newsArticle("George strikes back", 'Azubi interview updates')}
        {newsArticle("Akosua Appointed", 'New GM of top IT company')}
        {newsArticle("Angela Succeeds", 'Builds a revolutionary startup and solves world problems')}
        {newsArticle("Matrevi!?", 'Gamer loses 10 goals to nill')}
        {newsArticle("Esi lands Job", 'Very talented frontend developer lands major role')}
    </div>
  )
}

export default Widgets