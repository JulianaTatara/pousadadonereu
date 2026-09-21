const body = document.body;
const lang = body.dataset.lang || 'pt';
const page = body.dataset.page || 'home';

const paths = {
  pt: {
    home: '/', boats: '/embarcacoes/', accommodations: '/acomodacoes/', photos: '/fotos/', rates: '/valores/', bayMap: '/mapa-da-baia/', directions: '/como-chegar/', contact: '/contato/'
  },
  en: {
    home: '/en/', boats: '/en/boats/', accommodations: '/en/accommodations/', photos: '/en/photos/', rates: '/en/rates/', bayMap: '/en/bay-map/', directions: '/en/directions/', contact: '/en/contact/'
  }
};

const labels = {
  pt: {home:'Página inicial',boats:'Embarcações',accommodations:'Acomodações',photos:'Fotos',rates:'Valores',bayMap:'Mapa da baía',directions:'Como chegar',contact:'Contato'},
  en: {home:'Home',boats:'Boats',accommodations:'Accommodation',photos:'Photos',rates:'Rates',bayMap:'Bay map',directions:'Directions',contact:'Contact'}
};

function escapeHTML(value=''){
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
function rich(value=''){
  return escapeHTML(value).replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>');
}
function imageFigure(src, caption=''){
  if(!src) return `<figure><div class="placeholder">${lang==='pt'?'Adicione uma imagem no CMS':'Add an image in the CMS'}</div>${caption?`<figcaption>${escapeHTML(caption)}</figcaption>`:''}</figure>`;
  return `<figure><img loading="lazy" src="${escapeHTML(src)}" alt="${escapeHTML(caption)}">${caption?`<figcaption>${escapeHTML(caption)}</figcaption>`:''}</figure>`;
}
function renderGallery(items=[]){
  if(!items.length) return `<div class="gallery">${imageFigure('')}</div>`;
  return `<div class="gallery">${items.map(i => imageFigure(typeof i==='string'?i:i.image, typeof i==='string'?'':i.caption)).join('')}</div>`;
}
function section(title, intro='', bodyText='', extra='', alt=false){
  return `<section class="section${alt?' alt':''}"><h2>${escapeHTML(title)}</h2>${intro?`<p class="lead">${rich(intro)}</p>`:''}${bodyText?`<div class="prose"><p>${rich(bodyText)}</p></div>`:''}${extra}</section>`;
}

function buildNav(data){
  const nav = document.querySelector('#nav');
  nav.innerHTML = Object.keys(labels[lang]).map(key => `<a class="${page===key?'active':''}" href="${paths[lang][key]}">${labels[lang][key]}</a>`).join('');
  const brand = document.querySelector('#brand');
  if(data.site.logo){brand.innerHTML=`<img src="${escapeHTML(data.site.logo)}" alt="Pousada do Nereu">`;}
  else{brand.innerHTML=`<div class="brand-fallback">POUSADA<br>DO NEREU<small>Pesca do Robalo</small></div>`;}
  document.querySelector('#sidebar-contact').textContent = data.site.phonePrimary || '';
  const altLang = lang==='pt'?'en':'pt';
  const langBox = document.querySelector('#lang-switch');
  langBox.innerHTML = `<a class="${lang==='pt'?'active':''}" href="${paths.pt[page] || '/'}">PT</a><a class="${lang==='en'?'active':''}" href="${paths.en[page] || '/en/'}">EN</a>`;
}

function renderHero(data, pageData){
  const hero = document.querySelector('#hero');
  const video = pageData.heroVideo || data.site.heroVideo;
  const image = pageData.heroImage || data.site.heroImage;
  let media='';
  if(video){media=`<video class="hero-media" autoplay muted loop playsinline ${image?`poster="${escapeHTML(image)}"`:''}><source src="${escapeHTML(video)}"></video>`;}
  else if(image){media=`<img class="hero-media" src="${escapeHTML(image)}" alt="">`;}
  hero.innerHTML = `${media}<div class="hero-copy"><div class="hero-kicker">${escapeHTML(pageData.kicker || data.site.location || '')}</div><h1>${escapeHTML(pageData.heroTitle || pageData.title || data.site.name)}</h1>${pageData.heroSubtitle?`<p>${escapeHTML(pageData.heroSubtitle)}</p>`:''}</div>`;
}

function renderPage(data){
  buildNav(data);
  const p = data.pages[page] || {};
  renderHero(data,p);
  const content = document.querySelector('#content');
  if(page==='home'){
    content.innerHTML = section(p.title,p.intro,p.body, p.featureImage?renderGallery([{image:p.featureImage,caption:p.featureCaption||''}]):'', false) + section(p.secondaryTitle||'',p.secondaryIntro||'',p.secondaryBody||'', '', true);
  } else if(page==='boats' || page==='accommodations' || page==='photos'){
    content.innerHTML = section(p.title,p.intro,p.body,renderGallery(p.gallery||[]), page==='boats');
  } else if(page==='rates'){
    const cards=(p.items||[]).map(i=>`<article class="card"><h3>${escapeHTML(i.title||'')}</h3>${i.description?`<p>${rich(i.description)}</p>`:''}<div class="price">${escapeHTML(i.price||'')}</div></article>`).join('');
    content.innerHTML=section(p.title,p.intro,p.body,`<div class="cards">${cards}</div>`);
  } else if(page==='bayMap'){
    const mapExtra = p.image ? `<div class="gallery">${imageFigure(p.image,p.caption||'')}</div>` : `<div class="map-box">${escapeHTML(lang==='pt'?'Você poderá adicionar aqui a imagem do mapa da baía pelo CMS.':'You can add the bay map image here through the CMS.')}</div>`;
    content.innerHTML=section(p.title,p.intro,p.body,mapExtra);
  } else if(page==='directions'){
    const mapUrl = p.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.site.address||'')}`;
    content.innerHTML=section(p.title,p.intro,p.body,`<p><a class="button" href="${escapeHTML(mapUrl)}" target="_blank" rel="noopener">${lang==='pt'?'Abrir no Google Maps':'Open in Google Maps'}</a></p>`);
  } else if(page==='contact'){
    const s=data.site;
    const formLabels=p.form||{};
    content.innerHTML=`<section class="section"><div class="contact-grid"><div><h2>${escapeHTML(p.title||'')}</h2><p class="lead">${rich(p.intro||'')}</p><div class="contact-list"><a href="mailto:${escapeHTML(s.email||'')}">${escapeHTML(s.email||'')}</a><a href="tel:${escapeHTML((s.phonePrimary||'').replace(/\s/g,''))}">${escapeHTML(s.phonePrimary||'')}</a>${s.whatsapp?`<a href="https://wa.me/${escapeHTML(s.whatsapp.replace(/\D/g,''))}" target="_blank" rel="noopener">WhatsApp: ${escapeHTML(s.whatsapp)}</a>`:''}${s.instagram?`<span>Instagram: ${escapeHTML(s.instagram)}</span>`:''}</div></div><form class="form" name="contact" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="contact"><label>${escapeHTML(formLabels.name||'Nome')}<input name="name" required></label><label>${escapeHTML(formLabels.email||'E-mail')}<input type="email" name="email" required></label><label>${escapeHTML(formLabels.phone||'Telefone')}<input name="phone"></label><label>${escapeHTML(formLabels.message||'Mensagem')}<textarea name="message" required></textarea></label><button class="button" type="submit">${escapeHTML(formLabels.send||'Enviar')}</button></form></div></section>`;
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
}

fetch(`/content/${lang}.json`, {cache:'no-store'})
  .then(r => {if(!r.ok) throw new Error('Content not found'); return r.json();})
  .then(renderPage)
  .catch(err => {
    console.error(err);
    document.querySelector('#content').innerHTML = `<section class="section"><div class="notice">${lang==='pt'?'Ainda estamos configurando o conteúdo desta versão do site.':'We are still configuring this version of the site.'}</div></section>`;
  });

document.querySelector('#menu-button')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
document.addEventListener('click',e=>{if(document.body.classList.contains('menu-open') && !e.target.closest('.sidebar') && !e.target.closest('#menu-button')) document.body.classList.remove('menu-open');});
