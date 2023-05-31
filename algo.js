
// function myFunc(a,b) {
// 	let obj = {
// 		num1:a,
// 		num2:b,
// 		funct(){
// 			return (obj.num1+obj.num2)%2==0 ? true : false
// 		}
// 	} 
// 	return obj.funct()
// }
// console.log(myFunc(2,2));



// function string (a){
//     let b = ""
//    for(let i = a.length -1;i >=0;i--){
//     b += a[i]
//    }   
//    return b
// }
// console.log(string("abcd"));





// function name(a) {
// 	return `${a}`.length
// }

// console.log(name(22423432432));





// function num(a,b) {
// 	return a.reduce((a,b)=> a+b) + b.reduce((a,b)=> a+b)
// }
// console.log(num([2,3,4], [1,2,4]));




// function imposterFormula(i, p) {
// 	return Math.round(100 * (i / p))+"%"
// }


// Berilish:
// Juft bo'luvchilar Matematika o'qituvchisi o'z o'quvchilariga berilgan N sonining juft bo'luvchilari sonini topib kelishni uy vazifasi qilib berdi. O'quvchilarga buni topishda yordam bering.
// Kiruvchi ma'lumotlar: INPUT.TXT kirish faylining birinchi qatorida bitta butun son, testlar soni kiritiladi. Keyingi ta qatorning har birida bittadan butun son, vazifa qilib berilgan son kiritiladi. 
// Chiquvchi ma'lumotlar: OUTPUT.TXT chiqish faylida har bir test uchun alohida qatorda bittadan butun son, berilgan sonning juft

// function Juft(son) {
//     let count = 0;
//     for (let i = 1; i <= son; i++) {
//         if (son % 2 === 0 && son % 2 === 0) {
//             count++
//         }
//         return count
//     }
// }

// console.log(Juft(36));

// function everyNth(a, n) {
//     let b="";
//     for(i=0; i<=a.length; i=i+n){
//         b= b+a[i]
//     }
//     return b
// }
// console.log(everyNth("Miracle", 2));
// console.log(everyNth("abcdefg", 3));
// console.log(everyNth("abcdefg", 2));

// function stringE(a) {
//     let list = "e"
//     let count=0
//     for(let i=0; i<=a.length; i++){
//        if(list.indexOf(a[i]) !== -1){count++}
//     }
//     return count <=3 && count ? true : false
// }
// console.log(stringE("Hello"));
// console.log(stringE("Heele"));
// console.log(stringE("Heelele"));
// console.log(stringE("Hill"));
// console.log(stringE("dseeedf"));

// function Max(a,b,c) {
//     return Math.max(a,b,c)
// }

// console.log(Max(1,2,3));
// console.log(Max(1,3,2));
// console.log(Max(3,1,2));

// function name(a) {
//     return a.slice(0,2) + a + a.slice(0,2)
// }
// console.log(name("kitten"));
// console.log(name("ha"));

// function missingChar(str, n){
//     return str.replace(str[n], '')
//   }

// console.log(missingChar("kitten", 1));
// console.log(missingChar("kitten", 4));
// console.log(missingChar("kitten", 3));


// function a(b) {
//     return b.reduce((a,c)=>Math.max(a,c),-Infinity)
// }
// console.log(a([1,2,3,4]));


// function aa(b) {
//     let count=0;
//     for(i=0; i<=b.length; i++){
// b[i]=="a" || b[i]=="e" || b[i]=="i" || b[i]=="o" || b[i]=="u" ? count++ : null
//     }
//     return count
// }
// console.log(aa("Salom"));
// console.log(aa("alibanand"));

// function vowel(str){
//   var list = 'aeiouAEIOU';
//   var v = 0;
//   for(var i = 0; i < str.length ; i++)
//   {
//     if (list.indexOf(str[i]) !== -1)
//     {
//       v += 1;
//     }
//   }
//   return v;
// }

// console.log(Boolean(1));









// function addition(a) {
//     return a+1
// }
// console.log(addition(-3));



// function trArea(h,w) {
//     return (h*w)/2
// }

// console.log(trArea(3,2));
// function calcAge(a) {
//     return a*365
// }

// console.log(calcAge(65));

// function myFunction(a){
//     let count = 0
//     let b =  String(a).split("")
//    return b
//   }
//   console.log(myFunction(162));







// function arr(a) {
//     for(let i=0; i<a.length; i++){
//        let b = aa(a[i])
//         if(b==1){
// return a[i]
//         }
//     }

//     function aa(n) {
//         let count = 0
//         for(i=0; i<a.length; i++){
//             if(a[i]==n){count++}
//         }
//         return count
//     }
// }

// console.log(arr([1,2,3,4,3,2,1]));


// function minmax(arr) {
//     let arr1 = []
//     arr1.push(Math.min(...arr))
//     arr1.push(Math.max(...arr))
//     return arr1
// }

// console.log(minmax([1,2,3,4,5]));






// function myFunction(a) {
//     let b = String(a).split("")
//     let count = 0;
//     for (let i = 0; i <= b.length - 1; i++) {
//         count += Number(b[i])
//     }
//      return a % (count ** 2) == 0 ? true : false
//    //return count
// }
// console.log(myFunction(162));
// console.log(myFunction(60));




// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] <= min) {
//         min = arr[i];
//       }
//       if (arr[i] >= max) {
//         max = arr[i];
//       }
//     }
//     return [min, max];
//   }

//   console.log(minMax([1,2,3,4,5]));



// function num(n) {
//     return n.toString().length
// }
// console.log(num(423));


// function friend(friends){
//   return  friends.filter((item)=> {
//         return item.length == 4 ? item : '';
//     })
//   }
// console.log(friend(["Ryan", "Kieran", "Mark"]));
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
// console.log(friend(["Love", "Your", "Face", "1"]));

// function getMiddle(s) {
//     return s.length % 2 === 1 ? s.charAt(s.length / 2) : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2 - 1 + 1)
// }
// console.log(getMiddle(['Alex', 'Jacob', 'Mark', 'Max']));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));

function highAndLow(numbers){
  let arr =numbers.split(' ').map(Number);
  let max = arr[0],min =arr[0];
  for(let i = 0;i<arr.length;i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i]
    }
  }
  let result = max + ' ' + min;
  return result;
}
 console.log(highAndLow("1 2 -3 4 5"));
 console.log(highAndLow("1 2 -3 4 5"));
 console.log(highAndLow("1 9 3 4 -5"));







