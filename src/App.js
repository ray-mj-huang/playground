import './App.css';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>Without box-shadow transforms</h2>
        <div className="thing">
          <img src="https://pbs.twimg.com/media/CtwEYeHXgAAFWJA?format=jpg&name=large" alt="" />
        </div>
      </div>
      <div>
        <h2>With box-shadow transforms</h2>
        <div className="thing threed">
          <img src="https://pbs.twimg.com/media/CtwEYeHXgAAFWJA?format=jpg&name=large" alt="" />
        </div>
      </div>      
    </div>
  );
}

export default App;
