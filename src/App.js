import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shop from './components/Pages/Shop/Shop';
function App() {
	return (
		<div>
			<Header />
			<Banner />
			<Shop />
		</div>
	);
}

export default App;
