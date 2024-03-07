import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './Components/FunctionalComp';
import WelcomeStudent from './Components/ClassComp';
import StatePractice from './Components/StatePractice';
import DestructurePractice from './Components/DestructurePracticeFc';
import DestructurePracticeFc from './Components/DestructurePracticeFc';
import DestructurePracticeCc from './Components/DestructurePracticeCc';

function App() {
  return (
    <div className="App">

       {/* <DestructurePracticeFc name="Jeeva"  sportsName="Football"/> */}

       <DestructurePracticeCc name= "Harish" sportsName= "Soccer"/>

      {/* name="Jeeva"  sportsName="Football" */}

      {/* <StatePractice/> */}
       
       {/* <WelcomeStudent/> */}

       {/* <WelcomeMessage name="Ganesh" sportsName ="Eating Game">

        <p>This Is Paragraph</p>

       </WelcomeMessage>

       <WelcomeMessage name="Murugan" sportsName = "Football">
        <center>   
        <table border="2">
          <tr>
            <th width="100" >Degree</th>
            <th width="100" >Dept</th>
            <th width="100" >12th mark</th>
            <th width="100" >10th mark</th>
          </tr>
          <tr >
            <td>BE</td>
            <td>ECE</td>
            <td>1190</td>
            <td>410</td>
          </tr>
        </table>
        </center>
       </WelcomeMessage> 

       <WelcomeMessage name="Jesus" sportsName = "Soccer">
       
          <label htmlFor="">UserName:- </label>
          <input type="text" />
           <br />
           <br />
          <label htmlFor="">Password:- </label>
          <input type="text" />
          <br />
          <br />
          <label htmlFor="">Confirm Password:- </label>
          <input type="text" />
           <br />
           <br />
         <button>Sign Up</button>

       </WelcomeMessage> */}

    </div>
  );
}

export default App;
