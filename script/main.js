document.addEventListener('DOMContentLoaded', function() {
    const progressCircle = document.querySelector('.progress-ring-circle');
    const backToTop = document.querySelector('.scroll-progress-circle');
    const circumference = 2 * Math.PI * 25;
    

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
    
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = circumference - (winScroll / height) * circumference;
      
      progressCircle.style.strokeDashoffset = progress;
      

      if (winScroll > height * 0.95) {
        backToTop.classList.add('scroll-complete');
      } else {
        backToTop.classList.remove('scroll-complete');
      }
    });
    

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    const socialLinks = document.querySelectorAll('.floating-social a');
    
    contactLink.addEventListener('click', function(e) {

        e.preventDefault();
        

        socialLinks.forEach(link => {
            link.style.animation = 'none';
            void link.offsetHeight;
            link.style.animation = null;
            link.classList.add('highlight-animation');
            
            link.addEventListener('animationend', () => {
                link.classList.remove('highlight-animation');
            }, { once: true });
        });
        
    });
});

