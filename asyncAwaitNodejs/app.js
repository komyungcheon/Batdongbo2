 async function getSum(arr) {
    if(arr instanceof Array){
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }
     throw new Error("Dữ liệu đầu vào không chính xác")
}

 async function f() {
     try {
         let result = await getSum([1,2,3,4,5])
         console.log(result)
     }
     catch (error){
         console.log(error)
     }
 }
 f()