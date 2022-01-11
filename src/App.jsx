import { Navbar, Sidebar } from "./parts/index";

function App() {
  return (
    <div className="flex bg-dark gap-[20px]">
      <Sidebar />
      <div className="flex flex-col w-full gap-[28px] pt-5">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
