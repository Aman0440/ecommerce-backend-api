import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h1>Welcome to MyStore</h1>
        <p>Your favorite online shopping destination</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  }
};

export default Home;