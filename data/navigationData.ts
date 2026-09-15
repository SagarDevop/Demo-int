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
        url: "https://4lotusinterior.in/interior-designers",
        path: "/interior-designers",
      },
      {
        label: "Bathroom Design & Renovation",
        url: "https://4lotusinterior.in/bathroom-remodelers",
        path: "/bathroom-remodelers",
      },
      {
        label: "Kitchen Design & Remodeling",
        url: "https://4lotusinterior.in/kitchen-remodelers",
        path: "/kitchen-remodelers",
      },
      {
        label: "Furniture Design & Manufacturing",
        url: "https://4lotusinterior.in/furniture-manufacturer",
        path: "/furniture-manufacturer",
      },
    ],
  },
  {
    label: "Residential",
    children: [
      {
        label: "Residential Interior Architecture",
        url: "https://4lotusinterior.in/residential-interior",
        path: "/residential-interior",
      },
      {
        label: "Luxury Home Interior",
        url: "https://4lotusinterior.in/home-interior",
        path: "/home-interior",
      },
      {
        label: "Bungalow Interior Design",
        url: "https://4lotusinterior.in/bungalow-interior",
        path: "/bungalow-interior",
      },
      {
        label: "Flat Interior Renovation",
        url: "https://4lotusinterior.in/flat-interior",
        path: "/flat-interior",
      },
      {
        label: "Apartment Interior Design",
        url: "https://4lotusinterior.in/apartment-interior",
        path: "/apartment-interior",
      },
      {
        label: "Luxury Villa Interior",
        url: "https://4lotusinterior.in/villa-interior",
        path: "/villa-interior",
      },
      {
        label: "Sky Penthouse Interior",
        url: "https://4lotusinterior.in/penthouse-interior",
        path: "/penthouse-interior",
      },
      {
        label: "Country Farmhouse Interior",
        url: "https://4lotusinterior.in/farmhouse-interior",
        path: "/farmhouse-interior",
      },
    ],
  },
  {
    label: "Commercial",
    children: [
      {
        label: "Commercial Space Architecture",
        url: "https://4lotusinterior.in/commercial-interior",
        path: "/commercial-interior",
      },
      {
        label: "Corporate Office Design",
        url: "https://4lotusinterior.in/office-interior",
        path: "/office-interior",
      },
      {
        label: "Boutique Retail Shop Interior",
        url: "https://4lotusinterior.in/shop-interior",
        path: "/shop-interior",
      },
      {
        label: "Flagship Showroom Interior",
        url: "https://4lotusinterior.in/showroom-interior",
        path: "/showroom-interior",
      },
      {
        label: "Fine Dining Restaurant Interior",
        url: "https://4lotusinterior.in/restaurant-interior",
        path: "/restaurant-interior",
      },
      {
        label: "Lounge & Pub Interior",
        url: "https://4lotusinterior.in/pub-interior",
        path: "/pub-interior",
      },
      {
        label: "Luxury Salon & Spa Interior",
        url: "https://4lotusinterior.in/salon-interior",
        path: "/salon-interior",
      },
      {
        label: "Healthcare Hospital Interior",
        url: "https://4lotusinterior.in/hospital-interior",
        path: "/hospital-interior",
      },
      {
        label: "Modern Clinic & OPD Interior",
        url: "https://4lotusinterior.in/clinic-interior",
        path: "/clinic-interior",
      },
      {
        label: "Hospitality Hotel Interior",
        url: "https://4lotusinterior.in/hotel-interior",
        path: "/hotel-interior",
      },
      {
        label: "Fitness Center & Gym Interior",
        url: "https://4lotusinterior.in/gym-interior",
        path: "/gym-interior",
      },
      {
        label: "Play School & Academy Interior",
        url: "https://4lotusinterior.in/school-interior",
        path: "/school-interior",
      },
      {
        label: "Banquet Hall & Event Venue",
        url: "https://4lotusinterior.in/banquet-hall-interior",
        path: "/banquet-hall-interior",
      },
    ],
  },
  {
    label: "Availability",
    children: [
      {
        label: "Delhi NCR Region",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-delhi",
        path: "/interior-designers-decorators-in-delhi",
      },
      {
        label: "Gurgaon (Gurugram)",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-gurgaon",
        path: "/interior-designers-decorators-in-gurgaon",
      },
      {
        label: "Noida & Greater Noida",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-noida",
        path: "/interior-designers-decorators-in-noida",
      },
      {
        label: "Faridabad",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-faridabad",
        path: "/interior-designers-decorators-in-faridabad",
      },
      {
        label: "Sonipat",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-sonipat",
        path: "/interior-designers-decorators-in-sonipat",
      },
      {
        label: "Ghaziabad",
        url: "https://4lotusinterior.in/interior-designers-decorators-in-ghaziabad",
        path: "/interior-designers-decorators-in-ghaziabad",
      },
      {
        label: "South Delhi",
        url: "https://4lotusinterior.in/interior-designers-south-delhi",
        path: "/interior-designers-south-delhi",
      },
      {
        label: "Dwarka",
        url: "https://4lotusinterior.in/interior-designers-dwarka",
        path: "/interior-designers-dwarka",
      },
      {
        label: "Greater Kailash (GK)",
        url: "https://4lotusinterior.in/interior-designers-greater-kailash",
        path: "/interior-designers-greater-kailash",
      },
      {
        label: "Vasant Kunj",
        url: "https://4lotusinterior.in/interior-designers-vasant-kunj",
        path: "/interior-designers-vasant-kunj",
      },
      {
        label: "Saket",
        url: "https://4lotusinterior.in/interior-designers-saket",
        path: "/interior-designers-saket",
      },
      {
        label: "Lajpat Nagar",
        url: "https://4lotusinterior.in/interior-designers-lajpat-nagar",
        path: "/interior-designers-lajpat-nagar",
      },
      {
        label: "Janak Puri",
        url: "https://4lotusinterior.in/interior-designers-janakpuri",
        path: "/interior-designers-janakpuri",
      },
      {
        label: "Kirti Nagar",
        url: "https://4lotusinterior.in/interior-designers-kirti-nagar",
        path: "/interior-designers-kirti-nagar",
      },
      {
        label: "Punjabi Bagh",
        url: "https://4lotusinterior.in/interior-designers-punjabi-bagh",
        path: "/interior-designers-punjabi-bagh",
      },
      {
        label: "Rohini",
        url: "https://4lotusinterior.in/interior-designers-rohini",
        path: "/interior-designers-rohini",
      },
      {
        label: "Karol Bagh",
        url: "https://4lotusinterior.in/interior-designers-karol-bagh",
        path: "/interior-designers-karol-bagh",
      },
      {
        label: "Paschim Vihar",
        url: "https://4lotusinterior.in/interior-designers-paschim-vihar",
        path: "/interior-designers-paschim-vihar",
      },
      {
        label: "Patel Nagar",
        url: "https://4lotusinterior.in/interior-designers-patel-nagar",
        path: "/interior-designers-patel-nagar",
      },
      {
        label: "East Delhi",
        url: "https://4lotusinterior.in/interior-designers-east-delhi",
        path: "/interior-designers-east-delhi",
      },
      {
        label: "North Delhi",
        url: "https://4lotusinterior.in/interior-designers-north-delhi",
        path: "/interior-designers-north-delhi",
      },
      {
        label: "West Delhi",
        url: "https://4lotusinterior.in/interior-designers-west-delhi",
        path: "/interior-designers-west-delhi",
      },
      {
        label: "Uttam Nagar",
        url: "https://4lotusinterior.in/interior-designers-uttam-nagar",
        path: "/interior-designers-uttam-nagar",
      },
      {
        label: "Vikas Puri",
        url: "https://4lotusinterior.in/interior-designers-vikas-puri",
        path: "/interior-designers-vikas-puri",
      },
      {
        label: "Vishal Enclave",
        url: "https://4lotusinterior.in/interior-designers-vishal-enclave",
        path: "/interior-designers-vishal-enclave",
      },
      {
        label: "Naraina",
        url: "https://4lotusinterior.in/interior-designers-naraina",
        path: "/interior-designers-naraina",
      },
      {
        label: "Najafgarh",
        url: "https://4lotusinterior.in/interior-designers-najafgarh",
        path: "/interior-designers-najafgarh",
      },
      {
        label: "Rajouri Garden",
        url: "https://4lotusinterior.in/interior-designers-rajouri-garden",
        path: "/interior-designers-rajouri-garden",
      },
      {
        label: "Tilak Nagar",
        url: "https://4lotusinterior.in/interior-designers-tilak-nagar",
        path: "/interior-designers-tilak-nagar",
      },
      {
        label: "Safdarjung Enclave",
        url: "https://4lotusinterior.in/interior-designers-safdarjung-enclave",
        path: "/interior-designers-safdarjung-enclave",
      },
       {
        label: "Shakti Nagar",
        url: "https://4lotusinterior.in/interior-designers-shakti-nagar",
        path: "/interior-designers-shakti-nagar",
      },
      {
        label: "Pitampura",
        url: "https://4lotusinterior.in/interior-designers-pitampura",
        path: "/interior-designers-pitampura",
      },
      
      
    ],
  },
  {
    label: "Contact",
    url: "https://4lotusinterior.in/contact-us",
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
        url: "https://www.4lotus.co/apartment-interior",
        path: "/apartment-interior",
      },
      {
        label: "Banquet Hall Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/banquet-hall-interior",
        path: "/banquet-hall-interior",
      },
      {
        label: "Bathroom Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/bathroom-remodelers",
        path: "/bathroom-remodelers",
      },
      {
        label: "Bungalow Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/bungalow-interior",
        path: "/bungalow-interior",
      },
      {
        label: "Clinic Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/clinic-interior",
        path: "/clinic-interior",
      },
      {
        label: "Commercial Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/commercial-interior",
        path: "/commercial-interior",
      },
      {
        label: "Interior Designer and Decorator Contact in Delhi",
        url: "https://www.4lotus.co/contact-us",
        path: "/contact-us",
      },
      {
        label: "Farmhouse Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/farmhouse-interior",
        path: "/farmhouse-interior",
      },
      {
        label: "Flat Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/flat-interior",
        path: "/flat-interior",
      },
      {
        label: "Furniture Designer and Manufacturer in Delhi",
        url: "https://www.4lotus.co/furniture-manufacturer",
        path: "/furniture-manufacturer",
      },
      {
        label: "Gym Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/gym-interior",
        path: "/gym-interior",
      },
      {
        label: "Home Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/home-interior",
        path: "/home-interior",
      },
      {
        label: "Hospital Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/hospital-interior",
        path: "/hospital-interior",
      },
      {
        label: "Hotel Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/hotel-interior",
        path: "/hotel-interior",
      },
      {
        label: "Interior Designer and Decorator Profile in Delhi",
        url: "https://www.4lotus.co/interior-company-profile",
        path: "/about",
      },
      {
        label: "Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/interior-designers-decorators-in-delhi",
        path: "/interior-designers-decorators-in-delhi",
      },
      {
        label: "Interior Designer and Decorator in Faridabad",
        url: "https://www.4lotus.co/interior-designers-decorators-in-faridabad",
        path: "/interior-designers-decorators-in-faridabad",
      },
      {
        label: "Interior Designer and Decorator in Ghaziabad",
        url: "https://www.4lotus.co/interior-designers-decorators-in-ghaziabad",
        path: "/interior-designers-decorators-in-ghaziabad",
      },
      {
        label: "Interior Designer and Decorator in Gurgaon",
        url: "https://www.4lotus.co/interior-designers-decorators-in-gurgaon",
        path: "/interior-designers-decorators-in-gurgaon",
      },
      {
        label: "Interior Designer and Decorator in Noida",
        url: "https://www.4lotus.co/interior-designers-decorators-in-noida",
        path: "/interior-designers-decorators-in-noida",
      },
      {
        label: "Interior Designer and Decorator in Sonipat",
        url: "https://www.4lotus.co/interior-designers-decorators-in-sonipat",
        path: "/interior-designers-decorators-in-sonipat",
      },
      {
        label: "Interior Designer and Decorator in Chandni Chowk Delhi",
        url: "https://www.4lotus.co/interior-designers-chandni-chowk",
        path: "/interior-designers-chandni-chowk",
      },
      {
        label: "Interior Designer and Decorator in Dwarka Delhi",
        url: "https://www.4lotus.co/interior-designers-dwarka",
        path: "/interior-designers-dwarka",
      },
      {
        label: "Interior Designer and Decorator in East Delhi",
        url: "https://www.4lotus.co/interior-designers-east-delhi",
        path: "/interior-designers-east-delhi",
      },
      {
        label: "Interior Designer and Decorator in Greater Kailash Delhi",
        url: "https://www.4lotus.co/interior-designers-greater-kailash",
        path: "/interior-designers-greater-kailash",
      },
      {
        label: "Interior Designer and Decorator in Janakpuri Delhi",
        url: "https://www.4lotus.co/interior-designers-janakpuri",
        path: "/interior-designers-janakpuri",
      },
      {
        label: "Interior Designer and Decorator in Karol Bagh Delhi",
        url: "https://www.4lotus.co/interior-designers-karol-bagh",
        path: "/interior-designers-karol-bagh",
      },
      {
        label: "Interior Designer and Decorator in Kirti Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-kirti-nagar",
        path: "/interior-designers-kirti-nagar",
      },
      {
        label: "Interior Designer and Decorator in Lajpat Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-lajpat-nagar",
        path: "/interior-designers-lajpat-nagar",
      },
      {
        label: "Interior Designer and Decorator in Najafgarh Delhi",
        url: "https://www.4lotus.co/interior-designers-najafgarh",
        path: "/interior-designers-najafgarh",
      },
      {
        label: "Interior Designer and Decorator in Naraina Delhi",
        url: "https://www.4lotus.co/interior-designers-naraina",
        path: "/interior-designers-naraina",
      },
      {
        label: "Interior Designer and Decorator in North Delhi",
        url: "https://www.4lotus.co/interior-designers-north-delhi",
        path: "/interior-designers-north-delhi",
      },
      {
        label: "Interior Designer and Decorator in Paschim Vihar Delhi",
        url: "https://www.4lotus.co/interior-designers-paschim-vihar",
        path: "/interior-designers-paschim-vihar",
      },
      {
        label: "Interior Designer and Decorator in Patel Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-patel-nagar",
        path: "/interior-designers-patel-nagar",
      },
      {
        label: "Interior Designer and Decorator in Pitampura Delhi",
        url: "https://www.4lotus.co/interior-designers-pitampura",
        path: "/interior-designers-pitampura",
      },
      {
        label: "Interior Designer and Decorator in Punjabi Bagh Delhi",
        url: "https://www.4lotus.co/interior-designers-punjabi-bagh",
        path: "/interior-designers-punjabi-bagh",
      },
      {
        label: "Interior Designer and Decorator in Rajouri Garden Delhi",
        url: "https://www.4lotus.co/interior-designers-rajouri-garden",
        path: "/interior-designers-rajouri-garden",
      },
      {
        label: "Interior Designer and Decorator in Rani Bagh Delhi",
        url: "https://www.4lotus.co/interior-designers-rani-bagh",
        path: "/interior-designers-rani-bagh",
      },
      {
        label: "Interior Designer and Decorator in Rohini Delhi",
        url: "https://www.4lotus.co/interior-designers-rohini",
        path: "/interior-designers-rohini",
      },
      {
        label: "Interior Designer and Decorator in Safdarjung Enclave Delhi",
        url: "https://www.4lotus.co/interior-designers-safdarjung-enclave",
        path: "/interior-designers-safdarjung-enclave",
      },
      {
        label: "Interior Designer and Decorator in Shakti Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-shakti-nagar",
        path: "/interior-designers-shakti-nagar",
      },
      {
        label: "Interior Designer and Decorator in South Delhi",
        url: "https://www.4lotus.co/interior-designers-south-delhi",
        path: "/interior-designers-south-delhi",
      },
      {
        label: "Interior Designer and Decorator in Tilak Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-tilak-nagar",
        path: "/interior-designers-tilak-nagar",
      },
      {
        label: "Interior Designer and Decorator in Uttam Nagar Delhi",
        url: "https://www.4lotus.co/interior-designers-uttam-nagar",
        path: "/interior-designers-uttam-nagar",
      },
      {
        label: "Interior Designer and Decorator in Vasant Kunj Delhi",
        url: "https://www.4lotus.co/interior-designers-vasant-kunj",
        path: "/interior-designers-vasant-kunj",
      },
      {
        label: "Interior Designer and Decorator in Vikas Puri Delhi",
        url: "https://www.4lotus.co/interior-designers-vikas-puri",
        path: "/interior-designers-vikas-puri",
      },
      {
        label: "Interior Designer and Decorator in Vishal Enclave Delhi",
        url: "https://www.4lotus.co/interior-designers-vishal-enclave",
        path: "/interior-designers-vishal-enclave",
      },
      {
        label: "Interior Designer and Decorator in West Delhi",
        url: "https://www.4lotus.co/interior-designers-west-delhi",
        path: "/interior-designers-west-delhi",
      },
      {
        label: "Interior Designer and Decorator in New Delhi",
        url: "https://www.4lotus.co/interior-designers",
        path: "/interior-designers",
      },
      {
        label: "Kitchen Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/kitchen-remodelers",
        path: "/kitchen-remodelers",
      },
      {
        label: "Office Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/office-interior",
        path: "/office-interior",
      },
      {
        label: "Penthouse Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/penthouse-interior",
        path: "/penthouse-interior",
      },
      {
        label: "Pub Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/pub-interior",
        path: "/pub-interior",
      },
      {
        label: "Residential Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/residential-interior",
        path: "/residential-interior",
      },
      {
        label: "Restaurant Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/restaurant-interior",
        path: "/restaurant-interior",
      },
      {
        label: "Salon Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/salon-interior",
        path: "/salon-interior",
      },
      {
        label: "Play School Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/school-interior",
        path: "/school-interior",
      },
      {
        label: "Shop Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/shop-interior",
        path: "/shop-interior",
      },
      {
        label: "Showroom Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/showroom-interior",
        path: "/showroom-interior",
      },
      {
        label: "Villa Interior Designer and Decorator in Delhi",
        url: "https://www.4lotus.co/villa-interior",
        path: "/villa-interior",
      },
      {
        label: "4 Lotus Interior Html Sitemap",
        url: "https://www.4lotus.co/sitemap",
        path: "/sitemap",
      },
    ],
  },
];
