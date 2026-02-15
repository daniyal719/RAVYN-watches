// --- 1. Mobile Menu Logic ---
const bar = document.getElementById('bar');
// UPDATED: Target .center-nav instead of .header-right-section
const nav = document.querySelector('.center-nav'); 
const close = document.getElementById('close');

if (bar) bar.addEventListener('click', () => nav.classList.add('active'));
if (close) close.addEventListener('click', () => nav.classList.remove('active'));