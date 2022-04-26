const topUl = document.querySelector('#top');
const bottomUl = document.querySelector('#bottom');

const departments = document.querySelector('#departments');
const listOfEmployees = document.querySelector('#list');

/*topUl.onclick = view;
bottomUl.onclick = close;
let id; */

departments.childNodes.forEach((department) => {
  department.onclick = (e) => {
    const name = e.target.innerHTML;
    createEmployeeListItems(name);
  };
});

const createEmployeeListItems = async (name) => {
  const data = await getEmployeeList(name);
  console.log(data);
  data[0].employees.forEach((employee) => {
    createListItem(employee);
  });
};

const createListItem = (name) => {
  const listitem = document.createElement('li');
  listitem.innerHTML = name;
  listOfEmployees.appendChild(listitem);
};

const getEmployeeList = async (name) => {
  const response = await fetch(`http://localhost:8080/afdelinger/${name}`);
  console.log(response);

  const employees = await response.json();

  return employees;
};

function view(e) {
  if (id) {
    closeList(`list${id}`);
  }
  document.querySelector(`#list${e.target.id}`).hidden = false;
  id = e.target.id;
}

function close(e) {
  closeList(e.target.id);
}

function closeList() {
  document.querySelector(`#list${id}`).hidden = true;
}
