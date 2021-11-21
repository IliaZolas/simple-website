import './home.css';
import Banner from './banner/banner';
import Feed from './feed/feed';

function Home() {
    return (
      <div className="App">
        <Banner />
        <Feed />
      </div>
    );
  }
  
  export default Home;