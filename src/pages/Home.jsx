import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import SectionTitle from '../components/ui/SectionTitle';

export default function Home() {
    return (
        <>
            <Header />
            <Slider />
            <Banner />
            <SectionTitle title={'title1'}>content1</SectionTitle>
            <Footer />
        </>
    );
}
