var d = document;

d.addEventListener("DOMContentLoaded", ()=>{
    d.addEventListener("click",(e)=>{
        var btn = d.getElementById("hamburger-menu");
        var navbar = d.getElementById("navbar-menu");
        if(e.target.matches("#hamburger-menu") || e.target.matches("#hamburger-menu *")){
            if (!e.target.matches(".items-header-elements") && btn.classList.contains("is-active")){

            }
            btn.classList.toggle("is-active");
            navbar.classList.toggle("header-navbar-container-visible");
        }
    });
        // if (window.innerWidth > 768 ){
            // d.addEventListener("mouseover",(e)=>{
            //     var nextSibling = e.target.parentNode.nextElementSibling;
            //     if(e.target.parentNode.matches(".items-header-elements")){
            //         nextSibling.classList.toggle("items-header-elements-list-visible");
            //     }
                
            //     var allUlSubItems = d.querySelectorAll(".list-container ul");
            //     Array.from(allUlSubItems).forEach((itemUl)=>{
            //         if(itemUl != nextSibling){
            //             itemUl.classList.remove("items-header-elements-list-visible");
            //         }
            //     });
            // });
        // }else{
            d.addEventListener("click",(e)=>{
                var nextSibling = e.target.parentNode.nextElementSibling;
                // console.log(nextSibling);
                if(e.target.parentNode.matches(".items-header-elements")){
                    nextSibling.classList.toggle("items-header-elements-list-visible");
                }
                
                var allUlSubItems = d.querySelectorAll(".list-container ul");
                Array.from(allUlSubItems).forEach((itemUl)=>{
                    if(itemUl != nextSibling){
                        itemUl.classList.remove("items-header-elements-list-visible");
                    }
                });
            });
    
        // }
});
