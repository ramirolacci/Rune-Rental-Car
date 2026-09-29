import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, selectedCar, searchParams }) => {
  const [step, setStep] = useState(1);
  const [addOns, setAddOns] = useState({
    insurance: true,
    gps: false,
    chauffeur: false
  });
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const carName = selectedCar ? selectedCar.name : 'Rüne Gran Turismo';
  const carPrice = selectedCar ? selectedCar.price : 225;
  const carImage = selectedCar ? selectedCar.image : '/assets/select-1.png';

  const baseTotal = carPrice * 3;
  const insuranceFee = addOns.insurance ? 35 * 3 : 0;
  const gpsFee = addOns.gps ? 15 * 3 : 0;
  const chauffeurFee = addOns.chauffeur ? 120 * 3 : 0;
  const grandTotal = baseTotal + insuranceFee + gpsFee + chauffeurFee;

  const toggleAddOn = (key) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>

        {step === 1 && (
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              PASO 1 DE 3 • RESERVA DE VEHÍCULO
            </div>
            <h3 style={{ fontFamily: 'var(--header-font)', fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
              {carName}
            </h3>

            <div style={{ background: 'var(--bg-light)', border: '1px solid var(--extra-light)', borderRadius: '16px', padding: '1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              <img src={carImage} alt={carName} style={{ maxHeight: '160px', objectFit: 'contain', margin: 'auto' }} />
              <div style={{ marginTop: '0.5rem', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-dark)' }}>
                ${carPrice} <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>/ día (Estimado 3 Días)</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--extra-light)', padding: '0.75rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '700' }}>UBICACIÓN</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>{searchParams?.location || 'Dallas, Texas'}</div>
              </div>
              <div style={{ background: 'var(--extra-light)', padding: '0.75rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '700' }}>FECHAS</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>16 Aug - 18 Aug</div>
              </div>
            </div>

            <button className="btn" style={{ width: '100%' }} onClick={() => setStep(2)}>
              Continuar a opciones <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              PASO 2 DE 3 • ADICIONALES Y COBERTURA
            </div>
            <h3 style={{ fontFamily: 'var(--header-font)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
              Mejora tu experiencia
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div 
                onClick={() => toggleAddOn('insurance')}
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', 
                  borderRadius: '14px', border: addOns.insurance ? '2px solid var(--primary-color)' : '1px solid var(--extra-light)',
                  background: addOns.insurance ? '#fffbe9' : 'var(--white)', cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <i className={addOns.insurance ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line"} style={{ color: addOns.insurance ? 'var(--primary-color-dark)' : 'var(--text-light)', fontSize: '1.4rem' }}></i>
                  <div>
                    <div style={{ fontWeight: '700' }}>Protección Total sin Deducible</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Cobertura contra todo riesgo y robo</div>
                  </div>
                </div>
                <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>+$35/día</div>
              </div>

              <div 
                onClick={() => toggleAddOn('gps')}
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', 
                  borderRadius: '14px', border: addOns.gps ? '2px solid var(--primary-color)' : '1px solid var(--extra-light)',
                  background: addOns.gps ? '#fffbe9' : 'var(--white)', cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <i className={addOns.gps ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line"} style={{ color: addOns.gps ? 'var(--primary-color-dark)' : 'var(--text-light)', fontSize: '1.4rem' }}></i>
                  <div>
                    <div style={{ fontWeight: '700' }}>Navegación GPS y Wi-Fi 5G</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Conexión ilimitada a bordo</div>
                  </div>
                </div>
                <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>+$15/día</div>
              </div>

              <div 
                onClick={() => toggleAddOn('chauffeur')}
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', 
                  borderRadius: '14px', border: addOns.chauffeur ? '2px solid var(--primary-color)' : '1px solid var(--extra-light)',
                  background: addOns.chauffeur ? '#fffbe9' : 'var(--white)', cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <i className={addOns.chauffeur ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line"} style={{ color: addOns.chauffeur ? 'var(--primary-color-dark)' : 'var(--text-light)', fontSize: '1.4rem' }}></i>
                  <div>
                    <div style={{ fontWeight: '700' }}>Chofer Profesional Dedicado</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Conductor privado con licencia VIP</div>
                  </div>
                </div>
                <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>+$120/día</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-secondary" onClick={() => setStep(1)} style={{ flex: '1' }}>Volver</button>
              <button className="btn" onClick={() => setStep(3)} style={{ flex: '2' }}>Ingresar datos <i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleNext}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              PASO 3 DE 3 • DATOS DEL CONDUCTOR
            </div>
            <h3 style={{ fontFamily: 'var(--header-font)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Finalizar Reserva
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>NOMBRE COMPLETO</label>
                <input 
                  type="text" 
                  placeholder="Ej. Ramiro Lacci" 
                  required 
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--extra-light)' }}
                  value={customer.name} 
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>CORREO ELECTRÓNICO</label>
                <input 
                  type="email" 
                  placeholder="ramiro@ejemplo.com" 
                  required 
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--extra-light)' }}
                  value={customer.email} 
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>TELÉFONO DE CONTACTO</label>
                <input 
                  type="tel" 
                  placeholder="+54 9 11 1234-5678" 
                  required 
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--extra-light)' }}
                  value={customer.phone} 
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} 
                />
              </div>
            </div>

            <div style={{ padding: '1rem', background: '#fffbe9', borderRadius: '12px', border: '1px solid var(--primary-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>COSTO TOTAL ESTIMADO</div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--header-font)', color: 'var(--text-dark)' }}>
                  ${grandTotal} USD
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'right' }}>Impuestos incluidos</div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setStep(2)} style={{ flex: '1' }}>Volver</button>
              <button type="submit" className="btn" style={{ flex: '2' }}>Confirmar Reserva <i className="ri-check-line"></i></button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'var(--primary-color)', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '2.5rem' }}>
              <i className="ri-check-double-line"></i>
            </div>
            <h3 style={{ fontFamily: 'var(--header-font)', fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
              ¡RESERVA CONFIRMADA!
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              Código de referencia: <strong>RUNE-#{Math.floor(100000 + Math.random() * 900000)}</strong>
            </div>

            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Muchas gracias, <strong>{customer.name || 'Estimado cliente'}</strong>. Hemos enviado un correo de confirmación a <strong>{customer.email || 'tu email'}</strong> con los detalles para el retiro sin contacto de tu vehículo.
            </p>

            <button className="btn" onClick={handleReset} style={{ margin: 'auto' }}>
              Volver al sitio principal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
