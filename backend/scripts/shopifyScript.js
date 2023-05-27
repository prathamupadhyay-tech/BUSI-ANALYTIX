//The shop owner only needs to include the following code in his website
//<script src="http://localhost:4000/api/sendScript"></script>

function obj(unique, product, count) {
    this.unique = unique;
    this.product = product;
    this.count = count;
}

const retrieveImg = (count, product) => {
    fetch(`http://localhost:4000/api/thresholdimg?product=${product}&count=${count}`)
        .then((response) => response.blob())
        .then((imageBlob) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = function () {
                const base64data = reader.result;
                if (window.location.href === `https://${domainParts[0]}.myshopify.com/products/${product}`) {
                    const imgElement = document.createElement("img");
                    const parentEle = document.getElementsByClassName("product-form")[0];
                    imgElement.style.marginTop = "25px";
                    imgElement.src = base64data;
                    parentEle.appendChild(imgElement);
                }
            }
        })
        .catch(err => console.log(err))
}

let URL = window.location.href;
const domain = window.location.hostname;
const domainParts = domain.split('.');
if (URL.startsWith(`https://${domainParts[0]}.myshopify.com/products/`)) {
    let product = URL.substring(URL.lastIndexOf('/') + 1);
    let LSdata = localStorage.getItem(product);
    if (!LSdata) {
        let myObj = new obj(true, product, 0);
        localStorage.setItem(product, JSON.stringify(myObj));
        fetch(`http://localhost:4000/api/shopifyCount?unique=true&product=${product}`).then((response) => response.json())
            .then((serverData) => {
                let { count, product, threshold } = serverData;
                let temp = JSON.parse(localStorage.getItem(product));
                temp['threshold'] = threshold;
                temp['count'] = count;
                localStorage.setItem(product, JSON.stringify(temp));
                if (serverData.threshold) {
                    retrieveImg(count, product);
                }
            })
            .catch(err => console.log(err))
    }
    else {
        fetch(`http://localhost:4000/api/shopifyCount?unique=false&product=${product}`).then((response) => response.json())
            .then((serverData) => {
                let { count, product, threshold } = serverData;
                let temp = JSON.parse(localStorage.getItem(product));
                temp['threshold'] = threshold;
                temp['count'] = count;
                localStorage.setItem(product, JSON.stringify(temp));
                if (serverData.threshold) {
                    retrieveImg(count, product);
                }
            })
            .catch(err => console.log(err))
    }
}