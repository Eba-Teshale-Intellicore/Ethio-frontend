import Footer from "@/components/Footer";
import Directory from "@/components/Directory";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <Directory />
        <Footer/>
      </div>
    </main>
  );
}