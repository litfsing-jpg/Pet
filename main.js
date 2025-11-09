// Initialize Vanta.js background
VANTA.NET({
    el: "#hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00d4aa,
    backgroundColor: 0x0a0a0a,
    points: 8.00,
    maxDistance: 25.00,
    spacing: 18.00
});

// Smooth scrolling functions
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToExamples() {
    document.getElementById('examples').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Telegram integration
function openTelegram() {
    window.open('https://t.me/insinm', '_blank');
}

// Service modal functionality
function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    const services = {
        transcription: {
            title: 'Главный Транскрибатор',
            description: 'Профессиональная AI-транскрибация YouTube видео с автоматическим разметкой заголовками.',
            features: [
                'Точная транскрибация аудио/видео контента',
                'Автоматическое разметка заголовками',
                'Поддержка различных форматов',
                'Быстрая обработка за 1-2 часа',
                'Возможность редактирования текста'
            ],
            price: 'от 500₽ за 10 минут видео',
            timeline: '1-2 часа',
            examples: [
                'Пример транскрибации интервью',
                'Пример транскрибации подкаста',
                'Пример транскрибации лекции'
            ]
        },
        thumbnails: {
            title: 'Директор по превью YouTube',
            description: 'Создание привлекательных превью для YouTube видео, которые увеличивают CTR и привлекают внимание.',
            features: [
                'Профессиональный дизайн',
                'Соответствие трендам YouTube',
                'Высокий CTR гарантирован',
                '3 варианта на выбор',
                'Быстрая доставка'
            ],
            price: 'от 300₽ за превью',
            timeline: '30 минут',
            examples: [
                'Пример превью для блога',
                'Пример превью для обзора',
                'Пример превью для туториала'
            ]
        },
        marketplace: {
            title: 'Маркетплейс-продюсер карточек',
            description: 'Создание продающих карточек товаров для маркетплейсов с учетом всех требований площадки.',
            features: [
                'От 7 до 10 вариантов карточек',
                'Проработка заголовков и описаний',
                'Соответствие требованиям маркетплейса',
                'Анализ конкурентов',
                'Оптимизация под поиск'
            ],
            price: 'от 2000₽ за набор карточек',
            timeline: '1-2 дня',
            examples: [
                'Пример карточки для Wildberries',
                'Пример карточки для Ozon',
                'Пример карточки для Яндекс.Маркет'
            ]
        },
        personality: {
            title: 'Распаковка личности',
            description: 'Глубокий AI-анализ личности с выдачей 5 концептов продукта и рекомендаций.',
            features: [
                'Анализ 8 ключевых параметров',
                'Выдача 5 готовых концептов',
                'Определение сильных сторон',
                'Рекомендации по развитию',
                'Персонализированные советы'
            ],
            price: 'от 1500₽ за анализ',
            timeline: '2-3 часа',
            examples: [
                'Пример анализа предпринимателя',
                'Пример анализа блогера',
                'Пример анализа эксперта'
            ]
        },
        marketing: {
            title: 'Маркетолог',
            description: 'Комплекс маркетинговых услуг: от стратегии до внедрения и запуска рекламных кампаний.',
            features: [
                'Разработка маркетинговой стратегии',
                'Создание флагманского продукта',
                'Настройка рекламных кабинетов',
                'Создание автоворонок',
                'Аналитика и оптимизация'
            ],
            price: 'от 5000₽ за комплекс',
            timeline: '1 неделя',
            examples: [
                'Пример стратегии для онлайн-школы',
                'Пример автоворонки для курса',
                'Пример рекламной кампании'
            ]
        },
        custom: {
            title: 'Кастомные решения',
            description: 'Индивидуальные разработки под ваши задачи. Любые интеграции и автоматизации.',
            features: [
                'Индивидуальный подход',
                'Любые интеграции',
                'Автоматизация процессов',
                'Техническая поддержка',
                'Гарантия качества'
            ],
            price: 'Цена обсуждается индивидуально',
            timeline: 'По согласованию',
            examples: [
                'Пример кастомного бота',
                'Пример интеграции CRM',
                'Пример автоматизации бизнеса'
            ]
        }
    };

    const service = services[serviceType];
    if (!service) return;

    modalContent.innerHTML = `
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold gradient-text mb-4">${service.title}</h2>
            <p class="text-gray-300 text-lg">${service.description}</p>
        </div>
        
        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4">Что входит в услугу:</h3>
            <ul class="space-y-2">
                ${service.features.map(feature => `
                    <li class="flex items-center">
                        <i class="fas fa-check text-teal-400 mr-3"></i>
                        <span class="text-gray-300">${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-800 rounded-xl p-4">
                <h4 class="font-bold text-teal-400 mb-2">Стоимость</h4>
                <p class="text-gray-300">${service.price}</p>
            </div>
            <div class="bg-gray-800 rounded-xl p-4">
                <h4 class="font-bold text-purple-400 mb-2">Сроки</h4>
                <p class="text-gray-300">${service.timeline}</p>
            </div>
        </div>
        
        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4">Примеры работ:</h3>
            <div class="space-y-2">
                ${service.examples.map(example => `
                    <div class="bg-gray-800 rounded-lg p-3">
                        <span class="text-gray-300">${example}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="text-center">
            <button onclick="orderService('${serviceType}')" class="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg mr-4">
                Заказать услугу
            </button>
            <button onclick="closeServiceModal()" class="border border-gray-500 px-8 py-4 rounded-full text-gray-300 font-semibold text-lg hover:bg-gray-700 transition-all">
                Закрыть
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function orderService(serviceType) {
    closeServiceModal();
    window.open('https://t.me/insinm', '_blank');
}

// Close modal on outside click
document.getElementById('serviceModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeServiceModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.5)';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects for buttons
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click ripple effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(0, 212, 170, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add mobile menu toggle (if needed)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Add performance optimization
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

// Optimize scroll events
const optimizedScrollHandler = debounce(function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.5)';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    });
});

// Add success message for form submissions
function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(full)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Digital Services Platform loaded successfully!');
    
    // Add welcome message
    setTimeout(() => {
        showSuccessMessage('Добро пожаловать на нашу платформу!');
    }, 1000);
});