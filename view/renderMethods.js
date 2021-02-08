import initListeners from "./EListeners.js";
let UIElements;
//function to setup a initial view
export function initView(activitiesList) {
    ///we add the header and the form to add a new activity 
    document.body.insertAdjacentHTML('afterbegin',
        `<header class="header-container">
        <h1 class="header-container__text">Todo List</h1>
    </header>
    <main class="add-container">
        <form class="add-container__form">
            <textarea id="text--add" name="text--add" rows="1" cols="50" placeholder="Add a new task..." required></textarea>
            <input id="btn--add" class="btn" type="submit" value="Add">
        </form>
    </main>`);
    //we call init Listeners to init all the listeners that we are going to need
    UIElements = initListeners();
    //we render al the activities
    renderAllActivitiesView(activitiesList);
}
//function to render an activity. We save importante data abou the id and status in data attributes
// we set the style of the radio input and the h1 based on status of the activity object
function renderActivity(activity) {
    return (
        `<div class="activities-container__activity" data-id=${activity.id} data-status=${activity.status} style="padding-top:30px;padding-bottom:30px;">
        <div class="activities-container__activity__content">
            <div class="activities-container__activity__input-container">
                <input class="activities-container__activities__status-setter" type="radio" style="margin-right:10px;" ${(activity.status === "active") ? "" : "checked"}>
            </div>
            <div class="activities-container__activity__text-container">
                <h1 class="${(activity.status === "active") ? ".active-activity" : "inactive-activity"} activities-container__activities__text">
                ${activity.activity}</h1>
            </div>
        </div>
        <i style="font-size: 1.5rem;" class="trash-btn far fa-trash-alt"></i>
    </div>`);
}
//we traverse in the activities list and render each activity
function renderAllActivitiesView(activitiesList) {
    activitiesList.forEach(activity => renderNewActivityView(activity));
}
// with this function we only render a new activity when we add other activity
export function renderNewActivityView(activity) {
    UIElements.activitiesContainer.insertAdjacentHTML('beforeend', renderActivity(activity));
}
export function renderDeleteActivityView(divActivity) {
    //with this we delete the div that represents the activity from the view
    divActivity.parentNode.removeChild(divActivity);
}
export function rendertoggleStatusOfItemView(divActivity) {
    const divActivityStatus = divActivity.dataset.status;
    const h1 = divActivity.querySelector('.activities-container__activities__text');
    const radioButton = divActivity.querySelector('.activities-container__activities__status-setter');
    //we obtain status of the activity based on the data attributes of the div and just change all we 
    //need in the view based on that.
    switch (divActivityStatus) {
        case 'active':
            h1.classList.remove('active-activity');
            h1.classList.add('inactive-activity');
            divActivity.dataset.status = 'inactive';
            radioButton.checked = true;
            break;
        case 'inactive':
            h1.classList.remove('inactive-activity');
            h1.classList.add('active-activity');
            divActivity.dataset.status = 'active';
            radioButton.checked = false;
            break;
        default:
            break;
    }
}