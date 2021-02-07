import initListeners from "./EListeners";

export function initView() {
    //set the initial part of the html
    //Lo que va a estar ahí, button, new task, primero agregar html, segundo elisteners, crear una funcion init listeners para inicializar todos los listeners
    initListeners(`<header class="header-container">
    <h1 class="header-container__text">Todo List</h1>
</header>
<main class="add-container">
    <form class="add-container__form">
        <textarea id="text--add" name="text--add" rows="1" cols="50" placeholder="Add a new task..." required></textarea>
        <input id="btn--add" class="btn" type="submit" value="Add">
    </form>
</main>`);



}
function renderActivity(activity) {
    //render an activity based on an activity object
    //return the created html


}
export function renderAllActivitiesView(array) {
    //traverse in the todo list and insert html based on each activity.
    //inventar el arreglo
    //crear un for each o for 
}
export function renderNewActivityView(activity) {
    //render an added activity  
}
export function renderDeleteActivityView(divActivity) {
    //remove an item based on the div that represents the activity
    divActivity.parentNode.removeChild(divActivity);
}
export function rendertoggleStatusOfItemView(divActivity) {
    //cross a line in  an item based on the div that represents the activity
}

getTask();
