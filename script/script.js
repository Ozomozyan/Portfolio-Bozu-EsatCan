$(function() {
    // Toggle sidebar visibility
    function toggleSidebar() {
        $(".menu-responsive").toggleClass("open");
        $(".menu-backdrop").fadeToggle(); // Toggle the visibility of the backdrop
    }

    // Event listener for clicking the menu bars icon
    $(".menu-bars").click(function() {
        toggleSidebar();
    });

    // Event listener for clicking the backdrop to close the sidebar
    $(".menu-backdrop").click(function() {
        toggleSidebar();
    });

    // Smooth scrolling for internal links
    $("a.scroll").click(function(event) {
        var href = $(this).attr('href');

        // Check if the link is an internal link
        if (href.startsWith("#") && $(href).length) {
            event.preventDefault(); // Prevent the default "jump" to the section
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 1500);
        }
        // If not an internal link, do not prevent the default behavior
    });
    

        // Progress Bar Animate
    window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
       origin: "left",
       duration: 2000,
       distance: "100%"
    });
    
    
    // Contact Text Animate
    const sentences = ["développeur informatique ?", "alternant informatique ?"];
    let i = 0;
    
    setInterval(function() {
        $(".text-animate").fadeOut(function() {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);
});
