import PropTypes from "prop-types";

import styled from "styled-components";

const CourseCardBox = styled.div`
    display: flex;
    flex-flow: column;
    border-radius: 5px;
    background-color: var(--primary-color);
    padding: 10px;
    cursor: pointer;
`;

export default function CourseCard({
    name,
    description,
    image,
    price,
    discount,
}) {
    return (
        <CourseCardBox className="course-card">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{description}</p>
            <div className="course-card-footer">
                <span>{price}</span>
                <span>{discount}</span>
            </div>
        </CourseCardBox>
    );
}

CourseCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
};
