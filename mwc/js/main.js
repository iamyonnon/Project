
        function menu() {
            var ul = document.getElementById('ul-ab');

                if ( ul.style.display === 'none' ) {
                    ul.style.display = 'block';
                }
                else{
                    ul.style.display = 'none';
                }
        }


        $('#slide1').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:4000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
