// Copy this file to config.js (gitignored — never committed) to plug in your own
// birth date and Social Security benefit estimates without editing index.html.
//
//   cp config.example.js config.js
//
// If config.js is absent, index.html falls back to generic built-in example numbers,
// so the app works fine with no setup at all.
window.RETIREMENT_DEFAULTS = {
  birthDate: "1961-10-15",
  benefits: { 64:400, 65:433, 66:467, 67:500, 68:510, 69:550, 70:620 },
  inflationDefault: 0.025,
};
