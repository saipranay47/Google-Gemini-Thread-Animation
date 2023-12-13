import ThreadAnimation from "./components/ThreadAnimation";
import Madeby from "./assets/madebypranay.svg";
function App() {
  return (
    <>
      <ThreadAnimation />
      <a
        href="https://saipranay.vercel.app/"
        target="_blank"
        className="fixed bottom-0 left-0 bg-black text-white w-full text-center py-2"
      >
        Made with ♥︎ by Sai Pranay
      </a>
    </>
  );
}

export default App;

