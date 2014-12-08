var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type:String, required:'{PATH} is required!'},
	featured: {type:Boolean, required:'{PATH} is required!'},
	published: {type:Date, required:'{PATH} is required!'},
	tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses () {
	Course.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Course.create({title: 'Course1', featured:true, published: new Date('10/5/2013'), tags:['some tag', 'great course']});
			Course.create({title: 'Course2', featured:true, published: new Date('9/5/2013'), tags:['C#']});
			Course.create({title: 'Course3', featured:false, published: new Date('7/17/2013'), tags:['VB']});
			Course.create({title: 'Course4', featured:true, published: new Date('4/21/2013'), tags:['Coding']});
			Course.create({title: 'Course5', featured:false, published: new Date('10/24/2013'), tags:['Misc']});
			Course.create({title: 'Course6', featured:false, published: new Date('11/18/2013'), tags:['Coding']});
			Course.create({title: 'Course7', featured:true, published: new Date('3/15/2013'), tags:['Coding']});
			Course.create({title: 'Course8', featured:true, published: new Date('6/1/2013'), tags:['Management']});
			Course.create({title: 'Course9', featured:true, published: new Date('12/8/2013'), tags:['Coding', 'Misc']});
		};
	})
}

exports.createDefaultCourses = createDefaultCourses;