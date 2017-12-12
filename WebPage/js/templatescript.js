var blogPosts = [
    {
        postTitle: "Shop and learn",
        categories: ["Mac","iPad","iPhone","Watch","TV","Music","iTunes","HomePod","iPod touch","Accessories","Gift Cards"]
    },
    {
        postTitle: "Apple store",
        categories: ["Find a store","Genius bar","Today at apple","Apple camp","Field trip","Apple store app","Refurbished and clearance","Financing","Reuse and recycling","Order status","Shopping help"]
    },
    {
        postTitle: "For education and business",
        categories: ["Apple and education","Shop for college","Apple and business","Shop for business"]
    },
    {
        postTitle: "Apple values",
        categories: ["Accessability","Education","Environment","Inclusion and diversity","Privacy","Supplier responsibility"]
    },
    {
        postTitle: "About apple",
        categories: ["Newsroom","Apple leadership","Job opportunities","Investors","Events","Contact apple"]
    }
];

// Render the blog posts
$("#blogPostTemplate").tmpl(blogPosts).appendTo("#blogPostContainer");
