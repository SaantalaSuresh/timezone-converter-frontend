// import React from 'react';
// import moment from 'moment-timezone';

// function TimeZoneItem({ zone, currentTime, onRemove, provided }) {
//   return (
//     <div
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       className="timezone-item"
//     >
//       <span>{zone}</span>
//       <input
//         type="time"
//         value={moment(currentTime).tz(zone).format('HH:mm')}
//         readOnly
//       />
//       <span>{moment(currentTime).tz(zone).format('MMM D')}</span>
//       <button onClick={onRemove}>×</button>
//     </div>
//   );
// }

// export default TimeZoneItem;


import React from 'react';
import moment from 'moment-timezone';

function TimeZoneItem({ zone, currentTime, onRemove, provided }) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="timezone-item"
    >
      <span className="timezone-name">{zone}</span>
      <input
        type="time"
        value={moment(currentTime).tz(zone).format('HH:mm')}
        readOnly
        className="timezone-time"
      />
      <span className="timezone-date">{moment(currentTime).tz(zone).format('MMM D')}</span>
      <button className="remove-timezone" onClick={onRemove}>×</button>
    </div>
  );
}

export default TimeZoneItem;
