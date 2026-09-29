import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const daysOfWeek = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];

const CustomCalendar = ({ onSelectDate, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 16));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const prevMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day) => {
    const formattedDate = `${day} ${monthNames[month].slice(0, 3)}, 10:00 AM`;
    onSelectDate(formattedDate);
    onClose();
  };

  const daysArray = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let d = 1; d <= totalDays; d++) {
    daysArray.push(d);
  }

  return (
    <div className="custom__calendar__popover" onClick={(e) => e.stopPropagation()}>
      <div className="calendar__header">
        <button type="button" className="cal__nav__btn" onClick={prevMonth}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <span className="cal__month__title">
          {monthNames[month]} {year}
        </span>
        <button type="button" className="cal__nav__btn" onClick={nextMonth}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>

      <div className="calendar__weekdays">
        {daysOfWeek.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      <div className="calendar__days__grid">
        {daysArray.map((day, idx) => (
          <div key={idx} className="cal__day__cell">
            {day ? (
              <button
                type="button"
                className={`cal__day__btn ${day === 16 ? 'selected' : ''}`}
                onClick={() => handleSelectDay(day)}
              >
                {day}
              </button>
            ) : (
              <span className="empty"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ onSearchSubmit }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    start: '',
    stop: ''
  });

  const [activeCalendar, setActiveCalendar] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setActiveCalendar(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchParams);
  };

  return (
    <header>
      <div className="header__container" id="home">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ALQUILER DE AUTOS PREMIUM
        </motion.h1>

        <motion.form
          ref={formRef}
          action="/"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="input__group">
            <label htmlFor="location">LUGAR DE RETIRO Y DEVOLUCIÓN</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Ingresar el lugar"
              value={searchParams.location}
              onChange={handleChange}
            />
          </div>

          <div className="input__group date__group">
            <label htmlFor="start">INICIO</label>
            <div className="input__with__icon" onClick={() => setActiveCalendar(activeCalendar === 'start' ? null : 'start')}>
              <input
                type="text"
                name="start"
                id="start"
                placeholder="dd/mm/aaaa"
                value={searchParams.start}
                onChange={handleChange}
                readOnly
              />
              <i className="ri-calendar-event-line calendar__icon"></i>
            </div>

            {activeCalendar === 'start' && (
              <CustomCalendar
                onSelectDate={(dateStr) => setSearchParams(prev => ({ ...prev, start: dateStr }))}
                onClose={() => setActiveCalendar(null)}
              />
            )}
          </div>

          <div className="input__group date__group">
            <label htmlFor="stop">FIN</label>
            <div className="input__with__icon" onClick={() => setActiveCalendar(activeCalendar === 'stop' ? null : 'stop')}>
              <input
                type="text"
                name="stop"
                id="stop"
                placeholder="dd/mm/aaaa"
                value={searchParams.stop}
                onChange={handleChange}
                readOnly
              />
              <i className="ri-calendar-event-line calendar__icon"></i>
            </div>

            {activeCalendar === 'stop' && (
              <CustomCalendar
                onSelectDate={(dateStr) => setSearchParams(prev => ({ ...prev, stop: dateStr }))}
                onClose={() => setActiveCalendar(null)}
              />
            )}
          </div>

          <button type="submit" className="btn" aria-label="Buscar autos">
            <i className="ri-search-line"></i>
          </button>
        </motion.form>

        <motion.img
          src="/assets/header.png"
          alt="Auto de alquiler premium Rüne"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </header>
  );
};

export default Hero;
