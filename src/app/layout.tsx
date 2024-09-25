import Slider from './components/screen_slider';
import './globals.css';
export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <section>
          <Slider />
        </section>
        {children}
        {/* <Slider /> */}
        {/* <main className="overflow-x-hidden">{children}</main> */}
      </body>
    </html>
  );
}
