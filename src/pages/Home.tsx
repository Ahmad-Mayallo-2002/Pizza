import { about, contacts, faqs } from "../assets/data";
import AccordionItem from "../components/Accordion";
import HomeSwiper from "../components/HomeSwiper";
import MenuSwiper from "../components/MenuSwiper";

export default function Home() {
  return (
    <>
      <main className="hero py-24 center-y min-h-[calc(100vh-70px)] bg-image">
        <HomeSwiper />
      </main>
      <section id="about" className="about my-24">
        <div className="container">
          <h2 className="main-heading">about us</h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {about.map((content, index) => (
              <div
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-duration={3000}
                data-aos-delay={index * 500}
                className="p-6 rounded-lg hover:text-white hover:bg-orange-500 !duration-300 hover:shadow-2xl"
                key={index}
              >
                <img
                  className="h-[300px] mx-auto"
                  src={`./about-${index + 1}.svg`}
                />
                <div className="body text-center">
                  <h2 className="text-2xl capitalize my-2">{content}</h2>
                  <p className="leading-[2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla doloribus architecto, ea debitis iure odit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products" className="menu my-24">
        <div className="container">
          <h2 className="main-heading">our menu</h2>
          <MenuSwiper />
        </div>
      </section>
      <section id="faqs" className="faq my-24">
        <div className="container overflow-x-hidden">
          <h2 className="main-heading">Common FAQ</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                duration={800}
                delay={index * 200}
                header={faq.header}
                text={faq.text}
                key={faq.header}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact my-24">
        <div className="container">
          <h2 className="main-heading">Contact Us</h2>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {contacts.map((contact) => (
              <div
                key={contact.head}
                className="info duration-300 p-4 rounded-lg text-center"
              >
                <div className="text-6xl icon bg-orange-500 text-white p-4 rounded-full mx-auto w-fit">
                  <contact.icon className="duration-300" />
                </div>
                <h3 className="my-3 text-2xl">{contact.head}</h3>
                <p className="text-gray-500 duration-300">{contact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
