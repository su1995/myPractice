var arrUtil = (function () {
    /**
     * @description: 从一个数组中找出一个重复次数大于该数组长度一半的元素，使用map可以避免对象键值的隐式转换的假等以及无法解决复杂数据类型的问题
     * @param {type} 
     * @return: 
     */
    function getArrDuplicateOverHalf(arr) {
        var map = new Map()
        var wantedVal = 'noEle'
        for (const item of arr) {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1)
                if (map.get(item) >= (arr.length / 2)) {
                    wantedVal = item
                    break
                }
            } else {
                map.set(item, 1)
            }
        }
        return wantedVal
    }
    /**
     * @description: 对数组中某个元素去重，不使用新数组，不使用任何方法
     * @param {type} 
     * @return: 去重后的原数组
     */
    function getArrUniqueByIndex(arr, targetEle) {        
        var j = 0        
        for (var i = 0; i < arr.length;i++) {
            if (arr[i] === targetEle) {                                                
                while (i < arr.length && arr[i] === targetEle) {
                    i++
                }
                arr[j++] = arr[i]
            } else {
                j++                
            }     
        }     
        arr.length = j
        return arr   
    }
    return {
        getArrDuplicateOverHalf,
        getArrUniqueByIndex
    }
})()