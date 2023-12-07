"use server"
import * as React from "react";
import NavBar from '../../components/common-components/NavBar'
import HeroSection from "../../components/landing_page_components/hero_section";
import { getDetails, getMenu, getTestimonials } from '../../lib/utils';
import Layout from "../../components/common-components/Layout";
import CTASection from "../../components/landing_page_components/CTA";
import Menu from "../../components/landing_page_components/menu";
import Testimonials from "../../components/landing_page_components/testimonials";
import Footer from "../../components/common-components/Footer";

// @ts-ignore
export default async function Home() {
  const {content, data} = getDetails('landing_page/landing_page.md');
  const ctaData = getDetails('landing_page/cta.md')

  const menu = getMenu()
  const menuDetails = menu.map((itemName) => {
    const {content, data} = getDetails(`landing_page/menu/${itemName}.md`)
    return {
      name: itemName,
      price: data.price,
      image: data.image
    }
  });

  const testimonials = getTestimonials()
  const testimonialsDetails = testimonials.map((itemName) => {
    const {content, data} = getDetails(`landing_page/testimonials/${itemName}.md`)
    return {
      name: itemName,
      image: data.image,
      rating: data.rating,
      content: content
    }
  });
  
  return (
    <Layout>
        <NavBar />
        <HeroSection 
          content={content} 
          bg_url={data.bg_image}
          btn_1={data.btn_1}
          btn_2={data.btn_2}
        />
        <CTASection 
          image={ctaData.data.image}
          btn={ctaData.data.btn}
          heading={ctaData.data.heading}
          content={ctaData.content}
        />
        <Menu menu={menuDetails}/>
        <Testimonials testimonials={testimonialsDetails}/>
        <Footer />
    </Layout>
  )
}
