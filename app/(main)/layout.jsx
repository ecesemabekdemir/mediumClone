import Footer from "@/components/footer/page";
import MainHeader from "@/components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <div>
        <MainHeader />
        {children}
        <Footer />
      </div>
    </>
  );
}
