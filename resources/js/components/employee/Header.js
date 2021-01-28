import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export const Header = ({date, setPrevMonth, setNextMonth}) => {

  const today = date;
  const year = today.getFullYear();
  const month = today.getMonth()+1;

  return (
    <div className="head">
      <div className="showMonth">
        <Button className="waraper" variant="contained" color="primary" onClick={() => setPrevMonth()}>
          <ArrowBackIosIcon ></ArrowBackIosIcon>前月
        </Button>
        <div className="today">{year}年{month}月</div>
        <Button className="waraper" variant="contained" color="primary" onClick={() => setNextMonth()}>
        翌月<ArrowForwardIosIcon ></ArrowForwardIosIcon>
        </Button>
      </div>
    </div>
  )
}
export default Header;


