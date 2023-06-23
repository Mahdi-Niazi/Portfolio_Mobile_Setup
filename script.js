/* --- Menu Responsive ---- */
const humberger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-list');
const logo = document.querySelector('.logo');
const envelope = document.querySelector('.envelope');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  envelope.classList.toggle('active');
  bars.classList.toggle('active');
  xmark.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  humberger.classList.remove('active');
  navMenu.classList.remove('active');
  logo.classList.remove('active');
  envelope.classList.remove('active');
  bars.classList.remove('active');
  xmark.classList.remove('active');
}));

/* --- Pop up Section -- */
const postDetails = [
  {
    title: 'Project Multi post',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: 'assets/ImgPlaceholder2.png',
    link1: 'CSS',
    link2: 'HTML',
    link3: 'BootStrap',
    live: '#',
    source: '#',
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
    img: 'assets/card4.png',
    btn_id: 'pro1',
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
    img: 'assets/card2.png',
    btn_id: 'pro2',
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
    img: 'assets/card3.png',
    btn_id: 'pro3',
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
    img: 'assets/card4.png',
    btn_id: 'pro4',
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
    img: 'assets/card2.png',
    btn_id: 'pro5',
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
    img: 'assets/card3.png',
    btn_id: 'pro6',
  },
];

const postCards = document.querySelector('.post');

postCards.innerHTML += `
            <img src="${postDetails[0].img}"
             alt="Placeholder"
             />
            <div class="multi-post">
                <h2>${postDetails[0].title}</h2>
                <p>
                    ${postDetails[0].description}
                </p>
                <ul>
                    <li>${postDetails[0].link1}</li>
                    <li>${postDetails[0].link2}</li>
                    <li>${postDetails[0].link3}</li>
                </ul>
                <button class="btn-orange" id="see-pro" type="button">See Project</button>
            </div>
`;

const cardDetails = document.querySelector('.project-card');

for (let i = 1; i < postDetails.length; i += 1) {
  const cards = `
            <div class="card ${postDetails[i].Image}">
                <h1>${postDetails[i].title}</h1>
                <p>
                    ${postDetails[i].description}
                </p>
                <ul>
                    <li>${postDetails[i].link1}</li>
                    <li>${postDetails[i].link2}</li>
                    <li>${postDetails[i].link3}</li>
                </ul>
                <button class="btn-orange card-btn" id="${postDetails[i].btn_id}" type="button">See Project</button>       
            </div>
    `;
  cardDetails.innerHTML += cards;
}

const popup = document.querySelector('.popup-container');

popup.innerHTML += `
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-contain">
                <div class="row justify-content-space-between">
                    <h2 class="pop-title"></h2>
                    <div class="close"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="row links">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                    </ul>
                </div>
                <div class="popup-content">
                    <img src="" alt="Placeholder" class="pop-img">
                    <div class="row column">
                        <p class="pop-txt"></p>
                        <div class="btn-div">
                            <a class="btn-orange pop-btn" id="live" href="">See Live  <i class="fa-solid fa-globe"></i></a>
                            <a class="btn-orange pop-btn" id="source" href="">See Source <i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
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
  document.querySelector('.pop-title').innerHTML = postDetails[0].title;
  document.querySelector('.pop-img').src = postDetails[0].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[0].description;
  document.querySelector('#live').href = postDetails[0].live;
  document.querySelector('#source').href = postDetails[0].source;
});

const pro1 = document.querySelector('#pro1');

pro1.addEventListener('click', () => {
  popupshow();
  document.querySelector('.pop-title').innerHTML = postDetails[1].title;
  document.querySelector('.pop-img').src = postDetails[1].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[1].description;
  document.querySelector('#live').href = postDetails[1].live;
  document.querySelector('#source').href = postDetails[1].source;
});

const pro2 = document.querySelector('#pro2');

pro2.addEventListener('click', () => {
  popupshow();
  document.querySelector('.pop-title').innerHTML = postDetails[2].title;
  document.querySelector('.pop-img').src = postDetails[2].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[2].description;
  document.querySelector('#live').href = postDetails[2].live;
  document.querySelector('#source').href = postDetails[2].source;
});

const pro3 = document.querySelector('#pro3');

pro3.addEventListener('click', () => {
  popupshow();
  document.querySelector('.pop-title').innerHTML = postDetails[3].title;
  document.querySelector('.pop-img').src = postDetails[3].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[3].description;
  document.querySelector('#live').href = postDetails[3].live;
  document.querySelector('#source').href = postDetails[3].source;
});

const pro4 = document.querySelector('#pro4');

pro4.addEventListener('click', () => {
  popupshow();
  document.querySelector('.pop-title').innerHTML = postDetails[4].title;
  document.querySelector('.pop-img').src = postDetails[4].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[4].description;
  document.querySelector('#live').href = postDetails[4].live;
  document.querySelector('#source').href = postDetails[4].source;
});

const pro5 = document.querySelector('#pro5');

pro5.addEventListener('click', () => {
  popupshow();
  document.querySelector('.pop-title').innerHTML = postDetails[5].title;
  document.querySelector('.pop-img').src = postDetails[5].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[5].description;
  document.querySelector('#live').href = postDetails[5].live;
  document.querySelector('#source').href = postDetails[5].source;
});

const pro6 = document.querySelector('#pro6');

pro6.addEventListener('click', () => {
  popupshow();
  document.querySelector('.pop-title').innerHTML = postDetails[6].title;
  document.querySelector('.pop-img').src = postDetails[6].img;
  document.querySelector('.pop-txt').innerHTML = postDetails[6].description;
  document.querySelector('#live').href = postDetails[6].live;
  document.querySelector('#source').href = postDetails[6].source;
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});

const email = document.querySelector('#email');
const form = document.querySelector('.contact-us');
const error = email.nextElementSibling;

const inputPatern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  const valid = inputPatern.test(email.value);
  if (!valid) {
    error.style.height = '50px';
    error.style.padding = '10px';
    error.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>  Please make sure you enter your email in lowercase!';
    event.preventDefault();
  } else {
    error.innerHTML = '';
  }
});

const inputFields = document.querySelectorAll('input, textarea');

function save() {
  const data = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const inputField of inputFields) {
    data[inputField.name] = inputField.value;
  }
  localStorage.setItem('data', JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data) {
    // eslint-disable-next-line no-restricted-syntax
    for (const inputField of inputFields) {
      inputField.value = data[inputField.name];
    }
  }
}
inputFields.forEach((inputField) => {
  inputField.addEventListener('change', save);
});

loadData();

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
        source: '#',
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
        img: 'assets/card4.png',
        btn_id: 'pro1',
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
        img: 'assets/card2.png',
        btn_id: 'pro2',
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
        img: 'assets/card3.png',
        btn_id: 'pro3',
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
        img: 'assets/card4.png',
        btn_id: 'pro4',
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
        img: 'assets/card2.png',
        btn_id: 'pro5',
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
        img: 'assets/card3.png',
        btn_id: 'pro6',
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
                <h1>${post_details[i].title}</h1>
                <p>
                    ${post_details[i].description}
                </p>
                <ul>
                    <li>${post_details[i].link1}</li>
                    <li>${post_details[i].link2}</li>
                    <li>${post_details[i].link3}</li>
                </ul>
                <button class="btn-orange card-btn" id="${post_details[i].btn_id}" type="button">See Project</button>       
            </div>
    `;
    card_details.innerHTML += cards; 
}

const popup = document.querySelector('.popup-container');

 popup.innerHTML += `
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-contain">
                <div class="row justify-content-space-between">
                    <h2 class="pop-title"></h2>
                    <div class="close"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="row links">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                    </ul>
                </div>
                <div class="popup-content">
                    <img src="" alt="Placeholder" class="pop-img">
                    <div class="row column">
                        <p class="pop-txt"></p>
                        <div class="btn-div">
                            <a class="btn-orange pop-btn" id="live" href="">See Live  <i class="fa-solid fa-globe"></i></a>
                            <a class="btn-orange pop-btn" id="source" href="">See Source <i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
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

const pro1 = document.querySelector('#pro1');

pro1.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[1].title;
    document.querySelector('.pop-img').src = post_details[1].img;
    document.querySelector('.pop-txt').innerHTML = post_details[1].description;
    document.querySelector('#live').href = post_details[1].live;
    document.querySelector('#source').href = post_details[1].source;
});

const pro2 = document.querySelector('#pro2');

pro2.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[2].title;
    document.querySelector('.pop-img').src = post_details[2].img;
    document.querySelector('.pop-txt').innerHTML = post_details[2].description;
    document.querySelector('#live').href = post_details[2].live;
    document.querySelector('#source').href = post_details[2].source;
});

const pro3 = document.querySelector('#pro3');

pro3.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[3].title;
    document.querySelector('.pop-img').src = post_details[3].img;
    document.querySelector('.pop-txt').innerHTML = post_details[3].description;
    document.querySelector('#live').href = post_details[3].live;
    document.querySelector('#source').href = post_details[3].source;
});

const pro4 = document.querySelector('#pro4');

pro4.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[4].title;
    document.querySelector('.pop-img').src = post_details[4].img;
    document.querySelector('.pop-txt').innerHTML = post_details[4].description;
    document.querySelector('#live').href = post_details[4].live;
    document.querySelector('#source').href = post_details[4].source;
});

const pro5 = document.querySelector('#pro5');

pro5.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[5].title;
    document.querySelector('.pop-img').src = post_details[5].img;
    document.querySelector('.pop-txt').innerHTML = post_details[5].description;
    document.querySelector('#live').href = post_details[5].live;
    document.querySelector('#source').href = post_details[5].source;
});

const pro6 = document.querySelector('#pro6');

pro6.addEventListener('click', () => {
    popupshow();
    document.querySelector('.pop-title').innerHTML = post_details[6].title;
    document.querySelector('.pop-img').src = post_details[6].img;
    document.querySelector('.pop-txt').innerHTML = post_details[6].description;
    document.querySelector('#live').href = post_details[6].live;
    document.querySelector('#source').href = post_details[6].source;
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});




const email = document.querySelector('#email');
const form = document.querySelector('.contact-us');
const error = email.nextElementSibling;

const inputPatern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
    const valid = inputPatern.test(email.value);
    if (!valid) {
        error.style.height = "50px";
        error.style.padding = "10px";
        error.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>  Please make sure you enter your email in lowercase!';
        event.preventDefault();
    } 
    else {
        error.innerHTML = '';
    }
});




const form_contact = document.querySelector('myform');

const inputFields = document.querySelectorAll("input, textarea");

function save() {
    const data = {};
    for (const inputField of inputFields) {
        data[inputField.name] = inputField.value;
    }
    localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        for (const inputField of inputFields) {
            inputField.value = data[inputField.name];
        }
    }
}
inputFields.forEach((inputField) => {
    inputField.addEventListener("change", save);
});
loadData();

