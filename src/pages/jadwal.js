import { useState } from 'react';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="mt-4">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        Tanggal:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
};

export default DateInput;
