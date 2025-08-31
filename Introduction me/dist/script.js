const introTl = gsap.timeline();

function init() {
  introTl.to('.loader__text span', {autoAlpha: 1})
  introTl.from('.loader__text span', {yPercent: 150, stagger: .125, duration: .325, ease: 'Power3.inOut'});
  introTl.to('.loader__text span', {yPercent: 150, stagger: .125, duration: .325, ease: 'Power3.inOut'}, '+=.9');
  introTl.to('.loader__slice', {yPercent: 100, stagger: .125, duration: .6, ease: 'Power3.inOut'}, '<.125')  
  introTl.from('.hero__title span', {yPercent: -100, duration: .6, ease: 'Power3.inOut'}, '<.4.5')  

}

window.addEventListener('load', function() {
  init();
});