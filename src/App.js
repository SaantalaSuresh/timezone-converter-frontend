// // import React, { useState, useEffect } from 'react';
// // import moment from 'moment-timezone';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";
// // import TimeZoneList from './components/TimeZoneList';
// // import AddTimeZone from './components/AddTimeZone';
// // import TimeSlider from './components/TimeSlider';
// // import { getShareableLink, scheduleMeet } from './utils/timeUtils';
// // import './App.css';

// // function App() {
// //   const [timeZones, setTimeZones] = useState(['UTC', 'Asia/Kolkata']);
// //   const [currentTime, setCurrentTime] = useState(moment());
// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentTime(moment());
// //     }, 60000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const handleTimeChange = (minutes) => {
// //     setCurrentTime(moment(selectedDate).startOf('day').add(minutes, 'minutes'));
// //   };

// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //     setCurrentTime(moment(date));
// //   };

// //   const handleAddTimeZone = (newZone) => {
// //     if (!timeZones.includes(newZone)) {
// //       setTimeZones([...timeZones, newZone]);
// //     }
// //   };

// //   const handleRemoveTimeZone = (index) => {
// //     setTimeZones(timeZones.filter((_, i) => i !== index));
// //   };

// //   const onDragEnd = (result) => {
// //     if (!result.destination) return;
// //     const items = Array.from(timeZones);
// //     const [reorderedItem] = items.splice(result.source.index, 1);
// //     items.splice(result.destination.index, 0, reorderedItem);
// //     setTimeZones(items);
// //   };

// //   const reverseOrder = () => {
// //     setTimeZones([...timeZones].reverse());
// //   };

// //   const toggleDarkMode = () => {
// //     setIsDarkMode(!isDarkMode);
// //   };

// //   return (
// //     <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
// //       <h1>Timezone Converter</h1>
// //       <div className="controls">
// //         <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
// //         <button onClick={reverseOrder}>Reverse Order</button>
// //         <button onClick={() => scheduleMeet(currentTime)}>Schedule Meet</button>
// //       </div>
// //       <div className="date-picker">
// //         <DatePicker selected={selectedDate} onChange={handleDateChange} />
// //       </div>
// //       <TimeSlider
// //         value={currentTime.hours() * 60 + currentTime.minutes()}
// //         onChange={(e) => handleTimeChange(parseInt(e.target.value))}
// //       />
// //       <AddTimeZone onAddTimeZone={handleAddTimeZone} />
// //       <TimeZoneList
// //         timeZones={timeZones}
// //         currentTime={currentTime}
// //         onRemoveTimeZone={handleRemoveTimeZone}
// //         onDragEnd={onDragEnd}
// //       />
// //       <div className="shareable-link">
// //         <p>Shareable Link:</p>
// //         <input type="text" value={getShareableLink(currentTime, timeZones)} readOnly />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// import React, { useState, useEffect } from 'react';
// import moment from 'moment-timezone';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import TimeZoneList from './components/TimeZoneList';
// import AddTimeZone from './components/AddTimeZone';
// import TimeSlider from './components/TimeSlider';
// import { getShareableLink, scheduleMeet } from './utils/timeUtils';
// import './App.css';

// function App() {
//   const [timeZones, setTimeZones] = useState(['UTC', 'Asia/Kolkata']);
//   const [currentTime, setCurrentTime] = useState(moment());
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(moment());
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleTimeChange = (minutes) => {
//     setCurrentTime(moment(selectedDate).startOf('day').add(minutes, 'minutes'));
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setCurrentTime(moment(date));
//   };

//   const handleAddTimeZone = (newZone) => {
//     if (!timeZones.includes(newZone)) {
//       setTimeZones([...timeZones, newZone]);
//     }
//   };

//   const handleRemoveTimeZone = (index) => {
//     setTimeZones(timeZones.filter((_, i) => i !== index));
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const items = Array.from(timeZones);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setTimeZones(items);
//   };

//   const reverseOrder = () => {
//     setTimeZones([...timeZones].reverse());
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
//       <h1>Timezone Converter</h1>
//       <div className="controls">
//         <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
//         <button onClick={reverseOrder}>Reverse Order</button>
//         <button onClick={() => scheduleMeet(currentTime)}>Schedule Meet</button>
//       </div>
//       <div className="date-picker">
//         <DatePicker selected={selectedDate} onChange={handleDateChange} />
//       </div>
//       <TimeSlider
//         value={currentTime.hours() * 60 + currentTime.minutes()}
//         onChange={(e) => handleTimeChange(parseInt(e.target.value))}
//       />
//       <AddTimeZone onAddTimeZone={handleAddTimeZone} />
//       <TimeZoneList
//         timeZones={timeZones}
//         currentTime={currentTime}
//         onRemoveTimeZone={handleRemoveTimeZone}
//         onDragEnd={onDragEnd}
//       />
//       <div className="shareable-link">
//         <p>Shareable Link:</p>
//         <input type="text" value={getShareableLink(currentTime, timeZones)} readOnly />
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import { FaSun, FaMoon, FaSyncAlt, FaCalendarAlt } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css";
import TimeZoneList from './components/TimeZoneList';
import AddTimeZone from './components/AddTimeZone';
import TimeSlider from './components/TimeSlider';
import { getShareableLink, scheduleMeet } from './utils/timeUtils';
import './App.css';

function App() {
  const [timeZones, setTimeZones] = useState(['UTC', 'Asia/Kolkata']);
  const [currentTime, setCurrentTime] = useState(moment());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleTimeChange = (minutes) => {
    setCurrentTime(moment(selectedDate).startOf('day').add(minutes, 'minutes'));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentTime(moment(date));
  };

  const handleAddTimeZone = (newZone) => {
    if (!timeZones.includes(newZone)) {
      setTimeZones([...timeZones, newZone]);
    }
  };

  const handleRemoveTimeZone = (index) => {
    setTimeZones(timeZones.filter((_, i) => i !== index));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(timeZones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTimeZones(items);
  };

  const reverseOrder = () => {
    setTimeZones([...timeZones].reverse());
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Timezone Converter</h1>
      <div className="controls">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />} Toggle Dark Mode
        </button>
        <button onClick={reverseOrder}>
          <FaSyncAlt /> Reverse Order
        </button>
        <button onClick={() => scheduleMeet(currentTime)}>
          <FaCalendarAlt /> Schedule Meet
        </button>
      </div>
      <div className="date-picker">
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      <AddTimeZone onAddTimeZone={handleAddTimeZone} isDarkMode={isDarkMode} />

      <TimeSlider
        value={currentTime.hours() * 60 + currentTime.minutes()}
        onChange={(e) => handleTimeChange(parseInt(e.target.value))}
      />
      
      <TimeZoneList
        timeZones={timeZones}
        currentTime={currentTime}
        onRemoveTimeZone={handleRemoveTimeZone}
        onDragEnd={onDragEnd}
      />
      
    </div>
  );
}

export default App;
