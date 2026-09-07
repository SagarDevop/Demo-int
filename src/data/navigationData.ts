export interface NavSubItem {
  label: string;
  url: string;
  path: string;
}

export interface NavItem {
  label: string;
  url?: string;
  path?: string;
  children?: NavSubItem[];
}

export const navigationData: NavItem[] = [
  {
    label: "Specialist",
    children: [
      {
        label: "Interior Design & Decoration",
        url: "https://4lotusinterior.in/interior-designers.html",
        path: "/interior-designers",
      },
      {
        label: "Bathroom Design & Renovation",
        url: "https://4lotusinterior.in/bathroom-remodelers.html",
        path: "/bathroom-remodelers",
      },
      {
        label: "Kitchen Design & Remodeling",
        url: "https://4lotusinterior.in/kitchen-remodelers.html",
        path: "/kitchen-remodelers",
      },
      {
        label: "Furniture Design & Manufacturing",
        url: "https://4lotusinterior.in/furniture-manufacturer.html",
        path: "/furniture-manufacturer",
      },
    ],
  },
  {
    label: "Residential",
    children: [
      {
        label: "Residential Interior Architecture",
        url: "https://4lotusinterior.in/residential-interior.html",
        path: "/residential-interior",
      },
      {
        label: "Luxury Home Interior",
        url: "https://4lotusinterior.in/home-interior.html",
        path: "/home-interior",
      },
      {
        label: "Bungalow Interior Design",
        url: "https://4lotusinterior.in/bungalow-interior.html",
        path: "/bungalow-interior",
      },
      {
        label: "Flat Interior Renovation",
        url: "https://4lotusinterior.in/flat-interior.html",
        path: "/flat-interior",
      },
      {
        label: "Apartment Interior Design",
        url: "https://4lotusinterior.in/apartment-interior.html",
        path: "/apartment-interior",
      },
      {
        label: "Luxury Villa Interior",
        url: "https://4lotusinterior.in/villa-interior.html",
        path: "/villa-interior",
      },
      {
        label: "Sky Penthouse Interior",
        url: "https://4lotusinterior.in/penthouse-interior.html",
        path: "/penthouse-interior",
      },
      {
        label: "Country Farmhouse Interior",
        url: "https://4lotusinterior.in/farmhouse-interior.html",
        path: "/farmhouse-interior",
      },
    ],
  },
  {
    label: "Commercial",
    children: [
      {
        label: "Commercial Space Architecture",
        url: "https://4lotusinterior.in/commercial-interior.html",
        path: "/commercial-interior",
      },
      {
        label: "Corporate Office Design",
        url: "https://4lotusinterior.in/office-interior.html",
        path: "/office-interior",
      },
      {
        label: "Boutique Retail Shop Interior",
        url: "https://4lotusinterior.in/shop-interior.html",
        path: "/shop-interior",
      },
      {
        label: "Flagship Showroom Interior",
        url: "https://4lotusinterior.in/showroom-interior.html",
        path: "/showroom-interior",
      },
      {
        label: "Fine Dining Restaurant Interior",
        url: "https://4lotusinterior.in/restaurant-interior.html",
        path: "/restaurant-interior",
      },
      {
        label: "Lounge & Pub Interior",
        url: "https://4lotusinterior.in/pub-interior.html",
        path: "/pub-interior",
      },
      {
        label: "Luxury Salon & Spa Interior",
        url: "https://4lotusinterior.in/salon-interior.html",
        path: "/salon-interior",
      },
      {
        label: "Healthcare Hospital Interior",
        url: "https://4lotusinterior.in/hospital-interior.html",
        path: "/hospital-interior",
      },
      {
        label: "Modern Clinic & OPD Interior",
        url: "https://4lotusinterior.in/clinic-interior.html",
        path: "/clinic-interior",
      },
      {
        label: "Hospitality Hotel Interior",
        url: "https://4lotusinterior.in/hotel-interior.html",
        path: "/hotel-interior",
      },
      {
        label: "Fitness Center & Gym Interior",
        url: "https://4lotusinterior.in/gym-interior.html",
        path: "/gym-interior",
      },
      {
        label: "Play School & Academy Interior",
        url: "https://4lotusinterior.in/school-interior.html",
        path: "/school-interior",
      },
      {
        label: "Banquet Hall & Event Venue",
        url: "https://4lotusinterior.in/banquet-hall-interior.html",
        path: "/banquet-hall-interior",
      },
    ],
  },
  {
    label: "Availability",
    children: [
      {
        label: "Delhi NCR Region",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-delhi.html",
        path: "/interior-designers-decorators-in-delhi",
      },
      {
        label: "Gurgaon (Gurugram)",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-gurgaon.html",
        path: "/interior-designers-decorators-in-gurgaon",
      },
      {
        label: "Noida & Greater Noida",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-noida.html",
        path: "/interior-designers-decorators-in-noida",
      },
      {
        label: "Faridabad",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-faridabad.html",
        path: "/interior-designers-decorators-in-faridabad",
      },
      {
        label: "Sonipat",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-sonipat.html",
        path: "/interior-designers-decorators-in-sonipat",
      },
      {
        label: "Ghaziabad",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-ghaziabad.html",
        path: "/interior-designers-decorators-in-ghaziabad",
      },
      {
        label: "South Delhi",
        url: "https://4lotusinterior.in/interior-designers-south-delhi.html",
        path: "/interior-designers-south-delhi",
      },
      {
        label: "Dwarka",
        url: "https://4lotusinterior.in/interior-designers-dwarka.html",
        path: "/interior-designers-dwarka",
      },
      {
        label: "Greater Kailash (GK)",
        url: "https://4lotusinterior.in/interior-designers-greater-kailash.html",
        path: "/interior-designers-greater-kailash",
      },
      {
        label: "Vasant Kunj",
        url: "https://4lotusinterior.in/interior-designers-vasant-kunj.html",
        path: "/interior-designers-vasant-kunj",
      },
      {
        label: "Saket",
        url: "https://4lotusinterior.in/interior-designers-saket.html",
        path: "/interior-designers-saket",
      },
      {
        label: "Lajpat Nagar",
        url: "https://4lotusinterior.in/interior-designers-lajpat-nagar.html",
        path: "/interior-designers-lajpat-nagar",
      },
      {
        label: "Janak Puri",
        url: "https://4lotusinterior.in/interior-designers-janakpuri.html",
        path: "/interior-designers-janakpuri",
      },
      {
        label: "Kirti Nagar",
        url: "https://4lotusinterior.in/interior-designers-kirti-nagar.html",
        path: "/interior-designers-kirti-nagar",
      },
      {
        label: "Punjabi Bagh",
        url: "https://4lotusinterior.in/interior-designers-punjabi-bagh.html",
        path: "/interior-designers-punjabi-bagh",
      },
      {
        label: "Rohini",
        url: "https://4lotusinterior.in/interior-designers-rohini.html",
        path: "/interior-designers-rohini",
      },
      {
        label: "Karol Bagh",
        url: "https://4lotusinterior.in/interior-designers-karol-bagh.html",
        path: "/interior-designers-karol-bagh",
      },
      {
        label: "Paschim Vihar",
        url: "https://4lotusinterior.in/interior-designers-paschim-vihar.html",
        path: "/interior-designers-paschim-vihar",
      },
      {
        label: "Patel Nagar",
        url: "https://4lotusinterior.in/interior-designers-patel-nagar.html",
        path: "/interior-designers-patel-nagar",
      },
      {
        label: "East Delhi",
        url: "https://4lotusinterior.in/interior-designers-east-delhi.html",
        path: "/interior-designers-east-delhi",
      },
      {
        label: "North Delhi",
        url: "https://4lotusinterior.in/interior-designers-north-delhi.html",
        path: "/interior-designers-north-delhi",
      },
      {
        label: "West Delhi",
        url: "https://4lotusinterior.in/interior-designers-west-delhi.html",
        path: "/interior-designers-west-delhi",
      },
      {
        label: "Uttam Nagar",
        url: "https://4lotusinterior.in/interior-designers-uttam-nagar.html",
        path: "/interior-designers-uttam-nagar",
      },
      {
        label: "Vikas Puri",
        url: "https://4lotusinterior.in/interior-designers-vikas-puri.html",
        path: "/interior-designers-vikas-puri",
      },
      {
        label: "Vishal Enclave",
        url: "https://4lotusinterior.in/interior-designers-vishal-enclave.html",
        path: "/interior-designers-vishal-enclave",
      },
      {
        label: "Naraina",
        url: "https://4lotusinterior.in/interior-designers-naraina.html",
        path: "/interior-designers-naraina",
      },
      {
        label: "Najafgarh",
        url: "https://4lotusinterior.in/interior-designers-najafgarh.html",
        path: "/interior-designers-najafgarh",
      },
      {
        label: "Rajouri Garden",
        url: "https://4lotusinterior.in/interior-designers-rajouri-garden.html",
        path: "/interior-designers-rajouri-garden",
      },
      {
        label: "Tilak Nagar",
        url: "https://4lotusinterior.in/interior-designers-tilak-nagar.html",
        path: "/interior-designers-tilak-nagar",
      },
      {
        label: "Safdarjung Enclave",
        url: "https://4lotusinterior.in/interior-designers-safdarjung-enclave.html",
        path: "/interior-designers-safdarjung-enclave",
      },
       {
        label: "Shakti Nagar",
        url: "https://4lotusinterior.in/interior-designers-shakti-nagar.html",
        path: "/interior-designers-shakti-nagar",
      },
      {
        label: "Pitampura",
        url: "https://4lotusinterior.in/interior-designers-pitampura.html",
        path: "/interior-designers-pitampura",
      },
      
      
    ],
  },
  {
    label: "Contact",
    url: "https://4lotusinterior.in/contact-us.html",
    path: "/contact-us",
  },
  {
    label: "Source",
    children: [
      {
        label: "Interior Designer and Decorator Company in Delhi",
        url: "https://www.4lotus.co/",
        path: "/",
      },
      {
        label: "Apartment Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/apartment-interior.html",
        path: "/apartment-interior",
      },
      {
        label: "Banquet Hall Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/banquet-hall-interior.html",
        path: "/banquet-hall-interior",
      },
      {
        label: "Bathroom Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/bathroom-remodelers.html",
        path: "/bathroom-remodelers",
      },
      {
        label: "Bungalow Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/bungalow-interior.html",
        path: "/bungalow-interior",
      },
      {
        label: "Clinic Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/clinic-interior.html",
        path: "/clinic-interior",
      },
      {
        label: "Commercial Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/commercial-interior.html",
        path: "/commercial-interior",
      },
      {
        label: "Interior Designer and Decorator Contact in Delhi",
        url: "https://www.4lotus.co/contact-us.html",
        path: "/contact-us",
      },
      {
        label: "Farmhouse Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/farmhouse-interior.html",
        path: "/farmhouse-interior",
      },
      {
        label: "Flat Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/flat-interior.html",
        path: "/flat-interior",
      },
      {
        label: "Furniture Designer and Manufacturer in Delhi",
        url: "https://www.4lotus.co/furniture-manufacturer.html",
        path: "/furniture-manufacturer",
      },
      {
        label: "Gym Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/gym-interior.html",
        path: "/gym-interior",
      },
      {
        label: "Home Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/home-interior.html",
        path: "/home-interior",
      },
      {
        label: "Hospital Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/hospital-interior.html",
        path: "/hospital-interior",
      },
      {
        label: "Hotel Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/hotel-interior.html",
        path: "/hotel-interior",
      },
      {
        label: "Interior Designer and Decorator Profile in Delhi",
        url: "https://www.4lotus.co/interior-company-profile.html",
        path: "/about",
      },
      {
        label: "Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/interior-designers-decorators-in-delhi.html",
        path: "/interior-designers-decorators-in-delhi",
      },
      {
        label: "Interior Designer and Decorator in Faridabad",
        url: "https://www.4lotus.co/interior-designers-decorators-in-faridabad.html",
        path: "/interior-designers-decorators-in-faridabad",
      },
      {
        label: "Interior Designer and Decorator in Ghaziabad",
        url: "https://www.4lotus.co/interior-designers-decorators-in-ghaziabad.html",
        path: "/interior-designers-decorators-in-ghaziabad",
      },
      {
        label: "Interior Designer and Decorator in Gurgaon",
        url: "https://www.4lotus.co/interior-designers-decorators-in-gurgaon.html",
        path: "/interior-designers-decorators-in-gurgaon",
      },
      {
        label: "Interior Designer and Decorator in Noida",
        url: "https://www.4lotus.co/interior-designers-decorators-in-noida.html",
        path: "/interior-designers-decorators-in-noida",
      },
      {
        label: "Interior Designer and Decorator in Sonipat",
        url: "https://www.4lotus.co/interior-designers-decorators-in-sonipat.html",
        path: "/interior-designers-decorators-in-sonipat",
      },
      {
        label: "Interior Designer and Decorator in Chandni Chowk Delhi",
        url: "https://www.4lotus.co/interior-designers-chandni-chowk.html",
        path: "/interior-designers-chandni-chowk",
      },
      {
        label: "Interior Designer and Decorator in Dwarka Delhi",
        url: "https://www.4lotus.co/interior-designers-dwarka.html",
        path: "/interior-designers-dwarka",
      },
      {
        label: "Interior Designer and Decorator in East Delhi",
        url: "https://www.4lotus.co/interior-designers-east-delhi.html",
        path: "/interior-designers-east-delhi",
      },
      {
        label: "Interior Designer and Decorator in Greater Kailash Delhi",
        url: "https://www.4lotus.co/interior-designers-greater-kailash.html",
        path: "/interior-designers-greater-kailash",
      },
      {
        label: "Interior Designer and Decorator in Janakpuri Delhi",
        url: "https://www.4lotus.co/interior-designers-janakpuri.html",
        path: "/interior-designers-janakpuri",
      },
      {
        label: "Interior Designer and Decorator in Karol Bagh Delhi",
        url: "https://www.4lotus.co/interior-designers-karol-bagh.html",
        path: "/interior-designers-karol-bagh",
      },
      {
        label: "Interior Designer and Decorator in Kirti Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-kirti-nagar.html",
        path: "/interior-designers-kirti-nagar",
      },
      {
        label: "Interior Designer and Decorator in Lajpat Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-lajpat-nagar.html",
        path: "/interior-designers-lajpat-nagar",
      },
      {
        label: "Interior Designer and Decorator in Najafgarh Delhi",
        url: "https://www.4lotus.co/interior-designers-najafgarh.html",
        path: "/interior-designers-najafgarh",
      },
      {
        label: "Interior Designer and Decorator in Naraina Delhi",
        url: "https://www.4lotus.co/interior-designers-naraina.html",
        path: "/interior-designers-naraina",
      },
      {
        label: "Interior Designer and Decorator in North Delhi",
        url: "https://www.4lotus.co/interior-designers-north-delhi.html",
        path: "/interior-designers-north-delhi",
      },
      {
        label: "Interior Designer and Decorator in Paschim Vihar Delhi",
        url: "https://www.4lotus.co/interior-designers-paschim-vihar.html",
        path: "/interior-designers-paschim-vihar",
      },
      {
        label: "Interior Designer and Decorator in Patel Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-patel-nagar.html",
        path: "/interior-designers-patel-nagar",
      },
      {
        label: "Interior Designer and Decorator in Pitampura Delhi",
        url: "https://www.4lotus.co/interior-designers-pitampura.html",
        path: "/interior-designers-pitampura",
      },
      {
        label: "Interior Designer and Decorator in Punjabi Bagh Delhi",
        url: "https://www.4lotus.co/interior-designers-punjabi-bagh.html",
        path: "/interior-designers-punjabi-bagh",
      },
      {
        label: "Interior Designer and Decorator in Rajouri Garden Delhi",
        url: "https://www.4lotus.co/interior-designers-rajouri-garden.html",
        path: "/interior-designers-rajouri-garden",
      },
      {
        label: "Interior Designer and Decorator in Rani Bagh Delhi",
        url: "https://www.4lotus.co/interior-designers-rani-bagh.html",
        path: "/interior-designers-rani-bagh",
      },
      {
        label: "Interior Designer and Decorator in Rohini Delhi",
        url: "https://www.4lotus.co/interior-designers-rohini.html",
        path: "/interior-designers-rohini",
      },
      {
        label: "Interior Designer and Decorator in Safdarjung Enclave Delhi",
        url: "https://www.4lotus.co/interior-designers-safdarjung-enclave.html",
        path: "/interior-designers-safdarjung-enclave",
      },
      {
        label: "Interior Designer and Decorator in Shakti Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-shakti-nagar.html",
        path: "/interior-designers-shakti-nagar",
      },
      {
        label: "Interior Designer and Decorator in South Delhi",
        url: "https://www.4lotus.co/interior-designers-south-delhi.html",
        path: "/interior-designers-south-delhi",
      },
      {
        label: "Interior Designer and Decorator in Tilak Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-tilak-nagar.html",
        path: "/interior-designers-tilak-nagar",
      },
      {
        label: "Interior Designer and Decorator in Uttam Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-uttam-nagar.html",
        path: "/interior-designers-uttam-nagar",
      },
      {
        label: "Interior Designer and Decorator in Vasant Kunj Delhi",
        url: "https://www.4lotus.co/interior-designers-vasant-kunj.html",
        path: "/interior-designers-vasant-kunj",
      },
      {
        label: "Interior Designer and Decorator in Vikas Puri Delhi",
        url: "https://www.4lotus.co/interior-designers-vikas-puri.html",
        path: "/interior-designers-vikas-puri",
      },
      {
        label: "Interior Designer and Decorator in Vishal Enclave Delhi",
        url: "https://www.4lotus.co/interior-designers-vishal-enclave.html",
        path: "/interior-designers-vishal-enclave",
      },
      {
        label: "Interior Designer and Decorator in West Delhi",
        url: "https://www.4lotus.co/interior-designers-west-delhi.html",
        path: "/interior-designers-west-delhi",
      },
      {
        label: "Interior Designer and Decorator in New Delhi",
        url: "https://www.4lotus.co/interior-designers.html",
        path: "/interior-designers",
      },
      {
        label: "Kitchen Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/kitchen-remodelers.html",
        path: "/kitchen-remodelers",
      },
      {
        label: "Office Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/office-interior.html",
        path: "/office-interior",
      },
      {
        label: "Penthouse Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/penthouse-interior.html",
        path: "/penthouse-interior",
      },
      {
        label: "Pub Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/pub-interior.html",
        path: "/pub-interior",
      },
      {
        label: "Residential Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/residential-interior.html",
        path: "/residential-interior",
      },
      {
        label: "Restaurant Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/restaurant-interior.html",
        path: "/restaurant-interior",
      },
      {
        label: "Salon Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/salon-interior.html",
        path: "/salon-interior",
      },
      {
        label: "Play School Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/school-interior.html",
        path: "/school-interior",
      },
      {
        label: "Shop Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/shop-interior.html",
        path: "/shop-interior",
      },
      {
        label: "Showroom Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/showroom-interior.html",
        path: "/showroom-interior",
      },
      {
        label: "Villa Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/villa-interior.html",
        path: "/villa-interior",
      },
      {
        label: "4 Lotus Interior Html Sitemap",
        url: "https://4lotusinterior.in/sitemap.html",
        path: "/sitemap",
      },
    ],
  },
];
