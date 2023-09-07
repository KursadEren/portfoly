import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DilGrafik = ({ dilAdi, yuzde }) => {
  const grafikCanvasRef = useRef(null);
  const grafikRef = useRef(null);

  useEffect(() => {
    const grafikCanvas = grafikCanvasRef.current;

    if (grafikRef.current) {
      // Önceki grafik varsa yok et
      grafikRef.current.destroy();
    }

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

    const yeniGrafik = new Chart(grafikCanvas, {
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

    // Yeni grafik referansını güncelle
    grafikRef.current = yeniGrafik;
  }, [dilAdi, yuzde]);

  return (
    <div className="dil-grafik">
      <div class="kaydirilabilir-div">
      <canvas ref={grafikCanvasRef} />
       </div>

     
      <style jsx>
        {`
        .kaydirilabilir-div {
          overflow: auto; 
          max-height: 300px; 
        
        }
        
         .dil-grafik {
          justify-content:center;
          align-items:center;
          width: 300px;
          height: 400px;
         }
        `}
      </style>
    </div>
  );
};

export default DilGrafik;
