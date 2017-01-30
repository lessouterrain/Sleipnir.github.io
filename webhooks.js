var http = require('http')
var exec = require('child_process').exec
http.createServer(function (req, res) {
	    if(req.url === '/webhooks/push/12345'){
		            exec('sh /home/maris/blog/hexo/deploy.sh')
		        }
	    res.end()
	}).listen(1229)
