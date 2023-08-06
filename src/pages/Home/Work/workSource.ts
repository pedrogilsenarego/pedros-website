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

type WorkTags =
  | "Digital Commerce"
  | "Web App"
  | "Mobile App"
  | "Market Place"
  | "Finance";

export interface WorkSource {
  logo: string;
  logoHeight?: string;
  title: string;
  url: string;
  tags?: WorkTags[];
}

export const workSource: WorkSource[] = [
  {
    logo: logoSiteAbolina,
    logoHeight: "32px",
    title: "Digital Book Store",
    url: "www.abolina.com",
    tags: ["Digital Commerce", "Web App", "Mobile App"],
  },
  {
    logo: logoSiteJumia,
    logoHeight: "25px",
    title: "E-Commerce in Africa",
    url: "www.jumia.com",
    tags: ["Digital Commerce", "Market Place"],
  },
  {
    logo: logoSiteCGD,
    logoHeight: "35px",
    title: "Digital Book Store",
    url: "www.abolina.com",
    tags: ["Finance"],
  },
  {
    logo: logoSiteOcto,
    logoHeight: "40px",
    title: "Designer Digital Store",
    url: "www.octo-mistic.com",
  },
  {
    logo: logoSiteIpc,
    logoHeight: "44px",
    title: "Digital Book Store",
    url: "www.ipc.be",
  },
  {
    logo: logoSiteSmartfreez,
    logoHeight: "40px",
    title: "Digital Book Store",
    url: "www.abolina.com",
  },
  {
    logo: logoSiteSmartConsulting,
    logoHeight: "42px",
    title: "Digital Book Store",
    url: "www.abolina.com",
  },
  {
    logo: logoSiteAralab,
    logoHeight: "80px",
    title: "Digital Book Store",
    url: "www.abolina.com",
  },
  {
    logo: logoSiteHpDrones,
    logoHeight: "24px",
    title: "Digital Book Store",
    url: "www.abolina.com",
  },
  {
    logo: logoSitePunchstories,
    logoHeight: "40px",
    title: "Digital Book Store",
    url: "www.abolina.com",
  },
];
