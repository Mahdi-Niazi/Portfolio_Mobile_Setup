/* --- Menu Responsive ---- */
const humberger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const logo = document.querySelector(".logo");
const envelope = document.querySelector(".envelope");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logo.classList.toggle("active");
    envelope.classList.toggle("active");
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
});

document.querySelectorAll('.nav-item').forEach(n =>
    n.addEventListener('click', () => {
        humberger.classList.remove("active");
        navMenu.classList.remove("active");
        logo.classList.remove('active');
        envelope.classList.remove('active');
        bars.classList.remove('active');
        xmark.classList.remove('active');
    }));

/* --- Pop up Section -- */
const post_details = [
    {
        title: 'Project Multi post',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
        img: 'assets/ImgPlaceholder2.png',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#'
    },
    {
        title: 'Data Dashboard <br>Healthcare',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
        Image: 'card4',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#',
        img: 'assets/card4.png'
    },
    {
        title: 'Data Dashboard <br>Healthcare',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
        Image: 'card2',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#',
        img: 'assets/card2.png'
    },
    {
        title: 'Website Portfolio',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
        Image: 'card3',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#',
        img: 'assets/card3.png'
    },
    {
        title: 'Profesional Art Printing Data More',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
        Image: 'card4',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#',
        img: 'assets/card4.png'
    },
    {
        title: 'Data Dashboard <br>Healthcare',
       description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
        Image: 'card5',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#',
        img: 'assets/card5.png'
    },
    {
        title: 'Website Portfolio',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
        Image: 'card6',
        link1: 'CSS',
        link2: 'HTML',
        link3: 'BootStrap',
        live: '#',
        source: '#',
        img: 'assets/card6.png'
    },
];

const postCards = document.querySelector('.post');

postCards.innerHTML += `
            <img src="${post_details[0].img}"
             alt="Placeholder"
             />
            <div class="multi-post">
                <h2>${post_details[0].title}</h2>
                <p>
                    ${post_details[0].description}
                </p>
                <ul>
                    <li>${post_details[0].link1}</li>
                    <li>${post_details[0].link2}</li>
                    <li>${post_details[0].link3}</li>
                </ul>
                <button class="btn-orange" id="see-pro" type="button">See Project</button>
            </div>
`;            

const card_details = document.querySelector('.project-card');

for (let i = 1; i < post_details.length; i += 1){
    const cards = `
            <div class="card ${post_details[i].Image}">
                <h3>${post_details[i].title}</h3>
                <p>
                    ${post_details[i].description}
                </p>
                <ul>
                    <li>${post_details[i].link1}</li>
                    <li>${post_details[i].link2}</li>
                    <li>${post_details[i].link3}</li>
                </ul>
                <button class="btn-orange card-btn" id="project2" type="button">See Project</button>       
            </div>
    `;
    card_details.innerHTML += cards; 
}

const popup = document.querySelector('.popup');

 popup.innerHTML += `
        <div class="overlay"></div>
        <div class="popup-items">
           <div class="title-xmark">
                <h3 class="pop-title"></h3>
                <div class="close"><i class="fa-solid fa-xmark"></i></div>
           </div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>BootStrap</li>
            </ul>
            <div class="descrip-btns">
                <img src="" alt="Placeholder" class="pop-img">
                <div class="p-content">
                    <p class="pop-txt">
                        
                    </p>
                    <a class="btn-orange pop-btn" id="live" href="">See Live  <i class="fa-solid fa-globe"></i></a>
                    <a class="btn-orange pop-up-btn pop-btn" id="source" href="">See Source <i class="fa-brands fa-github"></i></a>
                </div> 
             </div>
        </div>
    `;


const overlay = document.querySelector('.overlay');

function popupshow() {
    popup.classList.add('active');
    overlay.classList.add('active');
}

const project1 = document.querySelector('#see-pro');
project1.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[0].title;
    document.querySelector('.pop-img').src = post_details[0].img;
    document.querySelector('.pop-txt').innerHTML = post_details[0].description;
    document.querySelector('#live').href = post_details[0].live;
    document.querySelector('#source').href = post_details[0].source;
});

document.querySelectorAll('#project2').forEach((p) => p.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[1].title;
    document.querySelector('.pop-img').src = post_details[1].img;
    document.querySelector('.pop-txt').innerHTML = post_details[1].description;
    document.querySelector('#live').href = post_details[1].live;
    document.querySelector('#source').href = post_details[1].source;
}));



