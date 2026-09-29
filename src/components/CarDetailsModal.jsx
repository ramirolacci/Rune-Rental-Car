import React from 'react';

const CarDetailsModal = ({ isOpen, onClose, car, onBookCar }) => {
  if (!isOpen || !car) return null;

  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
        <button className="modal__close" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>

        <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          ESPECIFICACIONES DEL VEHÍCULO
        </div>

        <h2 style={{ fontFamily: 'var(--header-font)', fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
          {car.name}
        </h2>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem', background: 'var(--bg-light)', borderRadius: '20px', padding: '1rem', border: '1px solid var(--extra-light)' }}>
          <img src={car.image} alt={car.name} style={{ maxHeight: '200px', objectFit: 'contain', margin: 'auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--extra-light)', padding: '0.75rem 0.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <i className="ri-speed-up-line" style={{ color: 'var(--text-dark)', fontSize: '1.2rem' }}></i>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginTop: '0.2rem' }}>{car.specs.speed}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>KM/H MÁX</div>
          </div>
          <div style={{ background: 'var(--extra-light)', padding: '0.75rem 0.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <i className="ri-settings-5-line" style={{ color: 'var(--text-dark)', fontSize: '1.2rem' }}></i>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginTop: '0.2rem' }}>{car.specs.gear} Vel.</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>TRANSMISIÓN</div>
          </div>
          <div style={{ background: 'var(--extra-light)', padding: '0.75rem 0.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <i className="ri-roadster-line" style={{ color: 'var(--text-dark)', fontSize: '1.2rem' }}></i>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginTop: '0.2rem' }}>{car.specs.seats} Asientos</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>CAPACIDAD</div>
          </div>
          <div style={{ background: 'var(--extra-light)', padding: '0.75rem 0.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <i className="ri-signpost-line" style={{ color: 'var(--text-dark)', fontSize: '1.2rem' }}></i>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginTop: '0.2rem' }}>{car.specs.mileage} Autonomía</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>RENDIMIENTO</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-dark)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            CARACTERÍSTICAS INCLUIDAS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            <div><i className="ri-check-line" style={{ color: 'var(--primary-color-dark)' }}></i> Asientos de cuero calefaccionados</div>
            <div><i className="ri-check-line" style={{ color: 'var(--primary-color-dark)' }}></i> Techo panorámico de cristal</div>
            <div><i className="ri-check-line" style={{ color: 'var(--primary-color-dark)' }}></i> Sistema de audio Premium 3D</div>
            <div><i className="ri-check-line" style={{ color: 'var(--primary-color-dark)' }}></i> Apple CarPlay y Android Auto</div>
            <div><i className="ri-check-line" style={{ color: 'var(--primary-color-dark)' }}></i> Suspensión neumática adaptativa</div>
            <div><i className="ri-check-line" style={{ color: 'var(--primary-color-dark)' }}></i> Cámaras 360° y sensores</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--extra-light)' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Tarifa Diaria</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--header-font)', color: 'var(--text-dark)' }}>
              ${car.price} <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>/ día</span>
            </div>
          </div>

          <button className="btn" onClick={() => { onClose(); onBookCar(car); }}>
            Alquilar este vehículo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
