import "./ImageSlider.css";

import LazyLoad from "react-lazyload";
import { Skeleton } from "primereact/skeleton";

export default function ImageSlider() {
    return (
        <div className="slider">
            <div className="slides__wrapper">
                <div className="slides">
                    <div className="slide" data-current>
                        <div className="slide__inner">
                            <div className="slide--image__wrapper">
                                <LazyLoad
                                    placeholder={
                                        <Skeleton
                                            width="100%"
                                            height="100%"
                                        ></Skeleton>
                                    }
                                >
                                    <img
                                        className="slide--image"
                                        src="https://source.unsplash.com/Z8dtTatMVMw"
                                        alt="slide 1"
                                    />
                                </LazyLoad>
                            </div>
                        </div>
                    </div>

                    <div className="slide" data-next>
                        <div className="slide__inner">
                            <div className="slide--image__wrapper">
                                <LazyLoad
                                    placeholder={
                                        <Skeleton
                                            width="100%"
                                            height="100%"
                                        ></Skeleton>
                                    }
                                >
                                    <img
                                        className="slide--image"
                                        src="https://source.unsplash.com/9dmycbFE7mQ"
                                        alt="slide 1"
                                    />
                                </LazyLoad>
                            </div>
                        </div>
                    </div>

                    <div className="slide" data-previous>
                        <div className="slide__inner">
                            <div className="slide--image__wrapper">
                                <LazyLoad
                                    placeholder={
                                        <Skeleton
                                            width="100%"
                                            height="100%"
                                        ></Skeleton>
                                    }
                                >
                                    <img
                                        className="slide--image"
                                        src="https://source.unsplash.com/m7K4KzL5aQ8"
                                        alt="slide 1"
                                    />
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slides--infos">
                    <div className="slide-info" data-current>
                        <div className="slide-info__inner">
                            <div className="slide-info--text__wrapper">
                                <div data-title className="slide-info--text">
                                    <span>InnEDU</span>
                                </div>
                                <div data-subtitle className="slide-info--text">
                                    <span>InnEDU</span>
                                </div>
                                <div
                                    data-description
                                    className="slide-info--text"
                                >
                                    <span>InnEDU</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
