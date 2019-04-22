window.onload = () => {
let things = document.querySelectorAll('.Thing')

window.addEventListener('dblclick', (o) => {
  let target = o.target
  let classes = target.classList

  // Отслеживаем дабл клик в таску и раскрываем её
  if (o.path.length > 3) {  // проверяем, что кликаем не по body (иначе скачет ошибка)
    if (!o.target.classList.contains('Thing__tick')) {  // Блокируем даблклик по чекбоксу
      if(target.parentNode.classList.contains('Thing') || classes.contains('Thing')) {
        for(var i = 0; i < o.path.length; i++) {
          if(o.path[i].classList !== undefined && o.path[i].classList.contains('Thing')) {
            let taskNode = o.path[i] // Поиск нужной дом ноды
            openTask(taskNode) // функция расхлопа таска
          } 
        }
      }
    }
  }
})

openTask = (thing) => {
  let name = thing.querySelector('.Thing__name')
  let edit = document.createElement('input')  // создание инпута внутри раскрытой таски
  edit.className = 'Thing__edit Thing__name font'
  edit.placeholder = 'Новая задача'
  edit.value = name.innerText
  thing.classList.add('Thing_expanded')
  thing.replaceChild(edit, name)
  thing.querySelector('.Thing__edit').focus()
  console.log(thing)
}

window.addEventListener('click', (o) => {
  // сворачиваем открытые задачи, если клик произошёл во вне
  let target = o.target
  let node = document.querySelector('.Thing_expanded')

  target !== node || target.parentNode !== node ? scanExpandedTask() : null;

  // отслеживаем клик по чекбоксу
  if (o.target.classList[0] === 'Thing__tick') {
    let tick = o.target.classList
    if(tick.contains('Thing__tick_false')) {
      tick.replace('Thing__tick_false','Thing__tick_true')
      
      setTimeout(() => {  // стираем выполненную задачу с задержкой
        tick.contains('Thing__tick_true') ? o.target.parentNode.remove() : null;
      }, 2000)

    } else {
      tick.replace('Thing__tick_true','Thing__tick_false')
    }
  }
})


scanExpandedTask = () => {
  for (var z = 0; z < 1; z++) {
    let checkExpanded = document.querySelector('.Thing_expanded')
    if(checkExpanded !== null) {
      completeTask(checkExpanded)
    }
  }
}
completeTask = (el) => {
  let edit = el.querySelector('input')
  let name = document.createElement('div')  // создание названия таски
  name.className = 'Thing__name'
  name.innerText = edit.value
  el.replaceChild(name, edit)
  el.classList.remove('Thing_expanded')
  if(name.innerText.length === 0) {
    name.innerText = 'Новая задача'
  }
}

// #### ОБРАБОТКА КЛИВИАТУРЫ ####
window.addEventListener('keydown',(el) => {

  // Создане новой задачи через хоткей Ctrl+N
  if(el.ctrlKey === true && el.key === 'n') {
    scanExpandedTask()
    let newTask = document.createElement('div')
    newTask.className = 'Thing noselect Thing_expanded'
    newTask.innerHTML = '<div class="Thing__tick Thing__tick_false"></div><input class="Thing__edit Thing__name font" placeholder="Новая задача"/>'
    newTask.tabIndex = '0'
    document.querySelector('.List').appendChild(newTask)
    things = document.querySelectorAll('.Thing')
    newTask.querySelector('.Thing__edit').focus()
  }
})

// window.addEventListener('keydown',(el) => { 
//   // if(el.ctrlKey === true && el.key === 'Enter') {
//   //   scanExpandedTask()
//   // }
//   if(el.key === 'ArrowDown') {

//   }
//   if(el.key === 'Enter') {
//     // scanExpandedTask()
//   }
//   if(el.altKey === true && el.key === 'Enter') {
//     scanExpandedTask()
//   }
//   if(el.key === 'Escape') {
//     scanExpandedTask()
//   }
//  })

}