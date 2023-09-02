export const scrollToSection = (sectionId, event) => {
  event.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

export const smoothScrollByPixels = (amount) => {
  window.scrollTo({
    top: window.scrollY + amount,
    behavior: "smooth",
  });
};

export const scrollToBottom = (element) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const scrollOffset = rect.bottom - windowHeight;
  window.scrollBy({
    top: scrollOffset + 20,
    behavior: "smooth",
  });
};
