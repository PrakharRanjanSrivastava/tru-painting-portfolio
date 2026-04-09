export default function About() {
   

    const data = [
        {
            name: 'Experience',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: '24+ Years in Portugal & Canada',
        },
        {
            name: 'Specialties',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: 'Residential & Commercial Painting',
        },
        {
            name: 'Quality Assurance',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'Clean, precise, high-standard results',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            
            <h2 className="text-center text-5xl font-Ovo">About us</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
                <div className="max-w-max mx-auto relative">
                    <img src='/assets/user-image.jpg' alt="Nuno Jesus" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="/assets/dev-icon.png" alt="" className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am an Experienced Construction Painter specializing in residential and commercial painting. 
                        With strong skills in surface preparation, finishing, and detail work, I am known for 
                        delivering clean, precise results and maintaining the highest standards of workmanship on every job site.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li key={item.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}