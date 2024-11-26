function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomize the position of the star at the top of the screen
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position (left)
    
    // Randomize the size (stars can vary in size)
    const size = Math.random() * 3 + 1; // Stars between 1px to 4px in diameter
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    // Randomize the animation duration (speed)
    const duration = Math.random() * 3 + 4; // Between 4s to 7s duration
    star.style.animationDuration = `${duration}s`;
  
    // Optional: Random delay for when the star starts falling
    const delay = Math.random() * 4; // Delay from 0 to 4 seconds
    star.style.animationDelay = `${delay}s`;
  
    // Optional: Set the opacity and fading effect
    star.style.opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
    
    // Randomize the glow effect for a more realistic look
    const glow = Math.random() * 10 + 5; // Glow intensity
    star.style.boxShadow = `0 0 ${glow}px rgba(255, 255, 255, 0.6), 0 0 ${glow + 5}px rgba(255, 255, 255, 0.6), 0 0 ${glow + 10}px rgba(255, 255, 255, 0.6)`;
  
    document.querySelector('.sky').appendChild(star);
  
    // Remove the star after it falls off screen
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
  
  // Increase the number of stars by reducing the interval further
  setInterval(createFallingStar, 30); // Create a star every 30 milliseconds (higher density)
  
  // Optional: A larger initial batch of stars
  for (let i = 0; i < 500; i++) { // Initial batch of 500 stars
    createFallingStar();
  }
  