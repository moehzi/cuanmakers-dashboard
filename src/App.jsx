import { Banner, Navbar, Sidebar } from "./parts/index";

function App() {
  return (
    <div className="flex bg-dark gap-[20px] h-screen sm:auto">
      <Sidebar />
      <div className="flex flex-col w-full gap-[28px] pt-5 sm:pr-5 pr-2">
        <Navbar />
        <div>
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default App;
