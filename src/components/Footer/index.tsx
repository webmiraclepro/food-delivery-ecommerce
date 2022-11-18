const logo = "/images/logo.png";
const facebookIcon = "/images/facebook.png"
const linkedinIcon = "images/linkedin.png"
const twitterIcon ="images/twitter.png"

const FooterList = (porps: any) => {
    const { title } = porps
    return (
        <div className="flex flex-row items-center">
            <span className="block rounded-lg w-[6px] h-[6px] bg-[#1E293B] mr-2"></span>
            <span className="text-white text-sm">{title}</span>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="bg-black w-full flex flex-col mt-12 px-20 py-10">
            <div className="bg-white px-4 py-2 w-fit rounded-lg">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-white text-base py-5 w-1/2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Gravida pretium in nulla viverra nisl massa risus in egestas.
                Orci massa adipiscing aenean maecenas arcu arcu. Auctor vitae nisl eleifend lectus nisl.
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-10">
                    <FooterList title="About us" />
                    <FooterList title="Contact" />
                    <FooterList title="Privacy policy" />
                    <FooterList title="Sitemap" />
                    <FooterList title="Terms of Use" />
                </div>
                <div className="flex flex-row gap-4">
                    <img src={facebookIcon} alt="facebookIcon"/>
                    <img src={linkedinIcon} alt="linkedinIcon"/>
                    <img src={twitterIcon} alt="twitterIcon"/>
                </div>

            </div>

        </div>
    )
}

export default Footer;