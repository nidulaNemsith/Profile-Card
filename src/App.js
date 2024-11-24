import './App.css';
import ProfileCard from './ProfileCard';
import img from './images/me.jpg'

function App() {
  return (
    <div className="App">
      <ProfileCard 
        name = "Nidula Nemsith"
        bio= "A passionate software developer from Sri Lanka"
        imageUrl={img}
      />
      

    </div>
  );
}

export default App;
