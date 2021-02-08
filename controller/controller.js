import {getToDoListModel,addItemModel,deleteItemModel,toggleStatusOfItem,initModel} from '../model/model.js';
import {renderDeleteActivityView,renderNewActivityView,rendertoggleStatusOfItemView,initView} from '../view/renderMethods.js';
export function initAppController(){
    initModel();
    initView(getToDoListModel());
}
export function renderNewActivityController(activity){
    renderNewActivityView(addItemModel(activity));
}
export function renderDeleteActivityController(divActivity){
    renderDeleteActivityView(divActivity);
    deleteItemModel(divActivity.dataset.id);
}
export function rendertoggleStatusOfItemController(divActivity){
    rendertoggleStatusOfItemView(divActivity)
    toggleStatusOfItem(divActivity.dataset.id);
}