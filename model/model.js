//array we are going to use to save activities
let toDoList;
//function to init the model, if we have a todolist in local storage we use that value
//if not, an empty array
function initModel(){
    toDoList = JSON.parse(localStorage.getItem('todoList')) || [];
}
//we return a copy of or array of activities
function getToDoListModel(){
    return JSON.parse(JSON.stringify(toDoList));
}
//function to create a unique id
function cuid(){
    return Math.floor(Math.random() * Date.now()).toString();
}
//function to add a new activity to the list
function addItemModel(activity){
    //we make a copy of the list, push a new activity object on that copy an the assign the original
    //list twith the value of the copy
    const newtoDoList = [...toDoList];
    const newActivity = {id:cuid(),activity:activity.trimStart(),status:"active"};
    newtoDoList.push(newActivity);
    toDoList = newtoDoList;
    //we save the list on local storage
    localStorage.setItem('todoList',JSON.stringify(toDoList));
    return newActivity;
}
function toggleStatusOfItem(idToSet){
    //we traverse in the array and change the status of the array based on its id
    toDoList = toDoList.map(elem => {
        if(elem.id === idToSet) {
            switch(elem.status){
                case 'active':
                    elem.status = 'inactive';
                    break;
                case 'inactive':
                    elem.status = 'active';
                    break;
                default:
                    break;
            }
        }
        return elem;
    });
    localStorage.setItem('todoList',JSON.stringify(toDoList));
}
function deleteItemModel(idToDelete){
    //we filter the array based on the id, so we are goin to return the activities that dont have
    //the same id
    toDoList = toDoList.filter(elem => elem.id !== idToDelete);
    localStorage.setItem('todoList',JSON.stringify(toDoList));
}
export {getToDoListModel,addItemModel,deleteItemModel,toggleStatusOfItem,initModel};