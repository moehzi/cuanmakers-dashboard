import {
  Banner,
  Navbar,
  RecentActivty,
  Sidebar,
  TopArtist,
} from "./parts/index";

function App() {
  return (
    <div className="flex bg-dark gap-[20px] sm:auto">
      <Sidebar />
      <div className="flex flex-col w-full gap-[28px] pt-5 sm:pr-5 pr-4 sm:pl-0 pl-4">
        <Navbar />
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-col flex-1 gap-[28px] ">
            <Banner />
          </div>
          <div className="lg:max-w-[350px] w-full shrink-0 grow gap-[28px] flex flex-col">
            <TopArtist />
            <RecentActivty />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
