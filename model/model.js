let toDoList;
function initModel(){
    toDoList = JSON.parse(localStorage.getItem('todoList')) || [];
}
function getToDoListModel(){
    return JSON.parse(JSON.stringify(toDoList));
}
function cuid(){
    return Math.floor(Math.random() * Date.now()).toString();
}
function addItemModel(activity){
    const newtoDoList = [...toDoList];
    const newActivity = {id:cuid(),activity:activity.trimStart(),status:"active"};
    newtoDoList.push(newActivity);
    toDoList = newtoDoList;
    localStorage.setItem('todoList',JSON.stringify(toDoList));
    return newActivity;
}
function toggleStatusOfItem(idToSet){
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
    toDoList = toDoList.filter(elem => elem.id !== idToDelete);
    localStorage.setItem('todoList',JSON.stringify(toDoList));
}
export {getToDoListModel,addItemModel,deleteItemModel,toggleStatusOfItem,initModel};