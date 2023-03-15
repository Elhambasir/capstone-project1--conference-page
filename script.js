let teacherInfo = [
    { name: 'Ahmadreza Azad', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/images/teacher-1.jpeg' },
    { name: 'Mahram Ali Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/images/teacher-2.jpeg' },
    { name: 'Khodadad Sourosh', skills: 'Bachelor of English language and percian language', details: 'Execute lessons efficiently using different styles of teaching depending on the content.', img: 'assets/images/teacher-3.jpeg' },
    { name: 'Abel Mawi', skills: 'PHD of English language and percian language', details: 'Instruct students about the structure and content of the English language.', img: 'assets/images/teacher-4.jpeg' },
    { name: 'Mahram Ali Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/images/teacher-5.jpeg' },
    { name: 'Ahmadreza Azad', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/images/teacher-6.jpeg' },
];

const master = document.querySelector('#a');
const btnMore = document.querySelector('#btn_more');
btnMore.addEventListener('click', () => {
    while (master.hasChildNodes()) {
        master.removeChild(master.firstChild);
    }
    teacherInfo.forEach((item) => {

        loadTeacherInfo(item);
    });

});

window.onresize = function () {
    provideTeacherInfo();
}

window.onload = function () {
    provideTeacherInfo();
}
function provideTeacherInfo() {
    while (master.hasChildNodes()) {
        master.removeChild(master.firstChild);
    }
    let count = 0;
    teacherInfo.forEach((item) => {
        if (window.screen.width < 768) {
            if (count < 2) {
                loadTeacherInfo(item);
                count++;
            }
        } else {
            loadTeacherInfo(item);
        }
    });
}
function loadTeacherInfo(item) {
    const card = ` <div class="card">
    <div class="img_cover">
        <div class="background"></div>
        <div class="forground" style=" background-image: url(${item.img});
        background-position: center;
        background-size: cover;">
        </div>
</div>
<div class="teacher_info">
<h6>${item.name}</h6>
<small>${item.skills}</small>
    <p >${item.details}</p>
    </div>
</div>`
    master.innerHTML += card;
}

const btnJoin = document.querySelector('.join_button_cover');
window.addEventListener(('resize'), () => {
    change();
});
window.addEventListener(('load'), () => {
    change();
});
function change() {
    const navbar = document.querySelector('.navbar');
    if (window.screen.width > 768) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-lg-white');
        navbar.classList.add('shadow-sm');
    } else if (window.screen.width <= 768) {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-lg-white');
        navbar.classList.remove('shadow-sm');
    }
    if (window.screen.width >= 768) {
        btnJoin.children[0].remove();
        let a = document.createElement('a');
        a.innerHTML = "SEE THE WHOLE PROGRAM";
        a.style = "color:white;cursor:pointer;border-bottom:1px solid white;font-size:12px"
        btnJoin.appendChild(a);
        document.querySelector('#removeableFooter').classList.remove('d-none');
        document.querySelector('.more').classList.add('d-none');
    } else if (window.screen.width < 768) {
        document.querySelector('#removeableFooter').classList.add('d-none');
        document.querySelector('.more').classList.remove('d-none');
        btnJoin.innerHTML = "<button>Join Star Education Society</button>";
    }
}

