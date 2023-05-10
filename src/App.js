import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import HeaderSection from "./pages/HeaderSection";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sell from "./pages/Sell";
import Products from "./pages/Products";
import Alberta from "./pages/Alberta";
import BritishColumbia from "./pages/BritishColombia";
import Manitoba from "./pages/Manitoba";
import NewBrunswick from "./pages/NewBrunswick";
import NewfoundlandandLabrador from "./pages/NewfoundlandandLabrador";
import NorthwestTerritories from "./pages/NorthwestTerritories";
import NovaScotia from "./pages/NovaScotia";
import Nunavut from "./pages/Nunavut";
import Ontario from "./pages/Ontario";
import PrinceEdwardIsland from "./pages/PrinceEdwardIsland";
import Quebec from "./pages/Quebec";
import Saskatchewan from "./pages/Saskatchewan";
import Yukon from "./pages/Yukon";
import AllCategories from "./pages/AllCategories";
import MobilePhone from "./pages/MobilePhones";
import CarsAndVehicles from "./pages/CarsAndVehicles";
import RealEstate from "./pages/RealEstate";
import Services from "./pages/Services";
import KidAndToys from "./pages/KidAndToys";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import SportsAndGym from "./pages/SportsAndGym";
import JobsListings from "./pages/JobsListings"; 
import Community from "./pages/Community"; 
import BusinessOpportunities from "./pages/BusinessOpportunities";
import Pets from "./pages/Pets";
import ArtAndCollectibles from "./pages/ArtAndCollectibles";
import Education from "./pages/Education";
import UserProfile from "./pages/UserProfile";
import ProductsDetail from "./pages/ProductsDetail";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import AdsList from "./pages/AdsList";
import Category from "./pages/Category";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/404Page";
import { useEffect } from "react";
import ReactGA from 'react-ga';
import MensFashion from "./pages/MensFashion";
import WomensFashion from "./pages/WomensFashion";
import KidsFashion from "./pages/KidsFashion";

function App() {
 
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "BARTER ONLINE CANADA - MOST VISITED ONLINE CLASSIFIEDS SITE ";
        metaDescription = "Barter Online is one of the most visited online classifieds websites in Canada - We accept Buy & Sell classified ads under almost every category at low rates.";
        break;
      case "/header-section":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sell":
        title = "";
        metaDescription = "";
        break;
      case "/products":
        title = "BARTER ONLINE CANADA - MOST VISITED ONLINE CLASSIFIEDS SITE ";
        metaDescription = "Barter Online is one of the most visited online classifieds websites in Canada - We accept Buy & Sell classified ads under almost every category at low rates.";
        break;
      case "/search-ads-in-alberta":
        title = "Barteronline in Alberta. - Save, Buy and Sell with Canada's premier local classifieds";
        metaDescription = "Find almost anything for sale or trade on BarterOnline.ca! There is virtually no limit to what you can find in Alberta when it comes to cars, real estate, jobs, services, vacation rentals, and more with free classified ads.";
        break;
      case "/search-ads-in-british-columbia":
        title = "BC Free Classified Ads - British Columbia Items For Sale";
        metaDescription = "You can find new and used classified ads on Facebook Marketplace for Vancouver, British Columbia. Free items to buy and sell great deals to find.";
        break;
      case "/search-ads-in-manitoba":
        title = "Buy and sell in Manitoba - Everything you need to know";
        metaDescription = "Almost anything can be sold, traded, or bought on barteronline.ca Free Classified Ads. You can find anything you need in classifieds, including new and used products, jobs, real estate, and cars.";
        break;
      case "/search-ads-in-newbrunswick":
        title = "Free Classified ads in New Brunswick Classifieds";
        metaDescription = "Check out the New Brunswick classifieds today for great deals. Ads for buy and sell real estate, cars, pets, jobs, rentals, and more can be found or posted for free classifieds.";
        break;
      case "/search-ads-in-newfoundlandandlabrador":
        title = "Newfoundland & Labrador Classifieds";
        metaDescription = "Barteronline- a free classified ads website within Newfoundland & Labrador. NL Classifieds offers a wide range of items for sale, rent, and trade. Buy and sell is easy now.";
        break;
      case "/search-ads-in-northwestterritories":
        title = "The Northwest Territories- Free Classified Ads";
        metaDescription = "On Facebook Marketplace, you can find upcoming and used classifieds ads on barteronline.ca, Northwest Territories. You can buy and sell your items for free on this free online marketplace.";
        break;
      case "/search-ads-in-novascotia":
        title = "You'll find everything you need to buy and sell in Nova Scotia";
        metaDescription = "If you are looking for anything, you can find it on barteronline Classifieds. Our site is a one-stop shop for everything you need from new and used items and much more. ";
        break;
      case "/search-ads-in-nunavut":
        title = "Nunavut Classifieds: Items for Sale- free classified ads";
        metaDescription = "You can find anything you need in Nunavut classifieds at barteronline.ca. Get a great deal buy and sell items for free using Marketplace's Classifieds.";
        break;
      case "/search-ads-in-ontario":
        title = "Buy and sell in Ontario with Barteronline.ca";
        metaDescription = "Our free classified ads website allows you to browse local community classified ads. If you have questions about our classifieds, please do not hesitate to contact us for classifieds";
        break;
      case "/search-ads-in-princeedwardisland":
        title = "Advertise in the classifieds for Prince Edward Island";
        metaDescription = "Find great deals today by browsing the Prince Edward Island classifieds at barteronline.ca to buy and sell. We offer free classified ads posting for cars, pets, jobs, and rentals. Would you like to advertise your job? Renting an apartment? ";
        break;
      case "/search-ads-in-quebec":
        title = "Find great deals and sell your items in Quebec.";
        metaDescription = "Sell and buy items with barteronline.ca's free classified ads. How can we help you advertise? You can advertise for free in Quebec with free classifieds.";
        break;
      case "/search-ads-in-saskatchewan":
        title = "Buy and sell in Saskatchewan";
        metaDescription = "Visit barteronline.ca classifieds to buy and sell, or trade almost anything! New and used items are more virtually free classified ads.";
        break;
      case "/search-ads-in-yukon":
        title = "Post free classified ads online, Yukon";
        metaDescription = "Local business listings and classifieds in Yukon! Locally, you can trade, buy and sell on this Yukon classifieds page.";
        break;
      case "/all-categories":
        title = "Barter Online Classified Canada - Largest Buy Sell Online Site";
        metaDescription = "Barter online Canada -largest buy sell online classified site-All Categories- Get noticed by the consumers-Book buy sell classified ads online or call us ";
        break;
      case "/mobile-phone":
        title = "Buy & Sell Ads - Mobile Phones - Barter Online Classifieds";
        metaDescription = "Barter Online is a premium Buy & Sell online Classified site - Post your Mobile Phone ads on Canada’s largest classified site and receive the best deals.";
        break;
      case "/cars-and-vehicles":
        title = "Buy & Sell Cars In Canada - Barter Online Classifieds";
        metaDescription = "Are you looking to buy or sell a car / other vehicle in Canada? Post your ad on Barter Online, Canada’s largest classified site & receive the best offers.";
        break;
      case "/real-estate":
        title = "Buy & Sell Property In Canada - Barter Online Classifieds ";
        metaDescription = "Looking to buy / sell residential, commercial, office property in Canada? Post your ad on Barter Online, Canada's largest classified site & receive best offers.";
        break;
      case "/services":
        title = "Barter Online Classifieds - Buy, Sell Services In Canada";
        metaDescription = "Get connected to those who are looking to source domestic or services that you can provide - Just post your ad on Barter Online, Canada's largest classified site.";
        break;
      case "/kid-and-toys":
        title = "Barter Online Classifieds | Buy, Sell Kids Toys In Canada ";
        metaDescription = "Publish your buy sell classified ads for kids items & toys on Barter Online, largest classified site in Canada - Get a large number of responses - Save on money";
        break;
      case "/furniture":
        title = "Barter Online Canada - Classified Ads - Buy Sell Furniture";
        metaDescription = "Publish your new and used home & office furniture buy sell classified ad on Barter Online, largest classified site in Canada - Get a large number of responses.";
        break;
      case "/electronics":
        title = "Barter Online Classified Ads Canada - Buy Sell Electronics ";
        metaDescription = "Are you looking to buy or sell kids items & toys in Canada? Post your ad on Barter Online, Canada’s largest classified site & receive the best offers.";
        break;
      case "/sports-and-gym":
        title = "Barter Online Classifieds Canada| Buy Sell Sports & Gym Items";
        metaDescription = "Looking to buy or sell sports & Gym items in Canada? Post your ad on Barter Online, Canada's largest classified site - receive best offers in a large number";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/products-detail":
        title = "";
        metaDescription = "";
        break;
      case "/footer":
        title = "";
        metaDescription = "";
        break;
      case "/logindashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/user-list":
        title = "";
        metaDescription = "";
        break;
      case "/ads-list":
        title = "";
        metaDescription = "";
        break;
      case "/category":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
      
    useEffect(() => {
      ReactGA.initialize('UA-264294202-1');
      ReactGA.pageview('Init page view');
    }, []);
 

  return (
    <>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/sell" element={<Sell />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/ads-in-alberta" element={<Alberta />} />

        <Route path="/ads-in-british-columbia" element={<BritishColumbia />} />

        <Route path="/ads-in-manitoba" element={<Manitoba />} />

        <Route path="/ads-in-newbrunswick" element={<NewBrunswick />} />

        <Route path="/ads-in-newfoundlandandlabrador" element={<NewfoundlandandLabrador />} />

        <Route path="/ads-in-northwestterritories" element={<NorthwestTerritories />} />

        <Route path="/ads-in-novascotia" element={<NovaScotia />} />

        <Route path="/ads-in-nunavut" element={<Nunavut />} />

        <Route path="/ads-in-ontario" element={<Ontario />} />

        <Route path="/ads-in-princeedwardisland" element={<PrinceEdwardIsland />} />

        <Route path="/ads-in-quebec" element={<Quebec />} />

        <Route path="/ads-in-saskatchewan" element={<Saskatchewan />} />

        <Route path="/ads-in-yukon" element={<Yukon />} />
        
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/all-categories" element={<AllCategories />} />

        <Route path="/mobile-phone" element={<MobilePhone />} />

        <Route path="/cars-and-vehicles" element={<CarsAndVehicles />} />

        <Route path="/real-estate" element={<RealEstate />} />

        <Route path="/services" element={<Services />} />

        <Route path="/kid-and-toys" element={<KidAndToys />} />

        <Route path="/furniture" element={<Furniture />} />

        <Route path="/electronics" element={<Electronics />} />

        <Route path="/sports-and-gym" element={<SportsAndGym />} />
        
        <Route path="/jobs-listings" element={<JobsListings />} />

        <Route path="/community" element={<Community />} />

        <Route path="/business-opportunities" element={<BusinessOpportunities />} />

        <Route path="/pets" element={<Pets />} />

        <Route path="/mens-fashion" element={<MensFashion />} />

        <Route path="/womens-fashion" element={<WomensFashion />} />
        
        <Route path="/kids-fashion" element={<KidsFashion />} />
        
        <Route path="/art-and-collectibles" element={<ArtAndCollectibles />} />        

        <Route path="/education" element={<Education />} />       

        <Route path="/user-profile" element={<UserProfile />} />

        <Route path="/products-detail/:itemId" element={<ProductsDetail/>}/>

        <Route path="/footer" element={<Footer />} />

        <Route path="/logindashboard" element={<Admin />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/user-list" element={<UserList />} />

        <Route path="/ads-list" element={<AdsList />} />

        <Route path="/category" element={<Category />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
