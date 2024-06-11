import CourseList from "../components/CourseList/CourseList";
import CourseSide from "../components/CourseSide/CourseSide";
import { Divider } from "primereact/divider";
import styled from "styled-components";

const CoursesBox = styled.div`
    with: clamp(300px, 80%, 80%);
    padding: 0 20px;
`;

const CoursesContainer = styled.div`
    display: flex;
`;

export default function Courses() {
    return (
        <CoursesBox className="courses">
            <CoursesContainer className="courses-container">
                <CourseSide />
                <Divider layout="vertical" />
                <CourseList />
            </CoursesContainer>
        </CoursesBox>
    );
}
