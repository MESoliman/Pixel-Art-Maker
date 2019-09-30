    
    let table = document.getElementById('pixel_canvas');
    let submitbtn = document.getElementById('submit');

    submitbtn.addEventListener('click', (e) => {
        e.preventDefault();
        while (table.hasChildNodes()) {
            table.removeChild(table.firstChild);
         }   

        makeGrid();
        
    });
    
    function makeGrid() {

    let color = document.getElementById('colorPicker');
   

    gridHeight = document.getElementById('input_height').value;
    gridWidth = document.getElementById('input_width').value;

 
    for(let i=0; i<gridHeight;i++){
        let row = table.insertRow(i);
        
        for(let j=0;j<gridWidth;j++){
           let cell = row.insertCell(j);

           cell.addEventListener('click', (e) =>{
            e.target.style.backgroundColor = color.value ;
           });
        }
    }
         
}


