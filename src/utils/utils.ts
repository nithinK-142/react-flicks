export const sanitizedSummary = (summary: string): string => {
  return summary.replace(/<\/?[^>]+(>|$)/g, "");
};

export const dotLink = (link: string): string => {
  if (link.length > 20) return link.slice(0, 20) + "...";
  else return link;
};

export const getFlagUrl = (countryCode: string): string => {
  return `https://flagsapi.com/${countryCode}/flat/64.png`;
};
