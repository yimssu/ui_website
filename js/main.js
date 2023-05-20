var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {
    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('#section01 .image01_01').addClass('on');
        $('#section01 .image02_01').addClass('on');
        $('#section01 .image03_01').addClass('on');
    },300)

    setTimeout(() => {
        $('#section01 .title01_01').addClass('on');
        $('#section01 .title02_01').addClass('on');
        $('#section01 .sticker02_01').addClass('on');
        $('#section01 .top_left_01').addClass('on');
    },1000)


    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        // $('.posNum').html(scrollTop)

        if(scrollTop >= 0){
            $('.sticker01_01').addClass('on');
        }
        if(scrollTop >= 662){
            $('.image_02').addClass('on');
        }
        if(scrollTop >= 700){
            $('.maintitle01_02').addClass('on');
        }
        if(scrollTop >= 720){
            $('.maintitle02_02').addClass('on');
        }
        if(scrollTop >= 930){
            $('.circle_02').addClass('on');
        }
        if(scrollTop >= 935){
            $('.text01_02').addClass('on');
        }
        if(scrollTop >= 1980){
            $('.circle02_02').addClass('on');
        }
        if(scrollTop >= 2170){
            $('.image01_03').addClass('on');
        }
        if(scrollTop >= 2250){
            $('.image02_03').addClass('on');
        }
        if(scrollTop >= 2300){
            $('.maintitle_03').addClass('on');
        }
        if(scrollTop >= 2673){
            $('.image03_03').addClass('on');
        }
        if(scrollTop >= 2773){
            $('.image04_03').addClass('on');
        }
        if(scrollTop >= 2873){
            $('.image05_03').addClass('on');
        }
        if(scrollTop >= 3750){
            $('.maintitle01_04').addClass('on');
        }
        if(scrollTop >= 3750){
            $('.line01_04').addClass('on');
        }
        if(scrollTop >= 3900){
            $('.line02_04').addClass('on');
        }
        if(scrollTop >= 4468){
            $('.line03_04').addClass('on');
        }
        if(scrollTop >= 4220){
            $('.text01_04').addClass('on');
        }
        if(scrollTop >= 4220){
            $('.typo01_04').addClass('on');
        }
        if(scrollTop >= 4300){
            $('.typo02_04').addClass('on');
        }
        if(scrollTop >= 4400){
            $('.typo03_04').addClass('on');
        }
        if(scrollTop >= 4700){
            $('.color01_04').addClass('on');
        }
        if(scrollTop >= 4800){
            $('.color02_04').addClass('on');
        }
        if(scrollTop >= 4800){
            $('.text02_04').addClass('on');
        }
        if(scrollTop >= 5400){
            $('.maintitle01_05').addClass('on');
        }
        if(scrollTop >= 5400){
            $('.line01_05').addClass('on');
        }
        if(scrollTop >= 5500){
            $('.maintitle02_05').addClass('on');
        }
        if(scrollTop >= 5700){
            $('.mini_05').addClass('on');
        }

        if(scrollTop >= 5970){
            $('.mockup01_05').addClass('on');
        }
        if(scrollTop >= 6200){
            $('.mockup02_05').addClass('on');
        }
        if(scrollTop >= 6200){
            $('.mockup02_2_05').addClass('on');
        }
        if(scrollTop >= 7300){
            $('.mockup03_05').addClass('on');
        }
        if(scrollTop >= 7600){
            $('.text01_05').addClass('on');
        }
        if(scrollTop >= 7600){
            $('.line02_05').addClass('on');
        }
        if(scrollTop >= 8700){
            $('.mockup04_05').addClass('on');
        }
        if(scrollTop >= 8700){
            $('.mockup04_05').addClass('on');
        }
        if(scrollTop >= 9100){
            $('.text02_05').addClass('on');
        }
        if(scrollTop >= 9100){
            $('.line03_05').addClass('on');
        }
        if(scrollTop >= 9600){
            $('.text03_05').addClass('on');
        }
        if(scrollTop >= 9600){
            $('.line04_05').addClass('on');
        }
        if(scrollTop >= 10700){
            $('.new_products_05').addClass('on');
        }
        if(scrollTop >= 10700){
            $('.new_collection_05').addClass('on');
        }
        if(scrollTop >= 11420){
            $('.line05_05').addClass('on');
        }
        if(scrollTop >= 11520){
            $('.mockup07_05').addClass('on');
        }
        if(scrollTop >= 11713){
            $('.text04_05').addClass('on');
        }
        if(scrollTop >= 11713){
            $('.line06_05').addClass('on');
        }
        if(scrollTop >= 12200){
            $('.mockup05_05').addClass('on');
        }
        if(scrollTop >= 12300){
            $('.mockup06_05').addClass('on');
        }
        if(scrollTop >= 13000){
            $('.image02_01_05').addClass('on');
        }
        if(scrollTop >= 13200){
            $('.image02_02_05').addClass('on');
        }
        if(scrollTop >= 13800){
            $('.text05_05').addClass('on');
        }
        if(scrollTop >= 13800){
            $('.line07_05').addClass('on');
        }
        if(scrollTop >= 15300){
            $('.maintitle01_06').addClass('on');
        }
        if(scrollTop >= 15300){
            $('.line01_06').addClass('on');
        }
        if(scrollTop >= 15400){
            $('.maintitle02_06').addClass('on');
        }
        if(scrollTop >= 15600){
            $('.mini_06').addClass('on');
        }

        if(scrollTop >= 16000){
            $('.mockup01_06').addClass('on');
        }
        if(scrollTop >= 16800){
            $('.mockup02_06').addClass('on');
        }
        if(scrollTop >= 17000){
            $('.text01_06').addClass('on');
        }
        if(scrollTop >= 17000){
            $('.line02_06').addClass('on');
        }
        if(scrollTop >= 17700){
            $('.image01_06').addClass('on');
        }
        if(scrollTop >= 17800){
            $('.image02_06').addClass('on');
        }     
        if(scrollTop >= 18700){
            $('.mockup03_06').addClass('on');
        }    
        if(scrollTop >= 18900){
            $('.text02_06').addClass('on');
        }   
        if(scrollTop >= 18900){
            $('.line03_06').addClass('on');
        }    
        if(scrollTop >= 19200){
            $('.mockup04_06').addClass('on');
        }    
        if(scrollTop >= 19600){
            $('.text03_06').addClass('on');
        }    
        if(scrollTop >= 19600){
            $('.line04_06').addClass('on');
        } 
        if(scrollTop >= 20400){
            $('.image03_06').addClass('on');
        } 
        if(scrollTop >= 20500){
            $('.image04_06').addClass('on');
        } 
        if(scrollTop >= 20600){
            $('.image05_06').addClass('on');
        } 
        if(scrollTop >= 20700){
            $('.image06_06').addClass('on');
        } 
        
        if(scrollTop >= 20970){
            $('.maintitle01_07').addClass('on');
        } 
        if(scrollTop >= 20970){
            $('.line01_07').addClass('on');
        } 
        if(scrollTop >= 21110){
            $('.maintitle02_07').addClass('on');
        }  
        if(scrollTop >= 21400){
            $('.mini_07').addClass('on');
        } 
        if(scrollTop >= 21700){
            $('.mockup01_07').addClass('on');
        } 
        if(scrollTop >= 21900){
            $('.text01_07').addClass('on');
        } 
        if(scrollTop >= 21900){
            $('.line02_07').addClass('on');
        } 
        if(scrollTop >= 22600){
            $('.mockup02_07').addClass('on');
        } 
        if(scrollTop >= 22800){
            $('.text02_07').addClass('on');
        } 
        if(scrollTop >= 22800){
            $('.line03_07').addClass('on');
        } 
        if(scrollTop >= 23200){
            $('.mockup03_07').addClass('on');
        } 

        if(scrollTop >= 24500){
            $('.maintitle01_08').addClass('on');
        } 
        if(scrollTop >= 24500){
            $('.line01_08').addClass('on');
        } 
        if(scrollTop >= 24600){
            $('.maintitle02_08').addClass('on');
        } 
        if(scrollTop >= 24700){
            $('.mini_08').addClass('on');
        } 
        if(scrollTop >= 25000){
            $('.mockup01_08').addClass('on');
        } 
        if(scrollTop >= 25300){
            $('.text01_08').addClass('on');
        } 
        if(scrollTop >= 25300){
            $('.line02_08').addClass('on');
        } 
        if(scrollTop >= 26100){
            $('.mockup02_08').addClass('on');
        } 
        if(scrollTop >= 26400){
            $('.text02_08').addClass('on');
        } 
        if(scrollTop >= 26400){
            $('.line03_08').addClass('on');
        } 
        if(scrollTop >= 27000){
            $('.bottom_image01_08').addClass('on');
        } 
        if(scrollTop >= 27300){
            $('.bottom_image02_08').addClass('on');
        } 

        if(scrollTop >= 27700){
            $('.maintitle01_09').addClass('on');
        } 
        if(scrollTop >= 27700){
            $('.line01_09').addClass('on');
        } 
        if(scrollTop >= 27800){
            $('.maintitle02_09').addClass('on');
        } 
        if(scrollTop >= 28000){
            $('.mini_09').addClass('on');
        } 
        if(scrollTop >= 28300){
            $('.mockup01_09').addClass('on');
        } 
        if(scrollTop >= 28800){
            $('.text01_09').addClass('on');
        } 
        if(scrollTop >= 28800){
            $('.line02_09').addClass('on');
        } 
        if(scrollTop >= 29300){
            $('.mockup02_09').addClass('on');
        } 
        if(scrollTop >= 29900){
            $('.image01_09').addClass('on');
        } 
        if(scrollTop >= 30200){
            $('.image02_09').addClass('on');
        } 

        if(scrollTop >= 31360){
            $('.maintitle01_footer').addClass('on');
        } 
        if(scrollTop >= 31360){
            $('.image_footer').addClass('on');
        } 
        if(scrollTop >= 31460){
            $('.maintitle02_footer').addClass('on');
        } 
        if(scrollTop >= 31560){
            $('.maintitle03_footer').addClass('on');
        } 
     

        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 







    });


    gsap.to(".text03_02", {
        x: -2287, 
        ease: "none",
        duration: 30,
        repeat: -1,
      });
      gsap.to(".text04_02", {
        x: -2287, 
        ease: "none",
        duration: 60,
        repeat: -1,
      });

      gsap.to(".star_03", {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      gsap.to(".star01_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star02_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star03_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
      gsap.to(".star04_04", {
        rotation: 360,
        ease: "none",
        duration: 8,
        repeat: -1,
      });

      gsap.to(".star_05", {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      gsap.to(".star_07", {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      gsap.to(".circle_text_09", {
        rotation: 360,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      gsap.to(".star_footer", {
        rotation: 360,
        ease: "none",
        duration: 20,
        repeat: -1,
      });












})


