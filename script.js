let ArrShoes = [];

        let addItembtn = document.querySelector("#addItem");
        
        addItembtn.addEventListener('click', () => {
               
            let InputedNewShoes = document.querySelector("#inputedArr").value;
                ArrShoes.push(InputedNewShoes);
                display();  
        });

        function display(){
            let uList = document.querySelector("#array-shoes");
            uList.innerHTML = "";
            for (let i = 0; i < ArrShoes.length; i++) {
                if (i < 10){
                let newList = document.createElement('li');
                newList.appendChild(document.createTextNode(ArrShoes[i]) );
                uList.appendChild(newList);
                }else{
                    alert("Reach Limit")
                }
                 
                
            }


        };

        let pushBtn = document.querySelector("#push");
        let shiftBtn = document.querySelector("#shift");
        let popBtn = document.querySelector("#pop");
        let unshiftBtn = document.querySelector("#unshift");

        pushBtn.addEventListener('click', () => {
            let InputedNewShoes = document.querySelector("#inputedArr").value;
            ArrShoes.push(InputedNewShoes);
            display();
        })
        shiftBtn.addEventListener('click', () => {
            ArrShoes.shift();
            display();
        });
        popBtn.addEventListener('click', () => {
            ArrShoes.pop();
            display();
        })
        unshiftBtn.addEventListener('click', () => {
            let InputedNewShoes = document.querySelector("#inputedArr").value;
            ArrShoes.unshift(InputedNewShoes);
            display();
        })

        let removebtn = document.querySelector("#remove");

        removebtn.addEventListener('click', () => {
            document.querySelector("#inputedArr").value = " ";
        })

