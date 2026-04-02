import React, { useEffect, useRef } from 'react';

const StarParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Warm colors mapping
    const colors = ['#E6A15A', '#FF8C42', '#FFD56B'];
    
    const particlesArray = [];
    const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * -0.5) - 0.2; // Slow drift upward
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random();
        this.opacityChange = (Math.random() * 0.01) + 0.005;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Reset position when out of bounds
        if (this.y < 0) this.y = canvas.height;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        // Opacity breathing
        this.opacity += this.opacityChange;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.opacityChange = -this.opacityChange;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 opacity-60"
    />
  );
};

export default StarParticles;
