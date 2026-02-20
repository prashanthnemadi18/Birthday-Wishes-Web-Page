// Memory data with captions
const memories = [
    {
        image: 'childhood.jpeg',
        title: '🧸 Childhood Magic',
        caption: 'Remember when we were little troublemakers? Those innocent days of playing, fighting over toys, and making Mom laugh with our silly antics. You were the cutest kid ever! 😄'
    },
    {
        image: 'Mother-sister image.jpeg',
        title: '👩‍👧 Mom & Her Princess',
        caption: 'The bond between you and Mom is so special. Her love shaped you into the amazing person you are today. This picture captures pure love and warmth! 💕'
    },
    {
        image: '1st iamge .jpeg',
        title: '✨ First Memories',
        caption: 'One of our earliest memories together! Even back then, you had that sparkle in your eyes. Look how far we\'ve come! 🌟'
    },
    {
        image: 'Bother and sister .jpeg',
        title: '👫 Partners in Crime',
        caption: 'Brother and sister - the perfect team! We fought, we laughed, we annoyed each other, but at the end of the day, we always had each other\'s back. That\'s what siblings are for! 😎'
    },
    {
        image: 'marrege image .jpeg',
        title: '💒 New Beginnings',
        caption: 'What a beautiful day this was! Seeing you so happy and radiant made everyone emotional. You looked absolutely stunning! Here\'s to new chapters and endless happiness! 👰'
    },
    {
        image: 'simple.jpeg',
        title: '🌸 Simple Moments',
        caption: 'Sometimes the simplest moments are the most beautiful. Your natural smile and genuine happiness shine through in every picture. Stay this beautiful always! 💫'
    },
    {
        image: 'coolest image .jpeg',
        title: '😎 The Cool Sister',
        caption: 'Look at you being all cool and stylish! You\'ve always had that amazing personality that lights up every room. Keep rocking that confidence! 🔥'
    },
    {
        image: 'Photoshot.jpeg',
        title: '📸 Picture Perfect',
        caption: 'Professional photoshoot vibes! You\'re a natural in front of the camera. This picture proves you can be a model anytime! Absolutely gorgeous! 💃'
    },
    {
        image: 'love .jpeg',
        title: '💝 Love & Happiness',
        caption: 'This picture radiates pure love and joy! Your happiness is contagious. May your life always be filled with this much love and beautiful moments! ❤️'
    }
];

// Start the journey
function startJourney() {
    document.getElementById('homePage').classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        document.getElementById('homePage').classList.add('hidden');
        document.getElementById('memoryGallery').classList.remove('hidden');
        loadMemories();
        createConfetti();
    }, 1000);
}

// Load memories with animation
function loadMemories() {
    const container = document.getElementById('memoryContainer');
    
    memories.forEach((memory, index) => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-card';
        memoryCard.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}" class="memory-image" />
            <div class="memory-caption">
                <div class="memory-title">${memory.title}</div>
                <div class="memory-text">${memory.caption}</div>
            </div>
        `;
        container.appendChild(memoryCard);
        
        // Animate on scroll
        setTimeout(() => {
            memoryCard.classList.add('visible');
        }, index * 200);
    });
    
    // Observe scroll for animations
    observeMemories();
}

// Observe memories for scroll animation
function observeMemories() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.memory-card').forEach(card => {
        observer.observe(card);
    });
}

// Show final message
function showFinalMessage() {
    document.getElementById('memoryGallery').classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        document.getElementById('memoryGallery').classList.add('hidden');
        document.getElementById('finalMessage').classList.remove('hidden');
        createConfetti();
        createHearts();
    }, 1000);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#a8e6cf', '#ffd93d', '#a29bfe', '#fd79a8'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Create floating hearts
function createHearts() {
    const hearts = ['💕', '💖', '💗', '💝', '💓', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'confetti';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = '2rem';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }, 300);
}

// Sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.style.fontSize = '1.5rem';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Create floating particles
function createParticles() {
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 6000);
    }, 200);
}

// Start particles
createParticles();

// Dynamic background color change on scroll
let colorIndex = 0;
const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
];

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const newIndex = Math.floor(scrollPercent / 20) % gradients.length;
    
    if (newIndex !== colorIndex) {
        colorIndex = newIndex;
        document.body.style.background = gradients[colorIndex];
        document.body.style.transition = 'background 1s ease';
    }
});

// Add pulse animation to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});
