import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import AboutUsShort from "../components/AboutUs/AboutUsShort";

export default function Home() {
    return (
        <div>
            <HomePageHeader />
            <ImageSlider />
            <AboutUsShort />
        </div>
    );
}
