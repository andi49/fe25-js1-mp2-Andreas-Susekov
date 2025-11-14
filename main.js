/// User enter name here after it remvoes the input field and button 
/// display later user name and a list where highscore etc will display.

document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault()

     const userName = document.querySelector('input').value
     document.querySelector('h1').textContent = userName

     document.querySelector('input').style.display = ('none')
     document.querySelector('button').style.display = ('none')
     document.getElementById('myList').classList.remove('listOfNums')
})



