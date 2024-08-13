import useGetUserSemesters from "../../../api/userSemesters/useGetUserSemesters";
import { GetUserSemester } from "../../../types";

import PaginationComponent from "./PaginationComponent";

interface IPlanTableProps {
    semesterIDList: number[];
}

const PlanTable = ({ semesterIDList }: IPlanTableProps) => {
    const results = useGetUserSemesters(semesterIDList);

    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);
    const semesters = results.map((result) => result.data) as GetUserSemester[];

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return <PaginationComponent semesters={semesters} />;
};

export default PlanTable;
