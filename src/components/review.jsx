export default function Review()  {
    const testimonials = [
        { text: "Nuno and his team transformed our living room. The attention to detail on the trim work was absolutely incredible.", name: "Cristofer Levin", role: "Homeowner", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", stars: 5 },
        { text: "Tru-colours Painting was professional, clean, and fast. They painted our entire office suite over the weekend with zero disruption to our business.", name: "Rohan Mehta", role: "Business Owner", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", stars: 4 },
        { text: "Finding a reliable painter is hard, but Nuno’s 24 years of experience really show. The surface preparation was flawless.", name: "Jason Kim", role: "Property Manager", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", stars: 5 },
        { text: "They left our house cleaner than they found it! The smooth finish on our ceilings and walls exceeded all of our expectations.", name: "Alex Turner", role: "Homeowner", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", stars: 5 },
        { text: "Highly recommend Tru-colours for any commercial interior work. They are incredibly efficient and the quality is top-notch.", name: "Sofia Martinez", role: "Retail Store Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", stars: 4 },
        { text: "Precise, punctual, and professional. Nuno matched our existing colors perfectly and handled the detailed trim work effortlessly.", name: "Daniel Wong", role: "Homeowner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200", stars: 5 }
    ];

    const rows = [
        { start: 0, end: 3, className: "animate-scroll" },
        { start: 3, end: 6, className: "animate-scroll-reverse" }
    ];

    const renderCard = (testimonial, index) => (
        <div key={index} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 shrink-0 w-[350px] dark:bg-darkHover/30 dark:border-white/20">
            <div className="flex mb-4">
                {/* Logic to render either 4 or 5 stars based on the testimonial data */}
                {Array(5).fill(0).map((_, i) => (
                    <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className={`lucide lucide-star ${i < testimonial.stars ? 'text-transparent fill-[#f59e0b]' : 'text-[#d1d5db] fill-transparent'}`} 
                        aria-hidden="true"
                    >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                ))}
            </div>
            <p className="text-neutral-700 dark:text-white/80 text-sm mb-6">{testimonial.text}</p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover"/>
                <div>
                    <p className="font-medium text-neutral-800 dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-neutral-600 dark:text-white/60 text-sm">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }

                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes scrollReverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-scroll { animation: scroll 15s linear infinite; }
                    .animate-scroll-reverse { animation: scrollReverse 15s linear infinite; }
                `}
            </style>
            <section className="bg-[#FAFAFA] dark:bg-transparent py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-block bg-neutral-100 dark:bg-darkHover border border-neutral-400 dark:border-white/30 rounded-full px-4 py-1 mb-3">
                            <span className="text-xs text-neutral-600 dark:text-white/80">Loved by clients</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white mb-4">
                            What people are saying
                        </h2>
                        <p className="text-neutral-600 dark:text-white/70 text-sm max-w-96 mx-auto">
                            Real feedback from homeowners, property managers, and businesses who trusted us with their spaces.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-[#FAFAFA] dark:from-[#11001F] to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-[#FAFAFA] dark:from-[#11001F] to-transparent z-10 pointer-events-none"></div>

                                <div className={`flex gap-6 ${row.className} w-max`}>
                                    {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)].map((testimonial, index) =>
                                        renderCard(testimonial, index)
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}