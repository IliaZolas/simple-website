import './home.css';
import Banner from './banner/banner';
import Feed from './feed/feed';

function Home() {
    return (
      <div className="App">
        <Banner />
        <div className="form">
          <label>Band Name</label>
          <input type="text" name="bandName"></input>
          <label>Band Review</label>
          <input type="text" name="bandReview"></input>
          <button>Submit</button>
        </div>
        <Feed />
      </div>
    );
  }
  
  export default Home;