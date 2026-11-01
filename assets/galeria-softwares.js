/* TecXhans — carrossel de capturas reais; preserva a abertura 7.5 */
(()=>{'use strict';
 const track=document.getElementById('txGalleryTrack');if(!track)return;
 const prev=document.getElementById('txGalleryPrev'),next=document.getElementById('txGalleryNext');
 const slides=[...track.querySelectorAll('.tx-gallery-card')];
 const dots=[...document.querySelectorAll('#txGalleryDots span')];
 let direction=1,paused=false,manualPauseUntil=0;
 const rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const stride=()=>slides.length>1?slides[1].offsetLeft-slides[0].offsetLeft:track.clientWidth;
 function updateDots(){const n=slides.reduce((acc,x,i)=>Math.abs(track.scrollLeft-(x.offsetLeft-slides[0].offsetLeft))<Math.abs(track.scrollLeft-(slides[acc].offsetLeft-slides[0].offsetLeft))?i:acc,0);dots.forEach((d,i)=>d.classList.toggle('active',i===n));}
 function move(dir,manual=false){if(manual){manualPauseUntil=Date.now()+6500;direction=dir;}const max=track.scrollWidth-track.clientWidth;if(max<=3){updateDots();return;}
   const step=stride(),current=track.scrollLeft;let target=current+dir*step;
   if(manual&&dir>0&&current>=max-4){target=0;direction=1;}
   else if(manual&&dir<0&&current<=4){target=max;direction=-1;}
   if(target>=max-3){target=max;if(!manual)direction=-1;}else if(target<=3){target=0;if(!manual)direction=1;}
   track.scrollTo({left:Math.max(0,Math.min(max,target)),behavior:rm?'instant':'smooth'});
   setTimeout(updateDots,550);
 }
 prev?.addEventListener('click',()=>move(-1,true));next?.addEventListener('click',()=>move(1,true));
 track.addEventListener('mouseenter',()=>paused=true);track.addEventListener('mouseleave',()=>paused=false);
 track.addEventListener('focusin',()=>paused=true);track.addEventListener('focusout',()=>paused=false);
 track.addEventListener('touchstart',()=>{manualPauseUntil=Date.now()+7500},{passive:true});
 track.addEventListener('scroll',()=>requestAnimationFrame(updateDots),{passive:true});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateDots()});
 if(!rm){setInterval(()=>{if(document.hidden||paused||Date.now()<manualPauseUntil||!document.getElementById('softwares')?.classList.contains('active'))return;move(direction);},3600)}
 updateDots();
})();
