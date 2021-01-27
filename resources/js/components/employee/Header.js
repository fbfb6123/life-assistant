import React from 'react';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const Header = ({date, setPrevMonth, setNextMonth}) => {

  const today = date;
  const year = today.getFullYear();
  const month = today.getMonth()+1;

  return (
    <div className="head">
      <div className="showMonth">
        <Button className="waraper" variant="contained" color="primary" onClick={() => setPrevMonth()}>
          ←前月 
        </Button>
        <div className="today">{year}年{month}月</div>
        <Button className="waraper" variant="contained" color="primary" onClick={() => setNextMonth()}>
        翌月→ 
        </Button>
      </div>
    </div>
  )
}
export default Header;


