import { useState } from "react";
import { Paginator } from "primereact/paginator";

import CourseCard from "../CourseCard/CourseCard";

import styled from "styled-components";

const CourseListContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`;

const CourseListContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 15px;
`;

const PaginatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export default function CourseList() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <CourseListContainer>
            <CourseListContent className="courses-list">
                <CourseCard
                    name="Course 1"
                    description="Description 1"
                    image="https://via.placeholder.com/300x450"
                    price="100.000"
                />
                <CourseCard
                    name="Course 2"
                    description="Description 2"
                    image="https://via.placeholder.com/300x450"
                    price="200.000"
                />
                <CourseCard
                    name="Course 3"
                    description="Description 3"
                    image="https://via.placeholder.com/300x450"
                    price="300.000"
                />
                <CourseCard
                    name="Course 4"
                    description="Description 4"
                    image="https://via.placeholder.com/300x450"
                    price="400.000"
                />
                <CourseCard
                    name="Course 5"
                    description="Description 5"
                    image="https://via.placeholder.com/300x450"
                    price="500.000"
                />
                <CourseCard
                    name="Course 6"
                    description="Description 6"
                    image="https://via.placeholder.com/300x450"
                    price="600.000"
                />
                <CourseCard
                    name="Course 7"
                    description="Description 7"
                    image="https://via.placeholder.com/300x450"
                    price="700.000"
                />
                <CourseCard
                    name="Course 8"
                    description="Description 8"
                    image="https://via.placeholder.com/300x450"
                    price="800.000"
                />
                <CourseCard
                    name="Course 9"
                    description="Description 9"
                    image="https://via.placeholder.com/300x450"
                    price="900.000"
                />
                <CourseCard
                    name="Course 10"
                    description="Description 10"
                    image="https://via.placeholder.com/300x450"
                    price="1000.000"
                />
            </CourseListContent>
            <PaginatorContainer className="paginator">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={120}
                    onPageChange={onPageChange}
                    rowsPerPageOptions={[10, 20, 30]}
                />
            </PaginatorContainer>
        </CourseListContainer>
    );
}
