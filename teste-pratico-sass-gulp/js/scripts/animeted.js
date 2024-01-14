{
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        delay: 100,
        once: true
    });
    
    window.addEventListener('scroll', function(ev){
        
        if (window.scrollY >= 50){
            this.document.getElementsByClassName("navbar")[0].style.backgroundColor='#288f45';
            this.window.document.getElementsByClassName("navbar")[0].style.boxShadow= 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            this.window.document.getElementsByClassName("navbar")[0].style.paddingBottom = '20px'
            /* this.document.getElementsByClassName("navbar")[0].style.display='none'; */
        } else {
            this.document.getElementsByClassName("navbar")[0].style.backgroundColor='transparent';
            this.window.document.getElementsByClassName("navbar")[0].style.boxShadow= 'none'
            /* this.document.getElementsByClassName("navbar")[0].style.display='initial'; */
        }
    });

}