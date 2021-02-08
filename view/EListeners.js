import { renderDeleteActivityController, renderNewActivityController,rendertoggleStatusOfItemController } from "../controller/controller.js";
export default function initListeners(){
    const UIElements = {
        textAdd: document.getElementById('text--add'),
        addContainerForm: document.querySelector('.add-container__form'),
        btnAdd:document.getElementById('btn--add'),
        activitiesContainer : document.querySelector('.activities-container'),
    };
    UIElements.textAdd.addEventListener('input', autoResize);
    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
    UIElements.activitiesContainer.addEventListener('click',eventDelegator.bind(null,'trash-btn',renderDeleteActivityController));
    UIElements.activitiesContainer.addEventListener('click',eventDelegator.bind(null,'activities-container__activities__status-setter',rendertoggleStatusOfItemController));
    UIElements.addContainerForm.addEventListener('submit', function(e){
        e.preventDefault();
        renderNewActivityController(UIElements.textAdd.value);
        UIElements.textAdd.value = "";
    });
    return UIElements;
}
function eventDelegator(searchedTargetClass,necesaryControllerFunction,e){
    const findedTargetElement = e.target.closest(`.${searchedTargetClass}`);
    if(findedTargetElement){
        const activityDiv = findedTargetElement.closest('.activities-container__activity');
       necesaryControllerFunction(activityDiv);  
    }
}
