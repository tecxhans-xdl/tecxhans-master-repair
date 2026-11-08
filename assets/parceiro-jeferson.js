/* TecXhans Parceiros — Jeferson Moura; não modifica parceiros existentes. */
(()=>{
  'use strict';
  const wa='https://wa.me/5511933732967?text='+encodeURIComponent('Olá, Jeferson! Conheci seus serviços pelo site da TecXhans e gostaria de solicitar um orçamento.');
  function install(){
    for(const id of ['homePartners','allPartners']){
      const rail=document.getElementById(id);
      if(!rail || rail.querySelector('[data-partner="jeferson-moura"]')) continue;
      const card=document.createElement('article'); card.className='card partner'; card.dataset.partner='jeferson-moura';
      const media=document.createElement('div');media.className='image';
      const link=document.createElement('a');link.className='partner-photo-link';link.href=wa;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','Falar com Jeferson Moura no WhatsApp');
      const img=document.createElement('img');img.src='assets/parceiro-jeferson-moura.png';img.alt='Jeferson Moura — Serviços Gerais, Elétrica e Hidráulica';img.loading='lazy';img.decoding='async';
      link.appendChild(img);media.appendChild(link);
      const h=document.createElement('h3');h.textContent='Jeferson Moura';
      const description=document.createElement('p');description.textContent='Serviços gerais · Elétrica e hidráulica';
      const phone=document.createElement('span');phone.className='tx-partner-phone';phone.textContent='(11) 93373-2967';
      const btn=document.createElement('a');btn.className='btn';btn.href=wa;btn.target='_blank';btn.rel='noopener noreferrer';btn.textContent='💬 WhatsApp';
      card.append(media,h,description,phone,btn);rail.appendChild(card);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
