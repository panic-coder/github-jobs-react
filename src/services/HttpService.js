import $ from "jquery";
import axios from 'axios';

export default class HttpService {
    jobsHttp() {
        return $.ajax({
            url: 'https://jobs.github.com/positions.json?description=python&location=new+york',
            type: 'GET',
            dataType: 'json',
            // contentType: 'application/json',
            responseType:'application/json',
            headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
              },
            success: function (data) {
                console.log(data);
                return data;
            }
            ,
            fail: function () {
                console.log("Encountered an error")
                return "Error";
            }
        });
    }

    login() {
        return axios({
                method: 'GET',
                url: 'https://jobs.github.com/positions.json?description=python&location=new+york',
                // data: {
                //     user_name,
                //     password
                // }
            })
            .then(result => {
                console.log(result);
                return result;
            })
    }
}