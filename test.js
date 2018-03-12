let subject = require('/Users/akshitpatel/Desktop/School/CSC519/HW2/TestGeneration/subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(10, undefined); } catch (e) {} 
try { subject.inc(10, NaN); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 52, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 52, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 52, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 10, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 10, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 10, 41, "werw"); } catch (e) {} 
try { subject.weird(6, 10, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 10, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 10, 52, "strict"); } catch (e) {} 
try { subject.weird(6, 10, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 10, 52, "werw"); } catch (e) {} 
try { subject.weird(6, 10, 52, "strict"); } catch (e) {} 
try { subject.weird(6, 10, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(17, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(17, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(17, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, -1, 52, "strict"); } catch (e) {} 
try { subject.weird(17, -1, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, -1, 52, "werw"); } catch (e) {} 
try { subject.weird(17, -1, 52, "strict"); } catch (e) {} 
try { subject.weird(17, -1, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, 10, 41, "strict"); } catch (e) {} 
try { subject.weird(17, 10, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, 10, 41, "werw"); } catch (e) {} 
try { subject.weird(17, 10, 41, "strict"); } catch (e) {} 
try { subject.weird(17, 10, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, 10, 52, "strict"); } catch (e) {} 
try { subject.weird(17, 10, 52, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(17, 10, 52, "werw"); } catch (e) {} 
try { subject.weird(17, 10, 52, "strict"); } catch (e) {} 
try { subject.weird(17, 10, 52, 'NEQ - strict'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file2');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:new Buffer(''),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('', '', ''); } catch (e) {} 
try { subject.blackListNumber("212-811-679"); } catch (e) {} 
try { subject.blackListNumber(""); } catch (e) {} 
