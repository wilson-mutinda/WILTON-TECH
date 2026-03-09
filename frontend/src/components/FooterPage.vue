<template>
    <footer class="app-footer">
        <div class="container">
            <!-- Main Footer Content -->
            <div class="footer-main">
                <!-- Company Info -->
                <div class="footer-company">
                    <div class="footer-logo">
                        <span class="logo-text">Wilton<span class="logo-highlight">Technologies</span></span>
                        <span class="logo-tagline">Smart Tech. Smarter Solutions.</span>
                    </div>
                    <p class="company-description">
                        Empowering businesses through innovative technology, creative design, and reliable digital solutions that drive growth and long-term success.
                    </p>
                    <div class="social-links">
                        <a href="#" v-for="social in socialLinks" :key="social.name" class="social-link" :aria-label="social.name" target="_blank" rel="noopener">
                            <i :class="social.icon"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-links">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-menu">
                        <li v-for="item in navItems" :key="item.path">
                            <router-link :to="item.path" class="footer-link">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="footer-links">
                    <h4 class="footer-title">Our Services</h4>
                    <ul class="footer-menu">
                        <li v-for="service in services" :key="service.name">
                            <router-link :to="service.path" class="footer-link">{{ service.name }}</router-link>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="footer-contact">
                    <h4 class="footer-title">Contact Us</h4>
                    <ul class="contact-list">
                        <li class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Nairobi, Kenya</span>
                        </li>
                        <li class="contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <a href="tel:+254XXX123456">+254 XXX 123 456</a>
                        </li>
                        <li class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:info@wiltontechnologies.com">info@wiltontechnologies.com</a>
                        </li>
                        <li class="contact-item">
                            <i class="fas fa-clock"></i>
                            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter Signup (Optional) -->
            <div class="footer-newsletter">
                <h4 class="footer-title">Subscribe to Our Newsletter</h4>
                <div class="newsletter-form">
                    <input type="email" placeholder="Your email address" v-model="email">
                    <button class="btn btn-primary btn-subscribe" @click="subscribeNewsletter">Subscribe</button>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p class="copyright">&copy; {{ currentYear }} Wilton Technologies. All rights reserved.</p>
                <div class="legal-links">
                    <router-link to="/privacy">Privacy Policy</router-link>
                    <span class="separator">|</span>
                    <router-link to="/terms">Terms of Service</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            currentYear: new Date().getFullYear(),
            email: '',
            navItems: [
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' }
            ],
            services: [
                { name: 'Software Development', path: '/services/software-development' },
                { name: 'Mobile & Web Apps', path: '/services/mobile-apps' },
                { name: 'Website Design', path: '/services/web-design' },
                { name: 'Branding & Design', path: '/services/branding' },
                { name: 'Social Media', path: '/services/social-media' },
                { name: 'Digital Marketing', path: '/services/digital-marketing' }
            ],
            socialLinks: [
                { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
                { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
                { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
                { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
                { name: 'GitHub', icon: 'fab fa-github', url: '#' }
            ]
        }
    },
    methods: {
        subscribeNewsletter() {
            if (this.email) {
                // Implement newsletter subscription logic
                console.log('Subscribing email:', this.email);
                alert(`Thanks for subscribing! We'll keep you updated.`);
                this.email = '';
            } else {
                alert('Please enter your email address.');
            }
        }
    }
}
</script>

<style scoped>
/* Brand Colors */
:root {
    --wilton-navy: #0A1F44;
    --wilton-blue: #2AACE2;
    --vibrant-pink: #FF3366;
    --charcoal-gray: #1E1E2F;
    --cool-gray: #8A8FA3;
    --light-gray: #F2F4F8;
    --pure-white: #FFFFFF;
}

/* Footer Styles */
.app-footer {
    background-color: var(--wilton-navy);
    color: var(--pure-white);
    padding: 4rem 0 2rem;
    font-family: 'Poppins', sans-serif;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Footer Main Grid */
.footer-main {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

/* Company Info */
.footer-logo {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--pure-white);
    line-height: 1.2;
}

.logo-highlight {
    color: var(--wilton-blue);
    margin-left: 0.3rem;
}

.logo-tagline {
    font-family: 'SF Cartoonist Hand', cursive;
    font-size: 0.8rem;
    color: var(--cool-gray);
    letter-spacing: 0.5px;
    margin-top: 0.2rem;
}

.company-description {
    color: var(--cool-gray);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

/* Social Links */
.social-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--pure-white);
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-link:hover {
    background-color: var(--wilton-blue);
    transform: translateY(-3px);
}

.social-link i {
    font-size: 1.2rem;
}

/* Footer Titles */
.footer-title {
    color: var(--pure-white);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.footer-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--wilton-blue);
    border-radius: 2px;
}

/* Footer Links */
.footer-menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-menu li {
    margin-bottom: 0.8rem;
}

.footer-link {
    color: var(--cool-gray);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

.footer-link:hover {
    color: var(--wilton-blue);
    padding-left: 5px;
}

/* Contact List */
.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    color: var(--cool-gray);
    font-size: 0.95rem;
}

.contact-item i {
    color: var(--wilton-blue);
    font-size: 1.1rem;
    margin-top: 0.2rem;
    min-width: 20px;
}

.contact-item a {
    color: var(--cool-gray);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-item a:hover {
    color: var(--wilton-blue);
}

/* Newsletter Section */
.footer-newsletter {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem 0;
    margin-bottom: 2rem;
}

.footer-newsletter .footer-title {
    margin-bottom: 1rem;
}

.footer-newsletter .footer-title::after {
    display: none;
}

.newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
}

.newsletter-form input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--pure-white);
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.3s ease;
}

.newsletter-form input:focus {
    border-color: var(--wilton-blue);
    background-color: rgba(255, 255, 255, 0.1);
}

.newsletter-form input::placeholder {
    color: var(--cool-gray);
}

.btn-subscribe {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
}

/* Bottom Bar */
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
    color: var(--cool-gray);
    font-size: 0.9rem;
}

.legal-links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.legal-links a {
    color: var(--cool-gray);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.legal-links a:hover {
    color: var(--wilton-blue);
}

.separator {
    color: var(--cool-gray);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .footer-main {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .footer-main {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
    
    .btn-subscribe {
        width: 100%;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
    
    .legal-links {
        justify-content: center;
    }
}
</style>