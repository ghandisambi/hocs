const username='d13539a29e0da64af00541b472a08bfb'
const password='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'
const magazin='ghs-achat-rapide'
export function getProductsFromApiWithSearchedText (text,page) {
const url = 'https://'+username+':'+password+'@'+magazin+'.myshopify.com/admin/api/2020-04/products.json'


const url2="https://world.openfoodfacts.org/cgi/search.pl?search_terms="+text+"&search_simple=1&action=process&json=1"




  return (fetch(url)
    .then((response) => response.text())
    .catch((error) => console.error(error)));
}


export function getImageFromApi(name){
  
  const api='https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png'
    return api+name;
}


export function getImage(){
  const api='https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png'
    return api;
}


