import {getToDoListModel,addItemModel,deleteItemModel,toggleStatusOfItem,initModel} from '../model/model.js';
import {renderDeleteActivityView,renderNewActivityView,rendertoggleStatusOfItemView,initView} from '../view/renderMethods.js';
export function initAppController(){
    initModel();
    initView(getToDoListModel());
}
export function renderNewActivityController(activity){
    renderNewActivityView(addItemModel(activity));
    console.log(getToDoListModel());
}
export function renderDeleteActivityController(divActivity){
    renderDeleteActivityView(divActivity);
    deleteItemModel(divActivity.dataset.id);
    console.log(getToDoListModel());
}
export function rendertoggleStatusOfItemController(divActivity){
    rendertoggleStatusOfItemView(divActivity)
    toggleStatusOfItem(divActivity.dataset.id);
    console.log(getToDoListModel());
}