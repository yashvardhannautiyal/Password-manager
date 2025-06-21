import Footer from "./Components/Footer/Footer";
import Manager from "./Components/Manager/Manager";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <div className="flex flex-col h-screen">
      <main className="flex-grow">
      <Navbar />
      <Manager />
      </main>
      <Footer className="mt-auto"/>
      </div>
    </>
  );
}
export default App;
