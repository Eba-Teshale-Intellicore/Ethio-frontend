import Navbar from "@/components/Navbar";
import Directory from "@/components/Directory"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        {/* <Navbar /> */}
        <Directory/>
        <Footer />
      </div>
    </main>
  );
}