module.exports = {
    devServer: {
        //proxy: 'http://users.nik.uni-obuda.hu/'
        proxy: 'https://siposm.hu/'
        // if using DEV SERVER application must be quitted and then re-served
        // with npm run serve command
        // DEVSERVER VERSION
        // axios.get('http://localhost:8080/repos.json').then( resp => {
        // LIVESERVER VERSION
        //axios.get('http://users.nik.uni-obuda.hu/gitstats/repos.json').then( resp => 
    }
    // ,
    // publicPath: ''
};