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
          this.populateScope(1);
        })
    }

    fetchAllTimeUsers() {
      request.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
        {json: true, withCredentials: false}, (req,res,body) => {
          this.fccusers = body;
          this.populateScope(1);
        })
    }

    @computed get numPages() {
      return Math.floor(this.fccusers.length / 10) + this.fccusers.length % 10
    }

    populateScope(pageNum) {
      let start = (pageNum - 1) * 10;
      let end = start + 10;
      this.currentscope = this.fccusers.slice(start, end);
    }

}();

export default tableState;
