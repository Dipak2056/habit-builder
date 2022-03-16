import React from "react";

const Days = (onDaysClick) => {
  return (
    <div className="days">
      <div className="days_name" onClick={onDaysClick}>
        Sunday
      </div>
      <div className="days_name" onClick={onDaysClick}>
        Monday
      </div>
      <div className="days_name" onClick={onDaysClick}>
        Tuesday
      </div>
      <div className="days_name" onClick={onDaysClick}>
        Wednesday
      </div>
      <div className="days_name" onClick={onDaysClick}>
        Thursday
      </div>
      <div className="days_name" onClick={onDaysClick}>
        Friday
      </div>
      <div className="days_name" onClick={onDaysClick}>
        Saturday
      </div>
    </div>
  );
};

export default Days;
