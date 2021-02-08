import initListeners from "./EListeners.js";
let UIElements;
export function initView(activitiesList) {
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
    UIElements = initListeners();
    renderAllActivitiesView(activitiesList);
}
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
function renderAllActivitiesView(activitiesList) {
    activitiesList.forEach(activity => renderNewActivityView(activity));
}
export function renderNewActivityView(activity) {
    UIElements.activitiesContainer.insertAdjacentHTML('beforeend', renderActivity(activity));
}
export function renderDeleteActivityView(divActivity) {
    divActivity.parentNode.removeChild(divActivity);
}
export function rendertoggleStatusOfItemView(divActivity) {
    const divActivityStatus = divActivity.dataset.status;
    const h1 = divActivity.querySelector('.activities-container__activities__text');
    const radioButton = divActivity.querySelector('.activities-container__activities__status-setter');
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