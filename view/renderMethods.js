import initListeners from "./EListeners.js";

let array = [{ id: "216168381125", activity: "Prueba 3", status: "active" }, { id: "645372372514", activity: "Prueba 4", status: "active" }, { id: "30809443388", activity: "Prueba 5", status: "active" }];

const obj = { id: "216168381125", activity: "Prueba 3", status: "active" };
const obj2 = { id: "216168381127", activity: "Prueba 4", status: "active" };

export function initView() {
    //set the initial part of the html
    //Lo que va a estar ahí, button, new task, primero agregar html, segundo elisteners, crear una funcion init listeners para inicializar todos los listeners

    initListeners(element.insertAdjacentHTML(`beforeend`, `<header class="header-container">
    <h1 class="header-container__text">Todo List</h1>
</header>
<main class="add-container">
    <form class="add-container__form">
        <textarea id="text--add" name="text--add" rows="1" cols="50" placeholder="Add a new task..." required></textarea>
        <input id="btn--add" class="btn" type="submit" value="Add">
    </form>
</main>`));



}
function renderActivity(task) {
    //render an activity based on an activity object
    //return the created html

    let id = task.id;
    let activity = task.activity;
    let status = task.status;
    return (`<div class="activities-container__activity" data-id=${id} data-status=${status} style="padding-top:30px;padding-bottom:30px;">
  <div class="activities-container_activity_content">
      <div class="activities-container_activity_input-container">
          <input class="activities-container_activities_status-setter" type="radio" style="margin-right:10px;">
      </div>
      <div class="activities-container_activity_text-container">
          <h1>${activity}</h1>
      </div>
  </div>
  <i style="font-size: 1.5rem;" class="trash-btn far fa-trash-alt"></i>
</div>`);


}
export function renderAllActivitiesView(array) {
    //traverse in the todo list and insert html based on each activity.
    //inventar el arreglo
    //crear un for each o for 

    for (let i = 0; i < array.length; i++) {
        renderNewActivityView(array[i]);
    }
}
export function renderNewActivityView(activityView) {
    //render an added activity  
    document.querySelector('.activities-container').insertAdjacentHTML('beforeend', renderActivity(activityView));

    document.querySelector(`[data-id = "${activityView.id}"]`).querySelector(`.activities-container_activities_status-setter`).addEventListener('click', function () {
        console.log("Le di click");
    })

    document.querySelector(`[data-id = "${activityView.id}"]`).querySelector(`.trash-btn`).addEventListener('click', function () {
        console.log("Borrado");
    })

}
export function renderDeleteActivityView(divActivity) {
    //remove an item based on the div that represents the activity
    divActivity.parentNode.removeChild(divActivity);
}
export function rendertoggleStatusOfItemView(divActivity) {
    //cross a line in  an item based on the div that represents the activity
}

/*
renderNewActivityView(obj);
renderNewActivityView(obj2);
*/

renderAllActivitiesView(array);
