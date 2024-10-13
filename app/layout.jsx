import "../styles/reset.css";
import "../styles/variable.css";
import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="layout">
        {children}
        <div className="overlay"></div>
      </body>
    </html>
  );
}
