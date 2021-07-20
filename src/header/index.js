import React from 'react';
import './header.css';
import '../slick.css';
import Header from './header';
import Banner from './banner';

const Index = () => {
    return (
        <>
          <div className="mainBanner">
                <Header />
                <Banner />
                <a href="#latest-product" class="bottom-arrow"><i class="fas fa-arrow-down"></i></a>
            </div>  
        </>
    )
}

export default Index;
