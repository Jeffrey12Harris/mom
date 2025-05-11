function revealMessage() {
    document.getElementById('messageSection').style.display = 'block';
    startInfiniteSunflowers();  // Launch the sunflower animation
    revealContent();            // Start scroll-based reveals
  }
  
  function startInfiniteSunflowers() {
    setInterval(generateSunflower, 500); // Adjust the rate if needed
  }
  
  function generateSunflower() {
    const container = document.getElementById('hearts');
    const pageHeight = document.body.scrollHeight;
  
    const emoji = document.createElement('div');
    emoji.className = 'sunflower';
    emoji.textContent = '🌻';
  
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.fontSize = (Math.random() * 20 + 20) + 'px';
    emoji.style.animationDuration = (Math.random() * 5 + 10) + 's'; // slower for more graceful float
    emoji.style.setProperty('--float-distance', pageHeight + 'px');
  
    container.appendChild(emoji);
  
    setTimeout(() => emoji.remove(), 15000); // Remove after float finishes
  }
  
  function revealFadingTextOnScroll() {
    const fadingElements = document.querySelectorAll('.fading-text');
    const triggerBottom = window.innerHeight * 0.9;
  
    fadingElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }
  
  // Reveal each section once it's in view
  function revealContent() {
    const sections = document.querySelectorAll('.section');
  
    function handleScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.style.opacity = '1';
        }
      });
  
      revealFadingTextOnScroll(); // Keep calling on scroll
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
  }
  