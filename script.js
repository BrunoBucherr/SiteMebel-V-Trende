// script.js - full store with PRODUCTS from products.js
const WHATSAPP = '77085015423';
const PER_PAGE = 9;
let currentPage = 1;
let currentCategory = 'all';
let searchQuery = '';
let sortOption = 'default';
let priceMin = 10000;
let priceMax = 2000000;

/* Cart helpers (localStorage) */
function getCart(){ try{ return JSON.parse(localStorage.getItem('mvt_cart')||'[]'); }catch(e){return []} }
function saveCart(c){ localStorage.setItem('mvt_cart', JSON.stringify(c)); renderMiniCart(); renderCartItems(); updateCartCount(); }
function addToCart(id){ const p = PRODUCTS.find(x=>x.id===id); if(!p) return; let c = getCart(); const ex = c.find(i=>i.id===id); if(ex){ ex.qty++; } else { c.push({id:p.id,name:p.name,price:p.price,qty:1}); } saveCart(c); showToast('Товар добавлен'); }
function changeQty(id,delta){ let c=getCart(); const it = c.find(x=>x.id===id); if(!it) return; it.qty += delta; if(it.qty<1) c = c.filter(x=>x.id!==id); saveCart(c); }
function removeItem(id){ let c=getCart().filter(x=>x.id!==id); saveCart(c); }
function clearCart(){ localStorage.removeItem('mvt_cart'); saveCart([]); closeCart(); showToast('Корзина очищена'); }

function updateCartCount(){ const el = document.getElementById('cart-count'); if(el) el.textContent = getCart().reduce((s,i)=>s+i.qty,0); }

// ==== ОБНОВЛЁННАЯ ФУНКЦИЯ ====
function renderMiniCart(){ 
  const el = document.getElementById('mini-cart'); 
  if(!el) return; 
  const c = getCart(); 

  if(c.length===0){ 
    el.innerHTML = 'Пусто'; 
    return; 
  } 

  el.innerHTML = c.map(i=>`
    <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:6px">
      <div style="flex:1">${i.name} x${i.qty}</div>
      <div>${formatPrice(i.price*i.qty)}</div>
      <div style="display:flex;gap:4px">
        <button class="btn" style="padding:2px 6px" onclick="changeQty(${i.id},1)">+</button>
        <button class="btn" style="padding:2px 6px" onclick="changeQty(${i.id},-1)">−</button>
        <button class="btn" style="padding:2px 6px" onclick="removeItem(${i.id})">✖</button>
      </div>
    </div>
  `).join('') 
  + `<div style="margin-top:10px;text-align:right">
       <button class="btn" onclick="clearCart()">Очистить корзину</button>
     </div>`;
}
// =============================

/* Products render with pagination */
function setCategory(cat){ currentCategory = cat; currentPage = 1;
  document.querySelectorAll('.chip').forEach(ch=> ch.classList.toggle('active', ch.dataset.cat===cat || (cat==='all'&&ch.dataset.cat==='all')));
  renderProducts();
}
function onSearch(){ searchQuery = document.getElementById('search').value || ''; currentPage = 1; renderProducts(); }
function onSort(){ sortOption = document.getElementById('sort').value || 'default'; renderProducts(); }
function onPriceRange(){ priceMax = Number(document.getElementById('priceMax').value||2000000); document.getElementById('priceMaxVal').innerText = Number(priceMax).toLocaleString(); renderProducts(); }
function renderProducts(){
  const container = document.getElementById('products'); if(!container) return;
  let list = PRODUCTS.slice(); 
  if(currentCategory !== 'all') list = list.filter(p=>p.category===currentCategory);
  list = list.filter(p=> p.price>= (Number(document.getElementById('priceMin').value||10000)) && p.price<=priceMax);
  if(searchQuery) list = list.filter(p=> (p.name+p.desc).toLowerCase().includes(searchQuery.toLowerCase()));
  if(sortOption==='cheap') list.sort((a,b)=>a.price-b.price);
  if(sortOption==='expensive') list.sort((a,b)=>b.price-a.price);
  if(sortOption==='rating') list.sort((a,b)=>b.rating - a.rating);
  const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  if(currentPage > totalPages) currentPage = 1;
  const start = (currentPage-1)*PER_PAGE;
  const pageItems = list.slice(start, start+PER_PAGE);
  container.innerHTML = pageItems.map(p=>`
    <div class="product card" data-id="${p.id}">
      ${p.tag?`<div style="position:absolute;left:12px;top:12px;background:#ff6a00;color:#071018;padding:6px 8px;border-radius:6px;font-weight:700;font-size:12px">${p.tag}</div>`:''}
      <div class="photo"><img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px"></div>
      <div class="title">${p.name}</div>
      <div class="meta"><div class="price">${formatPrice(p.price)}</div><div class="rating">${getStars(p.rating)}</div></div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn accent" onclick="addToCart(${p.id})">В корзину</button>
        <button class="btn" onclick="openProduct(${p.id})">Подробнее</button>
      </div>
    </div>
  `).join('');
  renderPagination(totalPages);
}

/* Pagination */
function renderPagination(totalPages){
  const el = document.getElementById('pagination'); if(!el) return;
  el.innerHTML = '';
  for(let i=1;i<=totalPages;i++){
    const b = document.createElement('button');
    b.className = 'btn';
    b.style.margin = '4px';
    b.textContent = i;
    if(i===currentPage) { b.classList.add('accent'); }
    b.onclick = ()=>{ currentPage = i; renderProducts(); window.scrollTo({top: document.getElementById('catalog').offsetTop-80, behavior:'smooth'}); };
    el.appendChild(b);
  }
}

/* Popular */
function renderPopular(){ const el = document.getElementById('popular-list'); if(!el) return; const top = PRODUCTS.slice().sort((a,b)=>b.rating-a.rating).slice(0,8); el.innerHTML = top.map(p=>`<div class="product card"><div class="photo" style="height:120px"><img src="${p.image}" style="width:100%;height:100%;object-fit:cover;border-radius:6px"></div><div style="font-weight:700;margin-top:8px">${p.name}</div><div class="muted small">${formatPrice(p.price)}</div></div>`).join(''); }

/* Product modal */
function openProduct(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'flex';
  const box = document.createElement('div');
  box.className = 'modal-box';
  box.innerHTML = `
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div style="flex:1;min-width:240px">
        <div style="height:320px;border-radius:8px;overflow:hidden">
          <img src="${p.image}" style="width:100%;height:100%;object-fit:cover">
        </div>
      </div>
      <div style="flex:1;min-width:240px">
        <h2 style="margin-top:0">${p.name}</h2>
        <div style="font-weight:800;color:var(--accent)">${formatPrice(p.price)}</div>
        <p class="muted">${p.desc||''}</p>
        <div style="margin-top:12px;display:flex;gap:8px">
          <button class="btn accent" id="modal-add">В корзину</button>
          <button class="btn" id="modal-close">Закрыть</button>
        </div>
      </div>
    </div>
  `;
  modal.appendChild(box);
  document.body.appendChild(modal);
  box.querySelector('#modal-close').addEventListener('click', ()=>{ document.body.removeChild(modal); });
  box.querySelector('#modal-add').addEventListener('click', ()=>{ addToCart(p.id); document.body.removeChild(modal); });
  modal.onclick = (e)=>{ if(e.target===modal) document.body.removeChild(modal); };
}

/* Cart sidebar */
function openCart(){ document.getElementById('cart').style.display='flex'; document.getElementById('cart').setAttribute('aria-hidden','false'); renderCartItems(); }
function closeCart(){ document.getElementById('cart').style.display='none'; document.getElementById('cart').setAttribute('aria-hidden','true'); }
function renderCartItems(){ const el = document.getElementById('cart-items'); if(!el) return; const c = getCart(); if(c.length===0){ el.innerHTML = '<div class="muted">Корзина пуста</div>'; document.getElementById('cart-total').innerText = formatPrice(0); return; } el.innerHTML = c.map(i=>`<div class="cart-item"><div style="flex:1"><div style="font-weight:700">${i.name}</div><div class="muted small">${formatPrice(i.price)}</div></div><div style="text-align:right"><div style="margin-bottom:6px">${formatPrice(i.price*i.qty)}</div><div style="display:flex;gap:6px;justify-content:flex-end"><button class="btn" onclick="changeQty(${i.id},1)">+</button><div style="padding:6px 8px;border-radius:6px;background:#071018">${i.qty}</div><button class="btn" onclick="changeQty(${i.id},-1)">-</button></div><div style="margin-top:8px"><button class="btn" onclick="removeItem(${i.id})">Удалить</button></div></div></div>`).join(''); document.getElementById('cart-total').innerText = formatPrice(c.reduce((s,i)=>s+i.price*i.qty,0)); updateCartCount(); renderMiniCart(); }

/* Checkout modal */
function openCheckout(){ 
  if(getCart().length===0){ showToast('Сначала выберите товары'); return; }
  const modal = document.getElementById('checkout'); 
  modal.style.display='flex'; 
  modal.setAttribute('aria-hidden','false'); 
  populateCheckout(); 
}
function closeCheckout(){ const modal = document.getElementById('checkout'); modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }
function populateCheckout(){ const itemsBox = document.getElementById('order-items'); const c = getCart(); itemsBox.innerHTML = c.map(i=>`<div style="display:flex;justify-content:space-between;padding:6px 0">${i.name} x${i.qty}<div>${formatPrice(i.price*i.qty)}</div></div>`).join('') || '<div class="muted">Корзина пуста</div>'; updateOrderTotal(); document.querySelectorAll('input[name="receive"]').forEach(r=> r.onchange = onReceiveChange); onReceiveChange(); }
function onReceiveChange(){ const r = document.querySelector('input[name="receive"]:checked').value; const el = document.getElementById('delivery-options'); if(r==='Доставка') el.style.display='block'; else el.style.display='none'; updateDeliveryPreview(); }
function updateDeliveryPreview(){ const floors = Number(document.getElementById('floors')?.value || 1); const lift = document.querySelector('input[name="lift"]:checked')?.value; let cost = 0; if(lift==='lift') cost = 3000; else cost = floors*2000; document.getElementById('delivery-cost').innerText = formatPrice(cost); updateOrderTotal(); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.price*i.qty,0); }
function updateOrderTotal(){ const subtotal = cartSubtotal(); const r = document.querySelector('input[name="receive"]:checked')?.value; let liftCost = 0; if(r==='Доставка'){ const lift = document.querySelector('input[name="lift"]:checked')?.value; const floors = Number(document.getElementById('floors')?.value || 1); liftCost = (lift==='lift')?3000:floors*2000; } document.getElementById('order-total').innerText = formatPrice(subtotal+liftCost); }

function submitOrder(e){
  e.preventDefault();
  if(getCart().length===0){ showToast('Корзина пуста. Добавьте товары.'); closeCheckout(); return; }
  const fio = document.getElementById('fio').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if(!fio||!phone){ showToast('⚠ Укажите ФИО и телефон'); return; }
  const receive = document.querySelector('input[name="receive"]:checked').value;
  let address = ''; let liftText = ''; let liftCost = 0;
  if(receive==='Доставка'){
    address = document.getElementById('address').value.trim();
    if(!address){ showToast('⚠ Укажите адрес доставки'); return; }
    const lift = document.querySelector('input[name="lift"]:checked').value;
    const floors = Number(document.getElementById('floors')?.value || 1);
    if(lift==='lift'){ liftText='Лифт (3000 тг)'; liftCost=3000; } else { liftText=`Подъём ${floors} этаж(а) x2000 тг = ${floors*2000} тг`; liftCost = floors*2000; }
  }
  const items = getCart().map(i=>`- ${i.name} x${i.qty} = ${formatPrice(i.price*i.qty)}`).join('\n');
  const subtotal = cartSubtotal(); const total = subtotal + liftCost;

  const templateParams = {
    fio,
    phone,
    receive,
    address,
    lift: liftText,
    floors: document.getElementById('floors')?.value || '',
    cart: items,
    total: formatPrice(total)
  };

  emailjs.send("service_usbyuzc","template_rl357qe",templateParams,"HKKpgydMML8nmpH7O")
    .then(function(response) {
        console.log("Email отправлен!", response.status, response.text);
        showToast("✅ Заказ оформлен! Мы вам перезвоним.");
    }, function(error) {
        console.error("Ошибка при отправке email:", error);
        showToast("❌ Ошибка при отправке заказа. Попробуйте снова.");
    });

  clearCart();
  closeCheckout();
  document.getElementById('success').style.display='flex';
  setTimeout(()=>{ document.getElementById('success').style.display='none'; }, 4000);
}

/* Helpers */
function formatPrice(n){ return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' тг'; }
function getStars(r){ const full = Math.round(r||4); return '★'.repeat(full); }

/* ==== ЦЕНТР ЭКРАНА ==== */
function showToast(text){ 
  const t = document.createElement('div'); 
  t.innerText = text; 
  t.style.position = 'fixed'; 
  t.style.left = '50%'; 
  t.style.top = '50%'; 
  t.style.transform = 'translate(-50%, -50%)'; 
  t.style.background = 'rgba(0,0,0,0.85)'; 
  t.style.color = 'white'; 
  t.style.padding = '16px 24px'; 
  t.style.borderRadius = '12px'; 
  t.style.fontSize = '18px'; 
  t.style.fontWeight = '600'; 
  t.style.zIndex = 2000; 
  t.style.opacity = '0'; 
  t.style.transition = 'opacity 0.3s ease'; 
  document.body.appendChild(t); 
  requestAnimationFrame(()=> t.style.opacity = '1');
  setTimeout(()=>{ 
    t.style.opacity = '0'; 
    setTimeout(()=> t.remove(), 300); 
  }, 2500); 
}

/* Init */
document.addEventListener('DOMContentLoaded', ()=>{ 
  emailjs.init("HKKpgydMML8nmpH7O");
  currentCategory = 'all';
  document.querySelectorAll('.chip').forEach(ch=> ch.onclick = ()=> setCategory(ch.dataset.cat));
  document.getElementById('priceMaxVal').innerText = Number(document.getElementById('priceMax').value).toLocaleString();
  renderProducts(); renderPopular(); renderMiniCart(); updateCartCount();
});
