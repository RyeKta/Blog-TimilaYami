tinymce.init({
	selector: '#content',
	height: 318,
	theme: 'modern',
	image_caption: true,
	relative_urls : false,
	remove_script_host : false,
	convert_urls : true,
	file_browser_callback : function(field_name, url, type, win) {
            var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

//            For Server
           var cmsURL = '/public/filemanager/index.html?&field_name='+field_name+'&langCode='+tinymce.settings.language;

//            For server, remove .htaccess of filemanager/userfiles folder

//            For Local
//            var cmsURL = '{{ url('/') }}/public/filemanager/index.html?&field_name='+field_name+'&langCode='+tinymce.settings.language;

            if(type == 'image') {
                cmsURL = cmsURL + "&type=images";
            }

            // tinyMCE.activeEditor.windowManager.open({
            //     file : cmsURL,
            //     title : 'Filemanager',
            //     width : x * 0.8,
            //     height : y * 0.8,
            //     resizable : "yes",
            //     close_previous : "no"
            // });

        },
	removed_menuitems: 'newdocument',
	plugins: [
	'advlist autolink lists link image charmap print preview hr anchor pagebreak',
	'searchreplace wordcount visualblocks visualchars code fullscreen',
	'insertdatetime media nonbreaking save table contextmenu directionality',
	'emoticons template paste textcolor colorpicker textpattern imagetools'
	],
	toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons',
	image_advtab: true,
	templates: [
	{ title: 'Test template 1', content: 'Test 1' },
	{ title: 'Test template 2', content: 'Test 2' }
	],
	content_css: [
	'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
	'//www.tinymce.com/css/codepen.min.css'
	]
});