const envelopeBtn = document.getElementById('envelope-btn');
const container = document.getElementById('maaf-container');
const stopBtn = document.getElementById('stop-btn');
let intervalId;
let count = 0;
const maxMaaf = 10000; // Batas maksimal, bisa diubah
const delay = 60; // Delay 500ms antar pesan (seperti "sleep" atau waktu tunggu)

envelopeBtn.addEventListener('click', () => {
    stopBtn.style.display = 'block'; // Tampilkan tombol stop
    // Jika interval sudah berjalan, jangan buat interval baru
    if (intervalId) return;
    intervalId = setInterval(() => {
        if (count >= maxMaaf) {
            clearInterval(intervalId);
            intervalId = null;
            stopBtn.style.display = 'none';
            return;
        }
        count++;
        const maafElement = document.createElement('div');
        maafElement.className = 'maaf';
        maafElement.textContent = `${count}. Maafin Mas ya, sayangku yang paling cantik dan selalu Mas sayang!`;
        container.appendChild(maafElement);
        
        // Animasi fade in dengan delay kecil
        setTimeout(() => {
            maafElement.classList.add('show');
        }, 10);
        
        // Scroll otomatis ke bawah untuk pesan terbaru
        window.scrollTo(0, document.body.scrollHeight);
    }, delay);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    stopBtn.style.display = 'none';
});
