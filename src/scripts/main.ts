interface Window {
  stickyHeaderFuncionality: () => void;
  evaluateHeaderPosition: () => void;
  applyMenuItemClasses: () => void;
}

let headerElement: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", () => {
  headerElement = document.getElementById("header");

  window.stickyHeaderFuncionality();
  window.applyMenuItemClasses();
  window.evaluateHeaderPosition();
});

window.stickyHeaderFuncionality = () => {
  window.addEventListener("scroll", () => {
    window.evaluateHeaderPosition();
  });
};

window.evaluateHeaderPosition = () => {
  const stickyClasses = ["fixed"];
  const unstickyClasses = ["absolute"];
  const stickyClassesContainer = [
    "border-neutral-300/50",
    "bg-white/80",
    "dark:border-neutral-600/40",
    "dark:bg-neutral-900/60",
    "backdrop-blur-2xl",
  ];
  const unstickyClassesContainer = ["border-transparent", "bg-transparent"];

  if (window.scrollY > 16 && headerElement) {
    headerElement.classList.add(...stickyClasses);
    headerElement.classList.remove(...unstickyClasses);

    const container = headerElement.querySelector("div");
    if (container) {
      container.classList.add(...stickyClassesContainer);
      container.classList.remove(...unstickyClassesContainer);
    }
  } else if (headerElement) {
    headerElement.classList.remove(...stickyClasses);
    headerElement.classList.add(...unstickyClasses);

    const container = headerElement.querySelector("div");
    if (container) {
      container.classList.remove(...stickyClassesContainer);
      container.classList.add(...unstickyClassesContainer);
    }
  }
};

window.applyMenuItemClasses = () => {
  const menuItems = document.querySelectorAll<HTMLAnchorElement>("nav a");
  const currentPath = window.location.pathname;
  const activeClass = ["text-white", "font-bold"];

  menuItems.forEach((menuItem) => {
    if (new URL(menuItem.href).pathname === currentPath) {
      menuItem.classList.add(...activeClass);
    } else {
      menuItem.classList.remove(...activeClass);
    }
  });
};
