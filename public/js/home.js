// =========================================================
// NAVBAR EFFECT SAAT SCROLL
// =========================================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background = 'rgba(11,60,145,.75)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,.25)';

    }else{

        navbar.style.background = 'rgba(255,255,255,.08)';
        navbar.style.boxShadow = 'none';

    }

});


// =========================================================
// ANIMASI ANGKA STATISTIK
// =========================================================

const counters = document.querySelectorAll('.stat-box h2');

const animateCounter = (counter) => {

    const target = parseInt(counter.innerText);
    const suffix = counter.innerText.replace(/[0-9]/g,'');

    let count = 0;
    const speed = target / 80;

    const update = () => {

        count += speed;

        if(count < target){

            counter.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(update);

        }else{

            counter.innerText = target + suffix;

        }

    };

    update();

};


// Jalankan ketika statistik terlihat

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            counters.forEach(counter=>animateCounter(counter));
            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector('.statistik'));


// =========================================================
// SCROLL HALUS KE MATERI
// =========================================================

document.querySelector('.btn-primary').addEventListener('click',(e)=>{

    e.preventDefault();

    document.querySelector('#materi').scrollIntoView({
        behavior:'smooth'
    });

});