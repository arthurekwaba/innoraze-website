// Innoraze Website JavaScript

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    mobileMenuLinks?.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white/98', 'shadow-lg');
            navbar.classList.remove('bg-white/95');
        } else {
            navbar.classList.add('bg-white/95');
            navbar.classList.remove('bg-white/98', 'shadow-lg');
        }
    }
});

// Scores widget functionality
async function loadScoresWidget() {
    const scoresContainer = document.getElementById('scores-widget');
    if (!scoresContainer) return;
    
    try {
        // Show loading state
        scoresContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto"></div>
                <p class="mt-2 text-gray-600">Loading live scores...</p>
            </div>
        `;
        
        // Fetch scores data
        const response = await fetch('data/scores.json');
        if (!response.ok) {
            throw new Error('Failed to fetch scores');
        }
        
        const data = await response.json();
        renderScores(data.matches);
        
    } catch (error) {
        console.error('Error loading scores:', error);
        scoresContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Unable to load scores</h3>
                <p class="text-gray-600 mb-4">There was an error loading the live scores. Please try again later.</p>
                <button onclick="loadScoresWidget()" class="bg-brand-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Retry
                </button>
            </div>
        `;
    }
}

function renderScores(matches) {
    const scoresContainer = document.getElementById('scores-widget');
    if (!scoresContainer) return;
    
    if (!matches || matches.length === 0) {
        scoresContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-600">No matches available at the moment.</p>
            </div>
        `;
        return;
    }
    
    const scoresHTML = matches.map(match => `
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
                <div class="text-sm text-gray-600 mb-2">${match.league}</div>
                <div class="text-lg font-semibold text-gray-900">${match.home} vs ${match.away}</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-bold text-brand-blue mb-2">${match.score}</div>
                <div class="text-sm text-gray-600">
                    <span class="px-3 py-1 rounded-full ${getStatusColor(match.status)}">${match.status}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    scoresContainer.innerHTML = scoresHTML;
}

function getStatusColor(status) {
    if (status === 'FT') {
        return 'bg-gray-100 text-gray-800';
    } else if (status.includes("'")) {
        return 'bg-brand-blue text-white';
    } else if (status === 'HT') {
        return 'bg-orange-100 text-orange-800';
    } else {
        return 'bg-gray-100 text-gray-800';
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Form validation and submission
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('form-error');
                    isValid = false;
                } else {
                    field.classList.remove('form-error');
                    field.classList.add('form-success');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
        type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
        type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
        'bg-blue-100 text-blue-800 border border-blue-200'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load scores widget if on home page
    if (document.getElementById('scores-widget')) {
        loadScoresWidget();
    }
    
    // Setup form validation
    setupFormValidation();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Add loading states to buttons
    const buttons = document.querySelectorAll('button[type="submit"]');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.form && this.form.checkValidity()) {
                this.textContent = 'Sending...';
                this.disabled = true;
            }
        });
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading-skeleton');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);
