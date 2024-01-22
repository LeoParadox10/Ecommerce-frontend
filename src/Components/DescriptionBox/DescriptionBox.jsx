import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (69)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An E-commerce website is an online platform that enables users to browse, select,
                    and purchase products or services over the internet. It provides a virtual marketplace
                    where businesses showcase their offerings, and customers can conveniently make transactions
                    through secure payment methods. E-commerce websites often feature user-friendly interfaces,
                    personalized shopping experiences, and various tools such as search filters and reviews to
                    enhance the overall online shopping journey. These platforms have become integral in modern
                    retail, offering a convenient and accessible way for consumers to shop from the comfort of
                    their homes.</p>
                <p>An e-commerce website showcases products, ensures secure transactions with encrypted
                    payment gateways, and provides personalized shopping through order tracking and customer
                    accounts.</p>
            </div>
        </div>
    )
}

export default DescriptionBox