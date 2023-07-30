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
}

export const workSource: WorkSource[] = [
  {
    logo: logoSiteAbolina,
    logoHeight: "32px",
  },
  {
    logo: logoSiteJumia,
    logoHeight: "25px",
  },
  {
    logo: logoSiteCGD,
    logoHeight: "35px",
  },
  {
    logo: logoSiteOcto,
    logoHeight: "40px",
  },
  {
    logo: logoSiteIpc,
    logoHeight: "47px",
  },
  {
    logo: logoSiteSmartfreez,
    logoHeight: "40px",
  },
  {
    logo: logoSiteSmartConsulting,
    logoHeight: "42px",
  },
  {
    logo: logoSiteAralab,
    logoHeight: "80px",
  },
  {
    logo: logoSiteHpDrones,
    logoHeight: "24px",
  },
  {
    logo: logoSitePunchstories,
    logoHeight: "45px",
  },
];
