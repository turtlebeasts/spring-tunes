import Navbar from "./components/navbar/navbar";
import "./style.css";

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
          href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
