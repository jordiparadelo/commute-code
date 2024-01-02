
function initAnnounceBar() {
    const navbar = $(".rc-navbar");
    let navbarHeight = navbar.height()
    const announceBar = $(".rc-announcement-bar");
    const closeButton = $(".rc-announcement-bar_close-btn");
    const announceBarHeight = announceBar.height();
  
    navbar.css("--announcement-bar-height", `${announceBarHeight}px`);
    //$('.rc-header').css('--navbar-height', `${navbarHeight}px`);
    $('.rc-header').css('height', `${navbarHeight}px`)
  
    closeButton.on("click", function () {
      announceBar.slideUp("fast", function(){
        //$('.rc-header').css('--navbar-height', `${navbar.height()}px`);
        $('.rc-header').css('height', `${navbar.height()}px`);
      });
    });
  }

export default initAnnounceBar;