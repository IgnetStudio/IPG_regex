(function () {

    function Tabu(field, restrictedWords) {

        this._field = field; // _field = private
        this._words = restrictedWords.split(/, */);  // _words = private

        // console.log(this._words); // show restricted words

        this._regex = new RegExp("(" + this._words.join("|") + ")", "igm"); // separate words & add flags

        // console.log(this._regex); // show separated words

        this._assignEvents();

    }

    Tabu.prototype._censorSigns = "!@#$%^*".split(""); // signs to replace restricted words

    Tabu.prototype._assignEvents = function() {

        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);

    };

    Tabu.prototype._filterMessage = function(e) {

        // console.log(e); // show KeyBoardEvent
        this._field.value = this._field.value.replace(this._regex, function(match) {

            // console.log(match); // undefined
            // console.log(this); // Window, so use bind instead
            return this._censorWord(match);

        }.bind(this));

    };

    Tabu.prototype._censorWord = function(word) {

        var censored = "";
        var random = 0;

        for(var i = 0; i < word.length; i++) {
            // console.log(word[i]); // separate letters from word
            random = Math.round(Math.random() * (this._censorSigns.length - 1 - 0) + 0); // get random sign
            censored += this._censorSigns[random];
        };

        return censored;

    }

    var tabu = new Tabu(
        document.querySelector("[name='your-message']"),
        "duda, gronkiewicz-waltz, hgw, kaczyński, kijowski, kod, komitet obrony demokracji, komorowski, korwin, korwin-mikke, kosiniak-kamysz, kukiz, kukiz'15, kwaśniewski, miller, nowoczesna, pawlak, petru, pis, platforma obywatelska, po, polskie stronnictwo ludowe, prawo i sprawiedliwość, psl, razem, schetyna, sojusz lewicy demokratycznej, sld, szydło, tusk, zandberg"
    );

})();