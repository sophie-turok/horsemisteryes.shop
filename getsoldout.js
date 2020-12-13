const Http = new XMLHttpRequest();
const url='https://app.snipcart.com/api/products/AP1';
Http.open("GET", url);
Http.setRequestHeader('Accept', 'application/json');
Http.setRequestHeader('X-Snipcart-RequestToken', 'MzA3NzI3NDAtYzc2NC00YWZiLWE3NTYtZjk5NTcwMDIxN2NmNjM3NDI5NTYzNjQ1MTA4Mjkw');
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}