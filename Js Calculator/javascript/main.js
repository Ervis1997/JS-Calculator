
        var swiper = new Swiper(".testimonial_swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        let headerBurger = document.getElementbyId("header_burger");

        headerBurger.addEventListener("click", function() {
            console.log(document.getElementsByTagName("body"))
            document.getElementsByTagName("body") [0].classList.toggle(menu-open);

        });
      
        console.log("hello world");
        //alert("Hello World Alert");

        const firstNumber = 4;
        const secondNumber = 5;
        

        let total = 0;
        console.log(total);

        total = firstNumber + secondNumber;

        console.log(firstNumber);
        console.log(secondNumber);
        console.log(total);

        let myVariable = 2;
        let myVariablestr = "2";
        let myVariable2 = 4;
        let myVariableStr2 = "4";

        console.log(myVariable + myVariable2);
        console.log(myVariable + myVariableStr);
        console.log(myVariableStr + myVariableStr2);

        //Vetem me plus vlen String perndryshe te gjitha te tjerat jane te njejta si ne matematik......


        console.log(myVariable == myVariablestr); true  //me dy barazim vetem vlera e njejt
        console.log(myVariable === myVariablestr); false //me tri barazime edhe 'type' duhet te jet i njejt

        console.log(myVariable == 2); true 
        console.log(!(myVariable == 2)); false //

        console.log(myVariableStr != 2);  false
        console.log(myVariableStr !== 2); true // e kunderta e dy barzimev me tri barazime


        if(myVariableStr == 2) {
            console.log("myVariableStr is equal to 2");
        } else {
            console.log("myVariableStr is not equal to 2")
        }

        if(myVariable == 2) {
            console.log("This is true")
        }

        function multiply(num1, num2) {
            let result = num1 * num2;
            return result;
        } 

        console.log(multiply(myVariable, myVariable2)) = 4

        console.log(document.querySelector(".block_btn"));
        console.log(document.getElementById("logo"));

        let logo = document.getElementById("logo");

        logo.addEventListener("click", function() {
            console.log("logo clicked");
        });

        window.addEventListener("load", function() {
            console.log("html loaded");
         });


         let training = {numerOfSlides: "10", days: "30", name: "Front-end"}
        
        console.log(training);

        console.log("Training name is: ", training.name)
        console.log("Training name is: ", ["name"])


        let newsletterBtn = document.getElementById("newsletter_btn");
        newsletterBtn.addEventListener("click", function(){
        this.innerHtml = "Form Submitted"
        });

        let stringExample = "abcde";
        console.log(stringExample.length)
        console.log(stringExample.slice(5, 14))
        console.log(stringExample.substring(5, 14))


        





