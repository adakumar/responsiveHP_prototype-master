var gulp = require('gulp');
var less = require('gulp-less-sourcemap');




var watcher = null;

// DEFAULT TASK: COMPILE LESS
gulp.task('default', function() {
	gulp.src('*.less')
		.pipe(less({
			generateSourceMap: true, // default true
		}))
		.pipe(gulp.dest('./css'));

	//WATCH LESS FILES IN ROOT
	var watchGlob = '*.less';

	if(!watcher){
		watcher = gulp.watch(watchGlob, ['default']);
		watcher.on('change', function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
		console.log('watching: '+watchGlob);
	}

	console.log('default has run');
});





