window.onload = function() {
    const teamList = document.querySelectorAll('.team-section__person')
    teamList.forEach(function(item){
        item.classList.add('fade-in')
    })
};