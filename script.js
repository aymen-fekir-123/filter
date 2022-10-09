


fetch("./data.json")
.then((resoved) => {
    let data = resoved.json();
    return data;
}).then((data) => {
    data.forEach(element => {
        let div = document.createElement("div");
        document.querySelector("section").append(div);
        div.classList.add("containor");
        div.setAttribute("id", element.id);
        let l = ["information", "skill"];
        let ob = [];
        for(i in l) {
            let k = document.createElement("div");
            div.append(k);
            k.classList.add(l[i]);
            ob.push(k);
        }
        let logo = document.createElement("div");
        logo.classList.add("logo");
        ob[0].append(logo);
        let img = document.createElement("img");
        img.setAttribute("src", element.logo);
        logo.append(img);
        let c = document.createElement("div");
        c.classList.add("contentinf");
        ob[0].append(c);
        let cont = document.createElement("div");
        cont.classList.add("inf");
        c.append(cont); 
        let comp = document.createElement("span");
        comp.innerHTML = element.company;
        cont.append(comp);
        let bool = Object.keys(element).slice(3, 5);
        bool.forEach((e) => {
            if(element[e]) {
                let feat = document.createElement("span");
                feat.innerHTML = e[0].toUpperCase().concat(e.slice(1));
                cont.append(feat);

            }
        });
        let p = document.createElement("p");
        p.innerHTML = element.position;
        c.append(p);
        let cama = document.createElement("div");
        c.append(cama);
        let list = [element.postedAt, ".", element.contract, ".", element.location];
        for (i in list) {
            let p = document.createElement("span");
            p.innerHTML = list[i];
            cama.append(p);
        }
        let n = element.languages.length;
        let t = element.tools.length;
        let d = ["role", "level"];
        for (let j = 0; j<n ; j++) {
            d.push("languages");
        }
        for (let j = 0; j<t ; j++) {
            d.push("tools");
        }
        // console.log(d);
        let skill = [element.role, element.level, ...element.languages, ...element.tools];

        for (i in skill) {
            let span = document.createElement("span");
            span.innerHTML = skill[i];
            span.setAttribute(`data-${d[i]}`, skill[i]);
            ob[1].append(span);
        }
        
        
        
    });
    return data;
})
.then((data) => {
    let chix = document.querySelector(".choise");
    let filt = document.querySelector(".filter");
    filt.style.display = "none";
    let obj = {};
    data.forEach(function(e, k , f) {
        let skill = [e.role, e.level, ...e.languages, ...e.tools];
        // console.log(skill);
        let n = e.languages.length;
        let t = e.tools.length;
       
        let d = ["role", "level"];
        for (let j = 0; j<n ; j++) {
            d.push("languages");
        }
        for (let j = 0; j<t ; j++) {
            d.push("tools");
        }
        // console.log(d);
        
        let span = Array.from(document.querySelectorAll(`.containor:nth-child(${e.id}) .skill span`));
        span.forEach(function(element,i,s) {
            element.addEventListener("click", function() {
                let l = [];
                if (document.querySelector(`.${skill[i]}`) === null){
                    if (filt.style.display === "none") {
                        filt.style.display = "flex";
                    }

                    if (d[i] === "role" || d[i] === "level") {
                        l = f.filter(function(e) {
                            return e[d[i]] !== skill[i] && document.getElementById(`${e.id}`).style.display !== "none";
                        })
                        
                    }else {
                        l = f.filter(function(e) {
                            return !e[d[i]].includes(skill[i]) && document.getElementById(`${e.id}`).style.display !== "none";
                        });
                    }

                    l.forEach(function(e) {
                        document.getElementById(`${e.id}`).style.cssText = "display:none;";
                        
                    })

                    let colle = element.cloneNode(true);
                    colle.classList.add("node");
                    let close = document.createElement("span");
                    close.classList.add("close");
                    close.classList.add(`${skill[i]}`)
                    close.innerHTML = "+";
                    let div = document.createElement("div");
                    chix.append(div);
                    div.append(colle, close);
                    obj[skill[i]] = l;
                    // console.log(obj)

                }

                
                let close1 = Array.from(document.querySelectorAll(".close"));
                // console.log(close1[0].classList[1])
                close1.forEach(function(e, i , K) {
                    e.addEventListener("click", function () {
                        let g = obj[K[i].classList[1]];
                        // console.log(g);
                        g.forEach(function(el){
                            document.getElementById(`${el.id}`).style.display = "flex";
                        })
                        e.parentElement.remove();
                        obj[e.classList[1]] = [];
                        if(close1.length === 1) {
                            filt.style.display = "none";
                        }
                    })
                })
                let clear = document.querySelector(".clear");
                clear.addEventListener("click", function() {
                    let close1 = Array.from(document.querySelectorAll(".close"));
                    close1.forEach(function(e) {
                        e.click();
                    })
                    // close1.forEach(function(e) {
                    //     let g = obj[e.classList[1]];
                    //     for (j in g) {
                    //         document.getElementById(`${g[j].id}`).style.display = "flex";
                            
                    //     }
                    //     delete obj[e.classList[1]];
                    //     e.parentElement.remove();
                        
                    // })
                    // filt.style.display = "none";
                })
            })
        })
        // span.addEventListener("click", function(){
            //     if (filt.style.display === "none") {
                //         filt.style.display = "flex";
                //     }
                
                //     let l = data.filter(function(e) {
                    //         return e[d[0]] !== skill[0];
                    //     });
                    //     // console.log(l);
                    
                    
                    // })
                    // skill.forEach((e) => {
                        //     if (s <= 1) {
                            
                            
                            
        //     }
        //     else {
        //         let span = document.querySelectorAll(`.skill span[data-${d[i]}= ${skill[i]}]`);

        //     }
        
        // }) 
        
        
        
        
    })


 
})



