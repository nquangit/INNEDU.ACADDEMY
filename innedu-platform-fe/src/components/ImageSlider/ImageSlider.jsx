import "./ImageSlider.css";

export default function ImageSlider() {
    return (
        <div className="slider">
            <div className="slides__wrapper">
                <div className="slides">
                    <div className="slide" data-current>
                        <div className="slide__inner">
                            <div className="slide--image__wrapper">
                                <img
                                    className="slide--image"
                                    src="https://source.unsplash.com/Z8dtTatMVMw"
                                    alt="slide 1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="slide" data-next>
                        <div className="slide__inner">
                            <div className="slide--image__wrapper">
                                <img
                                    className="slide--image"
                                    src="https://source.unsplash.com/9dmycbFE7mQ"
                                    alt="slide 1"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="slide__bg"
                        style={{
                            "--bg": "url(https://source.unsplash.com/9dmycbFE7mQ)",
                            "--dir": "1",
                        }}
                        data-next
                    ></div>

                    <div className="slide" data-previous>
                        <div className="slide__inner">
                            <div className="slide--image__wrapper">
                                <img
                                    className="slide--image"
                                    src="https://source.unsplash.com/m7K4KzL5aQ8"
                                    alt="slide 1"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="slide__bg"
                        style={{
                            "--bg": "url(https://source.unsplash.com/m7K4KzL5aQ8)",
                            "--dir": "-1",
                        }}
                        data-previous
                    ></div>
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

                    <div className="slide-info" data-next>
                        <div className="slide-info__inner">
                            <div className="slide-info--text__wrapper">
                                <div data-title className="slide-info--text">
                                    <span>Machu Pichuaaaa</span>
                                </div>
                                <div data-subtitle className="slide-info--text">
                                    <span>Peru</span>
                                </div>
                                <div
                                    data-description
                                    className="slide-info--text"
                                >
                                    <span>Adventure is never far away</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-info" data-previous>
                        <div className="slide-info__inner">
                            <div className="slide-info--text__wrapper">
                                <div data-title className="slide-info--text">
                                    <span>Chamonix</span>
                                </div>
                                <div data-subtitle className="slide-info--text">
                                    <span>France</span>
                                </div>
                                <div
                                    data-description
                                    className="slide-info--text"
                                >
                                    <span>Let your dreams come true</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
