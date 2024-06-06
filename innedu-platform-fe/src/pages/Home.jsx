import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import AboutUsShort from "../components/AboutUs/AboutUsShort";
import Suggest from "../components/Suggest/Suggest";

export default function Home() {
    return (
        <div>
            <HomePageHeader />
            <ImageSlider />
            <Suggest />
            <AboutUsShort />
        </div>
    );
}
