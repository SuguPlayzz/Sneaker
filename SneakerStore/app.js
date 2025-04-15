const wrapper = document.querySelector(".sliderwrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/product/air.png",
            },
            {
                code: "darkblue",
                img: "./img/product/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/product/jordan.png",
            },
            {
                code: "red",
                img: "./img/product/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/product/blazer.png",
            },
            {
                code: "green",
                img: "./img/product/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/product/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/product/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/product/hippie.png",
            },
            {
                code: "black",
                img: "./img/product/hippie2.png",
            },
        ],
    },
];

let choosenproduct = products[0];

const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductColors = document.querySelectorAll(".color"); // Select all color elements
const currentproductSizes = document.querySelectorAll(".size"); // Ensure you select all size elements

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the current product
        choosenproduct = products[index];

        // Change texts of current product
        currentproductTitle.textContent = choosenproduct.title;
        currentproductPrice.textContent = "RM" + choosenproduct.price;
        currentproductImg.src = choosenproduct.colors[0].img;

        // Assign new color
        currentproductColors.forEach((color, colorIndex) => {
            color.style.backgroundColor = choosenproduct.colors[colorIndex].code;
        });
    });
});

currentproductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentproductImg.src = choosenproduct.colors[index].img;
    });
});

currentproductSizes.forEach((size, index) => {  // Fixed typo here (imdex -> index)
    size.addEventListener("click", () => {
        currentproductSizes.forEach((size) => {
            size.style.backgroundColor = "white";  // Corrected to backgroundColor (camelCase)
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";  // Corrected to backgroundColor (camelCase)
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
