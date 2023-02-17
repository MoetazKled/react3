import "./App.css";
import Profile from "./profile/profile";
function App() {
  const handleAlert = e => {
    alert(e);
  };
  return (
    <header className="App-header">
    <Profile
      fullName="Moetaz khaled"
      bio="I am a GoMyCoder"
      profession="Web Developper"
      handleAlert={handleAlert}
    >
      <img src="public/maphoto.jpg" width="200px" height="500px"></img>
    </Profile>
    </header>
  );
}
export default App;