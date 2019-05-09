(function(global, $) {

    const Greetr = function(firstName, lastName, language) {

        // returning a function constructor so you don't always have to call new when creating a greetr object.
        return new Greetr.init(firstName, lastName, language);
    }

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {

        const self = this;
        self.firstName = firstName || 'Federico';
        self.lastName = lastName || 'Fellini';
        self.language = language || 'it';
        
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery))