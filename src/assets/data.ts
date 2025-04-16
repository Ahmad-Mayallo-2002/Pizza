import { IconType } from "react-icons";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

type Link = {
  name: string;
  href: string;
};

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
  { name: "Products", href: "/#products" },
  { name: "FAQs", href: "/#faqs" },
  { name: "Cart", href: "/cart" },
  { name: "Order", href: "/order" },
];

const homePizza: string[] = [
  "Homemade Pepperoni\nPizza",
  "Pizza With\nMushrooms",
  "Mascarpone And\nMushrooms",
];

const about: string[] = [
  "made with love",
  "30 minutes delivery",
  "share with friends",
];

type FAQ = {
  header: string;
  text: string;
};

const faqs: FAQ[] = [
  {
    header: "What are your opening hours?",
    text: "We are open from 10 AM to 10 PM, Monday through Sunday.",
  },
  {
    header: "Do you offer home delivery?",
    text: "Yes, we provide home delivery within a 10km radius. Delivery charges may apply.",
  },
  {
    header: "How can I place an order?",
    text: "You can place an order through our website or by calling us directly at our store.",
  },
  {
    header: "Do you offer vegetarian or vegan options?",
    text: "Absolutely! We have a variety of vegetarian and vegan pizzas to choose from.",
  },
  {
    header: "Can I customize my pizza?",
    text: "Yes, you can customize your pizza by selecting your preferred toppings, crust, and size during checkout.",
  },
  {
    header: "Do you cater for parties and events?",
    text: "Yes, we offer party packs and bulk order discounts. Please contact us in advance to arrange catering services.",
  },
  {
    header: "What payment methods do you accept?",
    text: "We accept cash, credit/debit cards, UPI, and major digital wallets.",
  },
  {
    header: "Do you have any ongoing offers or discounts?",
    text: "We frequently run promotions and special offers. Check our homepage or subscribe to our newsletter for updates.",
  },
  {
    header: "Is there a loyalty program?",
    text: "Yes, join our loyalty program to earn points with every order and redeem them for free items or discounts.",
  },
  {
    header: "How can I contact customer support?",
    text: "You can reach us through our contact form on the website, or email us at support@yourpizzashop.com.",
  },
];

type Contact = {
  icon: IconType;
  head: string;
  content: string;
};

const contacts: Contact[] = [
  {
    icon: FaLocationDot,
    head: "Our Address",
    content: "Cairo, Egypt",
  },
  {
    icon: FaClock,
    head: "Opening Hours",
    content: "From 12:00AM to 12:00PM",
  },
  {
    icon: MdMail,
    head: "Email Address",
    content: "ahmadmayallo02@gmail.com",
  },
];

export { links, homePizza, about, faqs, contacts };
