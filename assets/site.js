'use strict';
// EDITE AQUI OS PRODUTOS. price: null significa "sob consulta".
const products=[
{id:'fone-1hora',name:'Fone Bluetooth 1HORA',cat:'Acessórios',icon:'🎧',image:'assets/fone-1hora.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:100},
{id:'fone-eletro',name:'Fone Bluetooth ELETRO EL-1642',cat:'Acessórios',icon:'🎧',image:'assets/fone-eletro.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:100},
{id:'fone-airdots',name:'Fone Bluetooth AirDots S',cat:'Acessórios',icon:'🎧',image:'assets/fone-airdots.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:40},
{id:'fone-earx',name:'Fone Lightning EarX',cat:'Acessórios',icon:'🎧',image:'assets/fone-earx.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:25},
{id:'fone-lehmox',name:'Fone Type-C LEHMOX LEF-1077',cat:'Acessórios',icon:'🎧',image:'assets/fone-lehmox.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:25},
{id:'adaptador-lightning',name:'Adaptador Lightning para P2 IT-BLUE',cat:'Acessórios',icon:'🎧',image:'assets/adaptador-lightning.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:30},
{id:'fone-agold',name:'Fone P2 α’GOLD',cat:'Acessórios',icon:'🎧',image:'assets/fone-agold.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:20},
{id:'fone-starmega',name:'Fone P2 Starmega ST-2001',cat:'Acessórios',icon:'🎧',image:'assets/fone-starmega.png',desc:'Confira o modelo na imagem. Consulte disponibilidade antes da compra.',price:10},
{id:'personalize',name:'Personalize PRO',cat:'Softwares',icon:'🎨',desc:'Gestão de personalizados, clientes, estoque e orçamentos.',price:null},
{id:'adega',name:'Adega PDV PRO',cat:'Softwares',icon:'🍹',desc:'Gestão de vendas, caixa e estoque.',price:null},
{id:'assistpro',name:'Assistência PRO',cat:'Softwares',icon:'🛠️',desc:'Ordens de serviço e controle de assistência técnica.',price:null},
{id:'pizza',name:'PizzaControl PRO',cat:'Softwares',icon:'🍕',desc:'Gestão para pizzarias.',price:null},
{id:'central',name:'Central de Estudos',cat:'Softwares',icon:'📚',desc:'Plataforma de estudos do 4º ao 9º ano.',price:null},
{id:'juridico',name:'TecXhans Jurídico PRO',cat:'Softwares',icon:'⚖️',desc:'Gestão para escritórios de advocacia. Consulte disponibilidade.',price:null},
{id:'capinha-iphone-15-diamaz',name:'Capinha DIAMAZ Space VM — iPhone 15 (laranja)',cat:'Acessórios',icon:'📱',image:'assets/capinha-iphone-15-diamaz.png',desc:'Capinha laranja com anel magnético. Compatibilidade indicada na embalagem: iPhone 15. Consulte disponibilidade.',price:50},
{id:'capinha-iphone-14-wzx',name:'Capinha WZX — iPhone 14 (transparente/rosa)',cat:'Acessórios',icon:'📱',image:'assets/capinha-iphone-14-wzx.png',desc:'Capinha transparente com acabamento rosa e anel magnético. Compatibilidade indicada na embalagem: iPhone 14. Consulte disponibilidade.',price:50},
{id:'capinha-iphone-13-pro-max-diamaz',name:'Capinha DIAMAZ Space VM — iPhone 13 Pro Max (escura)',cat:'Acessórios',icon:'📱',image:'assets/capinha-iphone-13-pro-max-diamaz.png',desc:'Capinha escura com anel magnético. Compatibilidade indicada na embalagem: iPhone 13 Pro Max. Consulte disponibilidade.',price:50},
{id:'kaidi-kd556s',name:'Carregador KAIDI KD-556S + cabo V8',cat:'Acessórios',icon:'🔌',image:'assets/carregador-kaidi-kd556s.png',desc:'Carregador 2 portas USB, 2,4 A, potência anunciada de 12 W, com cabo Micro-USB (V8). Consulte disponibilidade.',price:30},
{id:'cabo',name:'Cabos e carregadores',cat:'Acessórios',icon:'🔌',desc:'Consulte modelos e disponibilidade.',price:null},
{id:'fone-m10-tws',name:'Fone M10 Bluetooth TWS com estojo power bank',cat:'Acessórios',icon:'🎧',image:'assets/fone-m10-tecxhans.png',desc:'Fones sem fio Bluetooth TWS, estojo com indicador de carga e função power bank anunciada. Consulte disponibilidade e condições.',price:45},
{id:'fone',name:'Fones e acessórios',cat:'Acessórios',icon:'🎧',desc:'Opções para seu dia a dia.',price:null},
{id:'eletronicos',name:'Eletrônicos variados',cat:'Eletrônicos',icon:'🎮',desc:'Gadgets e eletrônicos: consulte nosso catálogo.',price:null},
{id:'moto-g73',name:'Moto G73 branco',cat:'Seminovos',icon:'🤖',desc:'Recondicionado. Confirme disponibilidade e estado atual.',price:600},
{id:'lg-k22',name:'LG K22 cinza',cat:'Seminovos',icon:'🧑‍🔧',desc:'Confirme disponibilidade e estado atual.',price:370},
{id:'poco-x5-pro',name:'Poco X5 Pro 256 GB',cat:'Seminovos',icon:'👽',desc:'Confirme disponibilidade e estado atual.',price:1450},
{id:'iphone-14',name:'iPhone 14 azul-bebê 128 GB',cat:'Seminovos',icon:'👽🤖🧑‍🔧',desc:'Anúncio anterior: bateria 88%, nunca aberto, capinha, película e carregador turbo novo. Confirme condições.',price:2750},
{id:'notebooks',name:'Notebooks seminovos',cat:'Seminovos',icon:'💻',desc:'Consulte modelos e disponibilidade.',price:null}
];
// Preencha whatsapp somente após confirmar com o parceiro. Imagem opcional: assets/parceiros/nome.jpg
const partners=[{name:'Mimos e Personalizados Fernanda Prado',software:'Personalize PRO',icon:'🎁',whatsapp:'5511982898226',image:'assets/parceira-fernanda-prado.jpg'},{name:'Bancada Unlock',software:'Ferramentas e soluções para técnicos',icon:'👽',image:'assets/parceiro-bancada-unlock.jpg',url:'https://chat.whatsapp.com/JqCDNoyIDUXGK3dv96uqh7?s=cl&p=a&mlu=4&ilr=4'},
{name:'Buffet M&A',software:'Almoços, jantares, churrasco e finger food para eventos',icon:'🍽️',whatsapp:'5511999762674',image:'assets/parceiro-buffet-ma.webp'},
{name:'JHC Celulares',software:'Celulares e assistência técnica',icon:'📱',whatsapp:'5511972090534',image:'assets/parceiro-jhc-celulares.png'}];
const storeNumber='5511982901124';
let cart=[];try{cart=JSON.parse(localStorage.getItem('tx_cart')||'[]');if(!Array.isArray(cart))cart=[]}catch{cart=[]}
const $=s=>document.querySelector(s),money=n=>n==null?'Sob consulta':n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function safe(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function show(page){if(!document.getElementById(page))page='inicio';const prev=document.querySelector('section.page.active')?.id;document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===page));document.querySelectorAll('[data-page]').forEach(x=>x.classList.toggle('active',x.dataset.page===page));history.replaceState(null,'','#'+page);window.scrollTo({top:0,behavior:'smooth'});if(prev&&prev!==page)document.dispatchEvent(new CustomEvent('tx:page-change',{detail:{page}}))}
document.addEventListener('click',e=>{const t=e.target.closest('[data-page],[data-go]');if(t)show(t.dataset.page||t.dataset.go)});document.querySelectorAll('[data-page]').forEach(x=>x.addEventListener('click',()=>show(x.dataset.page)));
function card(p){const art=p.image?`<a href="${safe(p.image)}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar imagem de ${safe(p.name)}"><img class="tx-product-photo" src="${safe(p.image)}" alt="${safe(p.name)} — imagem promocional" loading="lazy"></a>`:(p.cat==='Seminovos'?`<div class="used-art used-${safe(p.id)}" role="img" aria-label="Imagem ilustrativa do ${safe(p.name)}"></div>`:'');const download=p.id==='personalize'?`<a class="btn" href="https://github.com/tecxhans-xdl/tecxhans-master-repair/releases/download/personalize-v4.6.1/PersonalizePRO_4.6.1_Protecao_Dados.exe" target="_blank" rel="noopener noreferrer" download>⬇ Baixar para Windows (4.6.1)</a>`:'';return `<article class="card">${art}<div class="emoji">${safe(p.icon)}</div><span class="tag">${safe(p.cat)}</span><h3>${safe(p.name)}</h3><p>${safe(p.desc)}</p><div class="price">${money(p.price)}</div><div class="product-actions"><button class="btn" data-add="${safe(p.id)}">🛒 Adicionar</button><a class="btn secondary" target="_blank" rel="noopener" href="https://wa.me/${storeNumber}?text=${encodeURIComponent('Olá! Quero saber mais sobre '+p.name+'.')}">Consultar</a>${download}</div></article>`}
function renderProducts(){const categories=[['💻','Softwares','softwares'],['🔌','Acessórios','loja'],['🎮','Eletrônicos','loja'],['📱','Seminovos','seminovos']];$('#categories').innerHTML=categories.map(([icon,name,page])=>`<article class="card"><div class="emoji">${icon}</div><h3>${name}</h3><button class="btn secondary" data-go="${page}">Explorar →</button></article>`).join('');$('#usedProducts').innerHTML=products.filter(p=>p.cat==='Seminovos').map(card).join('');const cats=['Todos','Acessórios','Eletrônicos','Seminovos'];$('#filters').innerHTML=cats.map((x,i)=>`<button data-filter="${x}" class="${i===0?'active':''}">${x}</button>`).join('');filter('Todos')}
function filter(cat){$('#storeProducts').innerHTML=products.filter(p=>p.cat!=='Softwares'&&(cat==='Todos'||p.cat===cat)).map(card).join('');document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x.dataset.filter===cat))}
function partnerCard(p){const wa=p.url||(p.whatsapp?`https://wa.me/${p.whatsapp}?text=${encodeURIComponent('Olá! Conheci a '+p.name+' pelo site da TecXhans e gostaria de informações.')}`:null);const label=p.url?'👥 Entrar no grupo WhatsApp':'💬 WhatsApp do parceiro';return `<article class="card partner"><div class="image">${p.image?(wa?`<a class="partner-photo-link" href="${wa}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${safe(p.name)} no WhatsApp"><img src="${safe(p.image)}" alt="Propaganda de ${safe(p.name)}"></a>`:`<img src="${safe(p.image)}" alt="Propaganda de ${safe(p.name)}">`):safe(p.icon)}</div><h3>${safe(p.name)}</h3><p>${safe(p.software)}</p>${wa?`<a class="btn" href="${wa}" target="_blank" rel="noopener noreferrer">${label}</a>`:'<span class="mini">Contato em breve</span>'}</article>`}
function save(){localStorage.setItem('tx_cart',JSON.stringify(cart));renderCart()}
function add(id){const p=products.find(x=>x.id===id);if(!p)return;const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({id,qty:1});save();$('#cartOverlay').classList.add('open')}
function renderCart(){cart=cart.filter(x=>products.some(p=>p.id===x.id)&&Number.isInteger(x.qty)&&x.qty>0);$('#cartCount').textContent=cart.reduce((s,x)=>s+x.qty,0);$('#cartItems').innerHTML=cart.length?cart.map(x=>{const p=products.find(y=>y.id===x.id);return `<div class="row"><div><strong>${safe(p.name)}</strong><br><span class="mini">${x.qty} × ${money(p.price)}</span></div><button class="btn secondary" data-remove="${safe(x.id)}">Remover</button></div>`}).join(''):'<p>Seu carrinho está vazio.</p>';const total=cart.reduce((s,x)=>s+(products.find(y=>y.id===x.id).price||0)*x.qty,0);$('#cartTotal').textContent='Total de itens com preço definido: '+money(total);$('#checkout').disabled=!cart.length}
document.addEventListener('click',e=>{const a=e.target.closest('[data-add]'),r=e.target.closest('[data-remove]'),f=e.target.closest('[data-filter]');if(a)add(a.dataset.add);if(r){cart=cart.filter(x=>x.id!==r.dataset.remove);save()}if(f)filter(f.dataset.filter)});$('#openCart').onclick=()=>$('#cartOverlay').classList.add('open');$('#closeCart').onclick=()=>$('#cartOverlay').classList.remove('open');$('#cartOverlay').onclick=e=>{if(e.target.id==='cartOverlay')e.target.classList.remove('open')};$('#checkout').onclick=()=>{if(!cart.length)return;const lines=cart.map(x=>{const p=products.find(y=>y.id===x.id);return `• ${x.qty}x ${p.name} (${money(p.price)})`});const msg='Olá, TecXhans! Quero consultar este pedido:\n'+lines.join('\n')+'\nPodem confirmar disponibilidade e valor final?';window.open('https://wa.me/'+storeNumber+'?text='+encodeURIComponent(msg),'_blank','noopener')};$('#year').textContent=new Date().getFullYear();renderProducts();$('#homePartners').innerHTML=partners.map(partnerCard).join('');$('#allPartners').innerHTML=partners.map(partnerCard).join('');renderCart();show(location.hash.slice(1)||'inicio');


/* TecXhans 7.5 — surpresa dos mascotes nas abas.
   Não altera a animação de abertura, outros scripts, links ou imagens do site.
   Som sintetizado localmente após toque/clique do visitante, com botão para silenciar. */
(function mascotSurprise(){
  'use strict';
  const trio=[
    {name:'ET TecXhans',image:'assets/torcida-alien.png',line:'👽 Cheguei de outro planeta!',notes:[650,970,770]},
    {name:'Robô TecXhans',image:'assets/torcida-robo.png',line:'🤖 Bip-bip! Nova missão!',notes:[510,660,880]},
    {name:'Mascote TecXhans',image:'assets/torcida-mascote.png',line:'😎 Bora explorar!',notes:[420,540,800]}
  ];
  const phrases={inicio:'Bem-vindo ao universo TecXhans!',loja:'Olha as novidades da loja!',softwares:'Tecnologia que facilita sua vida!',seminovos:'Achados de outro mundo!',assistencia:'Missão: resolver seu problema!',desbloqueios:'Nova área desbloqueada!',parceiros:'Nossos parceiros são especiais!',contato:'Bora conversar com a TecXhans!'};
  const style=document.createElement('style');
  style.textContent=`
  .tx-surprise{position:fixed;right:10px;bottom:80px;z-index:38;width:min(235px,75vw);pointer-events:none;opacity:0;visibility:hidden;transform:translate(115%,28px) scale(.72);transition:opacity .22s ease,transform .46s cubic-bezier(.17,1.5,.48,1),visibility .22s;filter:drop-shadow(0 7px 16px #0009)}
  .tx-surprise.show{opacity:1;visibility:visible;transform:translate(0,0) scale(1)}
  .tx-surprise img{display:block;width:130px;max-width:62%;height:146px;object-fit:contain;margin:0 13px -10px auto;filter:drop-shadow(0 0 12px #34ddffae);animation:txSurpriseFloat 1.2s ease-in-out infinite alternate}
  .tx-surprise-speech{background:linear-gradient(135deg,#13163beb,#38176deb);border:1px solid #60dfff;border-radius:17px;padding:9px 12px;text-align:center;box-shadow:0 0 18px #44d8ff78,inset 0 0 16px #8030d137;color:#fff;font:700 12px/1.3 system-ui,Segoe UI,sans-serif}
  .tx-surprise-speech small{display:block;font-size:10px;font-weight:500;color:#b4f6ff;margin-top:2px}
  .tx-surprise-sound{position:fixed;right:77px;bottom:19px;z-index:86;background:#101840e8;border:1px solid #438ab0;border-radius:24px;color:white;min-width:45px;min-height:40px;padding:8px 11px;box-shadow:0 0 11px #306add6b;font:700 13px system-ui,Segoe UI,sans-serif;cursor:pointer}
  .tx-surprise-sound:hover,.tx-surprise-sound:focus-visible{border-color:#59e8ff;outline-offset:3px}
  @keyframes txSurpriseFloat{from{transform:translateY(0) rotate(-3deg)}to{transform:translateY(-8px) rotate(3deg)}}
  @media(max-width:520px){.tx-surprise{right:6px;bottom:76px;width:min(200px,66vw)}.tx-surprise img{height:119px;width:114px;margin-bottom:-9px}.tx-surprise-speech{font-size:11px;padding:7px 9px}.tx-surprise-sound{right:76px;bottom:18px;font-size:12px}}
  @media(prefers-reduced-motion:reduce){.tx-surprise,.tx-surprise img{animation:none!important;transition:none!important}}
  #txIntro:not([hidden]) ~ .tx-surprise-sound{display:none}
  `;
  document.head.append(style);
  const popup=document.createElement('div');
  popup.className='tx-surprise';popup.id='txSurprise';popup.setAttribute('aria-hidden','true');
  const img=document.createElement('img');img.alt='';img.width=130;img.height=146;
  const speech=document.createElement('div');speech.className='tx-surprise-speech';
  popup.append(img,speech);document.body.append(popup);
  const soundBtn=document.createElement('button');soundBtn.type='button';soundBtn.id='txSurpriseSound';soundBtn.className='tx-surprise-sound';
  const storageKey='tx_mascot_sound';
  let sound=true;try{sound=localStorage.getItem(storageKey)!=='off'}catch(_e){}
  function refreshSoundButton(){soundBtn.textContent=sound?'🔊':'🔇';soundBtn.setAttribute('aria-label',sound?'Silenciar sons dos mascotes':'Ativar sons dos mascotes');soundBtn.setAttribute('title',sound?'Silenciar mascotes':'Ativar som dos mascotes');soundBtn.setAttribute('aria-pressed',String(sound));}
  refreshSoundButton();document.body.append(soundBtn);
  soundBtn.addEventListener('click',()=>{sound=!sound;try{localStorage.setItem(storageKey,sound?'on':'off')}catch(_e){}refreshSoundButton()});
  let last=-1,hideTimer=0,audioContext;
  function sciFiSound(notes){
    if(!sound)return;
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return;
    try{
      audioContext=audioContext||new AC();
      if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
      const start=audioContext.currentTime;
      notes.forEach((hz,i)=>{
        const osc=audioContext.createOscillator(),gain=audioContext.createGain();
        osc.type=i===1?'sine':'triangle';osc.frequency.setValueAtTime(hz,start+i*.105);
        gain.gain.setValueAtTime(.0001,start+i*.105);
        gain.gain.exponentialRampToValueAtTime(.055,start+i*.105+.016);
        gain.gain.exponentialRampToValueAtTime(.0001,start+i*.105+.16);
        osc.connect(gain);gain.connect(audioContext.destination);
        osc.start(start+i*.105);osc.stop(start+i*.105+.18);
      });
    }catch(_err){/* Sem som quando o navegador não permitir. */}
  }
  document.addEventListener('tx:page-change',e=>{
    if(document.hidden||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
    const intro=document.getElementById('txIntro');if(intro&&!intro.hidden)return;
    let ix=(last+1+Math.floor(Math.random()*2))%trio.length;
    if(ix===last)ix=(ix+1)%trio.length;
    last=ix;
    const who=trio[ix],page=e.detail?.page||'inicio';
    img.src=who.image;img.alt=who.name;
    speech.replaceChildren(document.createTextNode(who.line));
    const small=document.createElement('small');small.textContent=phrases[page]||'Explore nosso universo!';speech.append(small);
    popup.classList.remove('show');void popup.offsetWidth;popup.classList.add('show');
    clearTimeout(hideTimer);hideTimer=setTimeout(()=>popup.classList.remove('show'),2200);
    sciFiSound(who.notes);
  });
})();
