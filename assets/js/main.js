var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var mobileMenuDiv = document.getElementById('mobileMenu');
var skillsTagParent = document.getElementById("skillsCloudTag");
var skillsTagChildDiv = skillsTagParent.getElementsByTagName("div")
var frag = document.createDocumentFragment();
// Randomize order of skills
while (skillsTagChildDiv.length) {
    frag.appendChild(skillsTagChildDiv[Math.floor(Math.random() * skillsTagChildDiv.length)]);
}
skillsTagParent.appendChild(frag);

//toggle menu
function toggleMenu(){
    if(mobileMenuDiv.className.includes('hidden')){
        mobileMenuDiv.classList.add('absolute');
        mobileMenuDiv.classList.add('z-10');
        mobileMenuDiv.classList.add('w-full');
        mobileMenuDiv.classList.add('block');
        mobileMenuDiv.classList.remove('hidden');

    }else{
        mobileMenuDiv.classList.add('hidden');
        mobileMenuDiv.classList.remove('block');
    }
}

//toggle header
function toggleHeader(){
    var myNav = document.getElementById('nav');
    var heroDiv = document.getElementById('hero');

    if (window.scrollY >= heroDiv.clientHeight ) {
        myNav.classList.add("w-full");
        myNav.classList.add("fixed");
        myNav.classList.add("z-10");
        myNav.classList.add("bg-white");
        myNav.classList.remove('bg-gradient-to-l');
        myNav.classList.remove('from-blue-500');

    } 
    else {
        myNav.classList.remove("w-full");
        myNav.classList.remove("fixed");
        myNav.classList.remove("z-10");
        myNav.classList.add('bg-gradient-to-l');
        myNav.classList.add('from-blue-500');
    }
}

//filter skills
function filterSkillsDiv(event) {
    let selectedVal = event.target.id;
    for (let i = 0; i < skillsTagChildDiv.length; i++) {
        let className = skillsTagChildDiv[i]['className'];
        if (className.includes(selectedVal)) {
            skillsTagChildDiv[i].classList.remove("hide-skills");
        }
        if (!className.includes(selectedVal)) {
            skillsTagChildDiv[i].classList.add("hide-skills")
        }

        if (selectedVal == 'all') {
            skillsTagChildDiv[i].classList.remove("hide-skills");
        }

    }
}

mobileMenuBtn.addEventListener('click',function(e){
    toggleMenu();
});

mobileMenuDiv.addEventListener('click',function(e){
    if(mobileMenuDiv.className.includes('block')){
        mobileMenuDiv.classList.add('hidden');
    }
});

window.onscroll = function () { 
    toggleHeader();
};

document.querySelectorAll("input[name='filter']").forEach((input) => {
    input.addEventListener('change', filterSkillsDiv);
});
