document.querySelector('.header__burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navigation__list').classList.toggle('open');
    document.querySelector('.header__authorization').classList.toggle('open');
})
window.onload = function() {
    const teamList = document.querySelectorAll('.team-section__person')
    teamList.forEach(function(item){
        item.classList.add('fade-in')
    })
};