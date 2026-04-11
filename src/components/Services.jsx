export default function Services() {
    // Defined the mailto link once to keep the code clean
    const mailtoLink = "mailto:tru-colourspainting@outlook.com?subject=Quote Request - Tru-colours Painting";

    const services = [
        {
            name: 'Residential Interior',
            icon: '/assets/web-icon.png',
            description: 'Transform your living spaces with meticulous surface preparation and flawless paint application for walls, ceilings, and trim.',
            link: mailtoLink, // Updated link
        },
        {
            name: 'Commercial Interior',
            icon: '/assets/ui-icon.png',
            description: 'Professional interior painting tailored for businesses, ensuring minimal disruption and a pristine, welcoming environment.',
            link: mailtoLink, // Updated link
        },
        {
            name: 'Surface Preparation',
            icon: '/assets/graphics-icon.png',
            description: 'Expert sanding, scraping, crack filling, and priming to ensure a perfectly smooth canvas for long-lasting finishes.',
            link: mailtoLink, // Updated link
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What we offer</h4>
            <h2 className="text-center text-5xl font-Ovo">Our Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Providing high-quality residential and commercial interior painting services. We handle everything from complete room transformations to detailed trim and touch-ups.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Get a quote <img src="/assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}