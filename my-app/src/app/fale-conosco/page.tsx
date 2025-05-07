import Header from "../Components/Header";
import CallUs from "../Components/CallUs-sections/CallUs";
import Footer from "../Components/Footer";

export default function FaleConosco() {
    return (
        <div className="relative">
            <Header/>
            <div className="flex -z-20 flex-col gap-10 items-center justify-center w-full bg-[#222427] px-5 py-36">
                <CallUs/>
            </div>
            <Footer/>
        </div>
    );
}