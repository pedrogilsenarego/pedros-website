import logoSiteAbolina from "../../../assets/images/projects/abolina/logoSite.svg";
import logoSiteAralab from "../../../assets/images/projects/aralab/logoSite.png";
import logoSiteCGD from "../../../assets/images/projects/cgd/logoSite.svg";
import logoSiteHpDrones from "../../../assets/images/projects/hpDrones/logoSite.webp";
import logoSiteIpc from "../../../assets/images/projects/ipc/logoSite.svg";
import logoSiteJumia from "../../../assets/images/projects/jumia/logoSite.svg";
import logoSiteOcto from "../../../assets/images/projects/octo/logoSite.svg";
import logoSitePunchstories from "../../../assets/images/projects/punchstories/logoSite.svg";
import logoSiteSmartConsulting from "../../../assets/images/projects/smartConsulting/logoSite.webp";
import logoSiteSmartfreez from "../../../assets/images/projects/smartfreez/logoSite.png";

export interface WorkSource {
  logo: string;
  logoHeight?: string;
  title: string;
}

export const workSource: WorkSource[] = [
  {
    logo: logoSiteAbolina,
    logoHeight: "32px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteJumia,
    logoHeight: "25px",
    title: "E-Commerce in Africa",
  },
  {
    logo: logoSiteCGD,
    logoHeight: "35px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteOcto,
    logoHeight: "40px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteIpc,
    logoHeight: "47px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteSmartfreez,
    logoHeight: "40px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteSmartConsulting,
    logoHeight: "42px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteAralab,
    logoHeight: "80px",
    title: "Digital Book Store",
  },
  {
    logo: logoSiteHpDrones,
    logoHeight: "24px",
    title: "Digital Book Store",
  },
  {
    logo: logoSitePunchstories,
    logoHeight: "45px",
    title: "Digital Book Store",
  },
];
