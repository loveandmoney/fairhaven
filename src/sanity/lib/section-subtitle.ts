export const getSectionSubtitle = (sectionTitle: string, subtitle?: string) => {
  return [`(${sectionTitle})`, subtitle].filter(Boolean).join(' ');
};
