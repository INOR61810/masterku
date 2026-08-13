const tombol = document.querySelector(".hero button");

tombol.addEventListener("click", () => {

    document.querySelector(".materi").scrollIntoView({

        behavior: "smooth"

    });

});