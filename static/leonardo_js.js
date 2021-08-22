var skill1 = document.querySelector('#skill-1');
  var skill2 = document.querySelector('#skill-2');
  var skill3 = document.querySelector('#skill-3');
  var skill4 = document.querySelector('#skill-4');
  var skill5 = document.querySelector('#skill-5');
  var skill6 = document.querySelector('#skill-6');
  var skill7 = document.querySelector('#skill-7');
  
  var des1 = document.querySelector('.skill-des1');
  var des2 = document.querySelector('.skill-des2');
  var des3 = document.querySelector('.skill-des3');
  var des4 = document.querySelector('.skill-des4');
  var des5 = document.querySelector('.skill-des5');
  var des6 = document.querySelector('.skill-des6');
  var des7 = document.querySelector('.skill-des7');

  skill1.addEventListener('mouseenter', onMouseOver);
  skill1.addEventListener('click', onMouseOver);
  skill1.addEventListener('mouseleave', onMouseLeave);
  
  skill2.addEventListener('mouseenter', onMouseOver);
  skill2.addEventListener('click', onMouseOver);
  skill2.addEventListener('mouseleave', onMouseLeave);
  
  skill3.addEventListener('mouseenter', onMouseOver);
  skill3.addEventListener('click', onMouseOver);
  skill3.addEventListener('mouseleave', onMouseLeave);

  skill4.addEventListener('mouseenter', onMouseOver);
  skill4.addEventListener('click', onMouseOver);
  skill4.addEventListener('mouseleave', onMouseLeave);

  skill5.addEventListener('mouseenter', onMouseOver);
  skill5.addEventListener('click', onMouseOver);
  skill5.addEventListener('mouseleave', onMouseLeave);

  skill6.addEventListener('mouseenter', onMouseOver);
  skill6.addEventListener('click', onMouseOver);
  skill6.addEventListener('mouseleave', onMouseLeave);

  skill7.addEventListener('mouseenter', onMouseOver);
  skill7.addEventListener('click', onMouseOver);
  skill7.addEventListener('mouseleave', onMouseLeave);
  
  function onMouseOver(event) {
      var trg = event.target;
      
      var tl = new TimelineLite();
      
      if(trg.id == 'skill-1'){
        gsap.to(des2, 1, {opacity: 0});
        gsap.to(des3, 1, {opacity: 0});
        gsap.to(des4, 1, {opacity: 0});
        gsap.to(des5, 1, {opacity: 0});
        gsap.to(des6, 1, {opacity: 0});
        gsap.to(des7, 1, {opacity: 0});
        tl.to(des1, 1, {opacity: 1});
      }
      else if(trg.id == 'skill-2'){
        gsap.to(des1, 1, {opacity: 0});
        gsap.to(des3, 1, {opacity: 0});
        gsap.to(des4, 1, {opacity: 0});
        gsap.to(des5, 1, {opacity: 0});
        gsap.to(des6, 1, {opacity: 0});
        gsap.to(des7, 1, {opacity: 0});
        tl.to(des2, 1, {opacity: 1});
      }
      else if(trg.id == 'skill-3'){
        gsap.to(des1, 1, {opacity: 0});
        gsap.to(des2, 1, {opacity: 0});
        gsap.to(des4, 1, {opacity: 0});
        gsap.to(des5, 1, {opacity: 0});
        gsap.to(des6, 1, {opacity: 0});
        gsap.to(des7, 1, {opacity: 0});
        tl.to(des3, 1, {opacity: 1});
      }
      else if(trg.id == 'skill-4'){
        gsap.to(des1, 1, {opacity: 0});
        gsap.to(des2, 1, {opacity: 0});
        gsap.to(des3, 1, {opacity: 0});
        gsap.to(des5, 1, {opacity: 0});
        gsap.to(des6, 1, {opacity: 0});
        gsap.to(des7, 1, {opacity: 0});
        tl.to(des4, 1, {opacity: 1});
      }
      else if(trg.id == 'skill-5'){
        gsap.to(des1, 1, {opacity: 0});
        gsap.to(des2, 1, {opacity: 0});
        gsap.to(des3, 1, {opacity: 0});
        gsap.to(des4, 1, {opacity: 0});
        gsap.to(des6, 1, {opacity: 0});
        gsap.to(des7, 1, {opacity: 0});
        tl.to(des5, 1, {opacity: 1});
      }
      else if(trg.id == 'skill-6'){
        gsap.to(des1, 1, {opacity: 0});
        gsap.to(des2, 1, {opacity: 0});
        gsap.to(des3, 1, {opacity: 0});
        gsap.to(des4, 1, {opacity: 0});
        gsap.to(des5, 1, {opacity: 0});
        gsap.to(des7, 1, {opacity: 0});
        tl.to(des6, 1, {opacity: 1});
      }
      else if(trg.id == 'skill-7'){
        gsap.to(des1, 1, {opacity: 0});
        gsap.to(des2, 1, {opacity: 0});
        gsap.to(des3, 1, {opacity: 0});
        gsap.to(des4, 1, {opacity: 0});
        gsap.to(des5, 1, {opacity: 0});
        gsap.to(des6, 1, {opacity: 0});
        tl.to(des7, 1, {opacity: 1});
      }
  }
  
  function onMouseLeave(event) {
      var trg = event.target;
      
      var tl = new TimelineLite();
      
      if(trg.id == 'skill-1'){
        tl.to(des1, 1, {opacity: 0});
      }
      else if(trg.id == 'skill-2'){
        tl.to(des2, 1, {opacity: 0});
      }
      else if(trg.id == 'skill-3'){
        tl.to(des3, 1, {opacity: 0});
      }
      else if(trg.id == 'skill-4'){
        tl.to(des4, 1, {opacity: 0});
      }  
      else if(trg.id == 'skill-5'){
        tl.to(des5, 1, {opacity: 0});
      }  
      else if(trg.id == 'skill-6'){
        tl.to(des6, 1, {opacity: 0});
      }  
      else if(trg.id == 'skill-7'){
        tl.to(des7, 1, {opacity: 0});
      }  
  }