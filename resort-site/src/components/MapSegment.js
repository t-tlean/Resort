import React, { useState } from 'react';
import './MapSegment.css';
import mapImage from '../assets/map.jpg';

const houseData = {
  1: [
    'Сімейний будинок\nПросторий одноповерховий будинок із двома спальнями, вітальнею та зоною для відпочинку.',
    '• До 4 осіб\n• 2200 грн/доба\n• Затишне розташування біля саду'
  ],
  2: [
    'Люкс з панорамою\nНомер підвищеного комфорту з панорамними вікнами, видом на море або сад.',
    '• До 3 осіб\n• 3500 грн/доба\n• Вид на море'
  ],
  3: [
    'Сімейний будинок\nПросторий одноповерховий будинок із двома спальнями, вітальнею та зоною для відпочинку.',
    '• До 4 осіб\n• 2200 грн/доба\n• Приватна тераса'
  ],
  4: [
    'Бунгало для пари\nКомфортне бунгало з однією спальнею, мінімалістичним дизайном та приватним двориком.',
    '• До 2 осіб\n• 1800 грн/доба\n• Окрема зона відпочинку'
  ],
  5: [
    'Бунгало для пари\nКомфортне бунгало з однією спальнею, мінімалістичним дизайном та приватним двориком.',
    '• До 2 осіб\n• 1800 грн/доба\n• Тиха частина комплексу'
  ],
  6: [
    'Сімейний будинок\nПросторий одноповерховий будинок із двома спальнями, вітальнею та зоною для відпочинку.',
    '• До 4 осіб\n• 2200 грн/доба\n• Біля дитячого майданчика'
  ],
  7: [
    'Сімейний будинок\nПросторий одноповерховий будинок із двома спальнями, вітальнею та зоною для відпочинку.',
    '• До 4 осіб\n• 2200 грн/доба\n• Вид на сосновий ліс'
  ],
  8: [
    'Люкс з панорамою\nНомер підвищеного комфорту з панорамними вікнами, видом на море або сад.',
    '• До 3 осіб\n• 3500 грн/доба\n• Сучасний інтерʼєр'
  ],
  9: [
    'Вілла для компанії\nВелика вілла з кількома спальнями, повністю обладнаною кухнею та власною терасою.',
    '• До 6 осіб\n• 3000 грн/доба\n• Кухня і простора їдальня'
  ],
  10: [
    'Люкс з панорамою\nНомер підвищеного комфорту з панорамними вікнами, видом на море або сад.',
    '• До 3 осіб\n• 3500 грн/доба\n• Біля басейну'
  ],
  11: [
    'Вілла для компанії\nВелика вілла з кількома спальнями, повністю обладнаною кухнею та власною терасою.',
    '• До 6 осіб\n• 3000 грн/доба\n• Ідеально для дружньої компанії'
  ]
};

const positions = {
  1: { top: '9.38%', left: '1.95%' },
  2: { top: '5.86%', left: '9.38%' },
  3: { top: '8.21%', left: '18.36%' },
  4: { top: '24.03%', left: '17.97%' },
  5: { top: '34.01%', left: '17.58%' },
  6: { top: '40.45%', left: '11.33%' },
  7: { top: '35.76%', left: '3.91%' },
  8: { top: '46.31%', left: '4.69%' },
  9: { top: '52.75%', left: '17.19%' },
  10: { top: '58.85%', left: '7.81%' },
  11: { top: '64.49%', left: '3.91%' },
};

function MapSegment() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  const handleHouseClick = (houseId) => {
    setSelectedHouse(houseId);
    setPageIndex(0);
  };

  const handleClose = () => setSelectedHouse(null);

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % houseData[selectedHouse].length);
  };

  const handlePrev = () => {
    setPageIndex((prev) =>
      (prev - 1 + houseData[selectedHouse].length) % houseData[selectedHouse].length
    );
  };

  return (
    <section className="map-section" id="map">
      <h2 className="map-title">Мапа Тихого Лісу</h2>
      <div className="map-container">
        <img src={mapImage} alt="Resort Map" className="map-base" />

        {Object.entries(positions).map(([id, pos]) => (
          <div
            key={id}
            className={`map-house${selectedHouse === parseInt(id) ? ' active' : ''}`}
            style={{ top: pos.top, left: pos.left }}
            onClick={() => handleHouseClick(parseInt(id))}
          />
        ))}

        {selectedHouse && (
          <div
            className="map-popup"
            style={{
              top: `calc(${positions[selectedHouse].top} - 5%)`,
              left: `calc(${positions[selectedHouse].left} + 5%)`,
            }}
          >
            <button className="popup-close" onClick={handleClose}>×</button>
            <h3>Будинок #{selectedHouse}</h3>
            <div className="popup-content">
              {houseData[selectedHouse][pageIndex].split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <div className="popup-controls">
              <button onClick={handlePrev}>&larr;</button>
              <button onClick={handleNext}>&rarr;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MapSegment;