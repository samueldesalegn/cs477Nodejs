const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?course1=nodejs&course2=angular#hash');
let params = myURL.searchParams;
console.log(params);
console.log(params.get('course1'), params.get('course2'));
const parsedParams = new URLSearchParams('course1=nodejs&course2=angular');
console.log(parsedParams);
