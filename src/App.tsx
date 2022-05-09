import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyles from "./theme/GlobalStyles";
import Taskbar from "./system/taskbar/taskbar";
import homeImgSrc from "./assets/icons/home.png";
import searchImgSrc from "./assets/icons/search.svg";
import settingsIcon from "./assets/icons/preferences-system.svg";
import fileManagerIcon from "./assets/icons/file-manager.svg";
import appStoreIcon from "./assets/icons/app-store.svg";
import spotifyIcon from "./assets/icons/spotify.svg";
import Desktop from "./system/desktop/desktop";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Desktop
      items={[
        { icon: fileManagerIcon, id: "file-manager", title: "File manager" },
        { icon: spotifyIcon, id: "spotify", title: "Spotify" },
      ]}
    />
    <Taskbar
      items={[
        { icon: homeImgSrc, id: "home", title: "Home" },
        {
          icon: searchImgSrc,
          id: "search",
          title: "Search",
        },
        {
          icon: settingsIcon,
          id: "settings",
          title: "Settings",
        },
        {
          icon: fileManagerIcon,
          id: "file-manager",
          title: "File Manager",
        },
        {
          icon: appStoreIcon,
          id: "app-store",
          title: "App Store",
        },
        {
          icon: spotifyIcon,
          id: "spotify",
          title: "Spotify",
        },
      ]}
    />
  </ThemeProvider>
);

export default App;
