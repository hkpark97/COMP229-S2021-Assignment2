// COMP229-S2021-Assignment2 || Hyekyeong Park || 301148613 || COMP229 || Assignment2
// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started......");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/business/list');
                }
            });
        }
    }

    window.addEventListener("load",Start);
    
})();