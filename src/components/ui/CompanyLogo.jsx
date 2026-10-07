import { useEffect, useState } from "react";
import { getCompanyLogo } from "../../helper/getCompanyLogo";

function CompanyLogo({ company }) {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    async function fetchLogo() {
      try {
        const logoUrl = await getCompanyLogo(company);
        setLogo(logoUrl);
      } catch (error) {
        console.error(error);
      }
    }

    if (company) {
      fetchLogo();
    }
  }, [company]);

  return (
    <div className="w-[30px] h-[30px] shrink-0 flex items-center justify-center overflow-hidden rounded-full shadow-[0_0_0_2px_rgba(31,98,156,0.3)]">
      {logo ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full shrink-0  object-contain scale-115"
        />
      ) : (
        <span className="bg-gray-100 text-[1.7rem] font-bold font-monda text-black w-full h-full flex justify-center items-center">
          {company?.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}

export default CompanyLogo;
