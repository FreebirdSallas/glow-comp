import React from 'react';

export default function Calendar () {
  const style = {
    width: '100%',
    height: '100%',
  };
  return (
    <div id="scheduler_here" className="dhx_cal_container" style={style}>
      <div className="dhx_cal_navline">
        <div className="dhx_cal_prev_button">&nbsp;</div>
        <div className="dhx_cal_next_button">&nbsp;</div>
        <div className="dhx_cal_today_button" />
        <div className="dhx_cal_date" />
        <div className="dhx_cal_tab" name="day_tab" />
        <div className="dhx_cal_tab" name="week_tab" />
        <div className="dhx_cal_tab" name="month_tab" />
      </div>
      <div className="dhx_cal_header" />
      <div className="dhx_cal_data" />
    </div>
  );
}
