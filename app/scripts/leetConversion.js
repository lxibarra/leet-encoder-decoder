function Leet() {
    //stores the leet 'char' max length
    var LCMaxLength = 0;
    var leetTable = '';
    
    this.getLeetTable = function() {
        return leetTable;  
    };
    
    this.setLeetTable = function(Jsontable) {
        leetTable = Jsontable;
        LCMaxLength = MaxDictionaryLength();  
    };
    
    //this is necessary in the case of LeetTable changes
    function MaxDictionaryLength() {
        var tmpmax = 0;
        for(var l in leetTable) {
            leetTable[l].forEach(function(c) {
                if(c.length > tmpmax)
                    tmpmax = c.length;
            });
        }
        return tmpmax;
    }

    function lookupChar(leetChar) {
        for(var l in leetTable) {
            for(var c = 0; c<leetTable[l].length; c++) {
                var x = leetTable[l][c];
                if(leetChar == x)
                    return l;
            }
        }
        return undefined;
    }

    this.ReferenceTable = function() {
		return 	leetTable;
	};

    this.ToNormal = function(leetText) {
        leetText = leetText.toLowerCase();
        LCMaxLength = LCMaxLength  == 0?  MaxDictionaryLength() : LCMaxLength;
        var result = [];
        var words = leetText.split(' ').length > 0? leetText.split(' ') : leetText;
        words.forEach(function(w) {
                var Startpos = 0;
                var tmpMaxLength = LCMaxLength;
                while(w.length > 0 && tmpMaxLength > 0) {
                    if(tmpMaxLength <= w.length) {
                        var try_match = w.substr(Startpos, tmpMaxLength);
                        var letter = lookupChar(try_match);
                        if(typeof letter !== 'undefined') {
                            result.push(letter);
                            w = w.replace(try_match, '');
                            tmpMaxLength = LCMaxLength;
                        }
                        else {
                            tmpMaxLength--;
                        }
                    }
                    else {
                        tmpMaxLength = w.length;
                    }
                }
                result.push(' ');
            });
        return result.join('').trim();
    };

    this.ToLeet = function(normal) {
        normal = normal.toLowerCase();
        var result = [];
        normal.split('').forEach(function (m) {
            if(!/\s/.test(m))
                result.push(leetTable[m][0]);
            else
                result.push(m);
        })
        return result.join('');
    }

}







