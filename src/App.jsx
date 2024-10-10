import './assets/Style/appStyle.css';
import FunctionClick from './components/FunctionClick';
import PropTutorial from './components/PropTutorial';
import PropTypes from 'prop-types';
import QrGenerator from './components/QrGenerator';
const handleClick=function(){
    alert("Clicked!");
}
function App() {
  
  return <div>
    <div>
      {/* <PropTutorial name ='Velu' age={22} married={true}/>
      <PropTutorial name ={45} age={22} married={false}/>
      <PropTutorial name ='Velu'  married={true}/> */}
      {/* <FunctionClick handleClick = {handleClick} /> */}
      <QrGenerator />
      
    </div>
  </div>
}
PropTutorial.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  married:PropTypes.boolean,
}
PropTutorial.defaultProps={
  name:'None',
  age:0,
  married:'NO'
}

export default App
