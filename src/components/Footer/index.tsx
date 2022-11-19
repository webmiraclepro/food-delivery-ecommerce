const logo = "/images/logo.png";
const facebookIcon = "/images/facebook.png"
const linkedinIcon = "images/linkedin.png"
const twitterIcon = "images/twitter.png"

const FooterList = (porps: any) => {
    const { title } = porps
    return (
        <div className="flex flex-row items-center">
            <span className="block rounded-lg w-[6px] h-[6px] bg-[#1E293B] mr-2"></span>
            <span className="text-gray-200 text-sm">{title}</span>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="bg-white xl:bg-black w-full flex flex-col mt-12 px-5 xl:px-20 py-4 xl:py-10">
            <div className="bg-white p-2 w-fit rounded-lg">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-gray-500 xl:text-gray-200 leading-7 text-sm py-5 w-full xl:w-1/2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Gravida pretium in nulla viverra nisl massa risus in egestas.
                Orci massa adipiscing aenean maecenas arcu arcu. Auctor vitae nisl eleifend lectus nisl.
            </div>
            <div className="flex flex-row items-center justify-between hidden xl:flex">
                <div className="flex flex-row gap-10">
                    <FooterList title="About us" />
                    <FooterList title="Contact" />
                    <FooterList title="Privacy policy" />
                    <FooterList title="Sitemap" />
                    <FooterList title="Terms of Use" />
                </div>
                <div className="flex flex-row gap-4">
                    <img src={facebookIcon} alt="facebookIcon" />
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    <img src={twitterIcon} alt="twitterIcon" />
                </div>
            </div>
            <div className="border-t-2 flex flex-row gap-4 block xl:hidden">
                <p className="text-gray-500 text-sm">Privacy Policy</p>
                <p className="text-gray-500 text-sm">Terms of Services</p>
            </div>
        </div>
    )
}

export default Footer;