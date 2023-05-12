async function findMax(arr) {
    if(arr instanceof Array) return Math.max(...arr)
    throw new Error("Phep tinh sai")
    }
    async function f() {
        try {
            let result = await findMax([1,2,3,4,5])
            console.log(result)
        }
        catch (error){
                console.log(error)
        }
    }
    f()
