export default function Footer() {
    return (
        <div id="footer" className="mt-20 scroll-mt-10">
            <div className="text-center">
                <h2 className="text-3xl font-Ovo mb-4 dark:text-white">Tru-colours Painting</h2>

                <div className="w-max flex flex-col items-center gap-3 mx-auto text-gray-700 dark:text-white/80">
                    <div className="flex items-center gap-2">
                        <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                        <a href="mailto:Tru-colourspainting@outlook.com">Tru-colourspainting@outlook.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📞</span>
                        <a href="tel:+12266374112">+1 226 637 4112</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📍</span>
                        <p>22 Hitch Cres, St. Thomas, ON</p>
                    </div>
                </div>
            </div>
            <div className="text-center flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p className="dark:text-white/80">© {new Date().getFullYear()} Tru-colours Painting. All rights reserved.</p>
            </div>
        </div>
    )
}