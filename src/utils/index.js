// function styleStrToObject (str) {
//         const obj = {}, s = str.toLowerCase().replace(/-(.)/g,
//          function (m,g) {
//             return g.touppercase();
//         }).replace(/;\s?$/g,"").split(/:|;/g);
//         for(var i=0; i<s.length; i+=2 )
//             obj[s[i].replace(/\s/g,"")]= s[i+1].replace(/^\s+|\s+$/g,"");
//         return obj;
// }
// function isEmptyObject(obj) {
//     debugger
//     console.log(obj);
//     return !!Object.keys(obj).length;
// }

// export default {styleStrToObject, isEmptyObject}
const isEmptyO = function (obj) {
    return !!Object.keys(obj).length;
}

export default isEmptyO;