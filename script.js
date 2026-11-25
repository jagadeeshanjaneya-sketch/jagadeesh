// ===============================
// FOOD RECIPE DATA
// ===============================

const recipes = {

    idli: {
        title: "Idli",
        category: "Breakfast",

        ingredients: [
            "2 cups idli rice",
            "1 cup urad dal",
            "1 teaspoon salt",
            "Water"
        ],

        preparation: [
            "Wash rice and urad dal separately.",
            "Soak them in water for 4 to 5 hours.",
            "Grind them into a smooth batter.",
            "Mix the batter and allow it to ferment overnight.",
            "Add salt to the batter.",
            "Pour the batter into idli molds.",
            "Steam for 10 to 15 minutes.",
            "Serve hot with sambar or chutney."
        ]
    },


    dosa: {
        title: "Dosa",
        category: "Breakfast",

        ingredients: [
            "2 cups rice",
            "1 cup urad dal",
            "Salt",
            "Water",
            "Oil"
        ],

        preparation: [
            "Wash and soak rice and urad dal.",
            "Grind them into a smooth batter.",
            "Allow the batter to ferment overnight.",
            "Add salt and mix well.",
            "Heat a dosa pan.",
            "Pour the batter and spread it into a thin circle.",
            "Add a little oil.",
            "Cook until golden brown.",
            "Serve with chutney or sambar."
        ]
    },


    biryani: {
        title: "Chicken Biryani",
        category: "Lunch",

        ingredients: [
            "2 cups basmati rice",
            "500 grams chicken",
            "2 onions",
            "2 tomatoes",
            "Ginger garlic paste",
            "Biryani masala",
            "Curd",
            "Mint leaves",
            "Coriander leaves",
            "Oil",
            "Salt"
        ],

        preparation: [
            "Wash and soak the basmati rice.",
            "Marinate the chicken with curd and spices.",
            "Heat oil and fry the onions.",
            "Add ginger garlic paste and tomatoes.",
            "Add the marinated chicken.",
            "Cook the chicken until it is partially cooked.",
            "Add the soaked rice and required water.",
            "Cook until the rice is completely done.",
            "Garnish with mint and coriander leaves.",
            "Serve hot."
        ]
    },


    pizza: {
        title: "Vegetable Pizza",
        category: "Dinner",

        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Mozzarella cheese",
            "Onion",
            "Capsicum",
            "Tomato",
            "Sweet corn",
            "Oregano"
        ],

        preparation: [
            "Place the pizza base on a tray.",
            "Spread pizza sauce over the base.",
            "Add chopped onion, capsicum and tomato.",
            "Add sweet corn.",
            "Spread mozzarella cheese.",
            "Sprinkle oregano.",
            "Bake until the cheese melts.",
            "Cut into slices and serve."
        ]
    },


    pasta: {
        title: "Vegetable Pasta",
        category: "Dinner",

        ingredients: [
            "200 grams pasta",
            "1 onion",
            "1 tomato",
            "1 capsicum",
            "2 garlic cloves",
            "2 tablespoons pasta sauce",
            "Oil",
            "Salt",
            "Pepper"
        ],

        preparation: [
            "Boil pasta in water with a little salt.",
            "Drain the cooked pasta.",
            "Heat oil in a pan.",
            "Add garlic and onion.",
            "Add tomato and capsicum.",
            "Add pasta sauce.",
            "Add cooked pasta.",
            "Add salt and pepper.",
            "Mix everything well and serve."
        ]
    },


    friedrice: {
        title: "Vegetable Fried Rice",
        category: "Lunch",

        ingredients: [
            "2 cups cooked rice",
            "Carrot",
            "Beans",
            "Capsicum",
            "Spring onion",
            "Soy sauce",
            "Pepper",
            "Salt",
            "Oil"
        ],

        preparation: [
            "Heat oil in a pan.",
            "Add chopped vegetables.",
            "Stir-fry the vegetables for a few minutes.",
            "Add cooked rice.",
            "Add soy sauce, salt and pepper.",
            "Mix everything well.",
            "Add spring onions.",
            "Serve hot."
        ]
    },


    burger: {
        title: "Vegetable Burger",
        category: "Dinner",

        ingredients: [
            "Burger buns",
            "Vegetable patty",
            "Lettuce",
            "Tomato",
            "Onion",
            "Cheese",
            "Mayonnaise",
            "Tomato sauce"
        ],

        preparation: [
            "Cut the burger bun into two halves.",
            "Toast the bun lightly.",
            "Cook the vegetable patty.",
            "Apply mayonnaise and tomato sauce.",
            "Add lettuce, tomato and onion.",
            "Place the vegetable patty.",
            "Add cheese.",
            "Cover with the top bun and serve."
        ]
    },


    sandwich: {
        title: "Vegetable Sandwich",
        category: "Breakfast",

        ingredients: [
            "Bread slices",
            "Tomato",
            "Onion",
            "Capsicum",
            "Cheese",
            "Butter",
            "Salt",
            "Pepper"
        ],

        preparation: [
            "Apply butter to the bread slices.",
            "Add chopped vegetables.",
            "Add cheese.",
            "Sprinkle salt and pepper.",
            "Cover with another bread slice.",
            "Toast the sandwich until golden brown.",
            "Cut into pieces and serve."
        ]
    },


    chapati: {
        title: "Chapati",
        category: "Dinner",

        ingredients: [
            "2 cups wheat flour",
            "Water",
            "Salt",
            "Oil"
        ],

        preparation: [
            "Add wheat flour and salt to a bowl.",
            "Add water slowly and prepare a soft dough.",
            "Rest the dough for 15 to 20 minutes.",
            "Make small balls from the dough.",
            "Roll each ball into a thin circle.",
            "Heat a pan.",
            "Cook the chapati on both sides.",
            "Serve hot with curry."
        ]
    },


    cake: {
        title: "Chocolate Cake",
        category: "Dessert",

        ingredients: [
            "1 cup flour",
            "1/2 cup cocoa powder",
            "1 cup sugar",
            "2 eggs",
            "1/2 cup milk",
            "1/2 cup butter",
            "1 teaspoon baking powder"
        ],

        preparation: [
            "Mix flour, cocoa powder and baking powder.",
            "Add sugar, eggs, milk and butter.",
            "Mix everything into a smooth batter.",
            "Pour the batter into a cake pan.",
            "Bake until the cake is completely cooked.",
            "Allow it to cool.",
            "Decorate and serve."
        ]
    },


    gulabjamun: {
        title: "Gulab Jamun",
        category: "Dessert",

        ingredients: [
            "Gulab jamun mix",
            "Water",
            "Sugar",
            "Cardamom",
            "Oil or ghee"
        ],

        preparation: [
            "Prepare the dough using gulab jamun mix.",
            "Make small smooth balls.",
            "Heat oil or ghee.",
            "Fry the balls until golden brown.",
            "Prepare sugar syrup with sugar and water.",
            "Add cardamom to the syrup.",
            "Put the fried balls into the warm syrup.",
            "Allow them to soak before serving."
        ]
    }

};


// ===============================
// SHOW RECIPE
// ===============================

function showRecipe(recipeName) {

    const recipe = recipes[recipeName];

    if (!recipe) {
        return;
    }

    document.getElementById("recipeTitle").innerText =
        recipe.title;


    let ingredientsHTML = "";

    for (let i = 0; i < recipe.ingredients.length; i++) {

        ingredientsHTML +=
            "<li>" + recipe.ingredients[i] + "</li>";
    }


    let preparationHTML = "";

    for (let i = 0; i < recipe.preparation.length; i++) {

        preparationHTML +=
            "<li>" + recipe.preparation[i] + "</li>";
    }


    document.getElementById("recipeContent").innerHTML =

        "<p><strong>Category:</strong> " +
        recipe.category +
        "</p>" +

        "<h3>Ingredients</h3>" +

        "<ul>" +
        ingredientsHTML +
        "</ul>" +

        "<h3>Preparation</h3>" +

        "<ol>" +
        preparationHTML +
        "</ol>";


    document.getElementById("recipeDetails")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ===============================
// SEARCH RECIPE
// ===============================

function searchRecipes() {

    let searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const cards =
        document.querySelectorAll(".recipe-card");


    // If search box is empty
    if (searchText === "") {

        cards.forEach(function(card) {

            card.style.display = "block";

        });

        return;
    }


    let found = false;


    cards.forEach(function(card) {

        let recipeName =
            card.querySelector("h3")
            .innerText
            .toLowerCase();


        if (recipeName.includes(searchText)) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    // If recipe is not found
    if (!found) {

        document.getElementById("recipeTitle")
            .innerText = "Recipe Not Found";


        document.getElementById("recipeContent")
            .innerHTML =
            "<p>Sorry, we could not find this recipe.</p>";

    }

}


// ===============================
// SEARCH BUTTON
// ===============================

function searchFood() {

    let searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    if (searchText === "") {

        alert("Please enter a food name.");

        return;
    }


    // Search inside recipe database
    let foundRecipe = null;


    for (let key in recipes) {

        let recipe = recipes[key];


        if (
            recipe.title
                .toLowerCase()
                .includes(searchText)
        ) {

            foundRecipe = key;

            break;
        }

    }


    if (foundRecipe) {

        showRecipe(foundRecipe);

    } else {

        document.getElementById("recipeTitle")
            .innerText = "Recipe Not Found";


        document.getElementById("recipeContent")
            .innerHTML =

            "<p>Sorry, we don't have a recipe for <strong>" +
            searchText +
            "</strong> yet.</p>" +

            "<p>Try searching for Idli, Dosa, Biryani, Pizza, Pasta, Burger, Cake or another available recipe.</p>";


        document.getElementById("recipeDetails")
            .scrollIntoView({
                behavior: "smooth"
            });
    }

}

