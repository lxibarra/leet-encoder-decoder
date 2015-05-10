function Leet() {
    //stores the leet 'char' max length
    var LCMaxLength = 0;
    var leetTable = {
        //importance or precedence is left to right.
        //make this an external reference for easy replacement or switching
        a: ['@','4','^','/\\','/-\\','aye'],
        b: ['|3', '6', '13', '8', '/3', 'ß', 'P>', '|:'],
        c: ['©', '¢', '<', '[', '(', '{'],
        d: ['[)', '|)', ')', '?', '|>', '|o'],
        e: ['[-', '&', '€', 'ë', '3'],
        f: ['ƒ', '|=', '/=', '|#', 'ph'],
        g: ['6', '9', '&', 'C-', '(_+', 'gee'],
        h: ['/-/', '}{', '|-|', ']-[', '[-]', ')-(', '(-)', '#'],
        i: ['¡', '!', '1', '|', ']', 'eye'],
        j: [']', '¿', '_|', '_/', '</', '(/'],
        k: ['|<', 'X', '|{', '|('],
        l: ['£', '1', '|', '|_', '1_', '¬'],
        m: ['|v|', '|\/|', '/\\/\\', '(v)', '/|\\', '//.', '^^', 'em'],
        n: ['|\\|', '/\\/', '[\]', '<\\>', '/V', '^/'],
        o: ['()', '0', '[]', '°', 'oh'],
        p: ['¶', '|*', '|o', '|°', '|"', '|>', '9', '|7', '|^(o)'],
        q: ['9', '0_', '()_', '(_,)', '<|]'],
        r: ['/2', '®', '2', '12', 'I2', 'l2', '|^', '|?', 'lz'],
        s: ['§', '$', '5', 'z', 'es'],
        t: ['†', '+', '7', '-|-', '\'][\''],
        u: ['µ', '|_|', '(_)', 'L|', 'v'],
        v: ['\\/'],
        w: ['vv', '\\/\\/', '\\\\\'', '\'//', '\\|/', '\\^/', '(n)'],
        x: ['><', '*', '%', ')(', 'ecks'],
        y: ['¥', 'J', '\'/', 'j'],
        z: ['7_', '2', '~/_', '>_'],
        1: ['0/V3'],
        2: ['-|-VV0'],
        3: ['-|-]-[2€€'],
        4: ['ƒ()|_|/2'],
        5: ['ƒ1\\/€'],
        6: ['§1><'],
        7: ['§€\\/€/V'],
        8: ['€16]-[†'],
        9: ['/V1/V3'],
        0: ['7_[-2()']
    };
    
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







