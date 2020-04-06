const a = [1,2,3,235,46,452,234];
let max = 0;
let secondMax=0
a.forEach((item)=> {
    if(max>item && secondMax<item) secondMax =item;
    if(max<item) max = item;
})


