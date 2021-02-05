import initListeners from "./EListeners";
export function initView(){
    //set the initial part of the html
    initListeners();
}
function renderActivity(activity) {
    //render an activity based on an activity object
    //return the created html
}
export function renderAllActivitiesView(array){
    //traverse in the todo list and insert html based on each activity
}
export function renderNewActivityView(activity){
    //render an added activity
}
export function renderDeleteActivityView(divActivity){
    //remove an item based on the div that represents the activity
    divActivity.parentNode.removeChild(divActivity);
}
export function rendertoggleStatusOfItemView(divActivity){
     //cross a line in  an item based on the div that represents the activity
}