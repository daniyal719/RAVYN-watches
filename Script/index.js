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
        bar.offsetHeight; // force reflow
        
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
updateWishlistCount(); // Run on load

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

        // Check if item is already wishlisted to render the active heart icon
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

// Helper function to change image on dot click
function changeProductImage(dotElement, newImageUrl) {
    const productCard = dotElement.closest('.products');
    const mainImg = productCard.querySelector('.product-image');
    if (mainImg) {
        mainImg.src = newImageUrl;
    }
}

// --- Wishlist Interaction Logic ---
function toggleWishlist(event, productId) {
    event.stopPropagation(); // Stop page redirect when clicking heart

    const btn = event.currentTarget;
    let savedWishlist = getSavedWishlist();

    // Play animation
    btn.classList.remove('pop');
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('pop');

    // Toggle active state locally
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
        if (!savedWishlist.includes(productId)) savedWishlist.push(productId);
    } else {
        savedWishlist = savedWishlist.filter(id => id !== productId);
    }

    localStorage.setItem('ravenWishlist', JSON.stringify(savedWishlist));
    updateWishlistCount();

    // Re-render if we are actively on the wishlist page and remove an item
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

// --- Render Wishlist Page ---
function renderWishlistPage() {
    const grid = document.getElementById('wishlist-grid');
    const emptyMsg = document.getElementById('empty-wishlist-message');
    if (!grid || !emptyMsg) return;

    const savedWishlist = getSavedWishlist();
    
    if (savedWishlist.length === 0) {
        grid.innerHTML = '';
        emptyMsg.style.display = 'block';
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
    if (sliderContainer) autoPlayInterval = setInterval(moveCarousel, 4000);
}

function stopAutoPlay() { clearInterval(autoPlayInterval); }

if (sliderContainer) {
    startAutoPlay();
    slidesList.forEach(slide => {
        slide.addEventListener('click', (e) => {
            stopAutoPlay();
            const categoryId = slide.getAttribute('data-category');
            if (categoryId) {
                window.location.href = `collection.html?category=${categoryId}`;
            }
            setTimeout(startAutoPlay, 5000); 
        });
    });
    sliderContainer.addEventListener('mousedown', stopAutoPlay);
    sliderContainer.addEventListener('touchstart', stopAutoPlay);
}

// --- 7. Utility Functions ---
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('ravyn_cart')) || [];
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const countElement = document.querySelector('.cart-button span');
    if (countElement) {
        countElement.innerText = totalCount;
        countElement.style.display = totalCount > 0 ? 'block' : 'none';
    }
}
updateCartCount();

const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.querySelector('.fe-products').scrollIntoView({ behavior: 'smooth' });
    });
}

// --- 8. Add To Cart from Card Logic ---
function addToCart(event, productId) {
    event.stopPropagation(); 

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
    updateCartCount();

    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    if (icon) {
        icon.classList.remove('fa-cart-shopping');
        icon.classList.add('fa-check');
        btn.style.backgroundColor = "black";
        icon.style.color = "white";
        setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-cart-shopping');
            btn.style.backgroundColor = ""; 
            icon.style.color = ""; 
        }, 1000);
    }
}