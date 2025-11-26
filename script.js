document.addEventListener('DOMContentLoaded', () => {

  // Karuselis
  const slides = document.querySelector('.slides');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(-${index * 100}vw)`;
  }, 5000);

  // Portretu poga
  const toggleBtn = document.getElementById('togglePortraitsBtn');
  const portraitSection = document.getElementById('portraitSection');
  const detailContainer = document.getElementById('portraitDetails');

  toggleBtn.addEventListener('click', () => {
    if (portraitSection.style.display === 'none' || portraitSection.style.display === '') {
      portraitSection.style.display = 'block';
      toggleBtn.textContent = 'HIDE PORTRAIT ORDERS';
    } else {
      portraitSection.style.display = 'none';
      toggleBtn.textContent = 'PORTRAIT ORDERS';
    }
  });

  // Portretu dati
  const content = {
    oil: {
      title: 'Oil Portraits',
      text: 'Traditional oil painting with depth, light and form. Timeless and elegant.',
      image: 'images/oil-example.jpg'
    },
    digital: {
      title: 'Digital Portraits',
      text: 'Modern digital technique for vibrant, print-ready or online portraits.',
      image: 'images/digital-example.jpg'
    },
    classical: {
      title: 'Classical Portraits',
      text: 'Inspired by Renaissance and academic traditions. Noble light and harmony.',
      image: 'images/classical-example.jpg'
    },
    abstract: {
      title: 'Abstract Portraits',
      text: 'Creative and colorful, conveying emotions and inner world.',
      image: 'images/abstract-example.jpg'
    },
    expression: {
      title: 'Expression Portraits',
      text: 'Strong brushwork and vibrant gestures, showing energy and feeling.',
      image: 'images/expression-example.jpg'
    },
    academical: {
      title: 'Academical Drawing',
      text: 'Based on classical figure drawing principles, perfect for portfolio building.',
      image: 'images/academical-example.jpg'
    },
    "3d": {
      title: '3D Portraits',
      text: 'Volume and perspective explored in modern or classical rendering styles.',
      image: 'images/3d-example.jpg'
    }
  };

  // Pogu klikšķi
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-target');
      const data = content[key];
      detailContainer.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.text}</p>
        <img src="${data.image}" alt="${data.title}">
      `;
    });
  });

});
