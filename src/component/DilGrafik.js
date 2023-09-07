import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const DilGrafik = ({ dilAdi, yuzde }) => {
  const grafikCanvasRef = useRef(null);

  useEffect(() => {
    const grafikCanvas = grafikCanvasRef.current;
    const ctx = grafikCanvas.getContext('2d');

    const dilEtiketleri = [dilAdi, 'Diğer Diller'];
    const yuzdeler = [yuzde, 100 - yuzde];

    const grafikVerileri = {
      labels: dilEtiketleri,
      datasets: [
        {
          data: yuzdeler,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
          ],
        },
      ],
    };

    new Chart(ctx, {
      type: 'doughnut',
      data: grafikVerileri,
      options: {
        plugins: {
          title: {
            display: true,
            text: `${dilAdi} Dil Yüzdesi: ${yuzde}%`,
          },
        },
      },
    });
  }, [dilAdi, yuzde]);

  return (
    <div className="dil-grafik">
      <canvas ref={grafikCanvasRef} />
      <style jsx>
        {`
         .dil-grafik{
          width:200px;
          height:200px;
         }
        `}
      </style>
    </div>
  );
};

export default DilGrafik;
