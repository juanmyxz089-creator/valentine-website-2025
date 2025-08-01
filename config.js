// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Isa, mi luz de luna, mi niña...",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "💖Feliz dia de la novia 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🌹', '🐇','🐶']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Realmente me quieres??",                                    // First interaction
            yesBtn: "Si",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "JAJAJAJS te hice perder el tiempo ❤️"           // Secret hover message
        },
        second: {
            text: "¿y Hasta donde crees que llega mi amor por ti??",                          // For the love meter
            startText: "Asi tantito",                                   // Text before the percentage
            nextBtn: "Siguiente ❤️"                                         // Text for the next button
        },
        third: {
            text: "pos entonces...¿hasta que la muerte nos separe ? 🌹", // The big question!
            yesBtn: "Si!",                                             // Text for "Yes" button
            noBtn: "No, que asco "                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "No te pases tampoco...",  // Shows when they go past 5000%
        high: "Uhmmmm poquito mas  🚀💝",              // Shows when they go past 1000%
        normal: "Vete a la kola jsjs 🖕 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Andale!... no es como que realmente tengas mas opciones realmente... 🎉💝💖💝💓",
        message: "Te amo mugrosa, incluso en la distancia y la duda, tus ojos son como dos anclas que me recuerdan lo profundo que te has clavado en mi corazón, no seremos perfectos, pero quiero caminar los años de vida que nos queden junto a ti, sentir el reflejo de tu alma y sangre en mi, porque te amo y espero que nada nunca pueda cambiar eso!",
        emojis: "🌙💖🌸💝🍨❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/db5tieppk/video/upload/v1754025681/Jeff_Buckley_-_Everybody_Here_Wants_You_Sub_Espa%C3%B1ol_id0jep.mp3", // Music streaming URL
        startText: "🎵 Tocame 🗣️🗣️",        // Button text to start music
        stopText: "🔇 ya me callo alv",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
