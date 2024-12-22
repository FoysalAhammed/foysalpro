
import AllProducts from "@/components/AllProducts";
import MegaMenu from "@/components/MegaMenu";
import SeoSection from "@/components/SeoSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import EcomRise from "@/components/EcomRise";
import SlidGallery from "@/components/SliderGallery";
import ReadyToUse from "@/components/ReadyToUse";
import WhyChoseUs from "@/components/WhyChoseUs";
import StunningDemos from "@/components/StunningDemos";
import PageRight from "@/components/PageRight";
import TextLftToRight from "@/components/TextLftToRight";
import AllFeatures from "@/components/AllFeatures";
import CustomerReview from "@/components/CustomerReview";
import MobileFirst from "@/components/MobileFirst";
import Scrolltopbtn from "@/components/Scrolltopbtn";


const Home = async () => {


//   if (dataa.projects?.length === 0) {
//     return (
//  <>
//       <section className="md:bg-[url('/bg_main.svg')] bg-center bg-cover lg:bg-[url('/bg_main.svg')] xl:bg-[url('/bg_main.svg')]  ">
//       <Navbar/>
//       <Categories />
//       <Hero/>
//     <section className="flexStart flex-col paddings mb-16 ">
//     <p className="no-result-text text-center">Comming Soon New Projects</p>
//     </section>
    
//     </section>
//      <NewsSlider/>
//      <AboutBranding/>
//      <SlidGallery/>
//      <ServiceBanner/> 
//      <JoinUs/>
//     <Footer/>  

//  </>
//     )
//   }
  
  return (
<>

<section>
      <Navbar/>
      {/* <Categories /> */}
      <Hero  />
      <StunningDemos  />
      <AllProducts  />
    </section>
    <WhyChoseUs/>
    <PageRight  />
    <ReadyToUse/>
    <TextLftToRight/>
    <AllFeatures/>
    <SlidGallery/>
     <EcomRise/>
     <SeoSection/>
     <MegaMenu/> 
     <CustomerReview/> 
     <MobileFirst/> 
     <JoinUs/>
    <Footer/>  
  <Scrolltopbtn/>
   
</>
  )
};

export default Home;
