const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');

// ToggleMenu Bars 
function toggleMenu(){
    menuBars.classList.toggle('change');
    // Active overlay class
    overlay.classList.toggle('overlay-active');
    // Check the true false of the toggle
    if(overlay.classList.contains('overlay-active')){
        //Add slider to navigation
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        // Animated in Nav Items
        
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');

        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');

        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');

        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');
        
        nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5');

    }else{
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');

                // Animated out Nav Items
        
                nav1.classList.remove('slide-in-1');
                nav1.classList.add('slide-out-1');
                nav2.classList.remove('slide-in-2');
                nav2.classList.add('slide-out-2');
                nav3.classList.remove('slide-in-3');
                nav3.classList.add('slide-out-3');
                nav4.classList.remove('slide-in-4');
                nav4.classList.add('slide-out-4');
                nav5.classList.remove('slide-in-5');
                nav5.classList.add('slide-out-5');
    }
}

// Event Listeners
menuBars.addEventListener('click',toggleMenu);
nav1.addEventListener('click', toggleMenu);
nav2.addEventListener('click', toggleMenu);
nav3.addEventListener('click', toggleMenu);
nav4.addEventListener('click', toggleMenu);
nav5.addEventListener('click', toggleMenu);