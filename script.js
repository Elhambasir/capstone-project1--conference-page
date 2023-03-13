let teacherInfo = [
    { name: 'Ahmadreza Azad', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/images/teacher-1.jpeg' },
    { name: 'Mahram Ali Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/images/teacher-2.jpeg' },
    { name: 'Khodadad Sourosh', skills: 'Bachelor of English language and percian language', details: 'Execute lessons efficiently using different styles of teaching depending on the content.', img: 'assets/images/teacher-3.jpeg' },
    { name: 'Abel Mawi', skills: 'PHD of English language and percian language', details: 'Instruct students about the structure and content of the English language.', img: 'assets/images/teacher-4.jpeg' },
    { name: 'Mahram Ali Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/images/teacher-5.jpeg' },
    { name: 'Ahmadreza Azad', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/images/teacher-6.jpeg' },
];

const master = document.querySelector('#a');
teacherInfo.forEach((item) => {
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
});
master.innerHTML += ` <div class="more">
<button><span>MORE</span><i class="bi bi-chevron-down mx-1"></i></button>
</div>`;