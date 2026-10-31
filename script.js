const items=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
items.forEach((el,i)=>{el.style.transitionDelay=`${(i%4)*70}ms`;observer.observe(el)});
const messages=[
  "Plot twist: you're still my favorite person. ❤️",
  "You + me + a ridiculous amount of memories. That's the plan.",
  "If this were a movie, I'd replay our best scenes forever.",
  "Official reminder: you are very, very loved. ♥"
];
document.getElementById('surprise').addEventListener('click',()=>{
  const text=document.getElementById('surpriseText');
  text.textContent=messages[Math.floor(Math.random()*messages.length)];
  text.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,fill:'forwards'});
  for(let i=0;i<12;i++){
    const h=document.createElement('span'); h.textContent='♥';
    Object.assign(h.style,{position:'fixed',left:(50+Math.random()*20-10)+'%',top:'60%',color:'#ff6f91',fontSize:(12+Math.random()*22)+'px',pointerEvents:'none',zIndex:99});
    document.body.appendChild(h);
    h.animate([{transform:'translateY(0) scale(.6)',opacity:1},{transform:`translate(${(Math.random()-.5)*260}px,-${120+Math.random()*240}px) scale(1.2)`,opacity:0}],{duration:900+Math.random()*500,easing:'ease-out'}).onfinish=()=>h.remove();
  }
});
