import { useState } from 'react';

export default function FAQ()  {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Are you insured and experienced?",
            answer: "Yes. We bring 24+ years of professional experience and operate with proper insurance for peace of mind.",
        },
        {
            question: "Do you provide free estimates?",
            answer: "Yes! We provide free, no-obligation estimates for all residential and commercial interior projects. Contact us with your project details to get started.",
        },
        {
            question: "Do you handle surface preparation?",
            answer: "Absolutely. Proper surface preparation (sanding, scraping, filling cracks, and priming) is the most important step for a flawless, long-lasting finish. We never skip this step.",
        },
        {
            question: "Do you do exterior painting?",
            answer: "No, we specialize exclusively in interior painting for residential and commercial properties. This dedicated focus allows us to guarantee the highest quality interior results.",
        },
        {
            question: "What types of paint do you use?",
            answer: "We use premium quality paints and materials to ensure a durable, smooth finish. If you have specific preferences (such as low-VOC or eco-friendly paints), we are happy to accommodate them.",
        },
    ];
    
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            {/* Changed to max-w-5xl and items-stretch to allow equal column heights */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-10 px-4 md:px-0 py-20 scroll-mt-20" id="faq">
                
                {/* Image Container */}
                <div className="w-full md:w-5/12 shrink-0">
                    <img
                        className="w-full h-full min-h-[300px] object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=830&auto=format&fit=crop"
                        alt="Professional interior painting"
                    />
                </div>
                
                {/* Text & Accordion Container */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                    <p className="text-orange-500 text-sm font-medium">FAQ's</p>
                    <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white">Looking for answers?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4 dark:text-white/70">
                        Common questions about our interior painting processes, timelines, and materials.
                    </p>
                    
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 dark:border-white/20 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium dark:text-white pr-4">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out shrink-0`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-white stroke-[#1D293D]" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 dark:text-white/70 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    );
};