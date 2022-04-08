// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const $ = (id) => document.getElementById(id);

let form = $('addForm');
let employees = $('employees');


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = $('empCount');
let totalRowCount = 0;


$('id').focus(); // I added here as well so id is on focus from the beginning
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDepartment = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let newID = document.createTextNode(id);
    cellID.appendChild(newID);
    let newName = document.createTextNode(name);
    cellName.appendChild(newName);
    let newExtension = document.createTextNode(extension);
    cellExt.appendChild(newExtension);
    let newEmail = document.createTextNode(email);
    cellEmail.appendChild(newEmail);
    let newDepartment = document.createTextNode(department);
    cellDepartment.appendChild(newDepartment);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();
    
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    totalRowCount = (employees.rows.length) - 1;
    empCount.innerHTML = `   Total Employees: ${totalRowCount}`;
    
});

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete this entry?')) {
        employees.deleteRow(e.target.parentElement.parentElement.rowIndex);
        totalRowCount = (employees.rows.length) - 1;
        empCount.innerHTML = `   Total Employees: ${totalRowCount}`;
    }
})