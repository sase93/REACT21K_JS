// If you move the script.js injection from body to head in index.html the code will not work UNLESS executeScript is only invoked when the DOMContentLoaded event is detected. You need to handle the DOMContentLoaded event when you place the JavaScript in the head of the page but have the JS referencing elements in the body. Because the DOM has not been loaded when the JavaScript engine parses the JavaScript in the head section in the html, elements in the body do not exist.

(function() {
    let rowCounter = 2;

    let testUser = {
        studentNo: 1234567,
        name: 'Test User',
        age: 1
    };

    function executeScript(userObject) {
        let table = document.getElementById("table");
        let row = table.insertRow(rowCounter);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = userObject.studentNo;
        cell2.innerHTML = userObject.name;
        cell3.innerHTML = userObject.age;
        if (userObject.studentNo > 0) {
            cell4.innerHTML = "No";
        } else {
            cell4.innerHTML = "Yes";
        }
        rowCounter++;
    }
    
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
        executeScript(testUser);

        const getUsers = () => [
            {
              studentNo: 123,
              name: 'harry',
              age: 15
            },
            {
              studentNo: 234,
              name: 'Ron',
              age: 16
            },
            {
              studentNo: 135,
              name: 'Hermione',
              age: 17
            },
            {
              studentNo: -1,
              name: 'Snape',
              age: 55
            },
            {
              studentNo: -1,
              name: 'Hagrid',
              age: 65
            }
        ];
        const users = getUsers();
    
        function addUser(userInfo) {
            executeScript(userInfo);
        }
    
        users.forEach(user => {
            addUser(user);
        });

        function getOldest(userObject) {
                let arrayCounter = 0;
                let oldestIndex = 0;
                let oldestAge = 0;
                while (arrayCounter < userObject.length) {
                    if (oldestAge < userObject[arrayCounter].age) {
                        oldestAge = userObject[arrayCounter].age;
                        oldestIndex = arrayCounter;
                    }
                    arrayCounter++;
                }
                console.log('The oldest person in the "users" array is: ', userObject[oldestIndex].name);
        }
        getOldest(users);
    });
})();