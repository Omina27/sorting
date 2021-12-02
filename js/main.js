
let info = prompt('Nimani sortlash kerak?')

let library = [
    {
        author: 'Bibioysha',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Anvarjon',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Duzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
]


if (info == "") {
    library.sort((item1, item2) => {
        if (item1.libraryID > item2.libraryID){
            return 1
        }
        
        if (item1.libraryID < item2.libraryID){
            return -1
        }
        
        if(item1 == item2){
            return 0
        }
        
    })
    console.log(library);
    
} else if (info == "author") {
    
    
    library.sort((item1, item2) => {
        if (item1.author > item2.author){
            return 1
        }
        
        if (item1.author < item2.author){
            return -1
        }
        
        if(item1 == item2){
            return 0
        }
        
    })
    console.log(library);

} else if (info == "id") {
    library.sort((item1, item2) => {
        if (item1.libraryID > item2.libraryID){
            return 1
        }
        
        if (item1.libraryID < item2.libraryID){
            return -1
        }
        
        if(item1 == item2){
            return 0
        }
        
    })
    console.log(library);
}










