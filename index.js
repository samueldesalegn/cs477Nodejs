// console.log('Start');
// setTimeout(() => {
// 	console.log('Timeout')
// }, 1000);

// console.log('end');


// const makeWithdraw = (balance) =>
//   ((copyBalance) => {
//     let balance = copyBalance; // This variable is private
//     const doBadThings = () => {
//       console.log("I will do bad things with your money");
//     };
//     doBadThings();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Insufficient money";
//       },
//     };
//   })(balance);

// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20)); // 0


// for (var i = 0; i < 2; i++) {
//   const button = document.createElement("button");
//   button.innerText = `Button ${i}`;
//   button.onclick = (function (copyOfI) {
//     return function () {
//       console.log(copyOfI);
//     };
//   })(i);
//   document.body.appendChild(button);
// }
// console.log(i); // 2


const result = (function(exports, module){

	exports = module.exports;

	exports.firstname = 'John';

	exports.lastname = 'Smith';

	exports = {

			getFullName: function(){

					console.log('John Smith')

			}

	}

	return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);
