const CapitalizeFirstLetter = s => {
  if (s && typeof s === 'string') {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return "";
};

module.exports = CapitalizeFirstLetter;