import image from "next/image";


export const navItems = [
  { name: "Home", href: "/" },
  { name: "Directory", href: "directory" },
  { name: "Archive", href: "#about" },
  { name: "Heroes", href: "#pricing" },
  { name: "Contact", href: "#contact" }
];

export const logoes = [
  {
    image: "/ethio_heroes.png", // Path relative to /public folder
    alt: "Ethio Heroes logo",
  },
];

const BASE_URL = "http://127.0.0.1:5000";
export const navButtons = [
    {
        name: "Login",
        href: `${BASE_URL}/login`,
        className: "text-md bg-background text-foreground hover:bg-primary hover:text-amber-50"
    },
    {
        name: "Join Now",
        href: `${BASE_URL}/signup`,
        className: "text-md"
    }
];
export const heroimage = [
    {
        image: "/assets/adwamoun3.jpg",
        alt: "adwa moun"
    }
]

export const heroes = [
    {
        name: "Emperor Menelik II",
        description: "Emperor Menelik II (1844-1913) was a prominent Ethiopian ruler known for his military prowess and modernization efforts. He successfully defended Ethiopia against Italian colonization during the Battle of Adwa in 1896, securing Ethiopian independence. Menelik II also implemented various reforms, including infrastructure development and educational initiatives, contributing to Ethiopia's growth and stability during his reign.",
        category: "Leader",
        era: "Modern",
        image: "/assets/adwamoun3.jpg",
    },
    {
        name: "Empress Taytu Betul",
        description: "Empress Taytu Betul (1850-1918) was a powerful and influential figure in Ethiopian history. As the wife of Emperor Menelik II, she played a crucial role in the Battle of Adwa, where she provided strategic support and rallied troops. Taytu was also known for her diplomatic skills and efforts to modernize Ethiopia, advocating for women's rights and education.", 
        category: "Leader",
        era: "Modern",
        image: "/assets/adwamoun3.jpg", 
    }
]

