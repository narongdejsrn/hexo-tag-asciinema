/* global hexo */

/*
* {% asciinima [video_id] %}
*/

hexo.extend.tag.register('asciinema', function(args){
  const videoId = args[0];
  return "<script type=\"text/javascript\" src=\"https://asciinema.org/a/" + videoId + ".js\" id=\"asciicast-"+ videoId + "\" async></script>";
});
