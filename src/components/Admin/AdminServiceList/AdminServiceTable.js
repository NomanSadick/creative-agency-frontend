import React from 'react';

const AdminServiceTable = ({ adminServiceList }) => {
    return (
       
            <table className="table table-borderless bg-white mt-5 mb-5 rounded">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminServiceList && adminServiceList.map(serviceList =>
                            <tr className="pb-5">
                                <td>{serviceList.name}</td>
                                <td>{serviceList.email}</td>
                                <td>{serviceList.title}</td>
                                <td>{serviceList.description}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
 
    );
};

export default AdminServiceTable;