const clientId = import.meta.env.VITE_BRANDFETCH_CLIENT_ID;

function normalizeCompanyName(name) {
  return name
    .toLowerCase()
    .replace(/\b(limited|ltd|inc|incorporated|llc|corp|corporation)\b/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export async function getCompanyLogo(company) {
  const companyName = company.trim();

  const searchUrl = `https://api.brandfetch.io/v2/search/${encodeURIComponent(
    companyName,
  )}?c=${clientId}`;

  const searchResponse = await fetch(searchUrl);

  if (!searchResponse.ok) {
    throw new Error(`Could not search for company: ${companyName}`);
  }

  const results = await searchResponse.json();

  if (!results.length) {
    return null;
  }

  const normalizedSearch = normalizeCompanyName(companyName);

  const matchingBrand = results.find((brand) => {
    const normalizedBrand = normalizeCompanyName(brand.name || "");

    return (
      normalizedBrand === normalizedSearch ||
      normalizedSearch.includes(normalizedBrand) ||
      normalizedBrand.includes(normalizedSearch)
    );
  });

  if (!matchingBrand?.domain) {
    return null;
  }

  return `https://cdn.brandfetch.io/domain/${matchingBrand.domain}/w/100/h/100/theme/dark/fallback/lettermark/type/icon?c=${clientId}`;
}
