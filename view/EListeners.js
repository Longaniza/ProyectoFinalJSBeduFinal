import { renderDeleteActivityController, renderNewActivityController,rendertoggleStatusOfItemController } from "../controller/controller.js";
export default function initListeners(){
    //selection in an object to reuse them
    const UIElements = {
        textAdd: document.getElementById('text--add'),
        addContainerForm: document.querySelector('.add-container__form'),
        btnAdd:document.getElementById('btn--add'),
        activitiesContainer : document.querySelector('.activities-container'),
    };
    //Listener to resize the height of the text area while we type
    UIElements.textAdd.addEventListener('input', autoResize);
    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
    //We use event delegation to just add an event listener to delete an activity or change the status
    UIElements.activitiesContainer.addEventListener('click',eventDelegator);
    //event listner to add a new activity
    UIElements.addContainerForm.addEventListener('submit', function(e){
        e.preventDefault();
        renderNewActivityController(UIElements.textAdd.value);
        UIElements.textAdd.value = "";
    });
    return UIElements;
}
//This is the function for the even listener of delete and set status. The function check what button I 
//clicked and based on that call the function to delete or set a new status              
function eventDelegator(e){
    const findedTargetElementTrashBtn = e.target.closest('.trash-btn');
    const findedTargetElementActivitySetter = e.target.closest('.activities-container__activities__status-setter');
    if(findedTargetElementTrashBtn){
        const activityDiv = findedTargetElementTrashBtn.closest('.activities-container__activity');
        renderDeleteActivityController(activityDiv);  
    }
    if(findedTargetElementActivitySetter){
        const activityDiv = findedTargetElementActivitySetter.closest('.activities-container__activity');
        rendertoggleStatusOfItemController(activityDiv);
    }
}