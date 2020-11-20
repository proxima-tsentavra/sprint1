(function(){
    let forms = document.getElementsByTagName('form');
    for (const form of forms){
        let action = form.querySelectorAll('.form__action, .send-button__button');
        if (action.length) {
            action[0].onclick=function() { 
                formClick(form);
              };
        }
    }
})();

function formClick(form){
    
    let fields = form.elements;
    let textareas = form.getElementsByTagName('textareas');
    let sent = {};
    for (field of fields) {
        if (field.hasAttribute("name")){
            sent[field.getAttribute("name")]=field.value;
        } 
    }
    console.log(sent);
}

