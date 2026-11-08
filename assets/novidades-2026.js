/* TecXhans novas funcionalidades: demonstrações ilustrativas, orçamento, clube e guia local.
   Independente do site.js e da abertura 7.5. Sem backend, sem cadastro ou cupom automático. */
(()=>{
 'use strict';
 const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
 const WA='5511982901124';
 const wh=msg=>'https://wa.me/'+WA+'?text='+encodeURIComponent(msg);
 const demos={
 assistencia:{name:'TecXhans Assistência PRO',caption:'Exemplo de painel de ordens de serviço',stats:[['O.S. abertas','12'],['Aguardando peça','03'],['Concluídas','08']],rows:[['1025','Galaxy A14 — Troca de tela','Em andamento'],['1026','Moto G32 — Bateria','Aguardando peça'],['1027','Notebook — Diagnóstico','Recebido']],actions:['Criar O.S.','Consultar estoque','Resumo do caixa']},
 personalize:{name:'Personalize PRO',caption:'Exemplo de organização de encomendas',stats:[['Pedidos','14'],['Em produção','06'],['Próxima entrega','12/11']],rows:[['P-021','Canecas personalizadas','Em produção'],['P-022','Chaveiros','Aguardando arte'],['P-023','Lembrancinhas','Pronto']],actions:['Novo pedido','Orçamento','Agenda']},
 adega:{name:'Adega PDV PRO',caption:'Exemplo de operação de caixa e estoque',stats:[['Vendas hoje','18'],['Itens estoque baixo','04'],['Caixa','Aberto']],rows:[['V-031','Refrigerantes','Concluída'],['V-032','Sucos','Concluída'],['V-033','Água mineral','Concluída']],actions:['Nova venda','Ver estoque','Relatórios']},
 estudos:{name:'Central de Estudos',caption:'Exemplo de jornada de aprendizagem',stats:[['Ano escolar','6º'],['Aulas concluídas','09'],['Avaliações','02']],rows:[['Matemática','Frações e problemas','Aula'],['Português','Interpretação de texto','Exercício'],['Ciências','Ecossistemas','Revisão']],actions:['Abrir aula','Fazer exercício','Ver boletim']},
 pizza:{name:'PizzaControl PRO',caption:'Exemplo de gestão de pedidos de pizzaria',stats:[['Pedidos','17'],['Na cozinha','05'],['Entregues','12']],rows:[['#041','Pizza mussarela','Preparando'],['#042','Pizza calabresa','Saiu entrega'],['#043','Pizza marguerita','Recebido']],actions:['Novo pedido','Cardápio','Fechamento']},
 juridico:{name:'TecXhans Jurídico PRO',caption:'Exemplo de agenda de escritório',stats:[['Clientes','27'],['Compromissos','04'],['Prazos da semana','03']],rows:[['C-001','Atendimento de cliente','Agendado'],['C-002','Revisão de documentos','Pendente'],['C-003','Reunião interna','Confirmado']],actions:['Clientes','Agenda','Documentos']}
 };
 let current='assistencia',activity='';
 const screen=$('#txDemoScreen');
 function render(){if(!screen)return;const d=demos[current];screen.replaceChildren();
  const heading=document.createElement('div');heading.className='tx-demo-top';
  const h=document.createElement('div');h.innerHTML='<div class="tx-demo-live">● DEMONSTRAÇÃO ILUSTRATIVA — DADOS FICTÍCIOS</div>';const title=document.createElement('h3');title.textContent=d.name;const c=document.createElement('p');c.textContent=d.caption;h.append(title,c);heading.append(h);screen.append(heading);
  const stats=document.createElement('div');stats.className='tx-demo-stats';d.stats.forEach(([k,v])=>{const b=document.createElement('div');const strong=document.createElement('strong');strong.textContent=v;const small=document.createElement('span');small.textContent=k;b.append(strong,small);stats.append(b)});screen.append(stats);
  const table=document.createElement('div');table.className='tx-demo-table';d.rows.forEach(row=>{const r=document.createElement('div');r.className='tx-demo-row';row.forEach((v,i)=>{const cell=document.createElement('span');cell.textContent=v;if(i===2)cell.className='tx-demo-status';r.append(cell)});table.append(r)});screen.append(table);
  const actions=document.createElement('div');actions.className='tx-demo-actions';d.actions.forEach(a=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.addEventListener('click',()=>{activity='Você selecionou “'+a+'”. Esta é uma prévia das funções; para utilizar de verdade, instale o software.'; const msg=$('#txDemoInfo');if(msg)msg.textContent=activity});actions.append(b)});screen.append(actions);
  const info=document.createElement('p');info.id='txDemoInfo';info.className='mini';info.setAttribute('role','status');info.textContent=activity||'As opções desta tela são demonstrativas e não executam operações reais.';screen.append(info);
 }
 $$('#txDemoTabs [data-demo]').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.demo;activity='';$$('#txDemoTabs [data-demo]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render()}));render();
 const budget=$('#txBudgetForm');if(budget)budget.addEventListener('submit',e=>{e.preventDefault();if(!budget.reportValidity())return;
  const val=id=>$(id)?.value.trim()||'';
  const data=['Olá, TecXhans! Gostaria de solicitar orçamento de reparo.', 'Equipamento: '+val('#txBudgetType'), 'Marca: '+val('#txBudgetBrand'), 'Modelo: '+val('#txBudgetModel'),'Problema: '+val('#txBudgetFault')];if(val('#txBudgetNotes'))data.push('Observações: '+val('#txBudgetNotes'));
  data.push('Podem informar como funciona a avaliação e o orçamento?');window.open(wh(data.join('\n')),'_blank','noopener,noreferrer');
 });
 const dlg=$('#txClubDialog'),openBtn=$('#txOpenClub');if(openBtn&&dlg){openBtn.addEventListener('click',()=>{if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','')});dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});}
 const club=$('#txClubForm');if(club)club.addEventListener('submit',e=>{e.preventDefault();if(!club.reportValidity())return;const name=$('#txClubName').value.trim(),interest=$('#txClubInterest').value;if(!name)return;
  window.open(wh('Olá, TecXhans! Quero solicitar minha participação no Clube TecXhans.\nNome: '+name+'\nInteresse: '+interest+'\nAutorizo entrar em contato comigo por WhatsApp para tratar desta solicitação. Podem me informar as regras e confirmar meu cadastro?'),'_blank','noopener,noreferrer');if(dlg?.open)dlg.close();
 });
 const toggle=$('#txGuideToggle'),panel=$('#txGuidePanel'),close=$('#txGuideClose'),response=$('#txGuideResponse'),guide=$('#txGuide');
 function setGuide(open){if(!panel||!toggle)return;panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(open)panel.querySelector('[data-guide]')?.focus();else toggle.focus()}
 toggle?.addEventListener('click',()=>setGuide(panel.hidden));close?.addEventListener('click',()=>setGuide(false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel&&!panel.hidden)setGuide(false)});
 const guideMessages={reparo:['Quer solicitar um orçamento? Informe marca, modelo e defeito na área Assistência.','assistencia'],os:['Acompanhamento de O.S.: envie o número da sua ordem de serviço à equipe para consulta.','consulta'],software:['Explore demonstrações ilustrativas e as funcionalidades dos seis sistemas TecXhans.','softwares'],clube:['Entre no Clube TecXhans para solicitar participação nas campanhas.','inicio'],roleta:['Conheça a roleta da campanha e veja quais prêmios estão disponíveis.','roleta']};
 function navigate(page){if(page==='roleta'){location.href='roleta.html';return;}const btn=$(`#nav [data-page="${page}"]`);setGuide(false);if(btn)btn.click();else location.hash='#'+page;if(page==='inicio')setTimeout(()=>$('#txClubTitle')?.scrollIntoView({behavior:'smooth',block:'center'}),180);if(page==='assistencia')setTimeout(()=>$('#txBudgetTitle')?.scrollIntoView({behavior:'smooth',block:'center'}),180);if(page==='softwares')setTimeout(()=>$('#txDemoTitle')?.scrollIntoView({behavior:'smooth',block:'center'}),180);}
 $$('#txGuidePanel [data-guide]').forEach(btn=>btn.addEventListener('click',()=>{const d=guideMessages[btn.dataset.guide];if(!d)return;response.textContent=d[0];if(btn.dataset.guide==='clube'){navigate(d[1]);openBtn?.click()}else navigate(d[1])}));
 // Avoid showing assistant over intro video; reduce visual overlap on small displays.
 if(guide){const intro=$('#txIntro');const updateIntro=()=>{guide.hidden=!!(intro&&!intro.hidden)};if(intro){const obs=new MutationObserver(updateIntro);obs.observe(intro,{attributes:true,attributeFilter:['hidden']});updateIntro()}}
})();
