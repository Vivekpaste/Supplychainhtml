// document.addEventListener("DOMContentLoaded", function(event) {
   
//     const showNavbar = (toggleId, navId, bodyId, headerId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId),
//     bodypd = document.getElementById(bodyId),
//     headerpd = document.getElementById(headerId)
    
//     // Validate that all variables exist
//     if(toggle && nav && bodypd && headerpd){
//     toggle.addEventListener('click', ()=>{
//     // show navbar
//     nav.classList.toggle('show')
//     // change icon
//     toggle.classList.toggle('bx-x')
//     // add padding to body
//     bodypd.classList.toggle('body-pd')
//     // add padding to header
//     headerpd.classList.toggle('body-pd')
//     })
//     }
//     }
    
//     showNavbar('header-toggle','nav-bar','body-pd','header')
    
//     /*===== LINK ACTIVE =====*/
//     const linkColor = document.querySelectorAll('.nav_link')
    
//     function colorLink(){
//     if(linkColor){
//     linkColor.forEach(l=> l.classList.remove('active'))
//     this.classList.add('active')
//     }
//     }
//     linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
//      // Your code to run since DOM is loaded and ready


//     // Sample JSON data
//     var jsonData = [
//         { "column1": "Jack daniel","onhand": "low inventory"  },
//         { "column1": "Data 2","onhand": "out of stock" },
//         { "column1": "Data 1","onhand": "low inventory"  },
//         { "column1": "Data 2","onhand": "out of stock" },
//         { "column1": "Data 1","onhand": "low inventory"  },
//         { "column1": "Data 2","onhand": "out of stock" },
//         { "column1": "Data 1","onhand": "low inventory"  },
//         { "column1": "Data 2","onhand": "out of stock" },
//         { "column1": "Data 1","onhand": "low inventory"  },
//         { "column1": "Data 2","onhand": "out of stock" }
//         // Add more data if needed
//     ];

//     // Function to populate the table with JSON data
//     function populateTable(data) {
//         var tbody = document.querySelector('#dataTable tbody');
//         tbody.innerHTML = '';
        
//         data.forEach(function(item) {
//             var row = document.createElement('tr');
            
//             row.innerHTML = `<td>${item.column1}</td> `;
            
           
            
//             tbody.appendChild(row);
//         });
//     }

//     // Call the function to populate the table with JSON data
//     populateTable(jsonData);

//     var tbody = document.querySelector('#dataTable tbody');
//     tbody.addEventListener('mouseover', function(event) {
//         var targetRow = event.target.closest('tr');
//         if (targetRow) {
//             targetRow.style.backgroundColor = 'lightblue'; // Change to whatever highlight color you prefer
//         }
//     });
    
//     tbody.addEventListener('mouseout', function(event) {
//         var targetRow = event.target.closest('tr');
//         if (targetRow) {
//             targetRow.style.backgroundColor = ''; // Reset to default background color
//         }
//     });



//     });

document.addEventListener("DOMContentLoaded", function(event) {
   
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
    
    // Sample JSON data
    var jsonData = [
        { "column1": "Jack daniel","onhand": "low inventory"  },
        { "column1": "Data 2","onhand": "out of stock" },
        { "column1": "Data 1","onhand": " inventory"  },
        { "column1": "Data 2","onhand": "out of stock" },
        { "column1": "Data 1","onhand": "low inventory"  },
        { "column1": "Data 2","onhand": "out of stock" },
        { "column1": "Data 1","onhand": "low inventory"  },
        { "column1": "Data 2","onhand": "out of stock" },
        { "column1": "Data 1","onhand": "low inventory"  },
        { "column1": "Data 2","onhand": "out of stock" }
        // Add more data if needed
    ];

    // Function to populate the table with JSON data
    function populateTable(data) {
        var tbody = document.querySelector('#dataTable tbody');
        tbody.innerHTML = '';
        
        data.forEach(function(item) {
            var row = document.createElement('tr');
            var line=document.createElement('hr');
            row.innerHTML = `
                <td style="padding-top:2.5px;">${item.onhand}</td>
            `;
            line.innerHTML=` <hr style="border-top: 1px solid #000000;">
            `;
            
            row.addEventListener('mouseover', function() {
                row.style.backgroundColor = 'lightred'; // Change to whatever highlight color you prefer
            });
            
            row.addEventListener('mouseout', function() {
                row.style.backgroundColor = ''; // Reset to default background color
            });
            
            tbody.appendChild(row);
            tbody.appendChild(line);
        });
    }

    // Call the function to populate the table with JSON data
    populateTable(jsonData);

});

