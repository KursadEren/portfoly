// Content.js
import React from 'react';
import '../Componentcss/Content.css';
import ContactForm from './ContactForm';
import BlogContent from './BlogContent';
import DilGrafik from './DilGrafik';

function Content({ page }) {
  const dilVerileri = [
    {
      id: 1,
      dilAdi: 'JavaScript',
      yuzde: 80,
    },
    {
      id: 2,
      dilAdi: 'HTML',
      yuzde: 70,
    },
    {
      id: 3,
      dilAdi: 'C#',
      yuzde: 90,
    },
    // Diğer diller için aynı yapıyı kullanabilirsiniz
  ];

  return (
    <div className='Content-container'>
      {page === "WorkScreen" ? (
        <div className='content-img-container'>
          <img className='img' src='./giris.png' alt='' />
        </div>
      ) : page === "HomeScreen" ? (
        <div className='Home-Content-Container'>
                 {dilVerileri.map((veri) => (
          <div key={veri.id}>
            <DilGrafik dilAdi={veri.dilAdi} yuzde={veri.yuzde} id={`grafik-${veri.id}`} />
          </div>
        ))}

        </div>
      ) : page === "BlogScreen" ? (
        <BlogContent />
      ) : page === "ContactScreen" ? (
        <ContactForm />
      ) : null}
      <style jsx>
        {`
       
          .Home-Content-Container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
}

export default Content;
