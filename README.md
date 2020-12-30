# Simple product system -fatoraTask-
This is a simple ecommercy project a proof of concept for creating APIs with NodeJs express framework.
- list all products in a given category,
a product's price should be the lowest available among its possible providers,
return maximum n (defaults to 25) products per request, and enable pagination.
- write a middleware that enable pagination of results, it should be applicable to other
endpoints that lists items, it should accept parameter `page` from query string and display the
corresponding part of result set.
- end point that toggle (set/unset) a product as featured inside its category.
## Getting Started
You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).
```
git clone https://github.com/binitghetiya/fatora_product_system.git <folder-name>
```
or from **Download Zip**
```
https://github.com/binitghetiya/fatora_product_system 
```
### Project Setup
Once you clone or download project go into you folder

>now cope **.env.local** file to **.env** file

### Installing
```
> npm install or yarn install  (this will install all dependent libraries)
```


### Success Response
```
{
    "success": true,
    "code": 200,
    "data": "object or array"
}
```
### Error Response
```
{
    "success": false,
    "code": 500,
    "errorMessage": "Incorrect",
    "error": {},
    "data": null
}
```

### Contact 
* Email <iwcw4i@gmail.com@gmail.com>
