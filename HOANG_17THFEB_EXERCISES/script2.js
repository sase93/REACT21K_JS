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

function addUser(userInfo) {
    let userArray = [];
    let counter = 0;
    userInfo = getUsers[counter];

    while (counter < 5) {
        userArray.push(userInfo);
        counter++;
        console.log(userArray);
    };
}