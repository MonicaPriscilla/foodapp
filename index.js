
            function AllItems(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    for(var item of data){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${item.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${item.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${item.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${item.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${item.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                    }
                })

            }
            function GetBurgerwraps(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    document.querySelector("main").innerHTML = "";
                    var Bwraps = data.filter((item)=>item.category==="Burgers & Wraps"); 
                    
                    for(var Bwrap of Bwraps){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${Bwrap.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${Bwrap.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${Bwrap.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${Bwrap.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${Bwrap.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                        
                    }
                })
            }
            function GetComboMeals(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    document.querySelector("main").innerHTML = "";
                    var comboMelas = data.filter((item)=>item.category==="Meals"); 
                   
                    for(var cmeal of comboMelas){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${cmeal.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${cmeal.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${cmeal.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${cmeal.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${cmeal.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                    }
                })
            }
            function GetFries(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    document.querySelector("main").innerHTML = "";
                    var Fries = data.filter((item)=>item.category==="Fries & Sides"); 
                    
                    for(var item of Fries){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${item.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${item.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${item.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${item.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${item.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                    }
                })
            }
            function Getcoffees(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    document.querySelector("main").innerHTML = "";
                    var coffees = data.filter((item)=>item.category==="Coffee & Beverages (Hot and Cold)"); 
                    
                    for(var item of coffees){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${item.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${item.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${item.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${item.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${item.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                    }
                })
            }
            function GetMcsavers(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    document.querySelector("main").innerHTML = "";
                    var mcsavers = data.filter((item)=>item.category==="McSaver Combos"); 
                    
                    for(var item of mcsavers){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${item.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${item.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${item.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${item.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${item.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                    }
                })
            }
            function GetDesserts(){
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    document.querySelector("main").innerHTML = "";
                    var desserts = data.filter((item)=>item.category==="Desserts"); 
                
                    for(var item of desserts){
                        var div = document.createElement("div");
                        div.className = "itemcard";
                        div.innerHTML = `
                        <div><img src=${item.image} class="itemimg" /></div>
                        <div class="itembody">
                            <span class="fw-bold">${item.name}</span><br>
                            <p class="d-inline-block text-truncate" style="max-width: 280px; font-weight:light; color:gray; font-size:15px;">${item.description}</p>
                            <p class="text-success fw-semibold"> &#8377; ${item.price}</p>
                        </div>
                        <div><button class="itembtn w-100 mt-2" onclick="addclick()" id=${item.id}>Add to Cart</button>
                        `;
                        document.querySelector("main").appendChild(div);
                    }
                })
            }

            var cartItems = [];
            var cartcount = 0;
            var totalprice = 0;

            function Getcartcount(){
                cartcount = cartItems.length;
            }

            function addclick(e){
                var itemid = event.target.id;
                fetch("../../data/mcfood.json")
                .then((response)=>response.json())
                .then((data)=>{
                    var addItem = data.find((item)=>item.id == itemid);
                    alert(`${addItem.name} is added to cart`);
                    cartItems.push(addItem);
                    Getcartcount();
                    document.getElementById("cartcountspan").innerHTML = cartcount;
                    totalprice += addItem.price;
                })
                
            }

            function GetCartItems(){
                
                    for(var item of cartItems){
                    var tr = document.createElement("tr");
                    var tdimage = document.createElement("td");
                    var tdname = document.createElement("td");
                    var tdprice = document.createElement("td");
                    var tdaction = document.createElement("td");

                    tdimage.innerHTML = `<img src=${item.image} width="70" height="50" >`;
                    tdname.innerHTML = item.name;
                    tdprice.innerHTML = `&#8377; ${item.price}`;
                    tdaction.innerHTML = `<button class="btn btn-danger bi bi-trash-fill"></button>`;
                    tr.appendChild(tdimage);
                    tr.appendChild(tdname);
                    tr.appendChild(tdprice);
                    tr.appendChild(tdaction);
                    document.querySelector("tbody").appendChild(tr);
                    
                    console.log(totalprice);
                }

                    
                    document.getElementById("amount").innerHTML = `&#8377; ${totalprice}`;
                   
                

               
            }

            function Order(){
                document.getElementById("box1").style.display="none";
                
                document.getElementById("box2").style.display="block";
            
            }

            function opencart(){
               
                if(cartcount===0){
                    document.getElementById("cardone").style.display = "block";
                    document.getElementById("cardtwo").style.display = "none";
                }else{
                    document.getElementById("cardone").style.display = "none";
                    document.getElementById("cardtwo").style.display = "block";
                    for(var item of cartItems){
                        var tr = document.createElement("tr");
                        var tdimage = document.createElement("td");
                        var tdname = document.createElement("td");
                        var tdprice = document.createElement("td");
                        var tdaction = document.createElement("td");

                        tdimage.innerHTML = `<img src=${item.image} width="70" height="50" >`;
                        tdname.innerHTML = item.name;
                        tdprice.innerHTML = `&#8377; ${item.price}`;
                        tdaction.innerHTML = `<button class="btn btn-light text-danger bi bi-trash-fill"></button>`;
                        tr.appendChild(tdimage);
                        tr.appendChild(tdname);
                        tr.appendChild(tdprice);
                        tr.appendChild(tdaction);
                        document.getElementById("opencartbody").appendChild(tr);
                        
                    }

                    document.getElementById("amt").innerHTML = `Total Amount : &#8377; ${totalprice}`;

                }
   
            }

            function Ordercomplete(){
               document.getElementById("cardtwo").style.display="none";
               document.getElementById("cardthree").style.display="block";
                
            }


            function bodyload(){
                AllItems();
               
                
            }
