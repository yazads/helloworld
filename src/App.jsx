import logo from './logo.svg';
import './App.css';
import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import {Col, Row, Space} from 'antd';

function App() {
  return (
    <div className="App">
		<Space>
			Welcome
			<br></br>
			<Row>
				{/* <img src={image1} alt={image1} width = {400}/> */}
				<img src={image2} alt={image2} width = {400}/>
				<img src={image3} alt={image3} width = {400} height={533}/>
			</Row>
		</Space>
    </div>
  );
}

export default App;
