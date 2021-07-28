class TodoItem {
    constructor(public name: string, public completed: boolean  ){

    }
};


//Administrador de las tareas
//lista de las tareas
//operaciones
class TaskManager{
    tasks : TodoItem[] = [];

    addTask(task :string):void{
        const newTask = new TodoItem(task, false)
        this.tasks.push(newTask);
    }
}

//HTMLHELPER
class HTMLHELPER{
    static createTaskItem(task : TodoItem) : HTMLLIElement{

        const li = document.createElement('li');
        const checkBox = document.createElement('input');
        
        checkBox.addEventListener('change',() => {
            if(checkBox.checked){
                task.completed = true
                displayTasks();
            }
        })
        const label = document.createElement('label');
        checkBox.type = 'checkbox';

        label.innerText = task.name;
        li.appendChild(checkBox);
        li.appendChild(label);

        return li
    }
}


const taskInput =<HTMLInputElement>document.getElementById('new-task');
console.log(taskInput);

const addButton = document.getElementById('add-task')!;

const incompleted = document.getElementById('incomplete-tasks')!;
const completed = document.getElementById('completed-tasks')!;

const taskManager: TaskManager = new TaskManager()
addButton.addEventListener('click', () => {
        const task = taskInput?.value;
        taskManager.addTask(task);
        displayTasks();
        clear();

})


function displayTasks(){
    incompleted.innerHTML='';
    completed.innerHTML='';

    taskManager.tasks.forEach(task => {
        const TaskItem  = HTMLHELPER.createTaskItem(task)

        if(task.completed) {
            completed.appendChild(TaskItem)  
        }else{

            incompleted.appendChild(TaskItem)
        }
    })

}


function clear(){
    taskInput.value='';
}