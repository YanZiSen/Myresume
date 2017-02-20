'use strict';
//less编译，合并，压缩
//2.js合并 压缩 混淆
//3.img复制
//4.html压缩

var gulp=require("gulp");
var less=require("gulp-less");
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');
var browserSync=require('browser-sync');
var autoprefixer=require('gulp-autoprefixer');

gulp.task('style',function(){
	gulp.src(['src/styles/*.*','!src/styles/_*.less'])//错了请看API
		.pipe(less())
		.pipe(autoprefixer({
			browsers:['> 1%'],
			cascade:true,//是否美化
			remove:true//是否移除不必要的属性
		}))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.reload({stream:true}));
});
gulp.task('style1',function(){
	gulp.src(['src/styles/myBoot.less'])
			.pipe(less())
			.pipe(autoprefixer({
				browsers:['> 1%'],
				cascade:true,//是否美化
				remove:true//是否移除不必要的属性
			}))
			.pipe(gulp.dest('src/styles'));
});
gulp.task('serve1',function(){
	gulp.watch("src/styles/myBoot.less",['style1']);
});
gulp.task('script',function(){
	gulp.src('src/scripts/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(browserSync.reload(
			{stream:true}
		));
});

gulp.task('img',function(){
	gulp.src('src/imgs/*.*')
		.pipe(gulp.dest('dist/imgs'))
		.pipe(browserSync.reload(
			{stream:true}
		));
});

gulp.task('html',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace:true,
			removeAttributeQuotes:true,
			removeComments:true//
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.reload(
			{stream:true}
		));
});

gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:['dist']
		}},function(err, bs){
		console.log(bs.options.getIn(["urls", "local"]));
	});//初始并实例化一个browserSync
	gulp.watch("src/styles/*.less",['style']);
	gulp.watch('src/scripts/*.js',['script']);
	gulp.watch('src/imgs/*.*',['img']);
	gulp.watch('src/*.html',['html']);
});


