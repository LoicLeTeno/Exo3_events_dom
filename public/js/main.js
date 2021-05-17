// ### 1
let h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.classList.add("text-blue");
});


// ### 2
let h3 = document.querySelector('h3');

h3.addEventListener('dblclick', () => {
    h3.className = "text-error";
});


// ### 3
let p = document.querySelector('p');

p.addEventListener('click', () => {
    p.classList.toggle("text-style");
});


// ### 4
let span = Array.from(document.querySelectorAll('p')[1].children);

span.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle("bolder")
    });
});


// ### 5
//     // DYNAMIQUE
// let y = Array.from(document.querySelectorAll('p')[2].children);

// y.forEach((e, i) => {
//     e.addEventListener('click', () => {
//         switch (i) {
//             case 0:
//                 y[i + 1].classList.remove("bolder-red");
//                 y[i + 2].classList.remove("bolder-red");
//                 break;
        
//             case 1:
//                 y[i - 1].classList.remove("bolder-red");
//                 y[i + 1].classList.remove("bolder-red");
//                 break;

//             case 2:
//                 y[i - 1].classList.remove("bolder-red");
//                 y[i - 2].classList.remove("bolder-red");
//                 break;    

//             default:
//                 break;
//         }

//         y[i].classList.add("bolder-red");
//     });
// });


    // PLUS RAPIDE
let span_2 = Array.from(document.querySelectorAll('p')[2].children);

span_2.forEach(e => {
    e.addEventListener('click', () => {
        span_2.forEach(e => {
            e.classList.remove("bolder-red")
        });

        e.classList.add("bolder-red")
    });
});