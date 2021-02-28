(function() {
    function executeScript() {
        function addRow(userObj){
            let newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${userObj.studentNo}</td>
                <td>${userObj.name}</td>
                <td>${userObj.age}</td>
            `;

            document.querySelector('#table .content').appendChild(newRow);
        }
        
        let testStudent = {
            studentNo: "1234567",
            name: "Test User",
            age: "99",
        }

        addRow(testStudent);
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
        executeScript();
    });

})();

//CHECK insertRow() method as well.

        /* const ROW_TAG = document.createElement("tr");
        const NUM_TAG = document.createElement("td");
        const NAME_TAG = document.createElement("td");
        const AGE_TAG = document.createElement("td");

        const NUM = document.createTextNode("1234567");
        const NAME = document.createTextNode("Test User");
        const AGE = document.createTextNode("99");

        ROW_TAG.appendChild(NUM_TAG);
        NUM_TAG.appendChild(NUM);

        ROW_TAG.appendChild(NAME_TAG);
        NAME_TAG.appendChild(NAME);

        ROW_TAG.appendChild(AGE_TAG);
        AGE_TAG.appendChild(AGE);

        const ELEMENT = document.getElementById("table");
        ELEMENT.appendChild(ROW_TAG); */