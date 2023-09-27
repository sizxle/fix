import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaWhatsapp } from 'react-icons/fa';

function BookApp() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [issue, setIssue] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSendToWhatsApp = () => {
    const phoneNumber = '+27670174107';
    const message = `Hi, My name is ${name}\nPhone model:${model}\nProblem :${issue}\nBook Date :${selectedDate.toDateString()}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <div className="flex flex-col w-full max-w-md">
        <div className="mb-4">
          <label className="mr-2">Name:</label>
          <input
            type="text"
            className="w-full border-2 p-2"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Phone Model:</label>
          <input
            type="text"
            className="w-full border-2 p-2"
            value={model}
            onChange={(event) => setModel(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Describe Problem:</label>
          <textarea
            type="text"
            className="w-full border-2 p-2"
            value={issue}
            onChange={(event) => setIssue(event.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="mr-2">Pick a date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="w-full border-2 p-2"
          />
        </div>
        {selectedDate && (
          <p>You selected: {selectedDate.toDateString()}</p>
        )}
        <div>
          <button
            className="bg-green-500 rounded text-white text-center flex items-center p-3"
            type="submit"
            onClick={handleSendToWhatsApp}
          >
            Book on <FaWhatsapp className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookApp;
