/* TecXhans 7.5 — compact cinematic video opening */
(()=>{
  'use strict';
  const intro=document.getElementById('txIntro');
  const video=document.getElementById('txIntroVideo');
  const skip=document.getElementById('txSkip');
  const audio=document.getElementById('txAudio');
  const play=document.getElementById('txPlay');
  const replay=document.getElementById('txReplay');
  const watchHome=document.getElementById('txWatchHome');
  const alien=document.getElementById('txAlienEaster');
  const secret=document.getElementById('txSecret');
  const msg=document.getElementById('txVideoMessage');
  const secretClose=document.getElementById('txSecretClose');
  if(!intro||!video||!skip||!audio)return;
  const KEY='tx-cinema-7.5-seen';
  let timeout=null;
  const home=()=>!location.hash||location.hash==='#inicio';
  const safeStore=()=>{try{sessionStorage.setItem(KEY,'1')}catch(e){}};
  const wasSeen=()=>{try{return sessionStorage.getItem(KEY)==='1'}catch(e){return false}};
  function finish(){
    intro.hidden=true;
    document.body.style.overflow='';
    clearTimeout(timeout);timeout=null;
    video.pause();
    if(alien)alien.hidden=false;
    if(replay)replay.hidden=false;
    safeStore();
  }
  function start(){
    if(!home())return;
    if(alien)alien.hidden=true;
    if(replay)replay.hidden=true;
    intro.hidden=false;
    if(msg)msg.hidden=true;
    document.body.style.overflow='hidden';
    video.currentTime=0;
    video.muted=true;
    audio.textContent='🔇 Ativar som';
    audio.setAttribute('aria-pressed','false');
    if(play)play.hidden=true;
    const promise=video.play();
    if(promise&&typeof promise.catch==='function')promise.catch(()=>{if(play)play.hidden=false});
    clearTimeout(timeout);
    timeout=setTimeout(finish,22000);
  }
  skip.addEventListener('click',finish);
  audio.addEventListener('click',()=>{
    video.muted=!video.muted;
    audio.textContent=video.muted?'🔇 Ativar som':'🔊 Silenciar';
    audio.setAttribute('aria-pressed',String(!video.muted));
    if(video.paused)video.play().catch(()=>{if(play)play.hidden=false});
  });
  if(play)play.addEventListener('click',()=>{play.hidden=true;video.play().catch(()=>{play.hidden=false})});
  if(replay)replay.addEventListener('click',start);
  if(watchHome)watchHome.addEventListener('click',start);
  if(alien&&secret)alien.addEventListener('click',()=>{secret.hidden=!secret.hidden});
  if(secretClose&&secret)secretClose.addEventListener('click',()=>{secret.hidden=true});
  video.addEventListener('ended',finish);
  video.addEventListener('error',()=>{if(msg)msg.hidden=false;if(play)play.hidden=false});
  window.addEventListener('hashchange',()=>{if(!intro.hidden&&!home())finish()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!intro.hidden)finish()});
  document.addEventListener('visibilitychange',()=>{
    if(intro.hidden)return;
    if(document.hidden)video.pause();
    else if(!video.ended&&play&&play.hidden)video.play().catch(()=>{play.hidden=false});
  });
  if(!home()||matchMedia('(prefers-reduced-motion: reduce)').matches||wasSeen()){
    if(alien)alien.hidden=false;
    if(replay)replay.hidden=false;
  }else start();
})();
