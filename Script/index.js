// --- 1. Mobile Menu Logic ---
const bar = document.getElementById('bar');
const nav = document.querySelector('.center-nav'); 
const close = document.getElementById('close');

if (bar) bar.addEventListener('click', () => nav.classList.add('active'));
if (close) close.addEventListener('click', () => nav.classList.remove('active'));

// --- Preloader Logic ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 500);
    }
});

// --- Announcement Bar Close Logic ---
const closeAnnouncement = document.getElementById('closeAnnouncement');
if (closeAnnouncement) {
    closeAnnouncement.addEventListener('click', function() {
        const bar = document.getElementById('announcementBar');
        if (!bar) return;
        
        const currentHeight = bar.offsetHeight;
        bar.style.height = currentHeight + 'px';
        bar.offsetHeight; 
        
        bar.style.transition = 'all 0.4s ease-in-out';
        bar.style.height = '0px';
        bar.style.paddingTop = '0px';
        bar.style.paddingBottom = '0px';
        bar.style.opacity = '0';
        bar.style.overflow = 'hidden';
        bar.style.border = 'none';
        
        setTimeout(() => {
            bar.style.display = 'none';
        }, 400); 
    });
}

// --- 2. Mobile Side Search Logic ---
const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');
const sideSearchPanel = document.getElementById('sideSearchPanel');
const closeSideSearch = document.getElementById('closeSideSearch');

if (mobileSearchTrigger && sideSearchPanel) {
    mobileSearchTrigger.addEventListener('click', () => {
        sideSearchPanel.classList.add('active');
        setTimeout(() => document.getElementById('sideSearchInput').focus(), 300);
    });
}
if (closeSideSearch && sideSearchPanel) {
    closeSideSearch.addEventListener('click', () => sideSearchPanel.classList.remove('active'));
}

// --- 3. Unified Search Suggestions ---
function setupSearch(inputId, btnId, suggestionsId) {
    const input = document.getElementById(inputId);
    const suggestionsBox = document.getElementById(suggestionsId);
    if (!input || !suggestionsBox) return;

    input.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        suggestionsBox.innerHTML = '';
        if (query.length === 0) { suggestionsBox.style.display = 'none'; return; }
        
        const matches = products.filter(p => p.name.toLowerCase().includes(query));
        if (matches.length > 0) {
            matches.forEach(product => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="suggestion-img">
                    <div class="suggestion-info"><h4>${product.name}</h4><h2>Rs ${product.price}</h2></div>`;
                div.addEventListener('click', () => window.location.href = `Product-detail.html?id=${product.id}`);
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else { suggestionsBox.style.display = 'none'; }
    });
}
setupSearch('searchInput', 'searchBtn', 'searchSuggestions');
setupSearch('sideSearchInput', 'sideSearchBtn', 'sideSearchSuggestions');

// --- Global Wishlist Functions ---
function getSavedWishlist() {
    return JSON.parse(localStorage.getItem('ravenWishlist')) || [];
}

function updateWishlistCount() {
    const countElement = document.getElementById('wishlist-count');
    if (countElement) {
        countElement.innerText = getSavedWishlist().length;
    }
}
updateWishlistCount(); 

// --- 4. Product Rendering ---
function renderProducts(category, limit, containerSelector, customList = null) {
    const container = document.querySelector(containerSelector);
    if (!container) return; 
    
    let filteredList = customList || products;

    if (!customList && category !== 'all') {
        filteredList = products.filter(p => {
            const inArray = p.categories && p.categories.includes(category);
            const isString = p.category === category;
            return inArray || isString;
        });
    }

    if (limit) filteredList = filteredList.slice(0, limit);
    
    let html = '';
    if (filteredList.length === 0) {
        container.innerHTML = `<p style="text-align: center; padding: 50px; font-family: arial;">No products found.</p>`;
        return;
    }

    const savedWishlist = getSavedWishlist();

    filteredList.forEach(product => {
        const hasDiscount = product.dis > 0;
        const discountRate = product.actualDis !== undefined ? product.actualDis : product.dis;
        const finalPrice = hasDiscount ? Math.floor(product.price - (product.price * (discountRate / 100))) : product.price;
        
        const discountBadge = hasDiscount ? `<div class="dis-container">-${product.dis}% OFF</div>` : '';
        const priceDisplay = hasDiscount 
            ? `<div class="price-stack"><p class="discount-price">Rs ${product.price}</p><p class="product-price">Rs ${finalPrice}/-</p></div>`
            : `<p class="product-price">Rs ${product.price}/-</p>`;

        let variationsHtml = '';
        if (product.variations && product.variations.length > 0) {
            variationsHtml = `<div class="product-variations">`;
            product.variations.forEach(v => {
                if (v.color) {
                    variationsHtml += `
                        <span class="variation-dot" 
                              style="background-color: ${v.color.toLowerCase()};" 
                              title="${v.color}"
                              onclick="event.stopPropagation(); changeProductImage(this, '${v.image}')">
                        </span>`;
                }
            });
            variationsHtml += `</div>`;
        }

        const isWishlisted = savedWishlist.includes(product.id) ? 'active' : '';

        html += `
            <div class="products" data-product-id="${product.id}" onclick="window.location.href='Product-detail.html?id=${product.id}'">
                ${discountBadge} 
                <div class="products-top">
                    <img class="product-image" src="${product.image}" id="img-${product.id}">
                    <button class="wishlist-toggle-btn ${isWishlisted}" onclick="toggleWishlist(event, '${product.id}')" title="Add to Wishlist">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="image-cart-btn" onclick="addToCart(event, '${product.id}')" title="Add to Cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="product-bottom">
                    <div class="product-name-container">
                        <h2 class="product-name">${product.name}</h2>
                    </div>
                    <div class="price-button-container">${priceDisplay}</div>
                    ${variationsHtml}
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

function changeProductImage(dotElement, newImageUrl) {
    const productCard = dotElement.closest('.products');
    const mainImg = productCard.querySelector('.product-image');
    if (mainImg) {
        mainImg.src = newImageUrl;
    }
}

function toggleWishlist(event, productId) {
    event.stopPropagation(); 
    const btn = event.currentTarget;
    let savedWishlist = getSavedWishlist();

    btn.classList.remove('pop');
    void btn.offsetWidth; 
    btn.classList.add('pop');
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
        if (!savedWishlist.includes(productId)) savedWishlist.push(productId);
    } else {
        savedWishlist = savedWishlist.filter(id => id !== productId);
    }

    localStorage.setItem('ravenWishlist', JSON.stringify(savedWishlist));
    updateWishlistCount();

    if (document.getElementById('wishlist-grid')) {
        renderWishlistPage();
    }
}

// --- 5. EXECUTION LOGIC ---
const collectionContainer = document.querySelector('.js-collection-grid');
const homeContainer = document.querySelector('.js-product-grid');
const wishlistContainer = document.getElementById('wishlist-grid');

if (collectionContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category') || 'all'; 
    const searchParam = urlParams.get('search');

    if (searchParam) {
        const query = searchParam.toLowerCase();
        const searchResults = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            (p.categories && p.categories.some(cat => cat.toLowerCase().includes(query))) ||
            (p.category && p.category.toLowerCase().includes(query))
        );
        
        const heading = document.querySelector('.product-heading');
        if (heading) heading.innerText = `Search Results for: "${searchParam}"`;
        
        renderProducts(null, null, '.js-collection-grid', searchResults);
    } else {
        renderProducts(categoryParam, null, '.js-collection-grid');
    }
} 
else if (homeContainer) {
    renderProducts('all', null, '.js-product-grid');
}
else if (wishlistContainer) {
    renderWishlistPage();
}

function renderWishlistPage() {
    const grid = document.getElementById('wishlist-grid');
    const emptyMsg = document.getElementById('empty-wishlist-message');
    if (!grid || !emptyMsg) return;

    const savedWishlist = getSavedWishlist();
    
    if (savedWishlist.length === 0) {
        grid.innerHTML = '';
        emptyMsg.style.display = 'flex'; // Uses flex for centering
    } else {
        emptyMsg.style.display = 'none';
        const wishlistedProducts = products.filter(p => savedWishlist.includes(p.id));
        renderProducts(null, null, '#wishlist-grid', wishlistedProducts);
    }
}

// --- 6. Smooth Scroll-Back Carousel ---
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const slidesList = document.querySelectorAll('.slide');
let autoPlayInterval;

function moveCarousel() {
    if (!sliderContainer || !sliderTrack) return;
    const scrollAmount = sliderContainer.clientWidth; 
    const maxScroll = sliderTrack.scrollWidth - sliderContainer.clientWidth;

    if (sliderContainer.scrollLeft >= maxScroll - 10) {
        sliderContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function startAutoPlay() {
    // Clear any existing interval to ensure no duplicate loops
    clearInterval(autoPlayInterval);
    if (sliderContainer) autoPlayInterval = setInterval(moveCarousel, 4000);
}

function stopAutoPlay() { clearInterval(autoPlayInterval); }

if (sliderContainer) {
    startAutoPlay();
    slidesList.forEach(slide => {
        slide.addEventListener('click', (e) => {
            const categoryId = slide.getAttribute('data-category');
            if (categoryId) {
                window.location.href = `collection.html?category=${categoryId}`;
            }
        });
    });
}

// --- Utility: Scroll to Products ---
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.querySelector('.fe-products').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==========================================
// 8. SLIDING CART PANEL LOGIC
// ==========================================

const cartOverlay = document.getElementById('cartOverlay');
const sideCartPanel = document.getElementById('sideCartPanel');
const closeCartPanel = document.getElementById('closeCartPanel');
const openCartBtns = document.querySelectorAll('.open-cart-btn'); // Matches header & mobile nav icons

// Open Cart
function openCart() {
    if(sideCartPanel && cartOverlay) {
        sideCartPanel.classList.add('active');
        cartOverlay.classList.add('active');
        renderCartDrawer(); // Refresh data every time it opens
    }
}

// Close Cart
function closeCart() {
    if(sideCartPanel && cartOverlay) {
        sideCartPanel.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

// Event Listeners for Cart Triggers
openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
});

if(closeCartPanel) closeCartPanel.addEventListener('click', closeCart);
if(cartOverlay) cartOverlay.addEventListener('click', closeCart); // Clicking dark area closes it

// Render Items inside the Cart Drawer
function renderCartDrawer() {
    const cartBody = document.getElementById('cartPanelBody');
    const cartTotalEl = document.getElementById('cartPanelTotal');
    const headerBadges = document.querySelectorAll('.cart-count-badge'); // Selects the badges in header
    
    if (!cartBody || !cartTotalEl) return;

    let cart = JSON.parse(localStorage.getItem('ravyn_cart')) || [];
    let totalItems = 0;
    let totalPrice = 0;
    
    cartBody.innerHTML = '';

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fa-solid fa-cart-shopping" style="font-size: 40px; color: #ddd; margin-bottom: 10px;"></i>
                <p>Your cart is currently empty.</p>
                <button onclick="closeCart()" style="padding: 10px 20px; background: black; color: white; border: none; border-radius: 4px; margin-top: 15px; cursor:pointer;">Continue Shopping</button>
            </div>`;
    } else {
        cart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += (item.price * item.quantity);

            cartBody.innerHTML += `
                <div class="cart-drawer-item">
                    <img src="${item.image}" class="cart-drawer-img" alt="${item.name}">
                    <div class="cart-drawer-details">
                        <p class="cart-drawer-title">${item.name}</p>
                        <p class="cart-drawer-price">Rs ${item.price}</p>
                        <div class="cart-drawer-actions">
                            <div class="drawer-qty-box">
                                <button class="drawer-qty-btn" onclick="updateCartDrawerQty('${item.id}', -1)">-</button>
                                <input type="text" class="drawer-qty-input" value="${item.quantity}" readonly>
                                <button class="drawer-qty-btn" onclick="updateCartDrawerQty('${item.id}', 1)">+</button>
                            </div>
                            <button class="drawer-remove-btn" onclick="removeFromCartDrawer('${item.id}')">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Update Totals and Badges
    cartTotalEl.innerText = `Rs ${totalPrice.toLocaleString()}`;
    headerBadges.forEach(badge => {
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none'; // Using flex for centering the text
    });
}

// Update Quantity (+ / -)
function updateCartDrawerQty(id, change) {
    let cart = JSON.parse(localStorage.getItem('ravyn_cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Remove if qty hits 0
        }
        localStorage.setItem('ravyn_cart', JSON.stringify(cart));
        renderCartDrawer();
    }
}

// Remove completely
function removeFromCartDrawer(id) {
    let cart = JSON.parse(localStorage.getItem('ravyn_cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('ravyn_cart', JSON.stringify(cart));
    renderCartDrawer();
}

// Master Add To Cart Function (Updated to trigger Drawer)
function addToCart(event, productId) {
    if(event) event.stopPropagation(); 

    // Uses the global 'products' array from your data.js
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const hasDiscount = product.dis > 0;
    const discountRate = product.actualDis !== undefined ? product.actualDis : product.dis;
    const finalPrice = hasDiscount ? Math.floor(product.price - (product.price * (discountRate / 100))) : product.price;

    let cart = JSON.parse(localStorage.getItem('ravyn_cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ 
            id: product.id,
            name: product.name,
            price: finalPrice,
            image: product.image,
            quantity: 1 
        });
    }
    
    localStorage.setItem('ravyn_cart', JSON.stringify(cart));
    
    // Automatically open the cart drawer when an item is added
    openCart(); 
}

// Run render on initial page load to ensure badges are correct
document.addEventListener('DOMContentLoaded', renderCartDrawer);