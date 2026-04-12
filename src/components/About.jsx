export default function About() {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo mb-10">About us</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
                <div className="max-w-max mx-auto relative shrink-0">
                    <img src='/assets/user-image.jpg' alt="Nuno Jesus" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="/assets/dev-icon.png" alt="" className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                
                <div className="flex-1 text-gray-700 dark:text-white/80">
                    <p className="mb-6 max-w-2xl font-Ovo text-lg leading-relaxed">
                        I am an Experienced Construction Painter specializing in residential and commercial interior painting. With over 24 years of international experience spanning across Portugal and Canada, I bring a wealth of proven knowledge and refined expertise to every project.
                    </p>
                    <p className="max-w-2xl font-Ovo text-lg leading-relaxed">
                        My strong foundation in meticulous surface preparation, color matching, and detailed trim work ensures a flawless, long-lasting finish. I take immense pride in strict quality assurance, and I am known by my clients for delivering clean, precise results while maintaining the highest standards of workmanship on every single job site.
                    </p>
                </div>
            </div>
            
        </div>
    )
}