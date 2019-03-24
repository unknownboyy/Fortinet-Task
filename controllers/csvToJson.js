module.exports = {
    convert : function (data) {
        data = data.split('\n');
        var heading = data[0].split(',');
        var arr = [];
        var line,words,err;
        for(var i=1;i<data.length-1 ;++i){
            var obj = {};
            line=data[i];
            words = line.split(',');
            var k =0;
            for(var j=0;j<words.length;++j){
                if (words[j].indexOf('\"')==-1){
                    obj[heading[k]] = words[j];
                    k++;
                } else{
                    err = [];
                    err.push(words[j].substring(1,words[j].length));
                    j++;
                    while (words[j].indexOf('\"')==-1) {
                        err.push(words[j]); j++;
                    }
                    err.push(words[j].substring(0,words[j].length-1));
                    obj[heading[k]] = err;
                    k++;
                }
            }
            arr.push(obj);
        }
       return arr;
    }
}