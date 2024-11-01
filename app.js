let gotop = document.querySelector(".gotop")
let godown = document.querySelector(".godown")
// let gobtn=true;
let y_axis
window.addEventListener("scroll", function (event) {
    y_axis = this.scrollY;
    console.log(y_axis)
    if ( y_axis <= 0) {
        godown.style.display = 'block'
        gotop.style.display='none'

    }
    else if (y_axis > 135) {
        gotop.style.display = 'block'
        godown.style.display = 'none'
    }
})

gotop.addEventListener('click', () => {
    scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
})
godown.addEventListener('click', () => {
    scrollTo(
        {
            top: 10000,
            behavior: 'smooth'
        }
    )
})
// console.log("Simple",screen);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});