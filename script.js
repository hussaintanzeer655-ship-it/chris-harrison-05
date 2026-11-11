// Gallery items and lightbox
(function(){
  const grid=document.querySelector('#gallery .grid')||document.querySelector('.grid');
  const imgs=["A","B","C","D","E","F"]; // placeholders
  imgs.forEach((t,i)=>{ const cell=document.createElement('div'); cell.className='cell'; cell.textContent=t; cell.addEventListener('click',()=>openLightbox(t)); grid.appendChild(cell);});
  const lb=document.getElementById('lightbox'); const lbImg=document.getElementById('lbImg');
  function openLightbox(label){ lbImg.src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="white"/><text x="50%" y="50%" font-family="Arial" font-size="24" text-anchor="middle" fill="black">'+label+'</text></svg>'; lb.hidden=false; }
  lb.addEventListener('click',()=>lb.hidden=true);
})();