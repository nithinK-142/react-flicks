export const sanitizedSummary = (summary: string): string => {
  return summary.replace(/<\/?[^>]+(>|$)/g, "");
};
