import { Component } from 'react';
import MyEditText from './MyEditText';
import MyTable from './MyTable';



var dataSource = [
  {
    id: '1',
    name: 'Mike',
    age: 22,
    address: '10 Downing Street',
  },
  {
    id: '2',
    name: 'John',
    age: 42,
    address: '455 Street',
  },
  {
    id: '3',
    name: 'Jeny',
    age: 30,
    address: '123 Street',
  },
  {
    id: '4',
    name: 'Sara',
    age: 18,
    address: '27 town Street',
  },
];

var columns = [
  {
    id: '1',
    name: 'Name',
    age: 'Age',
    address: 'Address',
  },
];

class App extends Component {

  render() {
    return <div>
      <center>
        HW1
        <MyEditText />
        <br /><hr /><br />
        HW2 <br /><br /><br /><br />
        <MyTable caption='All Users' data={dataSource} columns={columns} />
      </center>
    </div>
  }
}

export default App;
