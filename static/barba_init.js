barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      if(data.current.url.path == "/"){
        return gsap.to("span", 1, {opacity: 0});
      }
      else if(data.current.url.path == "/sfs/"){
        return gsap.to(".sfs-contnt", 1, {opacity: 0});
      }
      else if(data.current.url.path == "/leonardo/"){
        return gsap.to(".l-contnt", 1, {opacity: 0});
      }
      else if(data.current.url.path == "/ntu/"){
        return gsap.to(".ntu-contnt", 1, {opacity: 0});
      }
    },
    enter(data) {
      if(data.current.url.path == "/"){
        var homeLinks = document.querySelector('.home-links');

        if(data.next.url.path == '/sfs/'){
          console.log('sfs');
          var links = document.querySelector('.sfs-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(homeLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".sfs-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5}); 
        }
        else if(data.next.url.path == '/leonardo/'){
          var links = document.querySelector('.l-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(homeLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".l-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
        else if(data.next.url.path == '/ntu/'){
          var links = document.querySelector('.ntu-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(homeLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".ntu-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
      }
      else if(data.current.url.path == "/sfs/"){
        var sfsLinks = document.querySelector('.sfs-links');
        console.log('sfs');

        if(data.next.url.path == '/leonardo/'){
          console.log('sfs->leo');
          var links = document.querySelector('.l-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(sfsLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".l-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
        else if(data.next.url.path == '/ntu/'){
          var links = document.querySelector('.ntu-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(sfsLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".ntu-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
      }
      else if(data.current.url.path == "/leonardo/"){
        var lLinks = document.querySelector('.l-links');

        if(data.next.url.path == '/sfs/'){
          var links = document.querySelector('.sfs-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(lLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".sfs-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
        else if(data.next.url.path == '/ntu/'){
          var links = document.querySelector('.ntu-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(lLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".ntu-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
      }
      else if(data.current.url.path == "/ntu/"){
        var ntuLinks = document.querySelector('.ntu-links');

        if(data.next.url.path == '/sfs/'){
          console.log('sfs');
          var links = document.querySelector('.sfs-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(ntuLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".sfs-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5}); 
        }
        else if(data.next.url.path == '/leonardo/'){
          var links = document.querySelector('.l-links');
          var h = window.innerHeight;
          var p = MotionPathPlugin.getRelativePosition(ntuLinks, links);

          //Offset height of row (i.e. height of window width)
          gsap.from(links, 1.5, {x: "+=" + p.x, y: h - p.y});
          gsap.from(".l-contnt", 1.5, {delay: 1, opacity: 0});
          gsap.from(".skills", 2.5, {delay: 1.5, y: 50, stagger: 0.5});
          gsap.from(".desc", 2, {delay: 1, y: 100, stagger: 0.5});
        }
      }
    }
  }],
  views: [{
    namespace: 'sitesforstudents',
    beforeEnter({next}) {
      let script = document.createElement('script');
      script.src = 'sitesforstudents_js.js';
      next.container.appendChild(script);
    }

    }, {
      namespace: 'leonardo',
      beforeEnter({next}) {
        let script = document.createElement('script');
        script.src = 'leonardo_js.js';
        next.container.appendChild(script);
    }
    }, {
      namespace: 'ntu',
      beforeEnter({next}) {
        let script = document.createElement('script');
        script.src = 'sitesforstudents_js.js';
        next.container.appendChild(script);
    }
  }]
});