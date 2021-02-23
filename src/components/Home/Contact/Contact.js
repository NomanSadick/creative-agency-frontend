import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className=" col-md-5 section-header text-center text-white mr-5 pl-0 pr-0">
                        <h1 className="text-secondary">Let's us handle your <br /> project, professionally</h1>
                        <p className="text-secondary mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit aspernatur exercitationem ut sed commodi.</p>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-left">
                                <button type="button" className="btn btn-brand btn btn-dark px-5"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </section>
    );
};

export default Contact;