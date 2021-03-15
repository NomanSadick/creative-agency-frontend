import React, { useEffect, useState } from 'react';
import Slidebar from '../../Customer/Customer/Slidebar/Slidebar';
import AdminServiceTable from './AdminServiceTable';

const AdminServiceList = () => {
    const [adminServiceList, setAdminServiceList] = useState()
    useEffect(() => {
        fetch('https://shrouded-fortress-62693.herokuapp.com/adminServiceList')
            .then(res => res.json())
            .then(data => setAdminServiceList(data))
    }, [])
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Slidebar></Slidebar>
            </div>
            <div className="col-md-9 pr-5 mt-5 " style={{ right: 0, backgroundColor: "#F4F7FC",  marginTop: '20px' }}>
                
                <AdminServiceTable adminServiceList={adminServiceList}/>
                
            </div>
        </div>
    );
};

export default AdminServiceList;