document.addEventListener("DOMContentLoaded", function(event) {
   
    let btn = document.querySelector("button");

    btn.addEventListener("click", active);
    
    function active() {
      btn.classList.toggle("is_active");
    }


    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

    // <div class="list">
    //         <ul id="List1" class="list-items"></ul>
    //         <script>
    //             let top_sales_data = ["Product 1", "Product 2", "Product 3", "Product 4"];
    //             let list2 = document.getElementById("List1");
    //             for (i = 0; i < top_sales_data.length; ++i) {
    //                 var li = document.createElement('li');
    //                 li.innerText = top_sales_data[i];
    //                 list2.appendChild(li);
    //             }
    //         </script>

    //     </div>