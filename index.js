//ชี้เป้า ระบุตำแหน่ง
const todoTitle = document.querySelector('.todo-title');
const addToDoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');

function removeToDo(event){
    event.target.parentNode.remove();

}

//ทำให้สามารถใช้งานได้จริงผ่านฟังก์ชัน

function addToDo(){
    //สร้าง tag div ขึ้นมาใหม่เพื่อสร้างส่วน to do list 
    const todo = document.createElement('div'); //create tag html in JS
    todo.classList.add('todo'); // create class in tag html

    //กำหนดให้ขนาดข้อมูลที่กรอกเข้ามา เป็น h3
    const textTitle = document.createElement('h3'); //create tag html in JS
    textTitle.innerHTML = todoTitle.value; // set value to To-Do input

    //สร้างปุ่มลบ
    const button = document.createElement('button');
    button.classList.add('remove-todo')
    button.type= 'button'
    button.innerHTML='ลบ'
    button.addEventListener('click', removeToDo)

    //ประกอบสามส่วนเข้าด้วยกัน ด้วยคำสั่ง append h3, button => div (เป็นก้อน div ก้อนเดียว)
    todo.append(textTitle, button);

    // todoList.append(todo); //ใน div ของ todoList จะมีก้อนข้างบนแปะอยู่ข้างในอีกที
    todoList.prepend(todo); //จะเรียงจากใหม่ไปเก่า
}

addToDoButton.addEventListener('click', addToDo)
