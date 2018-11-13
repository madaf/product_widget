
document.querySelector(".widget").style.display = "none";

//loop through products and dynamically display them on the page
seeds.map(seed => {
    const container = document.createElement("div");
    const productName = document.createElement("h3");
    const productImage = document.createElement("IMG");
    const button = document.createElement("button");
    productImage.src = seed.image;
    productName.id = seed.id
    container.className = "item";
    productImage.className = "product_image";
    button.className = "product_button";
    document.querySelector(".products").appendChild(container);
    const productNameNode = document.createTextNode(seed.name);
    productName.appendChild(productNameNode);
    container.appendChild(productName);
    container.appendChild(productImage);
    container.appendChild(button);
    button.innerHTML = "Details";

    //open the widget and add the data to Product
    button.addEventListener("click", function () {
        const productTitle = document.getElementById("title");
        const productDescription = document.getElementById("description");
        const productImage = document.getElementById("display");
        productTitle.innerHTML = seed.name;
        productDescription.innerHTML = seed.description;
        productImage.src = seed.image;
        Object.assign(productImage.style, {
            width: "100px",
            height: "100px"
        });
        document.querySelector(".widget").style.display = "block";
        document.getElementById("recommendation").style.display = "none";

        //close the widget and resets the styles
        document.getElementById("close").onclick = function () {
            document.querySelector(".widget").style.display = "none";
            document.getElementById("recommendation").style.display = "none";
            document.getElementById("product").style.display = "grid";
            Object.assign(document.getElementById("recommendation_tab").style, {
                background: "#e0e8ff",
                color: "#000"
            });
            Object.assign(document.getElementById("product_tab").style, {
                background: "#00207e",
                color: "#fff"
            });
            const productRecommendations = document.querySelectorAll(".rec");
            productRecommendations.forEach(productRecommendation => {
                productRecommendation.remove();
            })

        }


        ////loop through the recommendations, compares what they have in common and dynamically display in the widget in Recommendations
        recommendations.map(rec => {
            if (seed.category[0] == rec.category[0] || seed.category[1] == rec.category[1]) {
                const containerRec = document.createElement("div");
                const nameRec = document.createElement("p");
                const imageRec = document.createElement("IMG");
                const descriptionRec = document.createElement("p");
                containerRec.className = "rec";
                nameRec.className = "rec_name";
                imageRec.className = "rec_image";
                descriptionRec.className = "rec_description";
                imageRec.src = rec.image;
                document.getElementById("recommendation").appendChild(containerRec);
                const nameRecNode = document.createTextNode(rec.name);
                nameRec.appendChild(nameRecNode);
                containerRec.appendChild(nameRec);
                const descriptionRecNode = document.createTextNode(rec.description);
                containerRec.appendChild(imageRec);
                descriptionRec.appendChild(descriptionRecNode);
                containerRec.appendChild(descriptionRec);
                Object.assign(imageRec.style, {
                    width: "100px",
                    height: "100px"
                });
            }
        })
        //style for the 2 tabs to show which one is active
        document.getElementById("recommendation_tab").addEventListener("click", function () {
            document.getElementById("recommendation").style.display = "block";
            document.getElementById("product").style.display = "none";
            Object.assign(document.getElementById("recommendation_tab").style, {
                background: "#00207e",
                color: "#fff"
            });
            Object.assign(document.getElementById("product_tab").style, {
                background: "#e0e8ff",
                color: "#000"
            });

        })

        document.getElementById("product_tab").addEventListener("click", function () {
            document.getElementById("recommendation").style.display = "none";
            document.getElementById("product").style.display = "grid";
            Object.assign(document.getElementById("recommendation_tab").style, {
                background: "#e0e8ff",
                color: "#000"
            });
            Object.assign(document.getElementById("product_tab").style, {
                background: "#00207e",
                color: "#fff"
            });
        })

    });


});
