import PropTypes from "prop-types";

import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { Skeleton } from "primereact/skeleton";

const CourseCardDescription = styled.div`
    padding: 10px;
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color: #f5f5f5;
    width: 100%;
    color: #212121;
    height: 60%;
    bottom: 0;
    border-radius: 6px;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const CourseCardAdd = styled.div`
    position: absolute;
    width: 120%;
    height: 90px;
    transform: translateY(100%) translateX(5%);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    bottom: -10px;
    left: 0;
    background-color: var(--primary-color);
    display: flex;
    flex-flow: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: default;
    font-size: 1.1rem;
`;

const CourseCardBox = styled.div`
    display: flex;
    flex-flow: column;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow: hidden;
    min-width: 170px;
    max-width: 170px;

    &:hover ${CourseCardDescription} {
        transform: translateY(100%);
    }

    &:hover ${CourseCardAdd} {
        transform: rotate(-5deg) translateX(-10%);
    }
`;

const CourseCardImg = styled.img`
    height: auto;
    width: 100%;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: #0a3394;
    background: linear-gradient(to top, #0a3394, #4286f4);
`;

const CourseCardAddButton = styled.button`
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-size: 2rem;
`;

export default function CourseCard({ name, description, image, price }) {
    return (
        <CourseCardBox className="course-card">
            <LazyLoad
                placeholder={<Skeleton width="100%" height="100%"></Skeleton>}
            >
                <CourseCardImg
                    className="course-card-img"
                    src={image}
                    alt={name}
                />
            </LazyLoad>
            <CourseCardDescription className="card-description">
                <p className="text-title">{name}</p>
                <p className="text-body">
                    <span>
                        {description.length > 100
                            ? `${description.substring(0, 100)}...`
                            : description}
                    </span>
                </p>
            </CourseCardDescription>

            <CourseCardAdd className="card-add">
                <div
                    style={{
                        transform: "rotate(5deg)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: "15px",
                    }}
                >
                    <span className="course-card-price">{price}đ</span>
                    <CourseCardAddButton>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfmkufkr.json"
                            trigger="hover"
                            colors="primary:#fff"
                            style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                    </CourseCardAddButton>
                </div>
            </CourseCardAdd>
        </CourseCardBox>
    );
}

CourseCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};
