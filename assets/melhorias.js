/* TecXhans Upgrade - não altera o site.js original */
(()=>{'use strict';const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];
const whatsapp='5511982901124';
// Display consulta page with same navigation approach as original site, keeping original page model.
document.addEventListener('click',e=>{const b=e.target.closest('[data-upgrade-page]');if(b){e.preventDefault();navigate(b.dataset.upgradePage)}});
function navigate(id){if(id==='consulta'){ $$('.page').forEach(el=>el.classList.toggle('active',el.id===id));$$('#nav [data-page]').forEach(el=>el.classList.toggle('active',el.dataset.page===id));history.replaceState(null,'','#consulta');window.scrollTo({top:0,behavior:'smooth'});document.dispatchEvent(new CustomEvent('tx:page-change',{detail:{page:id}}));}else{const nav=$(`#nav button[data-page="${id}"]`);if(nav)nav.click()}}
const os=$('#txOsForm');if(os)os.addEventListener('submit',e=>{e.preventDefault();const numero=$('#txOsNumero').value.trim().replace(/\s+/g,' ').slice(0,45),cliente=$('#txOsCliente').value.trim().replace(/\s+/g,' ').slice(0,90);if(!numero||!cliente)return;const msg=`Olá, TecXhans! Gostaria de consultar a ordem de serviço ${numero}. Cliente: ${cliente}. Podem confirmar o status?`;window.open('https://wa.me/'+whatsapp+'?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer')});
// Existing buttons are handled by site.js; add discovery for new page without rewriting it.
$$('#nav button[data-page="consulta"]').forEach(btn=>btn.addEventListener('click',e=>{e.stopImmediatePropagation();navigate('consulta')},true));
if(location.hash==='#consulta')navigate('consulta');
// Keep search scoped to catalog cards; if they're dynamically generated, update on each keypress.
const search=$('#txSearchProducts');if(search)search.addEventListener('input',()=>{const term=search.value.trim().toLocaleLowerCase('pt-BR');const panels=$$('#storeProducts .card, #txFonesProducts .card');let found=0;panels.forEach(card=>{const match=!term||card.textContent.toLocaleLowerCase('pt-BR').includes(term);card.style.display=match?'':'none';if(match)found++});const count=$('#txSearchCount');if(count)count.textContent=term?`${found} produto(s) correspondente(s) nas listas carregadas. Escolha outra categoria para buscar nela.`:'Explore nossas categorias ou digite para buscar'});
// Scroll partner strip gently only while visible, without interrupting touching/hovering.
const rail=$('#homePartners');if(rail && !matchMedia('(prefers-reduced-motion: reduce)').matches){let timer=setInterval(()=>{if(!document.hidden&&rail.getClientRects().length&&!rail.matches(':hover')&&rail.scrollWidth>rail.clientWidth+10){const next=rail.scrollLeft+320;rail.scrollTo({left:next>=rail.scrollWidth-rail.clientWidth-8?0:next,behavior:'smooth'})}},5200);window.addEventListener('pagehide',()=>clearInterval(timer),{once:true})}
})();
