function logger(e){
	console.log(e);
}

function getToday(){
	let DD = new Date();
	return DD.getFullYear() + '-' + DD.getMonth() + '-' + DD.getDate();
}

//定义模块内全局的filesystem,方便调用
let filesystem = '';
let path = getToday() + '-todo.txt';

// window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem; 
// //TEMPORARY
// window.requestFileSystem(window.TEMPORARY, 10*1024*1024, function(fs){
// 	filesystem = fs;
// 		filesystem.root.getFile(path, {create: true, exclusive: false}, function(fileEntry) {  
//   		console.log(fileEntry)  
	  
// 	}, logger);

// }, logger);

/**
 * 以文本形式读取文件内容，并通过回调函数传递
 * @return null
 */
export const readTextFile = function(callback){
	appendToFile(path, '123123123123', function(res){
		console.log(res);
	})
	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem; 
	//TEMPORARY
	window.requestFileSystem(window.TEMPORARY, 10*1024*1024, function(fs){
		fs.root.getFile(path, {}, function(entry){
			entry.file(function(file){
				let reader = new FileReader();
				reader.readAsText(file);
				reader.onload = function(){
					callback(reader.result);
				}
				reader.onerror = logger;
			}, logger)
		}, logger)
	});
}

/**
 * 将指定路径的内容添加到指定路径的文件中，
 * 如果指定路径的文件不存在，则使用该文件创建一个新的文件
 * 
 */
const appendToFile = function(path, contents, callback){
	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem; 
	//TEMPORARY
	window.requestFileSystem(window.TEMPORARY, 10*1024*1024, function(fs){

		fs.root.getFile(path, {create: true}, function(entry){
			entry.createWriter(function(writer){
				writer.seek(writer.length);

				let bb = new BlobBuiler();
				bb.append(contents);
				let blob = bb.getBlob();

				writer.write(blob);
				writer.onerror = logger;
				if(callback){
					writer.onwrite = callback
				}
			}, logger)
		}, logger)
	});
}

/**
 * 删除指定的文件，
 * 
 */

const deleteFile = function(name, callback){
	filesystem.root.getFile(name, {}, function(entry){
		entry.remove(callback, logger)
	}, logger)
}


/**
 * 根据指定的名字创建一个目录
 */

const makeDirectory = function(name, callback){
	filesystem.root.getDirectory(name, {create: true,exclusive:true}, callback, logger);
}

/**
 * 读取指定目录的内容
 */

const listFiles = function(path, callback){
	if(!path){
		getFiles(filesystem.root);
	}else{
		filesystem.root.getDirectory(path, {}, getFiles, logger);
	}

	function getFiles(dir){
		let reader = dir.createReader();
		let list = [];
		reader.readEntries(handleEntries, logger);

		function handleEntries(entries){
			if(entries.length == 0){
				callback(list);
			}else{
				for(let i=0, len=list.length; i<len; i++){
					let name = entries[i].name;
					if(entries[i].isDirectory){
						name += '/';
						list.push(name);
					}
				}
				reader.readEntries(handleEntries, logger);
			}
		}
	}
}








