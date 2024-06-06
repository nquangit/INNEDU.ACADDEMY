import PropTypes from "prop-types";
import styled from "styled-components";
import { LazyMotion } from "framer-motion";

const SuggestBookCover = styled.div`
    top: 0;
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

const SuggestCardTag = styled.div`
    position: relative;
    border-radius: 10px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
    padding: 10px;

    &:hover ${SuggestBookCover} {
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-transform: rotatey(-110deg);
        -ms-transform: rotatey(-110deg);
        transform: rotatey(-110deg);
    }
`;

const SuggestCardContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export default function SuggestCard({ title, description, image }) {
    return (
        <SuggestCardTag className="suggest-card">
            <SuggestCardContent>
                <div className="suggest-card__image">
                    <img src={image} alt="suggest" />
                </div>
                <div className="suggest-card__content">
                    <p className="suggest-card__description">{description}</p>
                </div>
            </SuggestCardContent>
            <SuggestBookCover>
                <h1 className="suggest-card__title">{title}</h1>
            </SuggestBookCover>
        </SuggestCardTag>
    );
}

SuggestCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};
