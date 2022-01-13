import { Banner, Navbar, Sidebar, TopArtist } from "./parts/index";

function App() {
  return (
    <div className="flex bg-dark gap-[20px] h-screen sm:auto">
      <Sidebar />
      <div className="flex flex-col w-full gap-[28px] pt-5 sm:pr-5 pr-2">
        <Navbar />
        <div className="flex flex-col gap-6 lg:flex-row">
          <Banner />
          <TopArtist />
        </div>
      </div>
    </div>
  );
}

export default App;
