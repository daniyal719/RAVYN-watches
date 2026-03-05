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
        // Adding a slight 500ms delay so the animation can be appreciated
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 500);
    }
});
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
                    <div class="suggestion-info"><h4>${product.name}</h4><p>Rs ${product.price}</p></div>`;
                div.addEventListener('click', () => window.location.href = `Product-detail.html?id=${product.id}`);
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else { suggestionsBox.style.display = 'none'; }
    });
}
setupSearch('searchInput', 'searchBtn', 'searchSuggestions');
setupSearch('sideSearchInput', 'sideSearchBtn', 'sideSearchSuggestions');

// --- 4. Product Rendering ---
function renderProducts(category, limit, containerSelector, customList = null) {
    const container = document.querySelector(containerSelector);
    if (!container) return; 
    let filteredList = customList || products;
    if (!customList && category !== 'all') filteredList = products.filter(p => p.category === category);
    if (limit) filteredList = filteredList.slice(0, limit);
    
    let html = '';
    if (filteredList.length === 0) {
        container.innerHTML = `<p style="text-align: center; padding: 50px;">No products found.</p>`;
        return;
    }

    filteredList.forEach(product => {
        const hasDiscount = product.dis > 0;
        const finalPrice = hasDiscount ? Math.floor(product.price - (product.price * (product.dis / 100))) : product.price;
        const priceDisplay = hasDiscount 
            ? `<div class="price-stack"><p class="discount-price">Rs ${product.price}</p><p class="product-price">Rs ${finalPrice}/-</p></div>`
            : `<p class="product-price">Rs ${product.price}/-</p>`;

        html += `
            <div class="products" onclick="window.location.href='Product-detail.html?id=${product.id}'">
                <div class="products-top">
                    <img class="product-image" src="${product.image}">
                </div>
                <div class="product-bottom">
                    <div class="product-name-container">
                        <p class="product-name">${product.name}</p>
                    </div>
                    <div class="price-button-container">${priceDisplay} <i class="fa-solid fa-cart-shopping"></i></div>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

// --- 5. EXECUTION LOGIC (Decides what to render on which page) ---
const collectionContainer = document.querySelector('.js-collection-grid'); // Shop page grid
const homeContainer = document.querySelector('.js-product-grid'); // Home page grid

// If we are on the Shop (Collection) page
if (collectionContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category') || 'all'; 
    const searchParam = urlParams.get('search');

    if (searchParam) {
        // Handle Search Results
        const query = searchParam.toLowerCase();
        const searchResults = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
        
        const heading = document.querySelector('.product-heading');
        if (heading) heading.innerText = `Search Results for: "${searchParam}"`;
        
        renderProducts(null, null, '.js-collection-grid', searchResults);
    } else {
        // Render regular collection
        renderProducts(categoryParam, null, '.js-collection-grid');
    }
} 
// If we are on the Home page
else if (homeContainer) {
    renderProducts('all', 6, '.js-product-grid');
    renderProducts('men-watch', 4, '.js-product-grid-men');
    renderProducts('women-watch', 4, '.js-product-grid-women');
    renderProducts('rolex-watch', 4, '.js-product-grid-rolex');
    renderProducts('patek-watch', 4, '.js-product-grid-patek');
    renderProducts('automatic-watch', 4, '.js-product-grid-automatic');
}

// --- 6. Smooth Scroll-Back Carousel with Updated Mapping ---
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const slidesList = document.querySelectorAll('.slide');
let autoPlayInterval;

const sectionMapping = {
    'Men Watch': '.js-product-grid-men',
    'Women Watch': '.js-product-grid-women',
    'Men Bracelet': '.fe-products',
    'Women Bracelet': '.fe-products',
    'Rolex Watches': '.js-product-grid-rolex',
    'Patek Philippe': '.js-product-grid-patek',
    'Automatic': '.js-product-grid-automatic'
};

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

    // Attach Click Navigation to Sections
    slidesList.forEach(slide => {
        slide.addEventListener('click', (e) => {
            stopAutoPlay();
            const categoryName = slide.querySelector('p').innerText.trim();
            const targetSelector = sectionMapping[categoryName];
            
            if (targetSelector) {
                const targetEl = document.querySelector(targetSelector);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Resume autoplay after 5 seconds
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

// --- 8. Ramadan Exclusive Deal Interactivity ---
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const qtyInput = document.getElementById('qty-input');
const addCartBtn = document.querySelector('.add-cart-btn');
const buyNowBtn = document.querySelector('.buy-now-btn');

const ramadanProduct = {
    id: 'ramadan-bugatti-001',
    name: 'Bugatti Luxury Watch',
    price: 19000,
    image: './Images/product/product-6.jpeg'
};

// Handle Quantity Plus and Minus
if (qtyMinus && qtyPlus && qtyInput) {
    qtyPlus.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        qtyInput.value = currentValue + 1;
    });

    qtyMinus.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });
}

// Add to Cart Function
function addRamadanDealToCart(redirect = false) {
    if (!qtyInput) return;
    const quantity = parseInt(qtyInput.value);
    
    let cart = JSON.parse(localStorage.getItem('ravyn_cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === ramadanProduct.id);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ 
            id: ramadanProduct.id,
            name: ramadanProduct.name,
            price: ramadanProduct.price,
            image: ramadanProduct.image,
            quantity: quantity 
        });
    }
    
    localStorage.setItem('ravyn_cart', JSON.stringify(cart));
    
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }

    if (redirect) {
        window.location.href = 'checkout.html';
    } else {
        if (addCartBtn) {
            addCartBtn.style.backgroundColor = 'black';
            addCartBtn.style.color = 'white';
            addCartBtn.innerHTML = 'Added!';
            
            setTimeout(() => {
                addCartBtn.style.backgroundColor = ''; 
                addCartBtn.style.color = '';
                addCartBtn.innerHTML = 'Add To Cart';
            }, 2000);
        }
    }
}

// Attach Event Listeners to the Buttons
if (addCartBtn) {
    addCartBtn.addEventListener('click', () => addRamadanDealToCart(false));
}
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => addRamadanDealToCart(true));
}