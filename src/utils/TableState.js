import {observable, computed} from 'mobx';
import request from 'request';

const tableState =  new class TableState {
    @observable fccusers = [];
    @observable currentscope = [];

    constructor() {
        // default fetch recent ones
        this.fetchRecentUsers();
    }

    fetchRecentUsers() {
      request.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent',
        {json: true, withCredentials: false}, (req,res,body) => {
          this.fccusers = body;
          this.populateScope(0);
        })
    }

    fetchAllTimeUsers() {
      request.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
        {json: true, withCredentials: false}, (req,res,body) => {
          this.fccusers = body;
          this.populateScope(0);
        })
    }

    @computed get numPages() {
      return Math.floor(this.fccusers.length / 10) + this.fccusers.length % 10
    }

    populateScope(pageNum) {
      this.currentscope = this.fccusers.slice(((pageNum - 1) * 10),10);
    }

}();

export default tableState;
