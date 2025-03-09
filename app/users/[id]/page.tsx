import React from "react";

interface Props {
    params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
    return <div>User {id} Detail Page</div>;
};

export default UserDetailPage;
