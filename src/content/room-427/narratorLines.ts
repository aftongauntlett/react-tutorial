export const narratorLines = {
  stanley: ['Stanley?!', 'OH Stanley!', 'I knew you would come back.'],
  maxLength: (name: string) => [
    `Really, "${name}"? ...`,
    'No. You are Stanley.',
    'Yes… Stanley. That just feels right.',
  ],
  generic: (name: string) => [
    `"${name}"? No… no… this isn’t right.`,
    'Your name is Stanley.',
    'Yes… Stanley. That just feels right.',
  ],
};
