/*
* {% asciinima [video_id] %} %}
*/

hexo.extend.tag.register('asciinema', function(args){
  video_id = args[0];
  return '<script type="text/javascript" src="https://asciinema.org/a/' + video_id + '.js" id="asciicast-'+ video_id + '" async></script>';
});
