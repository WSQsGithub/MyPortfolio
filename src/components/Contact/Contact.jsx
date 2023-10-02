import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <section>
            <h2 className='section__title'>Get in touch</h2>
            <span className='section__subtitle'>Leave a message here!</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bi bi-mailbox contact__cart-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">sq_wang@sjtu.edu.cn</span>
                            <a href="mailto:sq_wang@sjtu.edu.cn" className="contact__button">Write me {" "}
                                <i className="bi bi-arrow-right-short contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bi bi-tencent-qq contact__cart-icon"></i>
                            <h3 className="contact__card-title">QQ</h3>
                            <span className="contact__card-data">809369358</span>
                            <a href="" className="contact__button">Write me {" "}
                                <i className="bi bi-arrow-right-short contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bi bi-messenger contact__cart-icon"></i>
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">siqi.wang.547</span>
                            <a href="" className="contact__button">Write me {" "}
                                <i className="bi bi-arrow-right-short contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write to me about your project</h3>
                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name here" />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email here" />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>
                        </div>
                        <button className="button button--flex">
                            Send Message
                            <i className="bi bi-chat contact__chat"/>
                        </button>
                    </form>
                    

                </div>
            </div>
        </section>
    )
}

export default Contact