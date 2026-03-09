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
        container.innerHTML = `<p style="text-align: center; padding: 50px;">No products found.</p>`;
        return;
    }

    filteredList.forEach(product => {
        const hasDiscount = product.dis > 0;
        const finalPrice = hasDiscount ? Math.floor(product.price - (product.price * (product.dis / 100))) : product.price;
        
        // Restore the Discount Badge HTML
        const discountBadge = hasDiscount 
            ? `<div class="dis-container">-${product.dis}% OFF</div>` 
            : '';

        const priceDisplay = hasDiscount 
            ? `<div class="price-stack"><p class="discount-price">Rs ${product.price}</p><p class="product-price">Rs ${finalPrice}/-</p></div>`
            : `<p class="product-price">Rs ${product.price}/-</p>`;

        let variationsHtml = '';
        if (product.variations && product.variations.length > 0) {
            variationsHtml = `<div class="product-variations">`;
            product.variations.forEach(v => {
                // BUG FIX: Only render the dot if 'color' actually exists
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

        html += `
            <div class="products" onclick="window.location.href='Product-detail.html?id=${product.id}'">
                ${discountBadge} 
                <div class="products-top">
                    <img class="product-image" src="${product.image}" id="img-${product.id}">
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

// --- 5. EXECUTION LOGIC ---
const collectionContainer = document.querySelector('.js-collection-grid');
const homeContainer = document.querySelector('.js-product-grid');

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
    // Renders the single "All Products" section on the home page.
    renderProducts('all', null, '.js-product-grid');
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
            
            // Redirects to collection page with the target category ID from HTML 'data-category'
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

// --- 8. Ramadan Exclusive Deal ---
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

if (qtyMinus && qtyPlus && qtyInput) {
    qtyPlus.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    qtyMinus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value);
        if (val > 1) qtyInput.value = val - 1;
    });
}

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
    updateCartCount();

    if (redirect) {
        window.location.href = 'checkout.html';
    } else if (addCartBtn) {
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
if (addCartBtn) addCartBtn.addEventListener('click', () => addRamadanDealToCart(false));
if (buyNowBtn) buyNowBtn.addEventListener('click', () => addRamadanDealToCart(true));

// --- 9. Add To Cart from Card Logic ---
function addToCart(event, productId) {
    // Prevent the click from bubbling up to the .products div (which redirects the page)
    event.stopPropagation(); 

    // Assuming 'products' array from data.js is globally available
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Calculate the final price in case there is a discount
    const hasDiscount = product.dis > 0;
    const finalPrice = hasDiscount ? Math.floor(product.price - (product.price * (product.dis / 100))) : product.price;

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

    // Visual feedback: change cart icon to a checkmark briefly
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
            btn.style.backgroundColor = ""; // reset
            icon.style.color = ""; // reset
        }, 1000);
    }
}