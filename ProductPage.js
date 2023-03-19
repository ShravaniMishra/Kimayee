// / navbar search dropdown Option

document.querySelector(".searchbar").addEventListener("click", showsearch);

function showsearch(){
    document.querySelector("form").style.display = "block";
}

// navbar hide search dropdown Option

document.querySelector(".hidebar").addEventListener("click", closesearch);

function closesearch(){
    document.querySelector("#searchform").style.display = "none";
}

// navbar search SUBMIT button function

document.querySelector("form").addEventListener("submit", showproduct);

function showproduct(event){
    event.preventDefault();
    var searchInput = document.querySelector(".typeany").value;
    if(searchInput == "ALL FRUITS"){
        window.location.href = "ProductPage.html";
    }
    
}

let y = localStorage.getItem("type")
console.log(y)

// function for go to home page.

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
  window.location.href = "index.html";
});

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
  window.location.href = "login.html";
})

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
  window.location.href = "cart.html";
})

// function for adding product data on page

var data = [
  {
    
    name: "Kimaye Cherries(USA Northwest)(Pack of 125gm)",
    image: "https://images.indianexpress.com/2022/07/cherries_759_thinkstockphotos-462295895-1.jpg",
    price: "₹ 369",
    cart:"Add to Cart"
   
   
  },
  {
    
    name: "Kimaye Custard Apple (Pack of 500 gm & 1 kg)" ,
    image: "https://cdn.britannica.com/95/126995-050-101B8B8D/Sweetsop.jpg",
    price: "₹ 133 – ₹ 266",
    cart:"Add to Cart"
  },
  {
    
    name: "Kimaye Dragon Fruit (Red) (1pc)",
    image: "https://kumaribasket.com/wp-content/uploads/2021/02/Dragon-Fruit-1200x1308.jpg",
    price: "₹105",
    cart:"Add to Cart"
  },
  {
    
    name: "Kimaye Shimla Apples (Pack of 3 & 6)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Shimla-Apples-cover_360x.jpg?v=1632485361",
    price: "₹ 111 – ₹ 259",
    cart:"Add to Cart"

  },
  {
  
    name: "Kimaye Indian Plum (250 g)",
    image: "https://www.jiomart.com/images/product/original/590003511/plum-indian-8-pcs-pack-approx-350-g-400-g-product-images-o590003511-p590318013-0-202203170215.jpg",
    price: "₹71",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Blueberries (125 g)",
    image: "https://hips.hearstapps.com/hmg-prod/images/blueberries-1527711083.jpg?crop=0.667xw:1.00xh;0.202xw,0&resize=1200:*",
    price: "₹ 285",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Avocado (Imported) (1 pc)",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/4/QF/TN/CB/40411695/avocado-fruits-1000x1000.jpg",
    price: "₹ 155",
    cart:"Add to Cart"
  },
  {
  
    name: "Northwest Cherries- Blueberry Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_360x.jpg?v=1654851019",
    price: "₹ 654",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Muskmelon (1pc)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Muskmelon-cover_360x.jpg?v=1633763200",
    price: "₹ 62",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Papaya (1 pc)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Papaya-cover_360x.jpg?v=1638875170",
    price: "₹ 85",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Watermelon(1 pc)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_19473cce-96ae-4149-aaa1-508f17ac6c28_360x.jpg?v=1648186636",
    price: "₹ 65",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Green Apples (Pack of 3 pc & 6 pc)",
    image: "https://thumbs.dreamstime.com/b/green-apple-leaf-slice-isolated-white-ripe-background-clipping-path-45471482.jpg",
    price: "₹ 183 – ₹ 366",
    cart:"Add to Cart"
  },

  {
  
    name: "Kimaye Mini Oranges (4-6 pcs)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mini-Oranges-cover_bbce1a6a-4ab6-4a62-8928-3a956ed7b8cf_360x.jpg?v=1649913612",
    price: "₹ 119",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Imported Oranges(Pack of 3 & 6)",
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Fresh-Clementine-and-Blood-Oranges-1024x1024.jpg",
    price: "₹178 – ₹345",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Royal Gala Apples(Pack of 3 & 6)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/royal-gala-apple-cover_540x.jpg?v=1643012816",
    price: "₹170 – ₹340",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Grapefruit(Pack of 2 & 4)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-cover-sw@2x.jpg?v=1669119666",
    price: "₹145 – ₹289",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Dragon Fruit (1 pc)",
    image: "https://www.eatrightbasket.com/wp-content/uploads/2020/09/Dragon-Fruit-Red.png",
    price: "₹99",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Sun Melon(1 pc)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover-sun-melon_360x.jpg?v=1620314805",
    price: "₹51",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Washington Apples (Pack of 2 pc & 4 pc",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/washington-applecover_360x.jpg?v=1641449752",
    price: "₹140 – ₹269",
    cart:"Add to Cart"
  },
  {
  
    name: "Arils Festive Pack (Pack of 5 cups)",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/fruit-box-by-kimaye-abundance-384713671-utkua.jpg",
    price: "₹260",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Golden Kiwis (3 pcs)",
    image: "https://www.zespri.com/content/dam/zespri/us/blog-detail/green-vs--gold-kiwifruit/green_and_gold_r1.jpeg",
    price: "₹ 149",
    cart:"Add to Cart"
  },
  {
  
    name: "Red Globe Imported (400g) ",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_360x.png?v=1614765886",
    price: "₹ 199",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Thai Guava (1pc-2pc - 0.5 kg)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofGuava_Main_Clean_360x.png?v=1606828311",
    price: "₹ 79",
    cart:"Add to Cart",
  },
  {
  
      name: "Kimaye Bananas Robusta (5-6 pcs)",
      image: "https://communityfarm.in/wp-content/uploads/2018/02/robusta.jpg",
      price: "₹ 57",
      cart:"Add to Cart"
    },
    {
  
      name: "Kimaye Pomegranates (Pack of 2 & 4)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kimaye-Pomegranates-_Pack-of-2-_-4_-kimaye-store-1668426097.png?v=1668426099",
      price: "₹ 135 - ₹ 259",
      cart:"Add to Cart"
    },
    {
  
      name: "Kimaye Kiwis (3 pcs ≈ 300 g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kimaye-Kiwis-_3-pcs--300-g_-kimaye-store-1668426311@2x.jpg?v=1668426313",
      price: "₹ 127",
      cart:"Add to Cart"
    },
    {
  
      name: "Kimaye Pear Beauty (Pack of 2 & 4)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_19.progressive.jpg?v=1659965295",
      price: "₹145 - ₹279",
      cart:"Add to Cart"
    },
    {
  
      name: "Kimaye Arils-Coco Cup (125g)",
      image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min-sw_1080x1080.png?v=1669118878&",
      price: "₹55 - ₹140",
      cart:"Add to Cart"
    },
    {
  
      name: "Kimaye Mosambi (Pack of 3 & 6)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofMosambi_Main_FixedShadows-min_360x.png?v=1614327057",
      price: "₹ 63 – ₹ 115",
      cart:"Add to Cart"
    },
    
  {
  
    name: "Kimaye Bananas Yelakki (Pack of 250g, 500g & 1kg )",
    image: "https://im.pluckk.in/unsafe/1200x0/uploads/4633-banana-yelakki.jpg",
    price: "₹ 50 – ₹ 170",
    cart:"Add to Cart"
  },
  {
  
    name: "Pomegranate Seeds (Arils Cup)125g",
    image: "https://static.toiimg.com/photo/98049691.cms",
    price: "₹55 - ₹140",
    cart:"Add to Cart"

  },
  
  {
  
    name: "Coconut Chunks Cup (100g)",
    image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Coconut-Chunks-Cup-_100g_-kimaye-store-1668426210-sw_1080x1080.png?v=1668505424&",
    price: "₹51 - ₹130",
    cart:"Add to Cart"
  },
  {
  
    name: "Grated Coconut Punnet",
    image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Grated-Coconut-Punnet-kimaye-store-1668426228-sw_1080x1080.png?v=1669118605&",
    price: "₹ 51",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Plum (500 g)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Picture3_3cf8f5aa-4155-4a94-9768-9819bb41835f.progressive.jpg?v=1641381097",
    price: "₹ 140",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Wholesome Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo.progressive.jpg?v=1618497683",
    price: "₹ 733",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Kiwi-Blueberries Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry.png?v=1617983685",
    price: "₹ 412",
    cart:"Add to Cart"
  },
  {
  
    name: "Fruit Box by Kimaye (Strength)",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/kimaye-wholesome-combo-378081804-vrbiu.jpg",
    price: "₹ 1500",
    cart:"Add to Cart"
  },
  {
  
    name: "Fruit Box by Kimaye (Cherish)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobCKLvBWSdJ1yoQ_t-x92OPsXbVooU9fjD-Q-C4V2h21bkYJB1OQ2ibXJ3suWS07zu24&usqp=CAU",
    price: "₹ 1400",
    cart:"Add to Cart"
  },
  {
  
    name: "Fruit Box by Kimaye (Adore)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe62y5fOpqOnzyTtKTIUPSalkNoZ0DeLAJ3LPwnkie_XY47rm24_LcMvVt_6Bevd0fP8c&usqp=CAU",
    price: "₹ 1900",
    cart:"Add to Cart"
  },
  {
  
    name: "Kimaye Pear (Indian)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/pear.progressive.jpg?v=1660735696",
    price: "₹65 - ₹65",
    cart:"Add to Cart"
  },
 
];

  let vegiee =[
    {
      
      name: "Kimaye Baby Corn (125g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Baby-Corn--Exoticcover_png-sw@2x.jpg?v=1669118911",
      price: "₹ 34",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Broccoli" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/broccolicover-sw@2x.jpg?v=1669119197",
      price: "₹135",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Capsicum(Green) 1 pc" ,
      image: "https://cdn.shopify.com/s/files/1/0559/0286/3559/products/capsicum-green2.jpg?v=1633953647",
      price: "₹42",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Capsicum(Red) (1pc)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/RED-CAPSICUMcover-sw@2x.jpg?v=1669119226",
      price: "₹74",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Capsicum(Yellow) (1pc)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Capsicum_yellow_funfacts.png?v=1656565441",
      price: "₹75",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Cherry Tomato (Vine) 200g" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Tomatocover-sw@2x.jpg?v=1669119407",
      price: "₹72",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Kale (Curled) ( 1 pc~200 g)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KAlecover_png_360x.jpg?v=1656504182",
      price: "₹135",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Lettuce (Iceberg)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Lettuce-Icebergcover_png_360x.jpg?v=1655979138",
      price: "₹67",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Pak Choi (1 pc~200g)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/pak-choicover.progressive.jpg?v=1655887460",
      price: "₹65",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Parsely (Flat) (1 pc~100 g)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/ParsleyFlatExoticcover_360x.jpg?v=1656421939",
      price: "₹55",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Spinach (1 pc~200 g)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Spinachcover_png_360x.jpg?v=1655984781",
      price: "₹49",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Zucchini (Green) 1Pc" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Zucchinicover_360x.jpg?v=1658484948",
      price: "₹77",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Zucchini (Yellow) 1Pc" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Zuccini-_Yellow_cover_360x.jpg?v=1656424180",
      price: "₹77",
      cart:"Add to Cart"
    }
  ];

  let cuts = [

    {
      
      name: "Pomegranate Seeds (Arils Cup)125g" ,
      image: "https://www.nrtcfresh.com/media/catalog/product/cache/91626a98f6dcab0a885a0141eda2eb62/K/i/Kimaye20Pomegranate20Arils20Cup20Mirakpng.png",
      price: "₹55 - ₹140",
      cart:"Add to Cart"
    },
    {
      
      name: "Coconut Chunks Cup (100g)" ,
      image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Coconut-Chunks-Cup-_100g_-kimaye-store-1668426210-sw_1080x1080.png?v=1668505424&",
      price: "₹51 - ₹130",
      cart:"Add to Cart"
    },
    {
      
      name: "Grated Coconut Punnet" ,
      image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Grated-Coconut-Punnet-kimaye-store-1668426228-sw_1080x1080.png?v=1669118605&",
      price: "₹51",
      cart:"Add to Cart"
    },
    {
      
      name: "Kimaye Arils-Coco Cup (125g)" ,
      image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min-sw_1080x1080.png?v=1669118878&",
      price: "₹55 - ₹140",
      cart:"Add to Cart"
    },
    {
      
      name: "Arils Festive Pack (Pack of 5 cups)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Pomegranate-Seeds-_Arils-Cup_125g-Kimaye-1668426207@2x.jpg?v=1668426208",
      price: "₹260",
      cart:"Add to Cart"
    }

  ]

let combos = [
  {
    name : "Northwest Cherries- Blueberry Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_360x.jpg?v=1654851019",
    price: "₹654",
    cart: "Add to Cart"
  },
  {
    name : "Kimaye Plum-Blueberries Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Plum_BB_360x.jpg?v=1621068661",
    price: "₹356",
    cart: "Add to Cart"
  },
  {
    name : "Kimaye Wholesome Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_360x.jpg?v=1618497683",
    price: "₹733",
    cart: "Add to Cart"
  },
  {
    name : "Kimaye Kiwi-Blueberries Combo",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_360x.png?v=1617983685",
    price: "₹412",
    cart: "Add to Cart"
  }
]
let pack = [
  {
    name : "Fruit Box by Kimaye (Adore)",
    image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821-sw@2x.jpg?v=1668505930",
    price: "₹1900",
    cart: "Add to Cart"

  },
  {
    name : "Fruit Box by Kimaye (Strength)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQFdNSdoTAtFuMS3ShyEfhsUxt1emE1E1EFyjQy1jgMvxvLA7-xvZ6mXrTe0cCVLFKvE&usqp=CAU",
    price: "₹1500",
    cart: "Add to Cart"

  },
  {
    name : "Fruit Box by Kimaye (Cherish)",
    image: "https://kimaye.imgix.net/s/files/1/0449/5225/6667/products/Strengthnew-sw_1080x1080.jpg?v=1668506055&",
    price: "₹1400",
    cart: "Add to Cart"

  }

]
  

  var cartarray = JSON.parse(localStorage.getItem("cartData")) || [];
  
  let x = (data)=>{
    document.querySelector("#contner").innerHTML=""
  
  data.map(function(elem,index){
    var firstDiv=document.createElement("div");
    firstDiv.setAttribute("class","main")
    firstDiv.addEventListener("click",()=>{
      localStorage.setItem("store",JSON.stringify(elem))
      window.location.href="ProductDetailPage.html"
      // console.log(elem)
    })
    var img=document.createElement("img");
    img.setAttribute("class","img")
    img.setAttribute("src",elem.image);

    // img.addEventListener("mouseover",(event)=>{
    //   img.src=""
    // })
    // img.addEventListener("mouseout",(event)=>{
    //   img.src=elem.image
    // })
    var h4=document.createElement("p");
    h4.setAttribute("class","nameoff")
    h4.textContent=elem.name;
    h4.style.marginLeft="20px"
    h4.style.lineHeight="20px"
    var para=document.createElement("p");
    
    para.setAttribute("class","prc")
    para.textContent=elem.price;

    var card=document.createElement("button");
    card.setAttribute("class","cart")
    card.textContent=elem.cart;

    card.addEventListener("click", function(){
        cartarray.push(data[index]);
        localStorage.setItem("cartData", JSON.stringify(cartarray));
    })
  
    firstDiv.append(img,h4,para,card);
    document.getElementById("contner").append(firstDiv);
  });


}
x(data)
// function for go to cart page

document.querySelector(".img").addEventListener("click", function(){
  window.location.href = "ProductDetailPage.html";
})

document.getElementById("veg").addEventListener("click",()=>{
 x(vegiee)
})

document.getElementById("cut").addEventListener("click",()=>{
  x(cuts)
 })

 document.getElementById("combo").addEventListener("click",()=>{
  x(combos)
 })
 document.getElementById("gift").addEventListener("click",()=>{
  x(pack)
 })
 
 
 let type = localStorage.getItem("type")
 if(type == "vegg"){
   x(vegiee)
 }else if(type == "fr"){
   x(data)
 }else if(type == "cu"){
  x(cuts)
 }
 else if(type == "com"){
  x(combos)
 }else if(type == "gf"){
  x(pack)
 }
 console.log(type)


