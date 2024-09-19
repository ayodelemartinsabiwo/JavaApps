const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Python' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Java' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'JavaScript' },
    { id: 4, name: 'Berry Claim', age: 33, department: 'HR', salary: 68000, specialization: 'Rust' },
    //... More employee records can be added here
  ];

// Function to display all employees
//The resulting array of constructed strings is joined into a single string
//using join(''). This concatenation merges all the HTML-formatted employee
//details into one continuous string without separators.
function displayEmployees() {
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}:
            ${employee.age}- ${employee.department}- $${employee.salary}- ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

//Function to display all employees total salaries
//The reduce method iterates through each employee and accumulates their salaries
//to calculate the total. The initial value of the accumulator (acc) is 0.
function calculateTotalSalaries() {
    // return employees.reduce((acc, employee) => acc + employee.salary, 0);

    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    const resultDiv = document.getElementById('employeesDetails');
    //display alert in div rather browser alert
    resultDiv.innerHTML = `<div class="alert alert-info">Total Salaries: $${totalSalaries}</div>`;
    // alert(`Total Salaries: $${totalSalaries}`);
}


// Funciton for HR Employees Display
function displayHREmployees() {
    //Filter the employee by department using filter method.
    //isolating and collecting employees whose department property
    //matches 'HR' into a new array named hrEmployees.
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    //Map the filtered employees
    const hrEmployeesDislay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}:
            ${employee.age}- ${employee.department}- $${employee.salary}- ${employee.specialization}</p>`).join('');
    //Display the mapped employee data in DOM. displays the matched details on the front page
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDislay;

}

//Function for Finding employee by ID
function findEmployeeById(employeeId) {
    const foundemployee = employees.find(employee => employee.id === employeeId);
    if (foundemployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundemployee.id}: ${foundemployee.name}:
            ${foundemployee.age}- ${foundemployee.department}- $${foundemployee.salary}- ${foundemployee.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

function findBySpecialization(specialization) {
    const foundemployee = employees.find(employee => employee.specialization === specialization);
    if (foundemployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundemployee.id}: ${foundemployee.name}:
            ${foundemployee.age}- ${foundemployee.department}- $${foundemployee.salary}- ${foundemployee.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this Specialization.';
    }
}
