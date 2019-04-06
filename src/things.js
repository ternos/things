window.onload = () => {
const things = document.querySelectorAll('.Thing')
console.log(things.length)

for(var i = 0; i < things.length; i++) {
  things[i].addEventListener('click', function(el) {
    let tick = things[el].querySelector('.Thing__tick')
    tick.classList.toggle('Thing__tick_false')
    tick.classList.toggle('Thing__tick_true')
    console.dir(things[el].querySelector('.Thing__name').innerHTML)
  }.bind(this, i));
}

// keydown keyCode=78 which=78 charCode=0 char=N +ctrl
window.addEventListener('keydown',(el) => {
  if(el.ctrlKey === true && el.key === 'n') {
    console.log("%cNew task!", "color: green; font-style: italic; font-size: 40px");
  }
})

}