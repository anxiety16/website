//for the mision vision 
function showContent(type) {
    const content = document.getElementById('mission-vision-content');
    const missionTab = document.getElementById('mission-tab');
    const visionTab = document.getElementById('vision-tab');

    if (type === 'mission') {
      content.innerHTML = "To promote sustainable developmental policies and programs for and with the Filipino Youth.";
      missionTab.classList.add("active");
      visionTab.classList.remove("active");
    } else if (type === 'vision') {
      content.innerHTML = "Vision for the Filipino Youth – “Enabled, involved and patriotic youth realizing their aspirations.” Agency Vision – “NYC envisions itself as the voice and advocate of the youth.”";
      visionTab.classList.add("active");
      missionTab.classList.remove("active");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-up");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                setTimeout(() => {
                    element.classList.add("show");
                }, index * 300);
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

  //for picture on the SK people
  document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".category");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;
        categories.forEach(category => {
            const categoryTop = category.getBoundingClientRect().top;
            if (categoryTop < triggerBottom) {
                category.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

