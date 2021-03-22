import { GenreProvider } from "./hooks/useGenre";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  return (
    <GenreProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />

        <div className="container">
          <Header />
          <Content />
        </div>
      </div>
    </GenreProvider>
  );
}
