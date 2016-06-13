import {observable} from 'mobx';

const boardState =  new class BoardState {
    @observable sum = 0;
    @observable dotFlag = false;
    @observable commandQ = [];
    @observable comFlag = false;
    @observable cache = '0';

    constructor() {
        this.sum = '0';
    }

    update(val) {
    	this.sum = val;
    }

    append(val) {
    	if(this.comFlag) {
    		this.cache = this.sum;
				this.sum = '0';
				this.comFlag = false;
			}
    	if(this.sum === '0') this.sum = '';
    	if(this.dotFlag && this.sum.indexOf('.') < 0) {
    		this.sum += '.';
    	}
    	this.sum = this.sum + val;
    }

    pop() {
    	this.sum = this.sum.slice(0,-1);
    	if(this.sum.indexOf('.') == this.sum.length - 1) {
    		this.sum = this.sum.slice(0,-1);
    		this.dotFlag = false;
    	}
    	if(this.sum.length == 0) this.sum = '0';
    }

    clear() {
    	this.sum = '0';
    	this.cache = '0';
    	this.dotFlag = false;
    	this.comFlag = false;
    }

    addCommand(command) {
    	if(command === "=" && this.commandQ.length > 0) {
    		this.process(this.commandQ.shift());
    	} else if(command === "%" && this.commandQ.length > 0) {
    		this.process("%");
    	} else {
	    	this.commandQ.push(command);
	    	if(this.commandQ.length > 1) {
					this.process(this.commandQ.shift());
				}
			}
			this.comFlag = true;
    }

    process(op) {
    	console.log('Sum = ' + this.sum, 'Cache = ' + this.cache);
    	switch(op) {
    		case '+':
    			this.sum = (parseFloat(this.cache) + parseFloat(this.sum)) + '';
    		break;
    		case '-':
    			this.sum = (parseFloat(this.cache) - parseFloat(this.sum)) + '';
    		break;
    		case '*':
    			this.sum = (parseFloat(this.cache) * parseFloat(this.sum)) + '';
    		break;
    		case '/':
    			this.sum = (parseFloat(this.cache) / parseFloat(this.sum)) + '';
    		break;
    		case '%':
    			this.sum = (parseFloat(this.sum) / 100) + '';
    			this.process(this.commandQ.shift());
    		break;

    	}
    	console.log('Sum = ' + this.sum, 'Cache = ' + this.cache);
    }
}();

export default boardState;