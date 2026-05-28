// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-item a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Initialize Swiper for Gallery
const swiper = new Swiper('.gallerySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// Form Validation and Submission
const bookingForm = document.getElementById('bookingForm');
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
checkinInput.min = today;

// Update checkout minimum based on checkin selection
checkinInput.addEventListener('change', function() {
    const checkinDate = new Date(this.value);
    const nextDay = new Date(checkinDate);
    nextDay.setDate(checkinDate.getDate() + 1);
    checkoutInput.min = nextDay.toISOString().split('T')[0];
    
    // If checkout date is before new minimum, reset it
    if (new Date(checkoutInput.value) < nextDay) {
        checkoutInput.value = nextDay.toISOString().split('T')[0];
    }
});

// Handle form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);
    
    if (checkout <= checkin) {
        alert('Check-out date must be after check-in date.');
        return;
    }
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // In a real app, this would be an API call to a server
    // For demo, we'll simulate a booking request
    simulateBookingRequest(data);
});

function simulateBookingRequest(data) {
    // Show loading state
    const submitBtn = bookingForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        alert(`Thank you for your booking request, ${data.name}!\n\nWe have received your inquiry for ${data.roomType.replace('-', ' ')} from ${data.checkin} to ${data.checkout}. Our team will contact you at ${data.email} shortly to confirm availability and complete your reservation.`);
        
        // Reset form
        bookingForm.reset();
        
        // Reset date restrictions
        checkinInput.min = today;
        checkoutInput.min = '';
    }, 1500);
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.room-card, .amenity-item, .feature');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial states for animation
document.querySelectorAll('.room-card, .amenity-item, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
window.addEventListener('load', animateOnScroll);

// Set default dates in form (30 days from now for check-in, 32 days for check-out)
window.addEventListener('load', function() {
    const defaultCheckin = new Date();
    defaultCheckin.setDate(defaultCheckin.getDate() + 30);
    const defaultCheckout = new Date(defaultCheckin);
    defaultCheckout.setDate(defaultCheckout.getDate() + 2);
    
    checkinInput.value = defaultCheckin.toISOString().split('T')[0];
    checkoutInput.value = defaultCheckout.toISOString().split('T')[0];
    
    // Set minimum for checkout
    checkoutInput.min = defaultCheckout.toISOString().split('T')[0];
});