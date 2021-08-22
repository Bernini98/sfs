var skill1 = document.querySelector('#skill-1');
var skill2 = document.querySelector('#skill-2');
var skill3 = document.querySelector('#skill-3');

var des1 = document.querySelector('#skilldes-1');
var des2 = document.querySelector('.skill-des2');
var des3 = document.querySelector('.skill-des3');

skill1.addEventListener('mouseenter', onMouseOver);
skill1.addEventListener('click', onMouseOver);
skill1.addEventListener('mouseleave', onMouseLeave);

skill2.addEventListener('mouseenter', onMouseOver);
skill2.addEventListener('click', onMouseOver);
skill2.addEventListener('mouseleave', onMouseLeave);

skill3.addEventListener('mouseenter', onMouseOver);
skill3.addEventListener('click', onMouseOver);
skill3.addEventListener('mouseleave', onMouseLeave);

function onMouseOver(event) {
    var trg = event.target;
    
    var tl = new TimelineLite();
    
    if(trg.id == 'skill-1'){
      gsap.to(des2, 1, {opacity: 0});
      gsap.to(des3, 1, {opacity: 0});
      tl.to(des1, 1, {opacity: 1});
    }
    else if(trg.id == 'skill-2'){
      gsap.to(des1, 1, {opacity: 0});
      gsap.to(des3, 1, {opacity: 0});
      tl.to(des2, 1, {opacity: 1});
    }
    else if(trg.id == 'skill-3'){
      gsap.to(des1, 1, {opacity: 0});
      gsap.to(des2, 1, {opacity: 0});
      tl.to(des3, 1, {opacity: 1});
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
}