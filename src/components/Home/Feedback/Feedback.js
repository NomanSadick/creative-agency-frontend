import React, { useEffect, useState } from 'react';
// import customer1 from '../../../images/customer-1.png'
// import customer2 from '../../../images/customer-2.png'
// import customer3 from '../../../images/customer-3.png'
import FeedbackDetails from './FeedbackDetails/FeedbackDetails';
import './Feedback.css'

// const clientData = [
//     {
//         title: 'CEO Manpol',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
//         clientName: 'Narsh Partik',
//         clientImg: customer1,

//     },
//     {
//         title: 'CEO Manpol',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
//         clientName: 'Miriam Baroom',
//         clientImg: customer2,

//     },
//     {
//         title: 'CEO Manpol',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
//         clientName: 'Bria Baloon',
//         clientImg: customer3,

//     },
// ]

const Feedback = () => {
    const [feedback, setFeedback] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])
    return (
        <section className="container feedback mt-5 mb-5">
            <div className="header-section">
                <div className=" text-center pb-5">
                    <h1>Clients <span className="text-success">Feedback</span></h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-5 pt-5">
                    {
                        feedback && feedback.map(client => <FeedbackDetails client={client}></FeedbackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;