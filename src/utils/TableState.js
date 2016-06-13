import {observable, computed} from 'mobx';
import request from 'request';

const tableState =  new class TableState {
    @observable fccusers = [];
    @observable currentscope = [];
    @observable currentPage = 0;
    @observable currentType = '';

    constructor() {
        // default fetch recent ones
        this.fetchRecentUsers();
        this.pageSize = 6;
    }

    fetchRecentUsers() {
      request.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent',
        {json: true, withCredentials: false}, (req,res,body) => {
          this.fccusers = body;
          this.populateScope(1);
          this.currentType = 'Recent (30 Days)';
        })
    }

    fetchAllTimeUsers() {
      request.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
        {json: true, withCredentials: false}, (req,res,body) => {
          this.fccusers = body;
          this.populateScope(1);
          this.currentType = 'All Time';
        })
    }

    @computed get numPages() {
      return Math.floor(this.fccusers.length / this.pageSize) + 1
    }

    populateScope(pageNum) {
      let start = (pageNum - 1) * this.pageSize;
      let end = start + this.pageSize;
      this.currentscope = this.fccusers.slice(start, end);
      this.currentPage = pageNum - 1;
    }

}();

export default tableState;
