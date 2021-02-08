import {getToDoListModel,addItemModel,deleteItemModel,toggleStatusOfItem,initModel} from '../model/model.js';
import {renderDeleteActivityView,renderNewActivityView,rendertoggleStatusOfItemView,initView} from '../view/renderMethods.js';
// Function where we init the app, we call the function to init the model and to init the view
//based on what we obtain with the function to get the model
export function initAppController(){
    initModel();
    initView(getToDoListModel());
}
// Render a new activity based on an activity object returned by the model
export function renderNewActivityController(activity){
    renderNewActivityView(addItemModel(activity));
}
// Function to delete an activity, first we delete the activity from the view then from the model
export function renderDeleteActivityController(divActivity){
    //the divActivity argument is the div html element where the activity we are going to delete lives
    renderDeleteActivityView(divActivity);
    //we obtain the did from the data attributes of the div html
    deleteItemModel(divActivity.dataset.id);
}
//Function to change the status of an activity. Fisrt we change it in the view, then in the model
export function rendertoggleStatusOfItemController(divActivity){
    rendertoggleStatusOfItemView(divActivity)
    toggleStatusOfItem(divActivity.dataset.id);
}