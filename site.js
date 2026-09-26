let SITE = {
  phone: '5547999753651',
  phoneDisplay: '(47) 99975-3651',
  nereuPhone: '5547999846109',
  nereuPhoneDisplay: '(47) 99984-6109',
  address: 'R. Camboriú, 219 - Palmital, Garuva - SC, 89248-000, Brasil',
  instagram: 'https://www.instagram.com/pousadadonereu',
  facebook: 'https://www.facebook.com/PousadaDoNereu/',
  placeId: 'ChIJd9WSHnED3JQRbtISFsy_nnI',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Pousada%20do%20Nereu%2C%20Garuva%20SC&destination_place_id=ChIJd9WSHnED3JQRbtISFsy_nnI',
  reviews: 'https://www.google.com/search?q=Pousada+do+Nereu+Garuva+avalia%C3%A7%C3%B5es',
  tides: 'https://tabuademares.com/br/santa-catarina/joinville'
};
async function loadCmsSiteConfig(){
  try{
    const response=await fetch('content/site.json',{cache:'no-store'});
    if(!response.ok)return;
    const data=await response.json();
    SITE={...SITE,...data};
  }catch(error){
    console.warn('CMS site settings unavailable; using built-in defaults.',error);
  }
}
const NAV = [
  {href:'index.html',pt:'Início',en:'Home',es:'Inicio'},
  {href:'a-pousada.html',pt:'A Pousada',en:'The Lodge',es:'La Posada',children:[
    {href:'sobre.html',pt:'Sobre a Pousada',en:'About the Lodge',es:'Sobre la Posada'},
    {href:'sobre-nos.html',pt:'Sobre Nós',en:'About Us',es:'Sobre Nosotros'},
    {href:'galeria.html',pt:'Galeria',en:'Gallery',es:'Galería'},
    {href:'fauna.html',pt:'Fauna',en:'Fauna',es:'Fauna'}
  ]},
  {href:'acomodacoes.html',pt:'Acomodações',en:'Rooms',es:'Alojamientos'},
  {href:'valores.html',pt:'Valores',en:'Rates',es:'Tarifas'},
  {href:'marina.html',pt:'Marina',en:'Marina',es:'Marina'},
  {href:'como-chegar.html',pt:'Como Chegar',en:'Directions',es:'Cómo llegar'},
  {href:'contato.html',pt:'Contato',en:'Contact',es:'Contacto'}
];
const I18N={
  pt:{contact:'Entre em contato',fishingConditions:'Condições de pesca',addressTitle:'Endereço',quick:'Menu rápido',social:'Redes sociais',rights:'Todos os direitos reservados.',reach:'Como chegar'},
  en:{contact:'Contact us',fishingConditions:'Fishing conditions',addressTitle:'Address',quick:'Quick menu',social:'Social media',rights:'All rights reserved.',reach:'Directions'},
  es:{contact:'Contáctanos',fishingConditions:'Condiciones de pesca',addressTitle:'Dirección',quick:'Menú rápido',social:'Redes sociales',rights:'Todos los derechos reservados.',reach:'Cómo llegar'}
};
const LANG_META={pt:{label:'PT',flag:'assets/flag-br.svg',alt:'Brasil'},en:{label:'EN',flag:'assets/flag-us.svg',alt:'English'},es:{label:'ES',flag:'assets/flag-es.svg',alt:'España'}};
let lang=localStorage.getItem('pousada-lang')||'pt';
function wa(text,phone=SITE.phone){return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`}
function label(item){return item[lang]||item.pt}
function conditionsButtonLines(){if(lang==='en')return ['Fishing','conditions'];if(lang==='es')return ['Condiciones','de pesca'];return ['Condições','de pesca']}
function activeFor(item,page){if(item.href===page)return true;return item.children?.some(c=>c.href===page)}
const instagramIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/></svg>`;
const facebookIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.4c-.5-.1-2.1-.2-4-.2-3.9 0-6.6 2.4-6.6 6.8v3.8H2v4h4.4V24h5.4v-5.2h4.5l.7-4h-5.2v-3.4C11.8 10.2 12.1 8 14 8Z"/></svg>`;
const conditionsIcons=`<span class="conditions-icons" aria-hidden="true">
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/></svg>
  <svg viewBox="0 0 24 24"><path d="M6.5 15.2h10.1a3.4 3.4 0 0 0 .1-6.8 5.1 5.1 0 0 0-9.7 1.3A2.8 2.8 0 0 0 6.5 15.2Z"/><path d="M8 18.3l-.7 1.5M12 18.3l-.7 1.5M16 18.3l-.7 1.5"/></svg>
  <svg viewBox="0 0 24 24"><path d="M18.5 15.8A7.8 7.8 0 0 1 8.2 5.5a7.8 7.8 0 1 0 10.3 10.3Z"/></svg>
  <svg viewBox="0 0 24 24"><path d="M6 17h11a3.5 3.5 0 0 0 .2-7 5.5 5.5 0 0 0-10.5 1.6A2.8 2.8 0 0 0 6 17Z"/></svg>
</span>`;

function renderDesktopNav(page){return NAV.map(item=>{if(item.children){const act=activeFor(item,page)?'active':'';return `<div class="nav-parent ${act}"><a href="${item.href}">${label(item)} <span class="nav-chevron">⌄</span></a><div class="dropdown">${item.children.map(c=>`<a href="${c.href}" class="${c.href===page?'active':''}">${label(c)}</a>`).join('')}</div></div>`}return `<a class="nav-link ${item.href===page?'active':''}" ${item.external?'target="_blank" rel="noopener"':''} href="${item.href}">${label(item)}</a>`}).join('')}
function renderMobileNav(){return NAV.map((item,i)=>{if(item.children)return `<div class="mobile-parent"><button class="mobile-sub-toggle" data-mobile-sub="${i}"><span>${label(item)}</span><span>＋</span></button><div class="mobile-sub" id="mobile-sub-${i}">${item.children.map(c=>`<a href="${c.href}">${label(c)}</a>`).join('')}</div></div>`;return `<a ${item.external?'target="_blank" rel="noopener"':''} href="${item.href}">${label(item)}</a>`}).join('')+`<a class="mobile-conditions-link" href="condicoes.html">${I18N[lang].fishingConditions}</a>`}
function renderShell(){
  const page=(location.pathname.split('/').pop()||'index.html');
  const header=document.querySelector('[data-shell="header"]');
  if(header){header.innerHTML=`<header class="site-header"><div class="header-inner"><a class="brand" href="index.html"><img src="assets/logo.png" alt="Pousada do Nereu"></a><nav class="main-nav">${renderDesktopNav(page)}</nav><div class="header-actions"><a class="btn btn-conditions ${['luas.html','condicoes.html'].includes(page)?'active':''}" href="condicoes.html">${conditionsIcons}<span class="conditions-label"><span>${conditionsButtonLines()[0]}</span><span>${conditionsButtonLines()[1]}</span></span></a><a class="btn btn-contact" href="contato.html">${I18N[lang].contact}</a><div class="lang-switch lang-switch-vertical" aria-label="Idioma">${Object.entries(LANG_META).map(([code,m])=>`<button data-lang="${code}" title="${m.alt}"><img src="${m.flag}" alt=""><span>${m.label}</span></button>`).join('')}</div><button class="mobile-toggle" aria-label="Abrir menu">Menu</button></div></div><div class="header-wave" aria-hidden="true"><svg viewBox="0 0 1440 72" preserveAspectRatio="none"><path d="M0 0H1440V18 C1250 34 1085 17 900 25 C690 34 535 13 350 31 C235 43 120 52 0 41 Z" fill="#fffdf8"/><path d="M0 42 C135 53 245 44 355 32 C535 13 690 35 900 26 C1087 18 1252 35 1440 19" fill="none" stroke="#dbeef9" stroke-width="3" opacity=".95"/></svg></div><div class="mobile-nav">${renderMobileNav()}</div></header>`}
  const footer=document.querySelector('[data-shell="footer"]');
  if(footer){footer.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-grid"><div><img class="footer-logo" src="assets/logo.png" alt="Pousada do Nereu"><p style="color:rgba(255,255,255,.74);max-width:340px">Rústico, aconchegante e familiar. Natureza, pescaria e boas histórias às margens do Rio Palmital.</p></div><div><div class="footer-title">${I18N[lang].addressTitle}</div><div class="footer-links"><span>${SITE.address}</span><a href="${SITE.maps}" target="_blank">→ ${I18N[lang].reach}</a><a href="${wa('Olá! Encontrei vocês pelo site da Pousada do Nereu e gostaria de mais informações.')}" target="_blank">Marcia · ${SITE.phoneDisplay}</a><a href="${wa('Olá Nereu! Encontrei a pousada pelo site e gostaria de mais informações.',SITE.nereuPhone)}" target="_blank">Nereu · ${SITE.nereuPhoneDisplay}</a></div></div><div><div class="footer-title">${I18N[lang].quick}</div><div class="footer-links"><a href="index.html">${lang==='pt'?'Início':'Home'}</a><a href="a-pousada.html">${lang==='pt'?'A Pousada':'The Lodge'}</a><a href="acomodacoes.html">${lang==='pt'?'Acomodações':'Rooms'}</a><a href="valores.html">${lang==='pt'?'Valores':'Rates'}</a><a href="marina.html">Marina</a><a href="como-chegar.html">${I18N[lang].reach}</a><a href="contato.html">${lang==='pt'?'Contato':'Contact'}</a></div></div><div><div class="footer-title">${I18N[lang].social}</div><div class="social-row"><a class="social-chip instagram" href="${SITE.instagram}" target="_blank">${instagramIcon}<span>Instagram</span></a><a class="social-chip facebook" href="${SITE.facebook}" target="_blank">${facebookIcon}<span>Facebook</span></a></div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Pousada do Nereu. ${I18N[lang].rights}</span><span>PT / EN / ES</span></div></div></footer>`}
  document.body.insertAdjacentHTML('beforeend',`<a class="floating-whatsapp" target="_blank" aria-label="WhatsApp" href="${wa('Olá! Encontrei vocês pelo site da Pousada do Nereu e gostaria de mais informações.')}">✆</a><div class="lightbox" id="lightbox"><div class="lightbox-toolbar"><button class="lightbox-tool" data-lightbox-action="zoom-out" aria-label="Reduzir zoom">−</button><button class="lightbox-tool" data-lightbox-action="zoom-in" aria-label="Aumentar zoom">+</button></div><button class="lightbox-nav prev" data-lightbox-nav="prev" aria-label="Imagem anterior">‹</button><button class="lightbox-nav next" data-lightbox-nav="next" aria-label="Próxima imagem">›</button><div class="lightbox-count" aria-live="polite"></div><button aria-label="Fechar">×</button><div class="lightbox-media-wrap"><img alt="Imagem ampliada"></div></div>`);
  bindUI();bindLanguage();bindLightbox();bindGalleryFilters();initInteractiveGallery();initRoomFilters();applyInlineTranslations();animateStats();initConditionsWeather();initMoonCalendarZoom();
}
function bindUI(){document.querySelector('.mobile-toggle')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));document.querySelectorAll('.mobile-sub-toggle').forEach(b=>b.addEventListener('click',()=>{const box=document.getElementById('mobile-sub-'+b.dataset.mobileSub);box.classList.toggle('open');b.lastElementChild.textContent=box.classList.contains('open')?'−':'＋'}));document.querySelectorAll('.nav-parent').forEach(p=>{p.querySelector(':scope > a')?.addEventListener('click',e=>{if(matchMedia('(hover: none)').matches&&!p.classList.contains('open')){e.preventDefault();document.querySelectorAll('.nav-parent.open').forEach(x=>x!==p&&x.classList.remove('open'));p.classList.add('open')}})});document.addEventListener('click',e=>{if(!e.target.closest('.nav-parent'))document.querySelectorAll('.nav-parent.open').forEach(x=>x.classList.remove('open'))})}
function bindLanguage(){document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang);b.addEventListener('click',()=>{localStorage.setItem('pousada-lang',b.dataset.lang);location.reload()})})}
function applyInlineTranslations(){document.querySelectorAll('[data-pt]').forEach(el=>{const value=el.dataset[lang]||el.dataset.pt;if(el.tagName==='INPUT'||el.tagName==='TEXTAREA')el.placeholder=value;else el.innerHTML=value})}

function initMoonCalendarZoom(){
  document.querySelectorAll('.moon-calendar-card').forEach(card=>{
    const scroll = card.querySelector('.moon-calendar-scroll');
    const img = scroll?.querySelector('img');
    if(!scroll || !img) return;
    const controls = [...card.querySelectorAll('[data-calendar-zoom]')];
    let scale = 1;
    const minScale = 1;
    const maxScale = 3;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let lastTap = 0;
    let dragLastX = 0;
    let dragLastY = 0;
    let dragMoved = false;

    const distance = touches => Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );

    const updateControls = ()=>{
      const resetBtn = card.querySelector('[data-calendar-zoom="reset"]');
      if(resetBtn) resetBtn.textContent = `${Math.round(scale * 100)}%`;
      controls.forEach(btn=>{
        if(btn.dataset.calendarZoom === 'out') btn.disabled = scale <= minScale + 0.001;
        if(btn.dataset.calendarZoom === 'in') btn.disabled = scale >= maxScale - 0.001;
      });
    };

    const applyScale = (nextScale, preserveCenter = true)=>{
      nextScale = Math.max(minScale, Math.min(maxScale, nextScale));
      const prevWidth = img.offsetWidth || scroll.clientWidth;
      const centerXRatio = (scroll.scrollLeft + scroll.clientWidth / 2) / Math.max(prevWidth, 1);
      const centerYRatio = (scroll.scrollTop + scroll.clientHeight / 2) / Math.max(img.offsetHeight || scroll.clientHeight, 1);
      scale = nextScale;
      img.style.width = `${scale * 100}%`;
      requestAnimationFrame(()=>{
        updateControls();
        if(preserveCenter){
          scroll.scrollLeft = Math.max(0, (img.offsetWidth * centerXRatio) - scroll.clientWidth / 2);
          scroll.scrollTop = Math.max(0, (img.offsetHeight * centerYRatio) - scroll.clientHeight / 2);
        }
      });
    };

    controls.forEach(btn=>btn.addEventListener('click',()=>{
      const action = btn.dataset.calendarZoom;
      if(action === 'in') applyScale(scale + 0.25);
      if(action === 'out') applyScale(scale - 0.25);
      if(action === 'reset') applyScale(1);
    }));

    img.addEventListener('dblclick', e=>{
      e.preventDefault();
      applyScale(scale > 1 ? 1 : 2);
    });

    img.addEventListener('touchend', e=>{
      if(dragMoved){
        dragMoved = false;
        lastTap = 0;
        return;
      }
      const now = Date.now();
      if(now - lastTap < 300){
        e.preventDefault();
        applyScale(scale > 1 ? 1 : 2);
        lastTap = 0;
      }else{
        lastTap = now;
      }
    }, {passive:false});

    scroll.addEventListener('wheel', e=>{
      if(!e.ctrlKey) return;
      e.preventDefault();
      applyScale(scale + (e.deltaY < 0 ? 0.12 : -0.12));
    }, {passive:false});

    scroll.addEventListener('touchstart', e=>{
      dragMoved = false;
      if(e.touches.length === 2){
        pinchStartDistance = distance(e.touches);
        pinchStartScale = scale;
      }else if(e.touches.length === 1 && scale > 1){
        dragLastX = e.touches[0].clientX;
        dragLastY = e.touches[0].clientY;
      }
    }, {passive:false});

    scroll.addEventListener('touchmove', e=>{
      if(e.touches.length === 2 && pinchStartDistance){
        e.preventDefault();
        dragMoved = true;
        const nextDistance = distance(e.touches);
        applyScale(pinchStartScale * (nextDistance / pinchStartDistance), false);
        return;
      }
      if(e.touches.length === 1 && scale > 1){
        e.preventDefault();
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        const dx = x - dragLastX;
        const dy = y - dragLastY;
        if(Math.abs(dx) > 1 || Math.abs(dy) > 1) dragMoved = true;
        scroll.scrollLeft -= dx;
        scroll.scrollTop -= dy;
        dragLastX = x;
        dragLastY = y;
      }
    }, {passive:false});

    scroll.addEventListener('touchend', e=>{
      if(e.touches.length < 2) pinchStartDistance = 0;
      if(e.touches.length === 1){
        dragLastX = e.touches[0].clientX;
        dragLastY = e.touches[0].clientY;
      }
    }, {passive:false});

    applyScale(1, false);
  });
}

function initConditionsWeather(){
  const list=document.getElementById('weatherWeekList');
  const loading=document.getElementById('weatherLoadingState');
  const currentTemp=document.getElementById('weatherCurrentTemp');
  const currentIcon=document.getElementById('weatherCurrentIcon');
  const currentDetails=document.getElementById('weatherCurrentDetails');
  if(!list||!loading)return;
  const lat='-26.1157',lon='-48.8358';
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=7`;
  const codeMap={0:['☀️','Céu limpo'],1:['🌤️','Sol entre nuvens'],2:['⛅','Parcialmente nublado'],3:['☁️','Nublado'],45:['🌫️','Neblina'],48:['🌫️','Neblina'],51:['🌦️','Garoa fraca'],53:['🌦️','Garoa'],55:['🌦️','Garoa intensa'],56:['🌧️','Garoa gelada'],57:['🌧️','Garoa gelada'],61:['🌦️','Chuva fraca'],63:['🌧️','Chuva'],65:['🌧️','Chuva forte'],66:['🌧️','Chuva gelada'],67:['🌧️','Chuva gelada'],71:['❄️','Neve fraca'],73:['❄️','Neve'],75:['❄️','Neve forte'],77:['❄️','Granizo leve'],80:['🌦️','Pancadas isoladas'],81:['🌧️','Pancadas de chuva'],82:['⛈️','Pancadas fortes'],85:['❄️','Aguaceiros de neve'],86:['❄️','Aguaceiros de neve'],95:['⛈️','Trovoadas'],96:['⛈️','Trovoadas com granizo'],99:['⛈️','Trovoadas fortes']};
  const weekday=['dom','seg','ter','qua','qui','sex','sáb'];
  fetch(url)
    .then(r=>{if(!r.ok)throw new Error('weather');return r.json()})
    .then(data=>{
      const current=data.current||{};
      const [curEmoji,curLabel]=codeMap[current.weather_code]||['🌤️','Tempo variado'];
      if(currentTemp)currentTemp.textContent=`${Math.round(current.temperature_2m ?? 0)}°`;
      if(currentIcon)currentIcon.textContent=curEmoji;
      if(currentDetails)currentDetails.innerHTML=`<span>${curLabel}</span><span>Chuva: ${Math.round(current.precipitation ?? 0)} mm</span><span>Umidade: ${Math.round(current.relative_humidity_2m ?? 0)}%</span><span>Vento: ${Math.round(current.wind_speed_10m ?? 0)} km/h</span>`;
      const d=data.daily||{};
      const times=d.time||[];
      list.innerHTML=times.map((time,i)=>{
        const dt=new Date(time+'T12:00:00');
        const [emoji]=codeMap[d.weather_code?.[i]]||['🌤️','Tempo variado'];
        const max=Math.round(d.temperature_2m_max?.[i] ?? 0);
        const min=Math.round(d.temperature_2m_min?.[i] ?? 0);
        const rain=Math.round(d.precipitation_probability_max?.[i] ?? 0);
        return `<div class="weather-day-mini ${i===0?'today':''}"><strong>${weekday[dt.getDay()]}</strong><span class="weather-mini-icon" aria-hidden="true">${emoji}</span><span class="weather-mini-temp">${max}° / ${min}°</span><span class="weather-mini-rain">💧 ${rain}%</span></div>`;
      }).join('');
      loading.style.display='none';
    })
    .catch(()=>{
      loading.className='weather-error-state';
      loading.textContent='Não foi possível carregar a previsão agora. Consulte a pousada para verificar as condições do rio e do clima.';
      if(currentDetails)currentDetails.innerHTML='';
    });
}

async function loadCmsPageContent(){
  const page=(location.pathname.split('/').pop()||'index.html');
  try{
    if(page==='index.html'){
      const response=await fetch('content/home.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const media=data.heroMedia||{};
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};

      const heroMedia=document.querySelector('.hero-media');
      const heroImg=heroMedia?.querySelector('img');
      if(heroImg){
        if(media.image)heroImg.src=media.image;
        if(hero.alt)heroImg.alt=hero.alt;
      }
      if(heroMedia){
        let heroVideo=heroMedia.querySelector('video[data-cms-hero-video]');
        if(media.video){
          if(!heroVideo){
            heroVideo=document.createElement('video');
            heroVideo.setAttribute('data-cms-hero-video','');
            heroVideo.autoplay=true;
            heroVideo.muted=true;
            heroVideo.loop=true;
            heroVideo.playsInline=true;
            heroVideo.preload='metadata';
            heroVideo.setAttribute('aria-hidden','true');
            heroMedia.insertBefore(heroVideo,heroMedia.firstChild);
          }
          heroVideo.src=media.video;
          if(media.image)heroVideo.poster=media.image;
          heroVideo.style.display='';
          if(heroImg)heroImg.style.display='none';
          const playPromise=heroVideo.play();
          if(playPromise&&typeof playPromise.catch==='function'){
            playPromise.catch(()=>{
              heroVideo.style.display='none';
              if(heroImg)heroImg.style.display='';
            });
          }
        }else{
          if(heroVideo){
            heroVideo.pause();
            heroVideo.removeAttribute('src');
            heroVideo.load();
            heroVideo.style.display='none';
          }
          if(heroImg)heroImg.style.display='';
        }
      }

      const kickerMain=document.querySelector('.hero-kicker-main');
      const kickerSub=document.querySelector('.hero-kicker-sub');
      const title=document.querySelector('.hero h1');
      const desc=document.querySelector('.hero-content > p');
      if(kickerMain&&hero.kickerMain)kickerMain.textContent=hero.kickerMain;
      if(kickerSub&&hero.kickerSub)kickerSub.textContent=hero.kickerSub;
      if(title&&hero.title)title.textContent=hero.title;
      if(desc&&hero.description)desc.textContent=hero.description;

      const heroButtons=document.querySelectorAll('.hero-buttons .btn');
      if(heroButtons[0]&&hero.accommodationButton)heroButtons[0].textContent=hero.accommodationButton;
      if(heroButtons[1]){
        if(hero.availabilityButton)heroButtons[1].textContent=hero.availabilityButton;
        if(hero.availabilityMessage)heroButtons[1].href=wa(hero.availabilityMessage);
      }

      const features=[...document.querySelectorAll('.feature')];
      (copy.features||[]).slice(0,features.length).forEach((item,i)=>{
        const strong=features[i].querySelector('strong');
        const span=features[i].querySelector('span');
        if(strong&&item.title)strong.textContent=item.title;
        if(span&&item.subtitle)span.textContent=item.subtitle;
      });

      const reviews=copy.reviews||{};
      const reviewSection=[...document.querySelectorAll('section')].find(sec=>sec.querySelector('.reviews-grid'));
      if(reviewSection){
        const eyebrow=reviewSection.querySelector('.section-heading .eyebrow');
        const heading=reviewSection.querySelector('.section-heading h2');
        const score=reviewSection.querySelector('.google-score');
        const summary=reviewSection.querySelector('.google-summary span:last-child');
        const more=reviewSection.querySelector('.section-heading .btn');
        if(eyebrow&&reviews.eyebrow)eyebrow.textContent=reviews.eyebrow;
        if(heading&&reviews.title)heading.textContent=reviews.title;
        if(score&&reviews.score)score.textContent=reviews.score;
        if(summary&&reviews.count)summary.innerHTML='<span class="stars">★★★★★</span><br>'+reviews.count;
        if(more){
          if(reviews.button)more.textContent=reviews.button;
          more.href=SITE.reviews;
        }
        const cards=[...reviewSection.querySelectorAll('.review-card')];
        (reviews.items||[]).slice(0,cards.length).forEach((item,i)=>{
          const quote=cards[i].querySelector('blockquote');
          const name=cards[i].querySelector('.review-name');
          if(quote&&item.text)quote.textContent='“'+item.text+'”';
          if(name&&item.name)name.textContent=item.name;
        });
      }
      return;
    }

    if(page==='acomodacoes.html'){
      const response=await fetch('content/acomodacoes.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.accommodations-hero');
      if(heroBox){
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        const cta=heroBox.querySelector('.accommodation-top-cta .btn');
        const note=heroBox.querySelector('.accommodation-top-cta .note');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
        if(cta){
          if(hero.ctaText)cta.textContent=hero.ctaText;
          if(hero.whatsappMessage)cta.href=wa(hero.whatsappMessage);
        }
        if(note&&hero.ctaNote)note.textContent=hero.ctaNote;
      }

      const filters=copy.filters||{};
      const filterLabel=document.querySelector('.room-filter-label');
      if(filterLabel&&filters.label)filterLabel.textContent=filters.label;
      document.querySelectorAll('[data-room-filter]').forEach(btn=>{
        const filter=btn.dataset.roomFilter;
        if(filter==='all'&&filters.all)btn.textContent=filters.all;
        else if(filter==='double-bed'&&filters.doubleBed)btn.textContent=filters.doubleBed;
        else if(filter&&filter.startsWith('capacity-')&&filters.capacity){
          btn.textContent=filters.capacity+' '+filter.replace('capacity-','');
        }
      });
      const empty=document.getElementById('roomsEmptyState');
      if(empty&&filters.empty)empty.textContent=filters.empty;

      const cards=[...document.querySelectorAll('[data-room-card]')];
      (data.rooms||[]).slice(0,cards.length).forEach((room,i)=>{
        const card=cards[i];
        const roomCopy=room[lang]||room.pt||{};
        card.dataset.capacity=String(room.capacity||'');
        card.dataset.double=room.doubleBed?'true':'false';
        const name=card.querySelector('h2');
        const desc=card.querySelector('.room-v20-head p');
        const capChip=card.querySelector('.room-capacity-chip');
        const bedChip=card.querySelector('.room-bed-chip');
        if(name&&roomCopy.name)name.textContent=roomCopy.name;
        if(desc&&roomCopy.description)desc.textContent=roomCopy.description;
        if(capChip)capChip.textContent=(filters.maxChip||'Máx.')+' '+room.capacity;
        if(bedChip&&filters.doubleBedChip)bedChip.textContent=filters.doubleBedChip;
        const imgs=[...card.querySelectorAll('.room-scroll img')];
        (room.images||[]).slice(0,imgs.length).forEach((src,j)=>{
          imgs[j].src=src;
          imgs[j].alt=roomCopy.name||('Quarto '+(i+1));
        });
      });

      const pet=copy.petNote||{};
      const petBox=document.querySelector('.accommodations-pet-bottom');
      if(petBox){
        const strong=petBox.querySelector('strong');
        const follow=petBox.querySelector('.pet-followup');
        if(strong&&pet.title)strong.textContent=pet.title;
        if(follow&&pet.text)follow.textContent=pet.text;
      }

      const final=copy.finalCta||{};
      const finalBox=document.querySelector('.accommodations-final-cta');
      if(finalBox){
        const title=finalBox.querySelector('h3');
        const textEl=finalBox.querySelector('p');
        const button=finalBox.querySelector('.btn');
        if(title&&final.title)title.textContent=final.title;
        if(textEl&&final.text)textEl.textContent=final.text;
        if(button){
          if(final.button)button.textContent=final.button;
          if(hero.whatsappMessage)button.href=wa(hero.whatsappMessage);
        }
      }
      return;
    }
  }catch(error){
    console.warn('CMS page content unavailable; using built-in page content.',error);
  }
}

function bindLightbox(){const box=document.getElementById('lightbox');if(!box)return;const img=box.querySelector('.lightbox-media-wrap img');const count=box.querySelector('.lightbox-count');const prev=box.querySelector('[data-lightbox-nav="prev"]');const next=box.querySelector('[data-lightbox-nav="next"]');let scale=1,groupItems=[],groupIndex=-1;const setScale=value=>{scale=Math.max(1,Math.min(4,value));img.style.transform=`scale(${scale})`};const updateCount=()=>{if(count)count.textContent=groupItems.length?`${groupIndex+1} / ${groupItems.length}`:''};const showItem=index=>{if(!groupItems.length)return;groupIndex=(index+groupItems.length)%groupItems.length;const el=groupItems[groupIndex];img.src=el.dataset.lightbox||el.currentSrc||el.src;img.alt=el.alt||'Imagem ampliada';setScale(1);updateCount()};const openLightbox=(src,alt='Imagem ampliada',sourceEl=null)=>{const group=sourceEl?.dataset.lightboxGroup;if(group){groupItems=[...document.querySelectorAll(`[data-lightbox-group="${CSS.escape(group)}"]`)];groupIndex=Math.max(0,groupItems.indexOf(sourceEl));box.classList.toggle('has-group',groupItems.length>1);showItem(groupIndex)}else{groupItems=[];groupIndex=-1;box.classList.remove('has-group');img.src=src;img.alt=alt;setScale(1);updateCount()}box.classList.add('open')};window.openSiteLightbox=(src,alt='Imagem ampliada')=>openLightbox(src,alt,null);document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.lightbox||el.currentSrc||el.src,el.alt||'Imagem ampliada',el)));prev?.addEventListener('click',e=>{e.stopPropagation();showItem(groupIndex-1)});next?.addEventListener('click',e=>{e.stopPropagation();showItem(groupIndex+1)});box.querySelector('[data-lightbox-action="zoom-in"]')?.addEventListener('click',e=>{e.stopPropagation();setScale(scale+.35)});box.querySelector('[data-lightbox-action="zoom-out"]')?.addEventListener('click',e=>{e.stopPropagation();setScale(scale-.35)});box.addEventListener('click',e=>{if(e.target===box||e.target.matches('button[aria-label="Fechar"]'))box.classList.remove('open')});box.addEventListener('wheel',e=>{if(!box.classList.contains('open'))return;e.preventDefault();setScale(scale+(e.deltaY<0?.2:-.2))},{passive:false});document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')box.classList.remove('open');if(groupItems.length&&e.key==='ArrowLeft')showItem(groupIndex-1);if(groupItems.length&&e.key==='ArrowRight')showItem(groupIndex+1)})}
function bindGalleryFilters(){const buttons=[...document.querySelectorAll('[data-gallery-filter]')];if(!buttons.length)return;buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.galleryFilter;document.querySelectorAll('[data-gallery-category]').forEach(item=>{item.style.display=(filter==='all'||item.dataset.galleryCategory===filter)?'':'none'});document.dispatchEvent(new CustomEvent('gallery:filterChanged',{detail:{filter}}))}))}
function initInteractiveGallery(){const thumbs=[...document.querySelectorAll('.gallery-thumb')];const main=document.querySelector('[data-gallery-main-image]');if(!thumbs.length||!main)return;const title=document.getElementById('galleryCurrentTitle');const caption=document.getElementById('galleryCurrentCaption');const chip=document.getElementById('galleryCurrentCategory');const prev=document.querySelector('.gallery-nav.prev');const next=document.querySelector('.gallery-nav.next');const open=document.querySelector('.gallery-open');const frame=document.getElementById('galleryStageFrame');const thumbTrack=document.getElementById('galleryThumbs');const visible=()=>thumbs.filter(t=>t.style.display!=='none');const activate=thumb=>{if(!thumb)return;thumbs.forEach(t=>t.classList.toggle('active',t===thumb));main.src=thumb.dataset.full||thumb.querySelector('img')?.src||'';main.alt=thumb.dataset.title||thumb.querySelector('span')?.textContent||'Imagem da galeria';if(title)title.textContent=thumb.dataset.title||main.alt;if(caption)caption.textContent=thumb.dataset.caption||'';if(chip)chip.textContent=(thumb.dataset.title||'Galeria').toUpperCase();thumb.scrollIntoView({behavior:'smooth',inline:'nearest',block:'nearest'});if(thumbTrack){thumbTrack.scrollTop=0}};const currentVisible=()=>visible();const currentIndex=()=>currentVisible().findIndex(t=>t.classList.contains('active'));thumbs.forEach(t=>t.addEventListener('click',()=>activate(t)));prev?.addEventListener('click',e=>{e.stopPropagation();const list=currentVisible();if(!list.length)return;let idx=currentIndex();idx=idx<=0?list.length-1:idx-1;activate(list[idx])});next?.addEventListener('click',e=>{e.stopPropagation();const list=currentVisible();if(!list.length)return;let idx=currentIndex();idx=idx>=list.length-1?0:idx+1;activate(list[idx])});open?.addEventListener('click',e=>{e.stopPropagation();window.openSiteLightbox?.(main.src,main.alt)});frame?.addEventListener('click',e=>{if(e.target.closest('.gallery-nav')||e.target.closest('.gallery-open'))return;window.openSiteLightbox?.(main.src,main.alt)});document.addEventListener('gallery:filterChanged',()=>{const list=currentVisible();if(thumbTrack)thumbTrack.scrollTo({left:0,behavior:'smooth'});if(list.length)activate(list[0])});activate(thumbs.find(t=>t.classList.contains('active'))||thumbs[0])}
function initRoomFilters(){const buttons=[...document.querySelectorAll('[data-room-filter]')];const cards=[...document.querySelectorAll('[data-room-card]')];if(!buttons.length||!cards.length)return;const empty=document.getElementById('roomsEmptyState');const apply=filter=>{let shown=0;cards.forEach(card=>{const cap=card.dataset.capacity;const isDouble=card.dataset.double==='true';const show=filter==='all'||filter===`capacity-${cap}`||(filter==='double-bed'&&isDouble);card.hidden=!show;if(show)shown++});if(empty)empty.hidden=shown!==0};buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');apply(btn.dataset.roomFilter)}));apply('all')}
function animateStats(){const els=[...document.querySelectorAll('[data-count]')];if(!els.length)return;const obs=new IntersectionObserver(entries=>entries.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,target=+el.dataset.count;const dur=900,t0=performance.now();function frame(t){const p=Math.min(1,(t-t0)/dur);el.textContent=Math.round(target*(1-Math.pow(1-p,3)))+(el.dataset.suffix||'');if(p<1)requestAnimationFrame(frame)}requestAnimationFrame(frame);obs.unobserve(el)}),{threshold:.45});els.forEach(el=>obs.observe(el))}
document.addEventListener('DOMContentLoaded',async()=>{await loadCmsSiteConfig();renderShell();await loadCmsPageContent();});
