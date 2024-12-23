import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
);

const Footer = () => (
    <section className="flexStart footer footerbgclr ">
        <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-wrap gap-12">
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                <div className="flex-1 flex flex-col gap-4">
                    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                    <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>

                <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

                <div className="flex-1 flex flex-col gap-4">
                    <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                    <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                </div>
                
                <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
            </div>
        </div>

        <div className="flexBetween footer_copyright">
            <p>@ 2023 Developer Foysal. All rights reserved</p>
            <p className="text-light-white-500">
                <span className=" font-semibold">10,214</span> projects submitted
            </p>
        </div>
        <div className="bg_blur_two"></div>
    </section>
);

export default Footer;
