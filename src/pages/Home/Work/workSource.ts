import logoSiteAbolina from "../../../assets/images/projects/abolina/logoSite.svg";
import logoSiteCGD from "../../../assets/images/projects/cgd/logoSite.svg";
import logoSiteIpc from "../../../assets/images/projects/ipc/logoSite.svg";
import logoSiteJumia from "../../../assets/images/projects/jumia/logoSite.svg";
import logoSiteOcto from "../../../assets/images/projects/octo/logoSite.svg";

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
    logoHeight: "30px",
  },
  {
    logo: logoSiteOcto,
    logoHeight: "40px",
  },
  {
    logo: logoSiteIpc,
    logoHeight: "42px",
  },
];
