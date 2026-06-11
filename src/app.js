const ORDER_URL = 'https://desijunctioneaterywa.cloveronline.com/menu/all';
const u = (id, w = 1400, h = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=82`;
const categories = [
  ['Tandoori Specials','Clay-oven classics kissed by smoke, yogurt marinades, and bold spice blends that arrive sizzling and aromatic.',u('photo-1599487488170-d11ec9c172f0')],
  ['Signature Biryanis','Fragrant basmati, layered masalas, herbs, and slow dum cooking create a centerpiece worthy of every gathering.',u('photo-1633945274405-b6c8069047b0')],
  ['Vegetarian Delights','Vibrant paneer, lentils, garden vegetables, and market-fresh herbs turn plant-forward meals into celebrations.',u('photo-1565557623262-b51c2513a641')],
  ['South Indian Classics','Crisp dosas, fluffy idli, tangy sambar, and coconut chutneys bring comforting southern flavors to the table.',u('photo-1668236543090-82eba5ee5976')],
];
const dishes = [
  ['Butter Chicken','Silky tomato-fenugreek curry finished with cream and charcoal-smoked tenderness.',u('photo-1603894584373-5ac82b2ae398')],
  ['Chicken Dum Biryani','Aromatic basmati layered with spiced chicken, saffron, herbs, and slow-sealed steam.',u('photo-1563379091339-03246963d96c')],
  ['Paneer Tikka','Cubes of paneer marinated in hung yogurt, peppers, spices, and tandoor char.',u('photo-1567188040759-fb8a883dc6d8')],
  ['Masala Dosa','Golden rice-lentil crepe wrapped around seasoned potato masala with chutneys.',u('photo-1668236543090-82eba5ee5976')],
  ['Garlic Naan','Hand-stretched bread brushed with garlic butter and herbs from the hot tandoor.',u('photo-1626132647523-66f5bf380027')],
  ['Gulab Jamun','Warm milk dumplings soaked in cardamom syrup for a nostalgic sweet finish.',u('photo-1601303516534-8c7a54af7e16')],
];
const testimonials = [
  ['Priya S.','The biryani tasted like Sunday afternoons at home. Beautiful space, kind service, and online ordering was effortless.'],
  ['Marcus R.','Every dish felt intentional. The butter chicken, garlic naan, and mango lassi were absolutely unforgettable.'],
  ['Anita & Dev','Our family celebration was handled with warmth. Desi Junction feels modern without losing its soul.'],
];
const gallery = [
  ['Food',u('photo-1603894584373-5ac82b2ae398',1000,1200)],['Food',u('photo-1563379091339-03246963d96c',1000,1300)],['Ambiance',u('photo-1514933651103-005eec06c04b',1000,1400)],['Celebrations',u('photo-1529156069898-49953e39b3ac',1000,1200)],['Behind the Scenes',u('photo-1556910103-1c02745aae4d',1000,1300)],['Food',u('photo-1565557623262-b51c2513a641',1000,1000)],['Ambiance',u('photo-1555396273-367ea4eb4db5',1000,1200)],['Behind the Scenes',u('photo-1506368249639-73a05d6f6488',1000,1300)],['Food',u('photo-1567188040759-fb8a883dc6d8',1000,1250)],['Celebrations',u('photo-1543269865-cbf427effbad',1000,1200)]
];
const menuData = {
  Appetizers: [['Samosa Chaat','Crisp samosas, chickpeas, chutneys, yogurt, and sev.',gallery[5][1]],['Chilli Paneer','Indo-Chinese paneer tossed with peppers and scallions.',u('photo-1601050690597-df0568f70950')]],
  Vegetarian: [['Palak Paneer','Spinach curry with paneer, garlic, and warming spices.',u('photo-1596797038530-2c107229654b')],['Dal Tadka','Yellow lentils tempered with cumin, garlic, and ghee.',u('photo-1546833999-b9f581a1996d')]],
  'Non-Vegetarian': [['Butter Chicken',dishes[0][1],dishes[0][2]],['Goat Curry','Tender goat simmered with onion masala and whole spices.',u('photo-1589302168068-964664d93dc0')]],
  Biryanis: [['Chicken Dum Biryani',dishes[1][1],dishes[1][2]],['Vegetable Biryani','Seasonal vegetables layered with basmati and saffron.',u('photo-1599043513900-ed6fe01d3833')]],
  'Indo-Chinese': [['Hakka Noodles','Wok-tossed noodles with vegetables and soy-chilli aromatics.',u('photo-1612929633738-8fe44f7ec841')],['Gobi Manchurian','Crispy cauliflower glazed in tangy chilli garlic sauce.',u('photo-1625937286074-9ca519d5d9df')]],
  'South Indian': [['Masala Dosa',dishes[3][1],dishes[3][2]],['Idli Sambar','Steamed rice cakes with lentil stew and coconut chutney.',u('photo-1610192244261-3f33de3f72e1')]],
  'Indian Breads': [['Garlic Naan',dishes[4][1],dishes[4][2]],['Tandoori Roti','Whole-wheat bread baked fresh in the clay oven.',u('photo-1617692855027-33b14f061079')]],
  Desserts: [['Gulab Jamun',dishes[5][1],dishes[5][2]],['Rasmalai','Soft cheese dumplings in saffron-cardamom milk.',u('photo-1589119908995-c6837fa14848')]],
  Beverages: [['Mango Lassi','Creamy yogurt drink with mango and cardamom.',u('photo-1623065422902-30a2d299bbe4')],['Masala Chai','Tea simmered with milk, ginger, and warming spices.',u('photo-1561336313-0bd5e0b27ec8')]],
};
const qs = (s, root = document) => root.querySelector(s);
const qsa = (s, root = document) => [...root.querySelectorAll(s)];
const html = (strings, ...values) => strings.reduce((out, s, i) => out + s + (values[i] ?? ''), '');

function initHero(){
  const slides = qsa('.slide'); const dots = qsa('.progress button'); let active = 0; let start = 0;
  slides.forEach(slide => slide.style.backgroundImage = `linear-gradient(90deg, rgba(44,34,29,.78), rgba(44,34,29,.35), rgba(44,34,29,.08)), url(${slide.dataset.bg})`);
  const go = i => { active = (i + slides.length) % slides.length; slides.forEach((s,idx)=>s.classList.toggle('active',idx===active)); dots.forEach((d,idx)=>d.classList.toggle('active',idx===active)); };
  qs('.next').addEventListener('click',()=>go(active+1)); qs('.prev').addEventListener('click',()=>go(active-1)); dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));
  qs('.hero').addEventListener('touchstart',e=>start=e.touches[0].clientX,{passive:true}); qs('.hero').addEventListener('touchend',e=>{const delta=start-e.changedTouches[0].clientX;if(Math.abs(delta)>45)go(active+(delta>0?1:-1));},{passive:true});
  setInterval(()=>go(active+1),6000);
}
function renderCollections(){
  qs('#categoryRows').innerHTML = categories.map((c,i)=>html`<div class="story-row reveal"><div class="story-image"><img loading="lazy" src="${c[2]}" alt="${c[0]}"></div><div class="story-copy"><span>0${i+1}</span><h3>${c[0]}</h3><p>${c[1]}</p><a href="#menu" class="text-link">Explore this category →</a></div></div>`).join('');
  qs('#dishRail').innerHTML = dishes.map(d=>html`<article class="dish-card reveal"><img loading="lazy" src="${d[2]}" alt="${d[0]}"><div><h3>${d[0]}</h3><p>${d[1]}</p></div></article>`).join('');
}
function initTestimonials(){
  qs('#quotes').innerHTML = testimonials.map((t,i)=>html`<blockquote class="${i===0?'active':''}"><div aria-label="5 stars">★★★★★</div><p>“${t[1]}”</p><cite>${t[0]}</cite></blockquote>`).join(''); let i=0; const quotes=qsa('#quotes blockquote'); setInterval(()=>{i=(i+1)%quotes.length;quotes.forEach((q,idx)=>q.classList.toggle('active',idx===i));},5200);
}
function renderMasonry(target, items){ target.innerHTML = items.map((g,i)=>html`<button class="masonry-item reveal" data-src="${g[1]}"><img loading="lazy" src="${g[1]}" alt="${g[0]} at Desi Junction"><span>View Image</span></button>`).join(''); }
function initGallery(){
  renderMasonry(qs('#galleryPreview'), gallery.slice(0,8));
  const cats = ['All','Food','Ambiance','Celebrations','Behind the Scenes']; let current = 'All';
  qs('#galleryFilters').innerHTML = cats.map(c=>`<button class="${c===current?'active':''}">${c}</button>`).join('');
  const refresh = () => { renderMasonry(qs('#galleryGrid'), current === 'All' ? gallery : gallery.filter(g=>g[0]===current)); observeReveals(); bindLightbox(); };
  qsa('#galleryFilters button').forEach(btn=>btn.addEventListener('click',()=>{current=btn.textContent;qsa('#galleryFilters button').forEach(b=>b.classList.toggle('active',b===btn));refresh();})); refresh(); bindLightbox();
}
function bindLightbox(){
  const box = qs('.lightbox'); const image = qs('.lightbox img');
  qsa('.masonry-item').forEach(item=>item.onclick=()=>{image.src=item.dataset.src;box.hidden=false;});
  box.onclick = () => box.hidden = true;
}
function initMenu(){
  const cats = Object.keys(menuData); let current = cats[0]; const tabs = qs('#menuTabs'); const grid = qs('#menuGrid');
  const render = () => { tabs.innerHTML = cats.map(c=>`<button role="tab" aria-selected="${current===c}" class="${current===c?'active':''}">${c}</button>`).join(''); grid.innerHTML = menuData[current].map(m=>html`<article class="menu-item reveal"><img loading="lazy" src="${m[2]}" alt="${m[0]}"><div><h3>${m[0]}</h3><p>${m[1]}</p></div></article>`).join(''); qsa('#menuTabs button').forEach(btn=>btn.addEventListener('click',()=>{current=btn.textContent;render();})); observeReveals(); };
  render();
}
function observeReveals(){
  if (!('IntersectionObserver' in window)) { qsa('.reveal').forEach(el=>el.classList.add('visible')); return; }
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }}), {threshold:.12});
  qsa('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}
function initNav(){
  const nav = qs('.nav'); const toggle = qs('.menu-toggle');
  toggle.addEventListener('click',()=>{nav.classList.toggle('open'); toggle.textContent = nav.classList.contains('open') ? '×' : '☰';});
  qsa('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.textContent='☰';}));
}
function initContact(){ qs('.contact-form').addEventListener('submit', e => { e.preventDefault(); qs('.success', e.currentTarget).hidden = false; e.currentTarget.reset(); }); }
initNav(); initHero(); renderCollections(); initTestimonials(); initGallery(); initMenu(); initContact(); observeReveals();
