import { ArtistProvider } from "../api/context/ArtistContext";
import { BannerProvider } from "../api/context/BannerContext";
import { VideoProvider } from "../api/context/VideoContext";
import "../globals.css";
import Header from "./component/header/header";
import Sidebar from "./component/sidebar/sidebar";

export const metadata = {
  title: "Spring Tunes Entertainment",
  description: "Music lobby by spring tunes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`antialiased`}>
        <div className="flex">
          <Sidebar />
          <div className="w-full ml-64">
            <Header />
            <ArtistProvider>
              <VideoProvider>
                <BannerProvider>{children}</BannerProvider>
              </VideoProvider>
            </ArtistProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
