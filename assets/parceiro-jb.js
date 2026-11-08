/* TecXhans — JB Borracharia: preserva a lista e os parceiros existentes. */
(function(){
  'use strict';
  const site='https://jbborracharia.com.br/';
  const whatsapp='https://wa.me/5511996335608?text='+encodeURIComponent('Olá! Conheci a JB Borracharia pelo site da TecXhans. Gostaria de atendimento.');
  function addPartner(){
    for(const id of ['homePartners','allPartners']){
      const rail=document.getElementById(id);
      if(!rail || rail.querySelector('[data-partner="jb-borracharia"]')) continue;
      const card=document.createElement('article');
      card.className='card partner';
      card.dataset.partner='jb-borracharia';
      const imageDiv=document.createElement('div');imageDiv.className='image';
      const siteImage=document.createElement('a');siteImage.className='partner-photo-link';siteImage.href=site;siteImage.target='_blank';siteImage.rel='noopener noreferrer';siteImage.setAttribute('aria-label','Visitar o site da JB Borracharia');
      const img=document.createElement('img');img.src='assets/jb-logo-oficial-300.webp';img.alt='Logotipo oficial JB Borracharia 24 Horas e S.O.S.';img.loading='lazy';img.decoding='async';
      siteImage.appendChild(img);imageDiv.appendChild(siteImage);
      const heading=document.createElement('h3');heading.textContent='JB Borracharia';
      const description=document.createElement('p');description.textContent='Borracharia 24 horas e S.O.S. · Braz Cubas, Mogi das Cruzes';
      const links=document.createElement('div');links.className='jb-partner-links';
      const siteLink=document.createElement('a');siteLink.className='btn secondary';siteLink.href=site;siteLink.target='_blank';siteLink.rel='noopener noreferrer';siteLink.textContent='🌐 Visitar site';
      const waLink=document.createElement('a');waLink.className='btn';waLink.href=whatsapp;waLink.target='_blank';waLink.rel='noopener noreferrer';waLink.textContent='💬 WhatsApp';
      links.append(siteLink,waLink);card.append(imageDiv,heading,description,links);rail.appendChild(card);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addPartner,{once:true});else addPartner();
})();
